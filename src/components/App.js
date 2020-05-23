import React, { Component, Fragment } from "react";
import { setInitialData } from "../redux/actions/shared";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(setInitialData());
  }
  render() {
    return (
     <Dashboard />
    );
  }
}

export default connect()(App);
