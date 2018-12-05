import React, { Component } from "react";
import "./App.css";
import countriesJSON from "./countries.json";
import { Link, Switch, Route } from "react-router-dom";
import CountryMenu from "./components/CountryMenu/CountryMenu.js";
import CountryDetail from "./components/CountryDetail/CountryDetail.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: countriesJSON
    };
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">
              WikiCountries
            </Link>
          </div>
        </nav>
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: "90vh", overflow: "scroll" }}
          >
            <CountryMenu countries={this.state.countries} />
          </div>
          <div className="col-7">
        <Switch>
          <Route exact path='/:id' component={CountryDetail}/>
        </Switch>
            
          </div>
        </div>


      </div>
    );
  }
}

export default App;
