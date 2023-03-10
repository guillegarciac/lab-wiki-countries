import './App.css';
import countriesData from './countries.json'
import { useState } from "react";
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'

function App() {
  const [countries, setCountries] = useState(countriesData);
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
      </Routes>
    </div>
  );
}

export default App;
