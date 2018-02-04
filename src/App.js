import React, { Component } from "react";
import SearchForm from "./containers/SearchForm";
import Articles from "./components/Articles";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import reducer from "./reducers";
import * as actions from "./actions";
import { connect } from "react-redux";
// import "../assets/css/bootstrap.min.css";
// import "../assets/css/jquery.bxslider.css";
// import "../assets/css/responsive.css";
// import "../assets/css/style.css";

export class App extends Component {
  componentDidMount = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=3f9e3c8d8e1646bbb2e9afa8979b0335"
    )
      .then(res => res.json())
      .then(json => this.props.results(json.articles));
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

export default connect(null, actions)(App);
