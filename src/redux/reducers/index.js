import { getUsers } from  './users';
import { getTweets } from './tweets';
import { getAuthedUser } from './authedusers';
import { combineReducers } from 'redux';

export default combineReducers({
    tweets: getTweets,
    users: getUsers,
    authedUser: getUsers
})