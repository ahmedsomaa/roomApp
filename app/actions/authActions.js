import axios from 'axios';
import {addAlert} from './alertsActions';
import {SIGNIN_URL, SIGNUP_URL} from '../api';

exports.loginUser = (email, password) => {
    return function (dispatch) {
        return axios.post(SIGNIN_URL, {email, password}).then((response) => {
            var {user_id, token} = response.data;
            alert(token);
            alert(authUser(user_id))
            //dispatch(addAlert(token));
            //dispatch(authUser(user_id));
        }).catch((error)=> {
            console.log(error)
            alert('Could not sign in')
            //dispatch(addAlert('Could not log in.'))
        })
    }
}

exports.signupUser = (email, password) => {
    return function(dispatch){
        return axios.post(SIGNUP_URL, {email, password}).then((response) => {
            var {user_id, token} = response.data;
            alert(token);
            alert(authUser(user_id))
        }).catch((error)=> {
            console.log(error)
            alert('Could not sign up.')
        })
    }
}



exports.authUser = (user_id) => {
    return{
        type: "AUTH_USER",
        user_id
    }
}


exports.unauthUser = {
    type: "UNAUTH_USER"
}