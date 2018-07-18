import React, { Component } from 'react';
// import HttpRequest from "../../services/HttpService";
// import { AppConstants } from "../../AppConstants";

class ListPage extends Component {

  constructor() {
    super();
    this.state = ListPage.defaultState();
  }

  static defaultState() {
    return { repositoryList: [] }
  }

  render() {
    const { repositoryList } = this.state;
    return(
        <h1>ListPage</h1>
    )
  }

}

export default ListPage;