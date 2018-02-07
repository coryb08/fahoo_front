import React, { Component } from "react";
import uuid from "uuid";
import { connect } from "react-redux";
import * as actions from "../actions";

export class SearchForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchValue: ""
  //   };
  // }

  // handleOnChange = event => {
  //   this.setState({
  //     searchValue: event.target.value
  //   });
  // };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.fetchArticles(event.target[0].value);
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input type="text" placeholder="find news" />
        <button type="submit">Search</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  console.log("sf ", state);
  return state;
}

export default connect(mapStateToProps, actions)(SearchForm);
