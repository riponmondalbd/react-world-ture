import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
  const { country, handleVisitedCountry, handleVisitedFlags } = props;
  return (
    <div>
      <h4>Country Details</h4>
      <hr />
      {/* <CountryData
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      /> */}

      <CountryData {...props} />
    </div>
  );
};

export default CountryDetail;
