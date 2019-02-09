import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';
import authReducer from './authReducer';
import roomReducer from './roomReducer';
module.exports = combineReducers({
    form: formReducer,
    auth: authReducer,
    //rooms: roomReducer,
});