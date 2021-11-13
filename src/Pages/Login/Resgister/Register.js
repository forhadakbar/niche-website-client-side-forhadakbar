import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useAPI } from '../../../Context/apiContext';

const Register = () => {
    const { registerUser, user, isLoading } = useAPI();
    const [error, setError] = useState('');
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    // const handleGoogleLogin = () => {
    //     signInUsingGoogle()
    //         .then(result => {
    //             history.push(redirect_uri);
    //         })

    // }

    // const handleRegistration = e => {
    //     registrationUsingEmail()
    //         .then(result => {
    //             history.push(redirect_uri);
    //         })
    //         .catch((error) => {
    //             setError(error.message);
    //         });

    //     e.preventDefault();

    // }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }





    return (

        <div className="container-fluid bg-light p-5">
            <div className="d-flex justify-content-center">
                <div className="card login-form p-3">
                    <div className="card-body">
                        <h3 className="card-title text-center">Register to ApartmentShark</h3>
                        <div className="card-text">

                            {
                                !error ? '' : <div className="alert alert-danger alert-dismissible fade show" role="alert">{error}</div>
                            }


                            <form onSubmit={handleLoginSubmit}>


                                <div className="form-group mt-3">
                                    <label for="exampleInputEmail1">Your Name</label>
                                    <input onBlur={handleOnBlur} type="text" className="form-control form-control-sm" aria-describedby="emailHelp" placeholder="Your Name" name="name" required />
                                </div>

                                <div className="form-group mt-3">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input onBlur={handleOnBlur} type="email" className="form-control form-control-sm" aria-describedby="emailHelp" placeholder="Your Email" name="email" required />
                                </div>
                                <div className="form-group mt-3">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input onBlur={handleOnBlur} type="password" className="form-control form-control-sm mb-4" id="exampleInputPassword1" placeholder="Your Password" name="password" required />
                                </div>

                                <div className="form-group mt-3">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input onBlur={handleOnBlur} type="password" className="form-control form-control-sm mb-4" id="exampleInputPassword1" placeholder="ReType Your Password" name="password2" required />
                                </div>

                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary mb-3">Create Account</button>
                                </div>
                                <div className="sign-up">
                                    Already have an account? <Link to="/login">Sign in</Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="d-flex justify-content-center mt-3">
                <button onClick={handleGoogleLogin} className="btn btn-warning"><i class="fab fa-google text-success me-3"></i>
                    Sign in with Google</button>

            </div> */}


        </div>
    );
};

export default Register;