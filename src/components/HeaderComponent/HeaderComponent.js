import React, { Component } from 'react';

class HeaderComponent extends Component {
  render() {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Repo Analyzer</a>
            </div>
            <div className="collapse navbar-collapse" id="header-navbar">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Link</a></li>
              </ul>
            </div>
          </div>
        </nav>
    )
  }
}

export default HeaderComponent;