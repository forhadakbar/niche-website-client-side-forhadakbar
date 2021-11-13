import { useAPI } from '../../../Context/apiContext';
import Preloader from '../../PreLoader/PreLoader';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {

    const { reviews, isLoadingData, error } = useAPI();

    return (

        <div id="reviews">

            <section className='client-feedback d-flex align-items-center justify-content-center my-5'>
                <div className='container mb-5 mt-3'>
                    <h3 className='text-center mb-5' style={{ fontSize: '36px', fontWeight: '600' }}>
                        <span style={{ color: '#171B4E' }}>Clients </span>
                        <span className="text-success">Feedback</span>
                        <h4 className="mt-3">Over 10,000 real estate pros recommend ApartmentShark</h4>
                    </h3>

                    {isLoadingData ? (
                        <Preloader />
                    ) : error ? (
                        <p className='text-danger'>{error}</p>
                    ) : (
                        <div className='row my-5'>
                            {reviews.map((review) => (
                                <Review key={review._id} review={review} />
                            ))}
                        </div>
                    )}



                </div>
            </section>
        </div>



    );
};

export default Reviews;