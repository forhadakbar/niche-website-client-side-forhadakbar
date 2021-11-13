import React from 'react';
import { Link } from 'react-router-dom';

import notfound from '../../images/404.jpg'
import "./NotFound.css"

const NotFound = () => {
    return (
        <div className="text-center">
            <Link to="/"><button className="mt-3 btn btn-primary">Go Back</button>
            </Link>
            <img src={notfound} alt="" />

        </div>
    );
};

export default NotFound;