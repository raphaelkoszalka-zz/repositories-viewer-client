import React, { Component } from 'react';
import HttpServices from '../../services/HttpServices';
import AppConstants from "../../AppConstants";

class PullsComponent extends Component {

  service = new HttpServices();

  constructor(props) {
    super(props);
    this.state = { url: props.url, pulls: [] };
  }

  getPulls(repository) {
    const length = this.service.get(this.state.url + '/pulls').then( res => {
      const pulls = JSON.parse(res.text);
      this.setState({ pulls: pulls });
    });
  }

  componentWillMount() {
    this.getPulls();
  }

  render() {
    const { pulls } = this.state;
    return (pulls.length);
  }
}

export default PullsComponent;