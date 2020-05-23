import {
    GET_AUTHED_USER
} from '../constants.js';

export function getAuthedUser( userAuthID ) {
    return {
        type: GET_AUTHED_USER,
        userAuthID,
    }
}