import { useEffect } from "react";
import { fetchCountries } from "./api/countries.api.js";
import "./App.css";

function App() {
  useEffect(() => {
    fetchCountries();
  }, []);
  return <></>;
}

export default App;
