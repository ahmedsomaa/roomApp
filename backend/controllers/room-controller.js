const Room = require('../models/room')

exports.addRoom = function(req, res, next){
    var room_id = req.body.room_id
    var Uri = req.body.Uri

    if(!room_id){
        return res.status(442).json({error: "room id is required"})
    }

    Room.findOne({room_id: room_id}, function(err, existingRoom){
        if(err){
            return next(err)
        }
        if(existingRoom){
            return res.status(442).json({error: 'room already exists'})
        }
        var room = new Room({
            room_id: room_id,
            Uri: Uri,
        })

        room.save(function(err){
            if(err){ return next(err)}
            res.send('room added')
        })
    })

}

// retrieve the rooms
exports.getRooms = function(req, res, next){
    Room.find({}, function(err, rooms){
        if(err) return next(err)
        return res.send(rooms)
    })
}