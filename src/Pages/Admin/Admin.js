// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useAPI } from '../../Context/apiContext';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
// ==============================================================================

const Admin = () => {
    // This is table showed in the Admin Dashboard with List of user and booking

    // Context API
    // const { user } = useAPI();

    const { bookings } = useAPI();



    // Delete task when user click on delete button and update the dashboard
    const deleteTaskAdmin = (_id) => {
        fetch(`https://calm-citadel-30522.herokuapp.com/deleteTask/${_id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.deletedCount) {
                    alert("Deleted Successfullly")
                    // props.handleDeleteUpdate();
                }
            });
    };

    let serialNo = 1;

    return (
        <div className="row">

            <Sidebar></Sidebar>

            <div className="col-md-10">
                <h3 className="text-center my-2">Manage All Apartment</h3>
                <div className='table-responsive'>
                    <table className='table table-borderless table-hover bg-white rounded my-4'>
                        <thead className='thead-light'>
                            <tr>
                                <th className='text-secondary text-left' scope='col'>
                                    #
                                </th>
                                <th className='text-secondary' scope='col'>
                                    Name
                                </th>
                                <th className='text-secondary' scope='col'>
                                    Email ID
                                </th>
                                <th className='text-secondary' scope='col'>
                                    Booking Title
                                </th>
                                <th className='text-secondary' scope='col'>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (
                                <tr key={booking._id}>
                                    <td>{serialNo++}</td>
                                    <td>{booking.name}</td>
                                    <td>{booking.email}</td>
                                    <td>{booking.title}</td>

                                    <td>
                                        <button
                                            onClick={() => deleteTaskAdmin(booking._id)}
                                            className='btn btn-danger'
                                        >
                                            {' '}
                                            <i class="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Admin;
