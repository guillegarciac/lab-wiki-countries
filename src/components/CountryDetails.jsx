import React from 'react'
import { useParams, NavLink } from "react-router-dom";
import { Container, Row, Col, ListGroup, Image, Badge } from "react-bootstrap";

function CountryDetails({ countries }) {
  const { countryId } = useParams();
  const country = countries.find(elem => elem.alpha3Code === countryId);
  
  return (
    <Container className="mt-5 mb-5 country-detail">
      <div className="sticky-top bg-white" style={{ zIndex: 1 }}>
    <Row>
        <Col>
          <h1>{country.name.common}</h1>
        </Col>
        <Col md={6} className=' mb-5'>
          <Image
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt={`${country.name.common}`}
            fluid
          />
        </Col>
      </Row>
    </div>
    <div className='scroll-row'>
    <Row>
        <Col md={6}>
          <p><strong>Capital:</strong> {country.capital[0]}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Subregion:</strong> {country.subregion}</p>
          <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
        </Col>
        <Col md={6}>
          <p><strong>Languages:</strong> {Object.values(country.languages).join(", ")}</p>
          <p><strong>Currencies:</strong> {Object.values(country.currencies).map(currency => currency.name).join(", ")}</p>
          <p><strong>Top Level Domain:</strong> {country.tld.join(", ")}</p>
          <p><strong>Calling Code:</strong> +{country.idd.root}{country.idd.suffixes[0]}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup className='mt-5 mb-5 w-100'>
            {country.borders.length > 0 && 
              <ListGroup.Item>
                <h5>Border Countries:</h5>
                {country.borders.map(border => {
                  const borderCountry = countries.find(country => country.alpha3Code === border);
                  return (
                    <NavLink key={borderCountry.alpha3Code} to={`/${borderCountry.alpha3Code}`} className="mr-2">
                      <Badge variant="primary">{borderCountry.name.common}</Badge>
                    </NavLink>
                  );
                })}
              </ListGroup.Item>
            }
          </ListGroup>
        </Col>
      </Row>
    </div>

    </Container>
  );
}

export default CountryDetails;