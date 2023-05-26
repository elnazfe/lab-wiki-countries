import {useParams, Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';

const apiURL= 'https://ih-countries-api.herokuapp.com/countries'

function CountryDetails(props) {
/*     //write State
    // 1) Store the specific Country inside State
    const [country, setCountries] = useState("");
    const {countryId} = useParams();
    // Destructuring props.countries.
    const {countries} = props; */

    const [country, setCountries] = useState([]);
     //function to call the api and set the state
     const getCountries = async () => {
        try {
          let response = await axios.get(apiURL);
          console.log(response);
          setCountries(response.data);
    
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getCountries();
      }, []); 

  /*   useEffect(()=>{
        // Find the Country with the id that matches Route Params
        const foundCountry = countries.find((oneCountry)=>{
            return oneCountry._id === countryId;
        })
    
        // Store it into state, in order to persist Updates
        setCountries(foundCountry);
    
      }, [countries]) */


  return (
    <div>
        {   /*If there's a country, return Country Details */
            country && (
                <div>
                <h2>{country.name.common}</h2>
                            <h3>Official Name: {country.name.official}</h3>
                            <p>Capital: {country.capital}</p>
                            <Link to="/CountriesList">Back</Link>
                </div>
          )}
    </div>
    )
}

export default CountryDetails
