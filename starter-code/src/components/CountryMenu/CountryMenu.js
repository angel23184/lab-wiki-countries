import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";


export default class CountriesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
<div>
        {this.props.countries.map((country, i) => (
          <Link className={"list-group-item list-group-item-action"} to={`/${country.cca3}`}>{country.flag} {country.name.common}</Link>
          ))}
</div>
    )
  }
}
