import {
    GET_USERS
} from '../constants';

export function getUsers( state = {}, action ) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users,
            }
    
        default: return state
    }
}