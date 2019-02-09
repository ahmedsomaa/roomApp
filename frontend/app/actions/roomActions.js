import axios from 'axios'
import {FETCHR_URL} from '../api'
import {getRooms} from './roomActions'



exports.fetchRooms = () => {
    return function(dispatch) {
        return axios.get(FETCHR_URL).then((res) => {
            console.log(res.data)
            //dispatch(getRooms(res.data))
        }).catch(err => {
            if (err) throw err
            alert("couldn't get rooms")
        })
    }
}


exports.getRooms = (rooms) => {
    return{
        type: "GET_ROOMS",
        rooms
    }
}