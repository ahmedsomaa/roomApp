const mongoose = require('mongoose')
const Schema = mongoose.Schema


var roomSchema = new Schema({
    room_id : {
        type : String,
        unique: true
    },
    Uri: {
        type: String
    }
})

module.exports = mongoose.model('room', roomSchema) 