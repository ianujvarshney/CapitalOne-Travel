import React, { useEffect, useState } from 'react'
import './Destinations.css'

//imported icons
import { MdLocationPin } from 'react-icons/md'
import { BsFillCreditCardFill } from 'react-icons/bs'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { TiLocation } from 'react-icons/ti'

import Aos from 'aos';
import 'aos/dist/aos.css'

// Destinations image
import image1 from '../../Assests/image1.png'
import image2 from '../../Assests/image2.jpg'
import image3 from '../../Assests/image3.jpg'
import image4 from '../../Assests/image4.jpg'
import image5 from '../../Assests/image5.jpg'
import image6 from '../../Assests/image6.jpg'
import image7 from '../../Assests/image7.jpg'
import image8 from '../../Assests/image8.jpg'

//lets create an array that is gonna contain all destinations data and we loop through them

const destination = [
    {
        id: 1,
        img: image1,
        name: 'Seychelles Island',
        location: 'Indian Ocean',
        category: 'Beach',
        rating: 4.7,
    },
    {
        id: 2,
        img: image2,
        name: 'Bora Bora Island',
        location: 'polynesia',
        category: 'Park',
        rating: 4.3,
    },
    {
        id: 3,
        img: image3,
        name: 'Maldives Island',
        location: 'Indian Ocean',
        category: 'Mountain',
        rating: 4.9,
    },
    {
        id: 4,
        img: image4,
        name: 'Santorini Island',
        location: 'Greece',
        category: 'Park',
        rating: 4.9,
    },
    {
        id: 5,
        img: image5,
        name: 'Bali Island',
        location: 'Indonesia',
        category: 'Nature',
        rating: 4.9,
    },
    {
        id: 6,
        img: image6,
        name: 'Maui Island',
        location: 'Hawaii, USA',
        category: 'Beach',
        rating: 4.9,
    },
    {
        id: 7,
        img: image7,
        name: 'Capri Island',
        location: 'Italy',
        category: 'Beach',
        rating: 4.7,
    },
    {
        id: 8,
        img: image8,
        name: 'Fiji Island',
        location: 'South Pacific',
        category: 'Park',
        rating: 4.4,
    },
]

const Destinations = () => {
    const [items, setItems] = useState(destination);
    const [active, setActive] = useState('');
    const filterItem = (categItem) => {
        const updateItems = destination.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updateItems);
        setActive(true);
    };
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='destination section container' id="EXPLORE">
            <div className="secContainer">
                <div className="secTitle">
                    <span className="redText" >
                        EXPLORE NOW
                    </span>
                    <h3>
                        Find Your Dream Destination
                    </h3>
                    <p>Fill in the fields below to find the best spot for your next tour.</p>
                </div>
                <div className="searchField grid">
                    <div className="inputField flex" data-aos="fade-up">
                        <MdLocationPin className="icon" />
                        <input type="text" placeholder='Location' />
                    </div>

                    <div className="inputField flex" data-aos="fade-up">
                        <BsFillCreditCardFill className="icon" />
                        <input type="text" placeholder='Budget' />
                    </div>

                    <div className="inputField flex" data-aos="fade-up">
                        <BsFillCalendarDateFill className="icon" />
                        <input type="text" placeholder='Date' />
                    </div>
                    <button className='btn flex' data-aos="fade-up">
                        <BiSearchAlt className="icon" />
                        Search
                    </button>
                </div>

                <div className="secMenu" id="Gallery">
                    <ul className="flex" >
                        <li>
                            <a
                                 className={active ? "active" : "unactive"}
                                href="javascrip:0;"
                                onClick={() => setItems(destination)}
                            >
                                All
                            </a>
                        </li>
                        <li>
                            <a
                                className={active ? "unactive" : "active"}
                                href="javascrip:0;"
                                onClick={() => filterItem("Recommended")}
                            >Recommended</a></li>
                        <li>
                            <a
                                className={active ? "unactive" : "active"}
                                href="javascrip:0;"
                                onClick={() => filterItem("Beach")}
                            >
                                Beach</a></li>
                        <li><a
                            className={active ? "unactive" : "active"}
                            href="javascrip:0;"
                            onClick={() => filterItem("Park")}
                        >Park</a></li>
                        <li>
                            <a
                                className={active ? "unactive" : "active"}
                                href="javascrip:0;"
                                onClick={() => filterItem("Nature")}
                            >Nature</a></li>
                        <li>
                            <a
                                className={active ? "unactive" : "active"}
                                href="javascrip:0;"
                                onClick={() => filterItem("Mountain")}
                            >
                                Mountain
                            </a>
                        </li>
                    </ul>
                </div>


                <div className="destinationContainer grid">
                    {
                        items.map((destinations) => {
                            return (
                                <div className="singleDestination" key={destinations.id}>
                                    <div className="imgDiv">
                                        <img src={destinations.img} alt="Destination image" />
                                        <div className="descInfo flex">
                                            <div className="text">
                                                <span className="name">{destinations.name}</span>
                                                <p className='flex'><TiLocation className='icon' />{destinations.location}</p>
                                            </div>
                                            <span className="rating">
                                                {destinations.rating}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Destinations