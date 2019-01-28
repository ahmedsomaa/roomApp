import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';
import authReducer from './authReducer';
import alertsReducer from './alertReducer';
module.exports = combineReducers({
    form: formReducer,
    auth: authReducer,
    alerts: alertsReducer
});