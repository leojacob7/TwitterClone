import {
    GET_TWEETS,
    SAVE_LIKE_TOGGLE
} from '../constants.js';

export function getTweets( state = {}, action ) {
    debugger;
    switch (action.type) {
        case GET_TWEETS:
            return {
                ...state,
                ...action.tweets,
            }
        case SAVE_LIKE_TOGGLE:
            return {
                ...state,
                tweet: action.isLiked ? action.tweet: '',
            }
    
        default: return state
    }
}