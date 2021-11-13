import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');

    const [success, setSuccess] = useState(false);

    const handleonBlur = e => {
        setEmail(e.target.value);
    }



    const handleAdminSubmit = e => {

        const user = { email }

        fetch('https://calm-citadel-30522.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true)
                }

            })
        e.preventDefault()
    }


    return (
        <div className="row">

            <Sidebar></Sidebar>

            <form className="col-md-10 p-5" onSubmit={handleAdminSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1" className="my-3">Email address</label>
                    <input type="email" className="form-control w-50" aria-describedby="emailHelp" placeholder="Enter email" onBlur={handleonBlur} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <button type="submit" className="btn btn-primary my-3">Make Admin</button>

                {
                    success && <Alert>Admin was added successfully</Alert>

                }
            </form>

        </div>
    );
};

export default MakeAdmin;