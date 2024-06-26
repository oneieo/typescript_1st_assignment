import { useEffect, useState } from "react";
import { fetchCountries } from "../api/countries.api.js";
import { Country } from "../types/Country.type.js";
import CountryCard from "./CountryCard.js";

const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  // countries에 map 돌려서 isfavorite 속성 추가한 새 배열 만들어주기
  // country 타입에도 isFavorite 속성 추가... 과제예시랑 똑같이 구현하려면!
  const [selectedCards, setSelectedCards] = useState<Country[]>([]);

  useEffect(() => {
    const getData = async () => {
      const countriesData: Country[] = await fetchCountries();
      setCountries(countriesData);
    };
    getData();
  }, []);

  const handleClickFavoriteCountry = (countryName: string): void => {
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

  const handleClickCountry = (countryName: string): void => {
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

  return (
    <>
      <div className="w-full h-full flex flex-col items-center content-center">
        <div className="flex flex-col items-center ">
          <h1 className="font-bold text-3xl mt-5 mb-5">Favorite Countries</h1>
          <div className="w-[1440px] flex flex-wrap items-center justify-center gap-5">
            {selectedCards.map((country: Country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  country={country}
                  onClickHandler={handleClickFavoriteCountry}
                />
              );
            })}
          </div>
        </div>
        <div className="w-[1920px] flex flex-col items-center justify-center">
          <h1 className="font-bold text-3xl mt-5 mb-5 ">Countries</h1>
          <div className="w-[1440px] flex flex-wrap items-center justify-center gap-5">
            {countries.map((country: Country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  country={country}
                  onClickHandler={handleClickCountry}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryList;
