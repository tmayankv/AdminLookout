import React from 'react';

function Header({ category, title }) {
  return (
    <div className="mb-10">
      <p className="text-gray-400">
        {category}
      </p>
      <p className="text-3xl font-extrabold tracking-tighter dark:text-gray-700 text-black">
        {title}
      </p>
    </div>
  );
}

export default Header;
