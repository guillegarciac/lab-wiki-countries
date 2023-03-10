import './App.css';
import { useState, useEffect } from "react";
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import ErrorPage from './views/ErrorPage';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://ih-countries-api.herokuapp.com/countries');
      setCountries(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
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
    </div>
  );
}

export default App;
