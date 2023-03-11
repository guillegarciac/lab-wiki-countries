import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { TfiClose } from 'react-icons/tfi';
import { IoIosArrowForward } from 'react-icons/io';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CountriesList.css';

export default function CountriesList({ countries }) {
  const [searchValue, setSearchValue] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const filteredCountries = countries
    .filter((country) => {
      const name = country.name.common.toLowerCase();
      const region = country.region.toLowerCase();
      const search = searchValue.toLowerCase();
      return region.includes(regionFilter.toLowerCase()) &&
        (name.includes(search) || region.includes(search));
    })
    .sort((a, b) => (a.name.common > b.name.common ? 1 : -1));

  const clearSearch = () => {
    setSearchValue('');
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <div className="row">
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
      <div className='list-two-containers'>
      <div className="list-group-container">
        {filteredCountries.map((country) => (
          <Link
            className="country-link"
            to={`/${country.alpha3Code}`}
            onClick={() => handleCountrySelect(country)}
          >
          <div className="list-group-item" key={country.alpha3Code}>
            <div className="country-item d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt={`${country.name.common}`}
                />
                <span>{country.name.common}</span>
              </div>
              <IoIosArrowForward />
            </div>
          </div>
          </Link>
        ))}
      </div>
      <div className='list-detail'>
        {selectedCountry ? (
          <Outlet />
        ) : (
          <p className='select-one'>Please select a country to see more details</p>
        )}
      </div>
    </div>  
    </div>
  );
}
  