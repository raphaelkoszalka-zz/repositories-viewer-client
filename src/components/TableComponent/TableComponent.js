import React, { Component } from 'react';
import ReadmeComponent from '../ReadmeComponent/ReadmeComponent';
import PullsComponent from "../PullsComponent/PullsComponent";
import CommitsComponent from "../CommitsComponent/CommitsComponent";
import AppConstants from "../../AppConstants";
import HttpRequest from "../../services/HttpServices";

class TableComponent extends Component {

  service = new HttpRequest();

  constructor(props) {
    super(props);
    this.state = { searches: [], user: this.props.user };
  }

  componentWillReceiveProps(newProps) {
    this.getRepositories(newProps.user);
  }

  static formatTableRow(rows) {
    return rows.map( (row, i) =>
        (<tr key={i}>
          <td>{row.repositoryOwner}</td>
          <td><PullsComponent url={row.repositoryAPIUrl}/></td>
          <td><CommitsComponent url={row.repositoryAPIUrl}/></td>
          <td>{row.createdAt}</td>
          <td>
            <a href={row.repositoryHTMLUrl} target="_blank">
              <button className="btn btn-sm btn-block btn-default">Open {row.repositoryName}</button>
            </a>
          </td>
          <td><ReadmeComponent repositoryOwner={row.repositoryOwner} repositoryName={row.repositoryName}/></td>
        </tr>)
    );
  }

  componentDidMount() {
    this.getRepositories();
  }

  getRepositories(user) {
    if (!user) {
      return;
    }
    this.service.get(AppConstants.SERVER_API_REPOSITORIES + user.login)
    .then( res => this.setState({ searches: JSON.parse(res.text), user: user }))
    .catch( error => console.log(error));
  }

  render() {
    const { searches, user } = this.state;
    const tableRows = TableComponent.formatTableRow(searches);

    if (Object.keys(user).length === 0) {
      return(
          <div className="loader-wrapper">
            <div className="loader"></div>
          </div>
      )
    }

    return (
        <div className="col-xs-12 col-md-10 col-md-offset-1">
          <div className="well">
            <legend>Last repositories checked</legend>
            <table className="table table-striped table-hover ">
              <thead>
              <tr>
                <th>Owner</th>
                <th># of PR</th>
                <th># of Commits</th>
                <th>Date of search</th>
                <th>Access Link</th>
                <th>Open Readme</th>
              </tr>
              </thead>
              <tbody>
              {tableRows}
              </tbody>
            </table>
          </div>
        </div>
    )
  }
}

export default TableComponent;