import {
    GET_TWEETS
} from '../constants.js';

export function getTweets( state = {}, action ) {
    switch (action.type) {
        case GET_TWEETS:
            return {
                ...state,
                ...action.tweets,
            }
    
        default: return state
    }
}