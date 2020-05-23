import {
    GET_USERS
} from '../constants.js';

export function getUsers( users ) {
    return {
        type: GET_USERS,
        users,
    }
}