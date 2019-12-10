import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from "../actions/tweets";

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets
      };

    case TOGGLE_TWEET:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes:
            action.hasLiked === true
              ? state[action.id].likes.filter(uid => uid !== action.authedUser)
              : state[action.id].likes.concat([action.authedUser])
        }
      };

    case ADD_TWEET:
      const { tweet } = action;
      let replyingTo = {};

      // my tweet le esta respondiendo a otro tweet
      if (tweet.replyingTo !== null) {
        replyingTo = {
          // busco el tweet al que le estoy respondiendo
          [tweet.replyingTo]: {
            // spread todas sus propiedades
            ...state[tweet.replyingTo],
            // agregao a sus replies el tweet.id que acabo de crear
            replies: state[tweet.replyingTo].replies.concat([tweet.id])
          }
        };
      }
      return {
        ...state,
        [action.tweet.id]: action.tweet,
        ...replyingTo
      };

    default:
      return state;
  }
}
