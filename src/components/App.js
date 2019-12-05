import React, { Component } from "react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <div>
          Starter Code
          {this.props.loading === true ? "loading..." : <Dashboard />}
        </div>
      </div>
    );
  }
}

/**
 * @state is the state inside the store
 * @[ownProps] properties passed to this component from a parent component
 */
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
