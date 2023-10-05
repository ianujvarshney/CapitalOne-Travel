import React, { useEffect } from 'react'
import './Portfolio.css'

//import images
import icon1 from '../../Assests/customer-care.png'
import icon2 from '../../Assests/route.png'
import icon3 from '../../Assests/24-hours-support.png'
import morning from '../../Assests/morning.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css'

const Portfolio = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="portfolio section container" id="AboutUs">
            <div className="secContainer grid">
                <div className="leftContent">
                    <div className="secHeading">
                        <h3 data-aos="fade-up">Why Should You Choose Us</h3>
                        <p data-aos="fade-up">We possess comprehensive expertise and experience within the travel sector.</p>
                    </div>
                    <div className="grid">
                        <div className="singlePortfolio flex"   >
                            <div className="iconDiv">
                                <img src={icon1} alt="Icon Image" />
                            </div>
                            <div className="infor" data-aos="fade-up">
                                <h4 data-aos="fade-up">Saftey and Support </h4>
                                <p data-aos="fade-up">Ensuring the safety and well-being of our clients is our utmost priority. We adhere to rigorous safety standards and provide emergency support throughout the duration of the trip.</p>
                            </div>
                        </div>

                        <div className="singlePortfolio flex" data-aos="fade-up">
                            <div className="iconDiv">
                                <img src={icon2} alt="Icon Image" />
                            </div>
                            <div className="infor">
                                <h4>Diverse Range of Destinations</h4>
                                <p>Whether it's a domestic tour or an international adventure, we cater to diverse interests and experiences.</p>
                            </div>
                        </div>

                        <div className="singlePortfolio flex" data-aos="fade-up">
                            <div className="iconDiv">
                                <img src={icon3} alt="Icon Image" />
                            </div>
                            <div className="infor" data-aos="fade-down">
                                <h4>24/7 Costomer Support</h4>
                                <p> Our committed customer support team is accessible 24/7 to assist with any inquiries or concerns before, during, and after your trip.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="rightContent">
                    <img src={morning} alt="Image" />
                </div>
            </div>
        </div >
    )
}

export default Portfolio