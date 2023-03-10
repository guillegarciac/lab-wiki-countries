import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CountriesList({ countries }) {
  return (
    <div className="list-group">
      {countries.map(country => 
        <div className="list-group-item" key={country.alpha3Code}>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.name.common}`}/>
          <Link to={`countries/${country.alpha3Code}`}>{country.name.common}</Link>
        </div>)}
    </div>    
  )
}
