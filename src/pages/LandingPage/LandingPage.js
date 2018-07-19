import React, { Component } from 'react';
import FormComponent from "../../components/FormComponent/FormComponent";
import TableComponent from "../../components/TableComponent/TableComponent";
import HttpRequest from "../../services/HttpServices";

class LandingPage extends Component {

  service = new HttpRequest();

  constructor() {
    super();
    this.state = LandingPage.defaultState();
  }

  static defaultState() {
    return { user: false, content: {}, searches: JSON.parse(localStorage.getItem('storedSearches')), ready: false }
  }

  render() {
    const { searches } = this.state;
    return(
        <div>
          <FormComponent />
          <TableComponent searches={searches} />
        </div>
    )
  }

}

export default LandingPage;