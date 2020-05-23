import {
    GET_AUTHED_USER
} from '../constants.js';

export function getAuthedUser( state = null, action ) {
    switch (action.type) {
        case GET_AUTHED_USER:
            return {
                ...state,
                ...action.userAuthID,
            }
    
        default: return state
    }
}