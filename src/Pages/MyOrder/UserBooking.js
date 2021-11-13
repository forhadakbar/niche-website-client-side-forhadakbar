const UserBooking = (props) => {
    // Receive props from UserDashboard Component
    const { title, _id, img } = props.booking;

    // const [booking, setBooking] = useState([props.booking])


    // Delete task when user click on delete and call handleDeleteUpdate
    const deleteBooking = (id) => {
        fetch(`https://calm-citadel-30522.herokuapp.com/deleteBooking/${_id}`, {
            method: 'delete',
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                if (result.deletedCount) {
                    alert("Deleted Successfullly")
                }
            });


    };

    return (

        <div className='col-md-6'>
            <div className='card mb-3'>
                <div className='card-body p-2'>
                    <div className='row'>
                        <div className='col-md-5 col-lg-3 col-xl-3'>
                            <div className='mb-3 mb-md-0'>
                                {/* Show image */}
                                <img className='img-fluid w-100 h-100' src={img} alt={title} />
                            </div>
                        </div>
                        <div className='col-md-7 col-lg-9 col-xl-9'>
                            <div className='d-flex justify-content-between mt-2'>
                                <div>
                                    {/* Show booking title */}
                                    <h5>{title}</h5>
                                    <p className='mb-3'>
                                    </p>
                                </div>

                                <div>
                                    <div className='mb-0'>
                                        {/* Call Delete function to cancel task*/}
                                        <button
                                            onClick={() => deleteBooking(_id)}
                                            className='btn btn-sm btn-danger'
                                        >

                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserBooking;