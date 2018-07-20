import React, { Component } from 'react';
import HttpRequest from "../../services/HttpServices";

class LoginComponent extends Component {

  service = new HttpRequest();

  constructor(props) {
    super(props);
    this.handleUserLogin = this.handleUserLogin.bind(this);
  }

  handleUserLogin() {
    this.props.updateLandingPage();
  }

  render() {
    return(
        <div className="col-xs-12 col-md-10 col-md-offset-1">
          <div className="well">
            <legend>You need to login to access the web app</legend>
            <div className="col-md-6 col-md-offset-3">
              <button className="btn btn-default btn-block" onClick={this.handleUserLogin}>Login</button>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
    )
  }

}

export default LoginComponent;