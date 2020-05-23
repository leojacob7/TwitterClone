import { getInitialData } from '../../utils/api';
import { getTweets } from './tweets';
import { getUsers } from './users';
import { getAuthedUser } from './autheduser';

export function setInitialData() {
    return dispatch => 
    getInitialData()
    .then(({ users, tweets }) => {
        dispatch( getTweets(tweets) );
        dispatch( getUsers(users) );
        dispatch( getAuthedUser('tylermcginis') ) // TODO replace this with user token
    });
}