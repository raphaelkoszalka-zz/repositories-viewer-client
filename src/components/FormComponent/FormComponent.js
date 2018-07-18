import React, { Component } from 'react';
import HttpService from '../../services/HttpServices';
import AppConstants from '../../AppConstants';

class FormComponent extends Component {

  service = new HttpService();

  constructor() {
    super();
    this.state = FormComponent.defaultState();
    this.handleRepositoryOwnerChange = this.handleRepositoryOwnerChange.bind(this);
  }

  static defaultState() {
    return { repositoryOwner: '', repositoryList: [], invalidOwner: false }
  }

  handleRepositoryGetResponse(res) {
    this.setState( { repositoryList: JSON.parse(res.text) } );
  }

  handleRepositoryOwnerChange(event) {
    this.setState( { repositoryOwner: event.target.value });

    // @todo: change this to a debounce method
    if (this.state.repositoryOwner === 'raphaelkoszalka') {
      this.service.get(AppConstants.GITHUB_USER_REPOSITORIES.replace('{OWNER}', this.state.repositoryOwner))
      .then( (res) => { this.handleRepositoryGetResponse(res); });
      this.setState({ invalidOwner: false });
      return;
    }

    this.setState({ invalidOwner: true });
  }

  render() {
    const { repositoryOwner, repositoryList, invalidOwner } = this.state;
    const repositories = repositoryList.map((item, i) => (<option key={i} value={item.name}>{item.name}</option>));

    return (
        <div className="col-xs-12 col-md-6 col-md-offset-3">
          <div className="well">
            <form className="form-horizontal">
              <fieldset>
                <legend>GitHub Repository Details</legend>
                <div className="form-group">
                  <label htmlFor="repositoryNameElm" className="col-lg-2 control-label">Owner</label>
                  <div className="col-lg-10">
                    <input
                        value={repositoryOwner}
                        onChange={this.handleRepositoryOwnerChange}
                        type="text"
                        className="form-control"
                        id="repositoryNameElm"
                        placeholder="Profile"
                    />
                    { invalidOwner && ( <span className="help-block danger">Invalid repository owner name.</span> ) }
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="gitRepository" className="col-lg-2 control-label">Repository</label>
                  <div className="col-lg-10">
                    <select name="repositoryName" id="repositoryName" className="form-control">
                      {/*
                         if our repositories array is equal to
                         zero then return no repos available,
                         otherwise return available options
                      */}
                      { repositories.length === 0 ? (<option value="false">You must enter a valid repository owner</option>) : repositories }
                    </select>
                  </div>
                </div>
              </fieldset>
              <div className="text-right">
                <button className="btn btn-default">Check Repo Info</button>
              </div>
            </form>
          </div>
        </div>
    )
  }
}

export default FormComponent;