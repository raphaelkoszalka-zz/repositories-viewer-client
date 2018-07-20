import React, { Component } from 'react';

class HeaderComponent extends Component {

  constructor(props) {
    super(props);
    this.state = props;
    this.logout = this.logout.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return props;
  }

  logout() {
    console.log(this.props);
    debugger;
    this.props.updateLandingPage();
  }

  render() {
    const { userStatus } = this.state;

    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">Repo Analyzer</a>
            </div>
            { userStatus && (
                <div className="collapse navbar-collapse" id="header-navbar">
                  <ul className="nav navbar-nav navbar-right">
                    <li onClick={this.logout}><a>Logout</a></li>
                  </ul>
                </div>
            )}
          </div>
        </nav>
    )

  }
}

export default HeaderComponent;