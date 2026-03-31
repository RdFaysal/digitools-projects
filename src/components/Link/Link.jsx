// Link.js
import React from 'react';

const Link = ({ nav }) => {
  return (
    <a
      href={nav.path}
      className="block px-2 lg:px-3 py-2 hover:text-gray-500"
    >
      {nav.name}
    </a>
  );
};

export default Link;
