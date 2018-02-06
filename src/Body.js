import React from "react";
import SearchForm from "./containers/SearchForm";
import Articles from "./containers/Articles";
import MainArticle from "./components/MainArticle";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import * as actions from "./actions";
import { connect } from "react-redux";
import SearchResults from "./components/SearchResults";

const Body = props => {
  if (props.state.searchSubmit.payload !== "") {
    return (
      <div className="body_wrapper">
        <Header />
        <br />
        <SearchResults />
      </div>
    );
  } else {
    return (
      <div className="body_wrapper">
        <Header />
        <Articles />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps, actions)(Body);
// export default Body;
