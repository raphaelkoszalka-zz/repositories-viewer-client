import React, { Component } from 'react';
import FormComponent from "../../components/FormComponent/FormComponent";
import TableComponent from "../../components/TableComponent/TableComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import HttpService from "../../services/HttpServices";
import Redirect from "react-router-dom/es/Redirect";
import AppConstants from "../../AppConstants";

class LandingPage extends Component {

  service = new HttpService();

  constructor() {
    super();
    this.state = LandingPage.defaultState();
    this.handleFormComponentSubmit = this.handleFormComponentSubmit.bind(this);
    this.handleLogin();
  }

  static defaultState() {
    return { user: {}, content: {}, update: false, ready: false, redirect: false }
  }

  static getParameterByName(name, url) {
    // eslint-disable-next-line
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  handleFormComponentSubmit() {
    this.setState({ update: true });
  }

  getUserFromGithub(token) {
    this.service.get(AppConstants.GITHUB_ACCESS_TOKEN + token)
    .then(res => {
      this.setState({user: JSON.parse(res.text)});
    });
  }

  handleLogin() {
    const code = LandingPage.getParameterByName('code', window.location.href);
    this.service.get(AppConstants.SERVER_API_AUTHENTICATE + code)
    .then(res => {
      const parsedResponse = JSON.parse(res.text);
      if (parsedResponse.error) {
        this.setState({redirect: true});
        return;
      }
      this.getUserFromGithub(parsedResponse.access_token);
    })
    .catch(error => console.log(error));
  }

  render() {
    const { user, update, redirect } = this.state;

    if (redirect) {
      return <Redirect to='/login'/>;
    }

    return(
        <div>
          <HeaderComponent user={user} />
          <FormComponent user={user} updateLandingPage={this.handleFormComponentSubmit} />
          <TableComponent update={update} user={user} />
        </div>
    )
  }

}

export default LandingPage;