import axios from "axios";

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    console.log(data);
  } catch (error) {
    console.error("Error => ", error);
  }
};
