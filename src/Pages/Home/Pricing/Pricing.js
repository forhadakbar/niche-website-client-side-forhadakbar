import React from 'react';

import "./Pricing.css"

const Pricing = () => {
    return (
        <div id="pricing">


            <section className="price-sec">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row ptables-head">
                            <h1 className="text-center">Our Pricing: Best in the Market</h1>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 price-table">
                                <div className="card text-center">
                                    <div className="title">
                                        <i class="fas fa-laptop-house"></i>
                                        <h2>Pro</h2>
                                    </div>
                                    <div className="price">
                                        <h4><sup>$</sup>59.95</h4>
                                    </div>
                                    <div className="option">
                                        <ul>
                                            <li><i className="fa fa-check"></i>Apartment Report</li>
                                            <li><i className="fa fa-check"></i> Apartment Photo</li>
                                            <li><i className="fa fa-check"></i> Apartment Seacrh</li>
                                            <li><i className="fa fa-times"></i> Pre-foreclosures</li>
                                        </ul>
                                    </div>
                                    <a className="a-tag" href="#">Order Now</a>
                                </div>
                            </div>

                            <div className="col-sm-4 price-table">
                                <div className="card text-center">
                                    <div className="title">
                                        <i class="far fa-building"></i>
                                        <h2>Elite</h2>
                                    </div>
                                    <div className="price">
                                        <h4><sup>$</sup>79.95</h4>
                                    </div>
                                    <div className="option">
                                        <ul>
                                            <li><i className="fa fa-check"></i> Apartment Report</li>
                                            <li><i className="fa fa-check"></i> Mailing List</li>
                                            <li><i className="fa fa-check"></i> Market Report</li>
                                            <li><i className="fa fa-times"></i> Pre-foreclosures Support</li>
                                        </ul>
                                    </div>
                                    <a className="a-tag" href="#">Order Now</a>
                                </div>
                            </div>

                            <div className="col-sm-4 price-table">
                                <div className="card text-center">
                                    <div className="title">
                                        <i class="fas fa-house-user"></i>
                                        <h2>Platinum</h2>
                                    </div>
                                    <div className="price">
                                        <h4><sup>$</sup>169.95</h4>
                                    </div>
                                    <div className="option">
                                        <ul>
                                            <li><i className="fa fa-check"></i> Indepath Apartment Report</li>
                                            <li><i className="fa fa-check"></i> Verified Apartment Owner</li>
                                            <li><i className="fa fa-check"></i> 20 Pictures of the Apartment</li>
                                            <li><i className="fa fa-check"></i> Professional Support</li>
                                        </ul>
                                    </div>
                                    <a className="a-tag" href="#">Order Now</a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;