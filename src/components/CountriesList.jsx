import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CountriesList({ countries }) {
  const [searchValue, setSearchValue] = useState('');

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a country..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="list-group">
        {filteredCountries.map((country) => (
          <div className="list-group-item" key={country.alpha3Code}>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={`${country.name.common}`}
            />
            <Link to={`countries/${country.alpha3Code}`}>{country.name.common}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}