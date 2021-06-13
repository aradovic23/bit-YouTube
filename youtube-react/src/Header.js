import React from 'react'
import './header.scss'
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Person from './person.png'

const Header = () => {
    return (

        <div id="header-box">
            
            <div className="flex-prop">
            <FaYoutube size="3em" color="red"/> <span>YouTube</span>
            </div>
            <div className="flex-prop">
            <input type="text" name="search" id="search" placeholder= "Search" />
            <button><FaSearch color="grey"/></button>
            </div>
            <div className="flex-prop">
                <img src={Person} alt="person"></img>
            </div>
        </div>
    )
}

export default Header
