import React from 'react';
import { Link } from 'react-router-dom';
import cover from '../../../images/cover.png';

const Banner = () => {
    return (
        <section className='d-flex align-items-center justify-content-center text-center text-white' style={{ backgroundImage: `url(${cover})`, height: "50vh", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div>
                <h1 style={{ fontSize: "4vw" }}>FIND YOUR APARTMENT</h1>
                <div className='input-group mt-3'>
                    <input type='text' className='form-control me-3' placeholder='Search...' />
                    <Link to="#">
                        <button className='btn btn-dark'>Find Now</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};


export default Banner;