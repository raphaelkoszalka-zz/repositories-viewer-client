import React, { Component } from 'react';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import LandingPage from './pages/LandingPage/LandingPage';
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

class App extends Component {

  constructor() {
    super();
    const storedSearches = localStorage.getItem('storedSearches');
    if(!storedSearches) {
      localStorage.setItem('storedSearches', JSON.stringify([]));
    }
  }

  render() {
    return (
        <section>
          <BrowserRouter>
            <Switch>
              {/* @todo: loop through RouteArray from Routes */}
              <Route path="/" exact={true} component={ LandingPage } />
            </Switch>
          </BrowserRouter>
        </section>

    );
  }
}

export default App;
