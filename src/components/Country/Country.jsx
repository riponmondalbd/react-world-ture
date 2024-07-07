import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, area, population, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: visited ? "purple" : "black" }}>{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <br />
      <button onClick={() => handleVisitedFlags(flags.png)}>Add Flag</button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I have Visited this Country." : "I want to Visit"}
      <hr />
      <CountryDetail
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      />
    </div>
  );
};

export default Country;
