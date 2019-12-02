import { combineReducers } from "redux";
import authedUsers from "./authedUsers";
import tweets from "./tweets";
import users from "./users";


export default combineReducers({
  authedUsers,
  users,
  tweets
});
