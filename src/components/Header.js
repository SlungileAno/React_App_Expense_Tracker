import React from 'react';

const Header = ({ setCurrentPage }) => {
  return (
    <header>
    <nav>
     
        <ul>
          <li onClick={() => setCurrentPage('home')}>Home</li>
          <li onClick={() => setCurrentPage('profile')}>Profile</li>
          <li onClick={() => setCurrentPage('expenses')}>Expenses</li>
        </ul>
        </nav>
        </header>
       
  );
};

export default Header;
