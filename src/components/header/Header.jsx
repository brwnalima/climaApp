import { React, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import SearchBar from '../searchBar/searchBar';

import { BiMenuAltRight } from 'react-icons/bi';


function Header() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className='navbar'>
      <div className="searcharea"><SearchBar /></div>

      <button className="nav-toggler" type="button" onClick={toggleNav}>
        <BiMenuAltRight />
      </button>

      <div className={`navbar-collapse ${isNavOpen ? 'show' : 'hide'}`}>
        <ul className='navbar-list'>
          <div className="nav-daily">
            <li className="nav-itens"><Link to="/">Today</Link></li>
            <li className="nav-itens"><Link to="/">Week</Link></li>
          </div>
          <div className="nav-degree">
            <li className="nav-itens degree">
              <button className='btn-degree'>ºC</button>
            </li>
            <li className="nav-itens degree">
              <button className='btn-degree'>ºF</button>
            </li>
          </div>
          <li className="nav-itens">
            <img src="https://cdn-icons-png.flaticon.com/512/143/143783.png" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header