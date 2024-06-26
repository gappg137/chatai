import React from 'react';
import './Searchbar.css';
import { FaSearch } from 'react-icons/fa';


const Searchbar = () => {
  return (
    <div className="search-bar">
 
      
      <input type="text" placeholder="Search" className="search-input">
        </input>
        <FaSearch />

      
      {/*<button className="search-button">Search</button> */}
    </div>
  )
}

export default Searchbar