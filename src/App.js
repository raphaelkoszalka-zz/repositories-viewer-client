import React from 'react';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from "./pages/LoginPage/LoginPage";

class App extends React.Component {
  render() {
    return (
        <section>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact={true} component={ LoginPage } />
              <Route path="/login" exact={true} component={ LoginPage } />
              <Route path="/landing-page" exact={true} component={ LandingPage } />
            </Switch>
          </BrowserRouter>
        </section>

    );
  }
}

export default App;
