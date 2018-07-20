import './ReadmeComponent.css';
import React, { Component } from 'react';
import HttpServices from '../../services/HttpServices';
import AppConstants from "../../AppConstants";


class ReadmeComponent extends Component {

  service = new HttpServices();

  constructor(props) {
    super(props);
    this.state = {
      owner: props.repositoryOwner,
      name: props.repositoryName,
      readme: {},
      showModal: false,
      modalContent: ''
    };
    this.getReadme = this.getReadme.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  getReadme() {
    const { modalContent, owner, name } = this.state;
    // if we've already requested README.md we do not need to do that again.
    if (modalContent !== '') {
      this.setState({showModal: true});
      return;
    }
    const readme_uri = AppConstants.GITHUB_REPOSITORY_README
    .replace('{OWNER}', owner).replace('{REPO}', name);
    this.service.get(readme_uri, 'application/vnd.github.VERSION.html').then( res => {
      this.setState({showModal: true, modalContent: res.text});
    });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal, modalContent } = this.state;
    return (
        <section>
          <button className="btn btn-sm btn-block btn-default" onClick={this.getReadme}>View Readme</button>
          { showModal &&
          (
              <div className="readme-modal-fade">
                <div className="readme-modal-panel">
                  <div className="readme-modal-panel-header-wrapper">
                    <div className="readme-modal-panel-header">
                      <div className="col-md-6">
                        <h1><strong>README.md</strong></h1>
                      </div>
                      <div className="col-md-6">
                        <button className="btn btn-danger btn-readme-modal-close" onClick={this.handleCloseModal}>Close</button>
                      </div>
                      <hr/>
                    </div>
                  </div>
                  {/* @todo: perhaps change this method of HTML render, only using it because it's from a safe source */}
                  <div className="readme-modal-panel-body" dangerouslySetInnerHTML={{ __html: modalContent }}></div>
                </div>
              </div>
          )}
        </section>
    )
  }
}

export default ReadmeComponent;