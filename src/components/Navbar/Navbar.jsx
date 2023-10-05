import React, { useState } from 'react'
import './Navbar.css'
import COT_logo from '../../Assests/COT_logo.svg'



//import icon
import { BiLogoMediumOld } from 'react-icons/bi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { PiDotsNineBold } from 'react-icons/pi'

import { HashLink } from 'react-router-hash-link';
const Navbar = () => {
    // state of trace and update navbar
    const [navBar, setNavBar] = useState('menu')

    // function to show navbar
    const showNavBar = () => {
        setNavBar('menu showNavbar')
    }

    const removeNavBar = () => {
        setNavBar('menu')
    }

    return (
        <div className="navBar">
            <div className='logoDiv'>
                <a href='/'><img src={COT_logo} alt="Site-Logo" /></a>
            </div>
            <div className={navBar}>
                <ul>
                    <li className="navList"><HashLink to={'#EXPLORE'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth',})}>Destination</HashLink></li>
                    <li className="navList"><HashLink to={'#AboutUs'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth',})}>About Us</HashLink></li>
                    <li className="navList"><HashLink to={'#Clients'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth',})}>Testimonial</HashLink></li>
                    <li className="navList"><HashLink to={'#Gallery'} scroll={(el) => el.scrollIntoView({ behavior: 'smooth',})}>Gallery</HashLink></li>
                </ul>
                <AiFillCloseCircle className='icon closeIcon' onClick={removeNavBar} />
            </div>
            {/* Icon to remove Navbar */}
            <button className='signUpBtn btn'>
                Sign Up
            </button>
            {/* Icon to toggle Navbar */}
            <PiDotsNineBold className='icon menuIcon' onClick={showNavBar} />
        </div>
    )
}

export default Navbar