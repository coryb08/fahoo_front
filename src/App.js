import React, { Component } from "react";
import "./App.css";
import reducer from "./reducers";
import * as actions from "./actions";
import { connect } from "react-redux";
import { store } from "./store.js";
import { bindActionCreators } from "redux";
import Body from "./Body";
// import "../assets/css/bootstrap.min.css";
// import "../assets/css/jquery.bxslider.css";
// import "../assets/css/responsive.css";
// import "../assets/css/style.css";

export class App extends Component {
  componentDidMount = () => {
    this.props.actions.fetchArticles();
  };

  render() {
    return (
      <div className="container">
        <Body />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(null, mapDispatchToProps)(App);
