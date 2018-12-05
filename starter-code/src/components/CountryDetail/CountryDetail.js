import React, { Component } from "react";
import countriesJSON from "../../countries.json";
import { stringify } from "querystring";
import { Link, Switch, Route } from "react-router-dom";

export default class CountryDetail extends Component {
  constructor(props) {
    super(props);
  }
  findCountry = (id)=>{
    return countriesJSON.filter(country=>{
        return country.cca3 === id
     })[0]  
  }
  render() {
    const { id } = this.props.match.params;

    const filteredCountry = this.findCountry(id)

    return (
      <div>
        <div class="col-7">
          <h1>{filteredCountry.name.common}</h1>
          <table class="table">
            <thead />
            <tbody>
              <tr>
                <td style={{ width: "30%" }}>Capital</td>
                <td>{filteredCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {filteredCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {filteredCountry.borders.map((border, i) => {
                      return <li>
                        <Link to={`/${border}`}>{border}</Link>
                      </li>
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
