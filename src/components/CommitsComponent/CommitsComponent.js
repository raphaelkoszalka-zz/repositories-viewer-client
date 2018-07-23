import React from 'react';
import HttpServices from '../../services/HttpServices';

class PullsComponent extends React.Component {

  service = new HttpServices();

  constructor(props) {
    super(props);
    this.state = { url: props.url, commits: [] };
  }

  getCommits() {
    this.service.get(this.state.url + '/commits').then( res => {
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