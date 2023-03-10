import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CountriesList.css';

export default function CountriesList({ countries }) {
  const [searchValue, setSearchValue] = useState('');

  const filteredCountries = countries
    .filter((country) =>
      country.name.common.toLowerCase().includes(searchValue.toLowerCase())
    )
    .sort((a, b) => (a.name.common > b.name.common ? 1 : -1));

  const clearSearch = () => {
    setSearchValue('');
  };

  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text">
          <AiOutlineSearch />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search for a country..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {searchValue && (
          <span className="input-group-text" onClick={clearSearch}>
            <AiOutlineCloseCircle />
          </span>
        )}
      </div>
      <div className="list-group">
        {filteredCountries.map((country) => (
          <div className="list-group-item" key={country.alpha3Code}>
            <div className="country-item">
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`${country.name.common}`}
              />
              <Link to={`countries/${country.alpha3Code}`}>{country.name.common}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}