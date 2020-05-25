import {
    GET_TWEETS,
    SAVE_LIKE_TOGGLE
} from '../constants.js';

import { saveLikeToggle } from '../../utils/api';

export function likeToggle( info ) {
    const { authedUser, tweet, isLiked } = info
    // debugger;
    return {
        type: SAVE_LIKE_TOGGLE,
        authedUser,
        tweet,
    };
}

export function getTweets( tweets ) {
    return {
        type: GET_TWEETS,
        tweets,
    }
}

export function saveToggleLike(info) {
    return ( dispatch ) => 
    likeToggle( info );
    saveLikeToggle(info).catch((err) => {
        likeToggle( info );
        alert("Error while liking the post")
    });
}