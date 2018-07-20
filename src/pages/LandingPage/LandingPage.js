import React, { Component } from 'react';
import FormComponent from "../../components/FormComponent/FormComponent";
import TableComponent from "../../components/TableComponent/TableComponent";
import LoginComponent from "../../components/LoginComponent/LoginComponent";
import HttpRequest from "../../services/HttpServices";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";

class LandingPage extends Component {

  service = new HttpRequest();

  constructor() {
    super();
    this.state = LandingPage.defaultState();
    this.handleFormComponentSubmit = this.handleFormComponentSubmit.bind(this);
    this.handleUserLoginSubmit = this.handleUserLoginSubmit.bind(this);
    this.handleUserLogoutSubmit = this.handleUserLogoutSubmit.bind(this);
  }

  static defaultState() {
    return { user: false, content: {}, searches: JSON.parse(localStorage.getItem('storedSearches')), ready: false }
  }

  handleFormComponentSubmit() {
    this.setState({searches: JSON.parse(localStorage.getItem('storedSearches'))});
  }

  handleUserLoginSubmit() {
    this.setState({user: true})
  }

  handleUserLogoutSubmit() {
    this.setState({user: false});
  }

  render() {
    const { searches, user } = this.state;

    if (!user) {
      return(
          <div>
            <HeaderComponent userStatus={user} updateLandingPage={this.handleUserLogoutSubmit} />
            <LoginComponent updateLandingPage={this.handleUserLoginSubmit} />
          </div>
      )
    }

    return(
        <div>
          <HeaderComponent userStatus={user} updateLandingPage={this.handleUserLogoutSubmit} />
          <FormComponent updateLandingPage={this.handleFormComponentSubmit} />
          <TableComponent searches={searches} />
        </div>
    )
  }

}

export default LandingPage;