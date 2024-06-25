import { Country } from "../types/Country.type";

const CountryCard = ({ countries }: { countries: Country[] }) => {
  console.log(countries);

  return (
    <>
      <div>
        <h1>Favorite Countries</h1>
      </div>
      <div>
        <h1>Countries</h1>
        {countries.map((country) => {
          return (
            <div key={country.name.common}>
              <img src={country.flags.png} />
              <h2>{country.name.common}</h2>
              <p>{country.capital}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CountryCard;
