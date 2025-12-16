import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from '../Header';
import Filter from '../Filter';
import { AiFillLike } from "react-icons/ai";
import { LuListPlus } from "react-icons/lu";
import ContextProvider from '../../context/Context'

const Home = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        const data = async () => {
            const response = await fetch('https://luxerious-car-portal-backend-server.onrender.com/api/cars');
            const result = await response.json();
            setCars(result);
        };
        data();
    }, []);



    return (
        <ContextProvider.Consumer>
            {value => {
                const { savedList, addSaveList } = value
                
                return (

                    <div className="bg-gray-100 h-full w-screen flex flex-col items-center justify-start">
                        <Header />
                        <Filter />
                        <div className="h-auto bg-yellow-800 w-screen flex flex-row justify-start item-start m-none p-none">
                            <Carousel autoPlay
                                interval={3000}
                                infiniteLoop
                                stopOnHover={false}
                                showThumbs={false}
                                showStatus={false}
                                className="w-screen max-w-none mx-0"

                            >
                                <div>

                                    <img src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg" className='h-90 w-400' />
                                </div>
                                <div>
                                    <img src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg" className='h-90 w-400' />

                                </div>
                                <div>
                                    <img src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg" className='h-90 w-400' />

                                </div>
                            </Carousel>
                        </div>
                        {cars.length !== 0 && <p className='text-pinkgrey-800 text-lg m-2 self-start font-black' >Preference For You</p>}
                        <div className='flex flex-row flex-wrap justify-center items-center m-2 p-2 gap-4 w-full h-auto'>
                            {cars.length === 0 ? <div className=" min-h-30">
                                <img className="height-15 w-50" src='https://user-images.githubusercontent.com/24841626/43708951-e86d62b2-996b-11e8-9d2c-ee2599db49e7.png' />
                                <p className='text-gray-500 slef-center'>Please Try Again Latter!</p>

                            </div> : cars.map((car, index) => (
                                <div key={index} className='bg-white h-auto w-80 rounded-lg shadow-md flex flex-col justify-start items-start p-4'>
                                    <img
                                        src={car.image_url}
                                        alt={`${car.brand} ${car.model}`}
                                        className='h-[160px] w-full object-cover rounded-md'
                                    />
                                    <h2 className='text-lg mt-2 font-bold text-blue-800'>
                                        {car.brand} {car.model}
                                    </h2>
                                    <p className='text-gray-600'>Year: {car.year}</p>
                                    <p className='text-gray-600'>Price: ₹{car.price}</p>
                                    <div className='flex justify-between min-w-full items-center'>
                                        <AiFillLike className='text-xl m-1' />
                                        <LuListPlus className='text-xl m-1' onClick={() => addSaveList(car)} />
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className='h-20 w-full'>
                            {/* Footer can be added here */}
                            <div className='bg-gray-800 h-20 w-full flex items-center justify-center'>
                                <p className='text-white'>&copy; 2025 My Car Marketplace. All rights reserved.</p>
                            </div>
                        </div>
                    </div>)

            }}


        </ContextProvider.Consumer>

    )
};

export default Home;
