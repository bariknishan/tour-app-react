import React from 'react';
import './Tour.css'

const Tour = (props) => {

    const{name,id,price,img}=props.tour
    return (
        <div className='tour-area'>
            <img src={img} alt="" />
            <h2 className='mt-4 p-4'>Destination:{name}</h2>
            <p>Price:${price}</p>
            <p>Id:{id}</p>
        </div>
    );
};

export default Tour;