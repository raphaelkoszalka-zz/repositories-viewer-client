import React, { Component } from 'react';
import {OauthSender} from "react-oauth-flow";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";

class LoginPage extends Component {

  render() {
    return(
        <OauthSender
            authorizeUrl="https://github.com/login/oauth/authorize"
            clientId="ffe341fedcc0d69175d7"
            redirectUri="http://localhost:3000/landing-page"
            render={({ url }) => (
                <section>
                  <HeaderComponent />
                  <div className="col-xs-12 col-md-10 col-md-offset-1">
                    <div className="well">
                      <legend>You need to login to access the web app</legend>
                      <div className="col-md-6 col-md-offset-3">
                        <a href={url}>
                          <button className="btn btn-default btn-block">Connect with Github</button>
                        </a>
                      </div>
                      <div className="clearfix" />
                    </div>
                  </div>
                </section>
            )}
        />
    )
  }

}

export default LoginPage;