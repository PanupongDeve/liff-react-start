import { combineReducers } from 'redux';
import { reducer } from 'react-redux-sweetalert';
import { reducer as notificationsReducer } from 'reapop';

import { history } from '../config';

import {
    Notification
} from '../actions';

export const reducers = {
    Notification
}

export default combineReducers({
    ...reducers,
    history: () => history || {},
    notifications: notificationsReducer(),
    swwtalert: reducer
})