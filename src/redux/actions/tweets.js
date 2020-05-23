import {
    GET_TWEETS
} from '../constants.js';

export function getTweets( tweets ) {
    return {
        type: GET_TWEETS,
        tweets,
    }
}