import React, { useEffect } from 'react'
import './Questions.css'

import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs'

import Aos from 'aos';
import 'aos/dist/aos.css'

const Accordion = ({ title, desc, active, setActive }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='accordionContainer'>
            <span className={(active === title ? 'activeTitle' : '') + " title" + " flex"} data-aos="fade-up">
                {title}
                <span onClick={() => setActive(title)}>
                    {active === title ? (<BsArrowDownCircle className='icon' />) : (<BsArrowUpCircle className='icon' />)}
                </span>
            </span>
            <p className={(active === title ? 'show' : '') + "description"} data-aos="fade-down">{desc}</p>
        </div >
    )
}

export default Accordion;   