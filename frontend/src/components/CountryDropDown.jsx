import { useState, useEffect } from "react";
import axios from "axios";

const CountryDropdown = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  // Fetch countries from API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryList = response.data.map((country) => country.name.common);
        setCountries(countryList.sort()); // Sort alphabetically
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // Handle dropdown change
  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <label htmlFor="country-select">Select a country:</label>
      <select
        id="country-select"
        value={selectedCountry}
        onChange={handleChange}
      >
        <option className=''  value="">-- Select a country --</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
      {selectedCountry && (
        <p>
          You selected: <strong>{selectedCountry}</strong>
        </p>
      )}
    </div>
  );
};

export default CountryDropdown;

