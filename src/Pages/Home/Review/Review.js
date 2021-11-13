import React from 'react';
import faker from 'faker';
import { useAPI } from '../../../Context/apiContext';

const Review = ({ review }) => {

    const { user } = useAPI();

    return (


        <div className='col-md-4 feedback-card mb-4'>
            <div className='d-flex flex-column text-left mb-4 card h-100 p-3'>
                <div className='d-flex align-items-center mb-2'>
                    {review.img ? (
                        <img
                            style={{ width: '20%' }}
                            className='mr-2 rounded-circle'
                            src={review.img}


                            alt=''
                        />
                    ) : (
                        <img
                            style={{ width: '20%' }}
                            className='mr-2 rounded-circle'
                            src={faker.image.avatar()}
                            alt=''
                        />
                    )}

                    <div className="ms-2">
                        <h5>{review.name}</h5>
                        <small>{review.designation}</small>
                    </div>
                </div>
                <div className="mt-2">{review.description}</div>
            </div>
        </div>

    );
};

export default Review;