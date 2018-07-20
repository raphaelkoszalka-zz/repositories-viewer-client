import React, { Component } from 'react';
import FormComponent from "../../components/FormComponent/FormComponent";
import TableComponent from "../../components/TableComponent/TableComponent";
import HttpRequest from "../../services/HttpServices";

class LandingPage extends Component {

  service = new HttpRequest();

  constructor() {
    super();
    this.state = LandingPage.defaultState();
    this.handleFormComponentSubmit = this.handleFormComponentSubmit.bind(this);
  }

  static defaultState() {
    return { user: false, content: {}, searches: JSON.parse(localStorage.getItem('storedSearches')), ready: false }
  }

  handleFormComponentSubmit() {
    this.setState({searches: JSON.parse(localStorage.getItem('storedSearches'))});
  }

  render() {
    const { searches } = this.state;
    return(
        <div>
          <FormComponent updateLandingPage={this.handleFormComponentSubmit} />
          <TableComponent searches={searches} />
        </div>
    )
  }

}

export default LandingPage;