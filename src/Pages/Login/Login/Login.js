import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useAPI } from '../../../Context/apiContext';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, error } = useAPI();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }


    return (

        <div className="container-fluid bg-light p-5">
            <div className="d-flex justify-content-center">
                <div className="card login-form p-3">
                    <div className="card-body">
                        <h3 className="card-title text-center fw-bold">Log in to ApartmentShark</h3>
                        <div className="card-text">

                            {
                                !error ? '' : <div className="alert alert-danger alert-dismissible fade show" role="alert">{error}</div>
                            }
                            <form onSubmit={handleLoginSubmit}>

                                <div className="form-group mt-3">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input onBlur={handleOnBlur} type="email" className="form-control form-control-sm" aria-describedby="emailHelp" name="email" required />
                                </div>
                                <div className="form-group mt-3">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input onBlur={handleOnBlur} type="password" className="form-control form-control-sm mb-2" name="password" required />
                                    <a href="/" >Forgot password?</a>
                                </div>

                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary my-3">Sign in</button>
                                </div>

                                <div className="sign-up">
                                    Don't have an account? <Link to="/register">Create One</Link>
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

export default Login;