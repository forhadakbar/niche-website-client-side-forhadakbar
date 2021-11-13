import React from 'react';
import Sidebar from '../Sidebar/Sidebar';


const Dashboard = () => {
    return (
        <div className="row container-fluid p-0">

            <Sidebar></Sidebar>

            <div className="container-fluid col-md-10">

                {/* <!-- Main component for a primary marketing message or call to action --> */}
                <div className="jumbotron">
                    <h1>Your Dashboard</h1>
                    <p>Click on the side bar to navigate...</p>
                </div>

            </div>
        </div>


    );
};

export default Dashboard;