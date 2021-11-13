import React from 'react';

import "./Footer.css"

const Footer = () => {
    return (
        <div>

            <footer>
                <div className="container text-white">
                    <div className="row">
                        <div className="col-md-4 footer-column">
                            <ul className="nav d-flex flex-column justify-content-start">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home">Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/prices">Prices</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home">Plans & Prices</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home"> Frequently asked questions</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 footer-column">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home">Company</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home">Job postings</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home">News and articles</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 footer-column ">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home">Contact & Support</a>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link text-white"><i className="fas fa-phone"></i> +47 45 80 80 80</span>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home"><i className="fas fa-comments"></i> Live chat</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home"><i className="fas fa-envelope"></i> Contact us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home"><i className="fas fa-star"></i> Give feedback</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center"><i className="fas fa-ellipsis-h"></i></div>

                    <div className="row text-center">
                        <div className="col-md-4 box">
                            <span className="copyright quick-links">Copyright &copy; Your Website <script>document.write(new Date().getFullYear())</script>
                            </span>
                        </div>
                        <div className="col-md-4 box">
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="/home">
                                        <i className="fab fa-twitter  text-white"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/home">
                                        <i className="fab fa-facebook-f  text-white"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/home">
                                        <i className="fab fa-linkedin-in  text-white"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;