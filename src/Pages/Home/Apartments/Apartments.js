import React from 'react';
import { useAPI } from '../../../Context/apiContext';
import Preloader from '../../PreLoader/PreLoader';
import Apartment from '../Apartment/Apartment';

const Apartments = () => {

    const { fakeData, isLoadingData, error } = useAPI();

    return (

        <div id="apartments" className='container my-4'>
            <div className='text-center'>
                <h6>Apartment Sale</h6>
                <h2>
                    Discover the latest Apartment <br /> available today
                </h2>
                {isLoadingData ? (
                    <Preloader />
                ) : error ? (
                    <p className='text-danger'>{error}</p>
                ) : (
                    <div className='row'>

                        {/* Show only first 6 apartment using slice */}
                        {
                            fakeData.slice(0, 6).map(apartment => <Apartment
                                key={apartment._id}
                                apartment={apartment}
                            ></Apartment>)
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default Apartments;