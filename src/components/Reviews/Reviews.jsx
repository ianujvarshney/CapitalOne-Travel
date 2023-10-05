import React,{ useEffect } from 'react'
import './Reviews.css'

// Imported Icons
import { AiFillStar } from 'react-icons/ai'

import Aos from 'aos';
import 'aos/dist/aos.css'

// Imported images
import Client1 from '../../Assests/Client1.jpg'
import Client2 from '../../Assests/Client2.jpg'
import Client3 from '../../Assests/Client3.jpg'
import Client4 from '../../Assests/Client4.jpg'
import Client5 from '../../Assests/Client5.jpg'

const Reviews = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div className="review section container" id="Clients">
            <div className="secContainer grid">
                <div className="textDiv">
                    <span className="redText" data-aos="fade-up">
                        FROM OUR CLIENTS
                    </span>
                    <h3 data-aos="fade-up">
                    Authentic Travel Experiences Shared by Our Valued Clients
                    </h3>
                    <p data-aos="fade-up">
                    By selecting our tour agency, clients can anticipate a rewarding and delightful travel experience replete with lasting memories that will endure a lifetime.
                    </p>
                    <span className="stars flex" data-aos="fade-up">
                        <AiFillStar className="icon" />
                        <AiFillStar className="icon" />
                        <AiFillStar className="icon" />
                        <AiFillStar className="icon" />
                        <AiFillStar className="icon" />
                    </span>
                    <div className="clientsimages flex">
                        <img src={Client1} alt="Client"  data-aos="fade-up"/>
                        <img src={Client2} alt="Client2" data-aos="fade-up"/>
                        <img src={Client3} alt="Client3" data-aos="fade-up"/>
                        <img src={Client4} alt="Client4" data-aos="fade-up"/>
                        <img src={Client5} alt="Client5" data-aos="fade-up"/>
                    </div>
                </div>
                <div className="imgDiv">
                    <img src={Client5} alt="Client5" data-aos="fade-up"/>
                </div>
            </div>
        </div>
    )
}

export default Reviews