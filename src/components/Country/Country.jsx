import "./Country.css";
const Country = ({ country }) => {
  const { name, flags, area, population } = country;
  return (
    <div className="country">
      <h3>Name: {name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
    </div>
  );
};

export default Country;
