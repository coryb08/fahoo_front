import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";

class Quotes extends Component {
  render() {
    return (
      <div id="QuotesDiv">
        {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
      </div>
    );
  }
}

export default connect(null, {})(Quotes);
