import { useEffect } from "react";
import { fetchCountries } from "../api/countries.api.js";

const CountryList = () => {
  useEffect(() => {
    const getData = async () => {
      const countriesData = await fetchCountries();
      console.log("getData", countriesData);
    };
    getData();
  }, []);

  return <div></div>;
};

export default CountryList;
