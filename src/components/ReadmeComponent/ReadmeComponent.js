import React, { Component } from 'react';
import HttpServices from '../../services/HttpServices';
import AppConstants from "../../AppConstants";

class ReadmeComponent extends Component {

  service = new HttpServices();

  constructor(props) {
    super(props);
    this.state = { owner: props.repositoryOwner, name: props.repositoryName, readme: {} };
  }

  getReadme(repository) {
    const readme_uri = AppConstants.GITHUB_REPOSITORY_README.replace('{OWNER}', this.state.owner).replace('{REPO}', this.state.name);
    this.service.get(readme_uri).then( res => { console.log(JSON.parse(res.text)); });
  }

  componentWillMount() {
    this.getReadme();
  }

  render() {
    return (
        <section>
          <button className="btn btn-sm btn-default">View Readme</button>
        </section>
    )
  }
}

export default ReadmeComponent;