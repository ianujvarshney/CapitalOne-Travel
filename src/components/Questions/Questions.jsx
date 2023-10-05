import React, { useState, useEffect } from 'react'
import './Questions.css'

import Accordion from './Accordion';

import Aos from 'aos';
import 'aos/dist/aos.css'

const Questions = () => {
    const [active, setActive] = useState('title1');
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div className="questions section container">
            <div className="secHeading">
                <h3>Frequently Asked Questions</h3>
            </div>
            <div className="secContainer grid">
                <div className="accordion grid">
                    <Accordion title="title1" 
                    desc="Consider your interests, budget, desired experiences, and the type of environment you enjoy. Reserch destinations that align with your preferences and offer attractions or activities you find appealing." 
                    active={active} setActive={setActive}/>  
                    
                    <Accordion title="title2" 
                    desc="Consider your interests, budget, desired experiences, and the type of environment you enjoy. Reserch destinations that align with your preferences and offer attractions or activities you find appealing." 
                    active={active} setActive={setActive}/>   
                </div>
                <div className="form">
                    <div className="secHeading">
                        <h4 data-aos="fade-up">Do you have any specific question?</h4>
                        <p data-aos="fade-up">Kindly complete the form provided below, and our committed team will reach out to you at the earliest convenience.</p>
                    </div>
                    <div className="formContent grid">
                        <input type="email" placeholder='Enter email address' data-aos="fade-up" />
                        <textarea placeholder='Enter your question here' data-aos="fade-up"></textarea>
                        <button className='btn' data-aos="fade-up">Submit Inquiry</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Questions