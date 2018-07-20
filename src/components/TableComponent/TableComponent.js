import React, { Component } from 'react';
import ReadmeComponent from '../ReadmeComponent/ReadmeComponent';
import PullsComponent from "../PullsComponent/PullsComponent";
import CommitsComponent from "../CommitsComponent/CommitsComponent";

class TableComponent extends Component {

  constructor(props) {
    super(props);
    this.state = props;
  }

  static getDerivedStateFromProps(props, state) {
    return props;
  }

  static formatTableRow(rows) {
    return rows.map( (row, i) =>
        (<tr key={i}>
          <td>{row.owner}</td>
          <td><PullsComponent url={row.repository.url} /></td>
          <td><CommitsComponent url={row.repository.url} /></td>
          <td><a href={row.repository.html_url} target="_blank"><button className="btn btn-sm btn-info">Open Repo</button></a></td>
          <td><ReadmeComponent repositoryOwner={row.repository.owner.login} repositoryName={row.repository.name} /></td>
        </tr>)
    );
  }

  render() {
    const { searches } = this.state;
    const tableRows = TableComponent.formatTableRow(searches);

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