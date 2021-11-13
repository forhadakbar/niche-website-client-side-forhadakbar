import { useEffect, useState } from 'react';
import { useAPI } from '../../Context/apiContext';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import UserBooking from './UserBooking';

const MyOrders = () => {

    const { user } = useAPI();

    // Set state for loggedInUser:
    const [userBookings, setUserBookings] = useState([]);


    // Dynamically filter loggedInUser data from API:
    useEffect(() => {
        fetch(
            'https://calm-citadel-30522.herokuapp.com/myorders?email=' +
            user.email,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setUserBookings(data);
                // setPreLoaderVisibility('none');
            });
    }, [user.email]);


    return (


        <div className="row">
            <Sidebar></Sidebar>
            <div className='container mt-5 col-md-8'>
                <h4 className='text-center mb-4'>
                    You've {userBookings.length} Booking
                </h4>

                <div className='row'>
                    {/* <PreLoader visibility={preLoaderVisibility} /> */}

                    {userBookings.map((booking) => (
                        <UserBooking
                            key={booking._id}
                            booking={booking}
                        />
                    ))}
                </div>

            </div >

        </div>




    );
};

export default MyOrders;
