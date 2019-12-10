import { saveLikeToggle, saveTweet } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_TWEET = "ADD_TWEET";

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  };
}

function toggleTweet({ id, hasLiked, authedUser }) {
  return {
    type: TOGGLE_TWEET,
    id,
    hasLiked,
    authedUser
  };
}

export function handleToggleTweet(info) {
  return dispatch => {
    dispatch(toggleTweet(info));
    return saveLikeToggle(info).catch(e => {
      dispatch(toggleTweet(info));
      console.warn("Error in handleToggleTweet: ", e);
      alert("The was an error liking the tweet. Try again.");
    });
  };
}

function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet
  };
}

export function handleAddTweet(text, replyingTo) {
  // @param getState is the actual store
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveTweet({ text, author: authedUser, replyingTo })
      .then(tweet => {
        dispatch(addTweet(tweet));
      })
      .then(() => dispatch(hideLoading()))
      .catch(e => {
        dispatch(hideLoading())
        console.log("There was an error adding the tweet", e);
      });
  };
}
