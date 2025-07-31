import React from 'react';

const Country = (props) => {
    const { flags, name, capital, region, area, population } = props.country;
    
    const handleOnClick = (name) => {
        props.onRemoveCountry(name)
    }

  return (
    <article className="bg-[#97B067] text-black rounded-xl shadow-lg p-6 max-w-md mx-auto my-6 transition-all duration-300 hover:scale-[1.02]">
      <img
        src={flags.png}
        alt={flags.alt || `Flag of ${name.common}`}
        className="w-full h-48 object-cover rounded-md border border-white mb-4"
      />
      <h1 className="text-xl font-bold mb-1">Name: <span className="font-normal">{name.common}</span></h1>
      <h1 className="text-lg mb-1">Official Name: <span className="font-light">{name.official}</span></h1>
      <h1 className="text-lg mb-1">Capital: <span className="font-light">{capital}</span></h1>
      <h1 className="text-lg mb-1">Region: <span className="font-light">{region}</span></h1>
      <h1 className="text-lg mb-1">Area: <span className="font-light">{area.toLocaleString()} km²</span></h1>
      <h1 className="text-lg">Population: <span className="font-light">{population.toLocaleString()}</span></h1>
          <button
              className="bg-[#437057] text-black font-bold px-5 py-2 mt-3 rounded-lg hover:bg-[#365c4e] transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#365c4e]"
              onClick={() => {
                  handleOnClick(name.common)
              }}
      >
        Remove Country
      </button>

    </article>
  );
};

export default Country;
