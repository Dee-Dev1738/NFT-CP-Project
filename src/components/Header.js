import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'


const Header = () => {
    return ( 
    <div className='header'>
        <div class='logoContainer'>
            <img src={punkLogo} className='punkLogo' alt='Logo' />
        </div>

        <div className='searchBar'>
            <div className='searchIconContainer'>
                    <img src={searchIcon} /> 
            </div>
            <input className='searchInput' 
                placeholder='Collection, item or user...'/>
        </div>
        <div className='headerItems'>
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p>
        </div>
        <div className='haderActions'>
            <div className='themeSwitchContainer'>
                <img src={themeSwitchIcon} alt='' />
            </div>
        </div>
        <div className='loginButton'>Get In</div>
    </div>
    )
}

export default Header
