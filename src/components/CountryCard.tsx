import { useState } from "react";
import { Country } from "../types/Country.type";

const CountryCard = ({ countries }: { countries: Country[] }) => {
  const [selectedCards, setSelectedCards] = useState<Country[]>([]);

  const handleClickCountry = (countryName: string) => {
    console.log(countryName);
    const selectedCountry: Country[] = countries.find(
      (country) => country.name.common === countryName
    );
    //setSelectedCards((prev) => [...prev, ...selectedCountry]);
  };

  return (
    <div className="w-full h-full flex flex-col items-center content-center">
      <div>
        <h1 className="font-bold text-4xl mt-5 mb-5">Favorite Countries</h1>
      </div>
      <div className="w-[1920px] flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl mt-5 mb-5 ">Countries</h1>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {countries.map((country) => {
            return (
              <div
                key={country.name.common}
                onClick={() => handleClickCountry(country.name.common)}
                className="w-[300px] h-[200px] flex flex-col items-center justify-center border-2 border-slate-300 rounded-xl cursor-pointer hover:bg-slate-100 "
              >
                <img src={country.flags.png} className="w-[130px] mb-2 mt-2" />
                <h2 className="font-bold text-2xl">{country.name.common}</h2>
                <p className="text-xl text-slate-500">{country.capital}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
