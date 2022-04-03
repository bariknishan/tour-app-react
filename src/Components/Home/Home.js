import React from 'react';
import useTour from '../../Hooks/UseTour';
import Cart from '../Cart/Cart';
import Tour from '../Tour/Tour';
import './Home.css'

const Home = () => {
    const[tours,setTour]=useTour()
    return (
        <div className='home-container    '>

            < div className="tour-container   grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1  mx-auto gap-10  mt-16 ">
           
           {
               tours.map(tour=><Tour
               
               key={tour.id}
               tour={tour}
               
               ></Tour>)
           }
            </div>
            

            <div className="cart-container mt-16">
              <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;