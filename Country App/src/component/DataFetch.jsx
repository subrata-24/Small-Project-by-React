import React, { useEffect, useState } from 'react';
import Countries from './Countries';
import SearchCountry from './SearchCountry';

const url = "https://restcountries.com/v3.1/all?fields=name,capital,region,flags,area,population";

const DataFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [country, setCountry] = useState([]);
    const [allCountries, setAllCountries] = useState([]);

    const fetchData = async (url) => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setCountry(data);
            setAllCountries(data)
            setIsLoading(false);
            setError(null);
            console.log(data);
        } catch (error) {
            setIsLoading(false);
            setError(error);
        }
    };

    useEffect(() => {
        fetchData(url);
    }, []);
    
    const handleRemoveCountry = (name) => {
        const filter = country.filter((country) => country.name.common !== name);
        setCountry(filter)
        setAllCountries(filter);
    }

  const handleSearch = (val) => {
    let value = val.toLowerCase();

    if (value === '') {
        setCountry(allCountries);
        return;
    }

    let newCountry = allCountries.filter((country) => {
      const countryName = country.name.common.toLowerCase();

      return countryName.startsWith(value);
    })
    setCountry(newCountry);
  }
  

  return (
    <div className="min-h-screen bg-[#2F5249] text-white px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        🌍 See Information About Any Country
      </h1>

      <SearchCountry onGetValue={handleSearch} />

      {isLoading && (
        <p className="text-center text-lg font-semibold">Loading...</p>
      )}

      {error && (
        <p className="text-center text-red-400 font-semibold">{error.message}</p>
      )}

          <Countries country={country} onRemoveCountry={handleRemoveCountry} />
    </div>
  );
};

export default DataFetch;
