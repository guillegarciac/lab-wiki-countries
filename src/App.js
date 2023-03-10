import './App.css';
import countriesData from './countries.json'
import { useState } from "react";
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

function App() {
  const [countries, setCountries] = useState(countriesData);
  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries}/>
    </div>
  );
}

export default App;
