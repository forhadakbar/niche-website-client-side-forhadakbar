import { useHistory, useParams } from 'react-router';
import { useAPI } from '../../Context/apiContext';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Booking = () => {

    const { apartmentId } = useParams();
    const { fakeData } = useAPI();
    const { isLoadingData } = useAPI();
    const { user } = useAPI();

    const filterData = fakeData.filter(apartment => apartment._id === apartmentId)


    // React hook form for extra form validation and error message
    const { register, handleSubmit, reset } = useForm();

    // handle redirected to user booking
    let history = useHistory();
    function handleUserBooking() {
        console.log("redirect here")
        history.push('/myorders');
    }


    const onSubmit = data => {


        axios.post('https://calm-citadel-30522.herokuapp.com/bookingitems', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Data entry successfull');
                    reset();
                }
            })
            .then(() => {
                handleUserBooking();
            });

    }


    return (
        <div>

            {

                !isLoadingData ?
                    <div className="d-flex justify-content-center align-items-center m-3">
                        <div className="container row">

                            <div className="shadow bg-white rounded text-left p-3 col-md-6 col-sm-12">
                                <img src={filterData[0].img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{filterData[0].title}</h5>
                                    <p className="card-text">{filterData[0].description}</p>
                                    <p className="fw-bold">Price: ${filterData[0].price}</p>
                                </div>
                            </div>
                            <div className='mt-3 col-md-6 col-sm-12'>

                                <div className='row'>
                                    <div className='col-md-12'>
                                        <form
                                            onSubmit={handleSubmit(onSubmit)}
                                            className='login-form shadow bg-white rounded text-left p-3'
                                        >
                                            <h4 className='font-weight-bold mb-3'>Place Booking</h4>
                                            <div className='form-group mt-2'>
                                                <input
                                                    className='form-control'
                                                    defaultValue={user.displayName}
                                                    name='name'
                                                    type='text'
                                                    placeholder='Full Name'
                                                    {...register('name', { required: true })}
                                                    required
                                                />
                                                {/* {errors.name && <span className='error'>Name is required</span>} */}
                                            </div>
                                            <div className='form-group mt-2'>
                                                <input
                                                    className='form-control'
                                                    name='email'
                                                    type='email'
                                                    defaultValue={user.email}
                                                    placeholder='Email'
                                                    {...register('email', { required: true })}
                                                    required
                                                />
                                                {/* {errors.email && (
                            <span className='error'>Email is required</span>
                        )} */}
                                            </div>

                                            <div className='form-group mt-2'>
                                                <input
                                                    className='form-control'
                                                    name='Phone Number'
                                                    type='text'
                                                    placeholder='Phone Number'
                                                    {...register('phone', { required: true })}
                                                    required
                                                />
                                            </div>

                                            <div className='form-group mt-2'>
                                                <textarea
                                                    className='form-control'
                                                    name='address'
                                                    placeholder='Address'
                                                    rows='2'
                                                    {...register('address', { required: true })}
                                                    required
                                                ></textarea>

                                            </div>


                                            <div className='form-group mt-2'>
                                                <label for="title">Title</label>

                                                <input
                                                    className='form-control'
                                                    name='title'
                                                    type='text'
                                                    defaultValue={filterData[0].title}
                                                    {...register('title', { required: true })}
                                                    required
                                                />
                                            </div>

                                            <div className='form-group mt-2'>
                                                <label for="title">Image Link</label>

                                                <input
                                                    className='form-control'
                                                    name='image'
                                                    type='text'
                                                    defaultValue={filterData[0].img}
                                                    {...register('img', { required: true })}
                                                    required
                                                />
                                            </div>

                                            <div className='form-group mt-2'>
                                                <button
                                                    style={{ width: '100%' }}
                                                    className='btn btn-primary'
                                                    type='submit'
                                                >
                                                    Place Booking
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                    :
                    // Adding spinner while data loading
                    <div className="d-flex justify-content-center my-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>

            }





        </div>
    );
};

export default Booking;