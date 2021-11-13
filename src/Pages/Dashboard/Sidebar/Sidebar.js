import { Link } from 'react-router-dom';
import './Sidebar.css';
import { useAPI } from '../../../Context/apiContext';

const Sidebar = () => {
    // Admin context from App.js

    const { logOut, admin } = useAPI();


    return (
        <div className='sidebar d-flex flex-column justify-content-between py-5 px-4 col-md-2'>

            <ul className='list-unstyled'>


                {admin ? (
                    <>



                        <li>
                            <Link to='/addnewapartment' className='text-dark'>
                                <i class="fas fa-plus"></i> <span>Add A Apartment</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/allorders' className='text-dark'>
                                <i class="fas fa-building"></i> <span>Manage All Apartment</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/makeadmin' className='text-dark'>
                                <i class="fas fa-user-plus"></i> <span>Make Admin</span>
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/pay' className='text-dark'>
                                <i class="fas fa-dollar-sign"></i> <span>Pay</span>
                            </Link>
                        </li>

                        <li>
                            <Link to='/myorders' className='text-dark'>
                                <i class="fas fa-building"></i> <span>My Apartment</span>
                            </Link>
                        </li>

                        <li>
                            <Link to='/addreview' className='text-dark'>
                                <i class="fas fa-comments"></i> <span>Add Review</span>
                            </Link>
                        </li>
                    </>
                )}

                <li>
                    <Link to='/profile' className='text-dark'>
                        <i class="fas fa-user"></i> <span>Your Profile</span>
                    </Link>
                </li>

                <li>
                    <button onClick={logOut} className="btn btn-danger w-100"><i class="fas fa-sign-out-alt"></i> Sign Out</button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;