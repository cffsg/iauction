import React, { Component } from "react";

export default class Summary extends Component {
  componentWillMount() {
    document.title = `iAuction | Summary`;
  }
  render() {
    return <div>Summary</div>;
  }
}
