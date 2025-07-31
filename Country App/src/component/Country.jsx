import React from 'react'

const Country = (props) => {
    const {flags, name, capital, region, area, population}=props.country
  return (
      <article>
          <img src={flags.png} alt={flags.alt} />
          <h1>Name: {name.common}</h1>
          <h1>Official name: {name.official}</h1>
          <h1>Capital: {capital}</h1>
          <h1>Region: {region}</h1>
          <h1>Area: {area}</h1>
          <h1>Population: {}</h1>
    </article>
  )
}

export default Country
