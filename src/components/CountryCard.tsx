import { useState } from "react";
import { Country } from "../types/Country.type";

const CountryCard = ({
  countries,
  setCountries,
}: {
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
}) => {
  // countries에 map 돌려서 isfavorite 속성 추가한 새 배열 만들어주기
  // country 타입에도 isFavorite 속성 추가... 과제예시랑 똑같이 구현하려면!
  const [selectedCards, setSelectedCards] = useState<Country[]>([]);

  const handleClickCountry = (countryName: string) => {
    const selectedCountry: Country | undefined = countries.find(
      (country) => country.name.common === countryName // 일치하지 않는 경우 undefined가 뜰 수도 있음 -> 어떻게 처리할지 -> if문 사용하기
    );
    if (selectedCountry) {
      setSelectedCards((prev) => [...prev, selectedCountry]);
      const filteredCountry: Country[] = countries.filter(
        (country) => country.name.common !== countryName
      );
      setCountries(filteredCountry);
    }
  };

  const handleClickFavoriteCountry = (countryName: string) => {
    const filteredCards: Country[] = selectedCards.filter(
      (country) => country.name.common !== countryName
    );
    setSelectedCards(filteredCards);
    const selectedFavoriteCard: Country | undefined = selectedCards.find(
      (country) => country.name.common === countryName
    );
    if (selectedFavoriteCard) {
      setCountries((prev) => [selectedFavoriteCard, ...prev]);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center content-center">
      <div className="flex flex-col items-center ">
        <h1 className="font-bold text-4xl mt-5 mb-5">Favorite Countries</h1>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {selectedCards.map((country) => {
            return (
              <div
                key={country.name.common}
                onClick={() => handleClickFavoriteCountry(country.name.common)}
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
