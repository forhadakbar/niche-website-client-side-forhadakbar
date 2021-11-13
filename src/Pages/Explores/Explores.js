import React from 'react';
import { Row } from 'react-bootstrap';
import { useAPI } from '../../Context/apiContext';
import Apartment from '../Home/Apartment/Apartment';

const Pricing = () => {
    const { fakeData } = useAPI();
    return (
        <div className="p-3">

            <h1 className="text-center py-4 fw-bold">Explore Our Apartments</h1>
            <p className="text-center pb-3">We provide wide range of Apartments for our customer. Please choose the apartment that best for you</p>

            <Row xs={1} md={3} className="g-4">

                {
                    fakeData.map(apartment => <Apartment
                        key={apartment._id}
                        apartment={apartment}
                    ></Apartment>)
                }

            </Row>

        </div>
    );
};

export default Pricing;