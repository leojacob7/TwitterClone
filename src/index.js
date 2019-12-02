import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import rootReducer from "./reducers";
import middleware from "./middleware";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
