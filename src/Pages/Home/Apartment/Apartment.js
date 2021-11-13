import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Apartment = (props) => {

    const { _id, title, img, location, no_bed, no_bath, price } = props.apartment;
    return (
        <div className='col-md-4 mt-4'>

            <div className='card mx-auto' style={{ width: '18rem' }}>
                <img className='card-img-top' src={img} alt='' />

                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text text-muted mb-1'>
                        <i class="fas fa-map-marker"></i>
                        {" "}  {location}
                    </p>
                    <div className='mt-2 d-flex justify-content-between'>
                        <span className='card-link text-muted'>
                            <i class="fas fa-bed"></i>
                            {" "} {no_bed} Bedrooms
                        </span>
                        <span className='card-link text-muted'>
                            <i class="fas fa-bath"></i>
                            {" "} {no_bath} Bathrooms
                        </span>
                    </div>
                    <div className='mt-3 d-flex justify-content-between'>
                        <h3 className='card-link text-price'>${price}</h3>
                        <Link to={`/apartments/${_id}`}><Button variant="success" className="font-monospace">Book Now</Button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Apartment;