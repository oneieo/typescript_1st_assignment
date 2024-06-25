import axios from "axios";
import { Country } from "../types/Country.type";

export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const { data } = await axios.get<Country[]>(
      "https://restcountries.com/v3.1/all"
    );
    return data;
  } catch (error) {
    console.error("Error => ", error);
    return [];
  }
};
