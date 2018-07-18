import React, { Component } from 'react';
import FormComponent from "../../components/FormComponent/FormComponent";
// import HttpRequest from "../../services/HttpService";
// import { AppConstants } from "../../AppConstants";

class LandingPage extends Component {

  constructor() {
    super();
    this.state = LandingPage.defaultState();
  }

  static defaultState() {
    return { user: false, content: {} }
  }

  render() {
    const { user, content } = this.state;
    return(
        <FormComponent />
    )
  }

}

export default LandingPage;