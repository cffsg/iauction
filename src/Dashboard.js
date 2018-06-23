import React, { Component } from "react";

export default class Dashboard extends Component {
  componentWillMount() {
    document.title = `iAuction | Dashboard`;
  }
  render() {
    return <div>Dashboard</div>;
  }
}
