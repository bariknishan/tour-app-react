import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>

            
            <nav className='bg-blue-400 p-10  header-area  '>
               
                <Link to ='/home'>Home</Link>
                <Link to ='/about'>About</Link>
                <Link to ='/service'>Service</Link>
                <Link to ='/contact'>Contact</Link>
              
            </nav>
            
            <h2 className='text-4xl font-bold mt-8'>WELLCOME TO MY TOUR BLOG</h2>
        </div>
    );
};

export default Header;