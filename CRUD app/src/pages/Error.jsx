import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-gray-700 mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to='/' className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Go Home
      </Link>
    </div>
  );
};

export default Error;