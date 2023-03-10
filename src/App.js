import './App.css';
import { useState, useEffect } from "react";
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import ErrorPage from './views/ErrorPage';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import {BallTriangle} from 'react-loader-spinner';

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://ih-countries-api.herokuapp.com/countries');
      setCountries(result.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // wait 5 seconds before hiding the loader
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      {isLoading ?
        <div className="loader-container">
          <BallTriangle
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} 
          />
          <p className="loading-text">Fetching countries...</p>
        </div>
        :
        <Routes>
          <Route 
            path="/" 
            element={
              <CountriesList 
                countries={countries}/>
              }/>
          <Route 
            path="/countries/:countryId" 
            element={
              <CountryDetails 
                countries={countries}/>
            }/>
          <Route path="*" element={<ErrorPage />}/>  
        </Routes>
      }
    </div>
  );
}

export default App;