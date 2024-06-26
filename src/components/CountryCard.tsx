import { Country } from "../types/Country.type";

const CountryCard = ({
  country,
  onClickHandler,
}: {
  country: Country;
  onClickHandler: (name: string) => void;
}) => {
  return (
    <div
      key={country.name.common}
      onClick={() => onClickHandler(country.name.common)}
      className="w-[300px] h-[200px] flex flex-col items-center justify-center border-2 border-slate-300 rounded-xl cursor-pointer hover:bg-slate-100 "
    >
      <img src={country.flags.png} className="w-[130px] mb-2 mt-2" />
      <h2 className="font-bold text-xl">{country.name.common}</h2>
      <p className="text-lg text-slate-500">{country.capital}</p>
    </div>
  );
};

export default CountryCard;
