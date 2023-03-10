import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { TfiClose } from 'react-icons/tfi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CountriesList.css';

export default function CountriesList({ countries }) {
  const [searchValue, setSearchValue] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const filteredCountries = countries
    .filter((country) => {
      const name = country.name.common.toLowerCase();
      const region = country.region.toLowerCase();
      const search = searchValue.toLowerCase();
      return region.includes(regionFilter.toLowerCase()) &&
        (name.includes(search) || region.includes(search));
    })
    .sort((a, b) => (a.name.common > b.name.common ? 1 : -1)); // add this sort method to keep countries sorted A to Z

  const clearSearch = () => {
    setSearchValue('');
  };

  return (
    <div>
      <div className="row mb-3">
        <div className="col-md-4">
          <select
            className="form-select"
            aria-label="Filter by region"
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
          >
            <option value="">Filter by Region</option>
            {regions.map((region) => (
              <option value={region} key={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-8">
          <div className="input-group">
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
                <TfiClose />
              </span>
            )}
          </div>
        </div>
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