import countryFacts from"../api/countrydata.json";

export const About = ()=>{
    return<section className="section-about container">
      <h2 className="container-title">
        Here are the intresting facts
        <br />
        we are proud of
      </h2>
      <div className="gradient-cards">
        {countryFacts.map((country)=>{
            const {id,countyname,capital,population,somefact} = country;
            return(
              <div className="card" key={id}>
              <div className="container-card bg-blue-box">
              <p className="card-title">{countyname}</p>
              <p>
                <span className="card-description">Capital:</span>
             {capital}
              </p>
              <p>
                <span className="card-description">Population:</span>
              {population}
              </p>
              <p>
                <span className="card-description">Facts:</span>
                {somefact}
              </p>
            </div>
            </div>
            )
          })
        }
    </div>
    </section>;
  };