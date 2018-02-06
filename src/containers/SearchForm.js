import React, { Component } from "react";
import uuid from "uuid";
import { connect } from "react-redux";
import * as actions from "../actions";

export class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }

  handleOnChange = event => {
    event.preventDefault();
    this.setState({
      searchValue: event.target.value
    });
  };

  handleOnSubmit = event => {
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleOnChange}
          type="text"
          placeholder="inside searchForm"
        />
        <button
          onClick={() => this.props.search(this.state.searchValue)}
          type="submit"
        >
          Search
        </button>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return{
//
//   }
// }

export default connect(null, actions)(SearchForm);
