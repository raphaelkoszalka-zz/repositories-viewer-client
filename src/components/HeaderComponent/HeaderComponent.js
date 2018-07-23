import React, { Component } from 'react';

class HeaderComponent extends Component {

  constructor(props) {
    super(props);
    this.state = props;
  }

  static getDerivedStateFromProps(props, state) {
    return props;
  }

  static logout() {
    window.location.href = '/login';
  }

  render() {
    const { user } = this.state;

    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">Repo Analyzer</a>
            </div>
            { user && (
                <div className="collapse navbar-collapse" id="header-navbar">
                  <ul className="nav navbar-nav navbar-right">
                    <li onClick={HeaderComponent.logout}>
                      <a>
                        <img alt={user.name} src={user.avatar_url} id="user-avatar"/>
                        Sign out {user.name}
                      </a>
                    </li>
                  </ul>
                </div>
            )}
          </div>
        </nav>
    )

  }
}

export default HeaderComponent;