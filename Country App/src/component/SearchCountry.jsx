import React, { useState, useEffect } from 'react';

const SearchCountry = (props) => {
  const [search, setSearch] = useState('');

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    props.onGetValue(search);
  }, [search]);

  return (
    <div className="flex flex-col items-center gap-3 mb-3">
      <h1 className="text-xl font-semibold text-white">🔎 Search Country</h1>
      <input
        type="text"
        value={search}
        placeholder="Enter country name..."
        className="w-full max-w-md px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-black placeholder-gray-500 shadow-sm"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SearchCountry;
