import './App.css';

import Header from './Component/Header';
import CountriesList from './Component/CountriesList';
import CountryDetails from './Component/CountryDetails';

const apiURL= 'https://ih-countries-api.herokuapp.com/countries'

function App() {

  return (
    <div>
      <Header/>
      <CountriesList/>
      

    </div>
  );
}

export default App;
