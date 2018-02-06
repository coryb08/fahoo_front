import React, { Component } from "react";
import SearchForm from "./containers/SearchForm";
import Articles from "./containers/Articles";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import reducer from "./reducers";
import * as actions from "./actions";
import { connect } from "react-redux";
import { store } from "./store.js";
import { bindActionCreators } from "redux";
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
      <div className="body_wrapper">
        <Header />
        <br />
        <Articles />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
