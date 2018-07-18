import React, { Component } from 'react';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import LandingPage from './pages/LandingPage/LandingPage';
import ListPage from './pages/ListPage/ListPage';
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

class App extends Component {
  render() {
    return (
        <section>
          <HeaderComponent />
          <BrowserRouter>
            <Switch>
              {/* @todo: loop through RouteArray from Routes */}
              <Route path="/" exact={true} component={ LandingPage } />
              <Route path="/list" exact={true} component={ ListPage } />
            </Switch>
          </BrowserRouter>
        </section>

    );
  }
}

export default App;
