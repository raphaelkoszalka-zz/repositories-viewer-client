import React, { Component } from 'react';
import HttpServices from '../../services/HttpServices';
import AppConstants from "../../AppConstants";

class PullsComponent extends Component {

  service = new HttpServices();

  constructor(props) {
    super(props);
    this.state = { url: props.url, commits: [] };
  }

  getCommits(repository) {
    const length = this.service.get(this.state.url + '/commits').then( res => {
      const commits = JSON.parse(res.text);
      this.setState({ commits: commits });
    });
  }

  componentWillMount() {
    this.getCommits();
  }

  render() {
    const { commits } = this.state;
    return (commits.length);
  }
}

export default PullsComponent;