import { useHistory } from 'react-router';
import { useAPI } from '../../Context/apiContext';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddNewReview = () => {

    const { user, isLoadingData } = useAPI();


    // React hook form for extra form validation and error message
    const { register, handleSubmit, reset } = useForm();

    // handle redirected to user booking
    let history = useHistory();
    function handleRedirect() {
        console.log("redirect here")
        history.push('/home#reviews');
    }



    const onSubmit = data => {


        axios.post('https://calm-citadel-30522.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    reset();
                }
            })
            .then(() => {
                handleRedirect();

            });



    }



    return (
        <div>

            {

                !isLoadingData ?

                    <div className="row">
                        <Sidebar></Sidebar>
                        <div className="d-flex justify-content-center align-items-center m-3 col-md-8">
                            <div className="container row">

                                <div className='mt-3 col-md-6 col-sm-12'>

                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <form
                                                onSubmit={handleSubmit(onSubmit)}
                                                className='login-form shadow bg-white rounded text-left p-3'
                                            >
                                                <h4 className='font-weight-bold mb-3'>Add a Review</h4>
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
                                                        name='designation'
                                                        placeholder="Company's Name, Designation"
                                                        type='text'
                                                        {...register('designation', { required: true })}
                                                        required
                                                    />
                                                </div>


                                                <div className='form-group mt-2'>
                                                    <textarea
                                                        className='form-control'
                                                        name='detail'

                                                        placeholder='Description'
                                                        {...register('description', { required: true })}
                                                        required
                                                    />
                                                </div>





                                                <div className='form-group mt-2'>
                                                    <button
                                                        style={{ width: '100%' }}
                                                        className='btn btn-primary'
                                                        type='submit'
                                                    >
                                                        Add Review
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
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

export default AddNewReview;

