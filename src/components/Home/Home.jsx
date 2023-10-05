import React, { useEffect } from 'react'
import './Home.css'
import Video from '../../Assests/Video.mp4'

// Imported Assets
import image1 from '../../Assests/Image1.png';
import image2 from '../../Assests/Image2.jpg';
import image3 from '../../Assests/Image3.jpg';
import image4 from '../../Assests/Image4.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css'
//import icon
import { AiOutlineSwapRight } from 'react-icons/ai'


const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='Home'>
            <div className="videoBg">
                <video src={Video} autoPlay loop muted></video>
            </div>
            <div className="sectionText">
                <h1 data-aos="fade-up">Your next journey starts here!</h1>
                <p data-aos="fade-up">
                    Explore the planet's most thrilling landscapes; life is too brief for a mere journey.</p>
                <button className='btn flex' data-aos="fade-up">GET STARTED <AiOutlineSwapRight className='icon' /></button>
            </div>
            <div className="popularPlaces">
                <div className="content">
                    <h3 data-aos="fade-up">Popular Places</h3>
                    <div className="images flex" data-aos="fade-up">
                        <img src={image1} alt="imgDiv" />
                        <img src={image2} alt="imgDiv" />
                        <img src={image3} alt="imgDiv" />
                        <img src={image4} alt="imgDiv" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home