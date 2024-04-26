import React, { useState } from 'react'
import './Navbar.css'
//import { getImageUrl } from '../../utils';


const ChatAINavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
  
    // const toggleDropdown = () => {
    //   setIsDropdownOpen(!isDropdownOpen);
    // };
    //isMenuOpen? getImageUrl("/menu.png"): getImageUrl("/menu-icon-1.png")

    return (
        <nav className="chatAI">
      <div className="navbar-center">ChatAI</div>
          <div class="bi bi-three-dots">
            <img className="menu-Src" src={require('../../3dots.png')}
            alt="menu-btn"
            onClick={() => setMenuOpen(!isMenuOpen)}
            />
            {isMenuOpen && (
              <ul className="dropdown-menu">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            )}
          </div>
        </nav>
      );
}
export default ChatAINavBar;