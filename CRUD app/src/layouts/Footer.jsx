import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center mt-102">
      <p>© {new Date().getFullYear()} Subrata Biswas. All rights reserved.</p>
    </footer>
  );
};

export default Footer;