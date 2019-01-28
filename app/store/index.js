import {createStore, compose, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';;
import {AsyncStorage} from 'react-native';
import reducer from '../reducer';
import thunk from 'redux-thunk';

var defaultState = {};

exports.configureStore = (initialState = defaultState) => {
    var store = createStore(reducer, initialState, compose(
        applyMiddleware(thunk)
    ))
    persistStore(store)
    return store
}