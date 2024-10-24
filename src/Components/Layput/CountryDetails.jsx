import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryindData } from "../../api/postApi";


export const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null); // Initialize with null

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryindData(params.id);
      if (res.status === 200 && res.data.length > 0) {
        setCountry(res.data[0]);
      }
    });
  }, [params.id]);

  if (isPending || !country) return <> Loading...</>;
  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {country && (
          <div className="country-image grid grid-two-cols">
            <img
              src={country?.flags?.svg || country.flags?.png} // Safely accessing flags
              className="flag"
            />
            <div className="country-content">
              <p className="card-title"> {country.name?.official} </p>

              <div className="infoContainer">
                <p>
                  <span className="card-description">Native Names:</span>
                  {country.name?.nativeName
                    ? Object.keys(country.name.nativeName)
                        .map((key) => country.name.nativeName[key].common)
                        .join(", ")
                    : "N/A"}
                </p>
                <p>
                  <span className="card-description">Population: </span>
                  {country.population?.toLocaleString() || "N/A"}
                </p>
                <p>
                  <span className="card-description">Region:</span>
                  {country.region || "N/A"}
                </p>
                <p>
                  <span className="card-description">Sub Region:</span>
                  {country.subregion || "N/A"}
                </p>
                <p>
                  <span className="card-description">Capital:</span>
                  {country.capital?.join(", ") || "N/A"}
                </p>
                <p>
                  <span className="card-description">Top Level Domain:</span>
                  {country.tld?.[0] || "N/A"}
                </p>
                <p>
                  <span className="card-description">Currencies: </span>
                  {country.currencies
                    ? Object.keys(country.currencies)
                        .map((curElem) => country.currencies[curElem].name)
                        .join(", ")
                    : "N/A"}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {country.languages
                    ? Object.keys(country.languages)
                        .map((key) => country.languages[key])
                        .join(", ")
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
