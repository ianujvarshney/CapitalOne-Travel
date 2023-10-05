import React,{useEffect} from 'react'
import './Subscribe.css'

import Aos from 'aos';
import 'aos/dist/aos.css'

// Import Image
import CallLady from '../../Assests/call_lady.jpg'

const Subscribe = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div className='subscribe section container'>
            <div className="secContainer grid">
                <div className='textDiv'>
                <h4 data-aos="fade-up">Commencing Your Adventure: Optimal Beginnings</h4>
                <p data-aos="fade-up">We provide customized itineraries crafted to suit individual preferences and interests.</p>
                <button className='btn' data-aos="fade-up">
                    Start Here
                </button>
                </div>
                <img src={CallLady} alt="receptionist" data-aos="fade-down" />
            </div>
        </div>
    )
}

export default Subscribe