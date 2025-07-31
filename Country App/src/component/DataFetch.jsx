import React, { useEffect, useState } from 'react'

import Countries from './Countries'

const url = "https://restcountries.com/v3.1/all?fields=name,capital,region,flags,area,population"

const DataFetch = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [country, setCountry] = useState([])

    const fetchData = async (url) => {
        setIsLoading(true)

        try {
            const response = await fetch(url)
            const data = await response.json()

            setCountry(data)
            setIsLoading(false)
            setError(null)
            console.log(data)
        } catch (error) {
            setIsLoading(false)
            setError(error)
        }
    }

    useEffect(() => {
        fetchData(url);
    },[])

  return (
    <div>
          <h1>See information about any country</h1>
          {isLoading && <p>Loading...</p>}
          {error && <p>{error.message}</p>}
          <Countries country={country}/>
    </div>
  )
}

export default DataFetch
