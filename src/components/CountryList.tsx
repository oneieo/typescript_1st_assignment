import { useEffect, useState } from "react";
import { fetchCountries } from "../api/countries.api.js";
import { Country } from "../types/Country.type.js";
import CountryCard from "./CountryCard.js";

const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  useEffect(() => {
    const getData = async () => {
      const countriesData: Country[] = await fetchCountries();
      setCountries(countriesData);
    };
    getData();
  }, []);
  return (
    <>
      <CountryCard countries={countries} />
    </>
  );
};

export default CountryList;
