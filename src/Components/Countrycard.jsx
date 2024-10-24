import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';


export const Countrycard = ({ country }) => {
  return (
    <li className="country-card card">
      <div className="container-card bg-white-box">
        <img src={country.flags.png} alt={country.flags.alt || `Flag of ${ country["name"]["common"]}`} />
        <h2>{country.name.common.length > 10 ? country.name.common.slice(0,10) : country["name"]["common"]}</h2>
        <p><strong>Capital:</strong> {country.capital?.[0]}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <NavLink to={`/country/${country.name.common}`}>
          <button>Read more</button>
        </NavLink>
      </div>
    </li>
  );
};

// Adding PropTypes validation
Countrycard.propTypes = {
  country: PropTypes.shape({
    flags: PropTypes.shape({
      png: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }).isRequired,
    name: PropTypes.shape({
      common: PropTypes.string.isRequired,
    }).isRequired,
    capital: PropTypes.arrayOf(PropTypes.string),
    region: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
  }).isRequired,
};

