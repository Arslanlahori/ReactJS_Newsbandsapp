import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container d-flex flex-column">
                <div className="row">
                    <div className="col-md-4">
                        <h4>News Bang</h4>
                        <p>
                            Welcome to News Bang, your one-stop destination for the latest news and updates from around the world. At News Bang, we believe that access to accurate and up-to-date information is a fundamental right. That's why we've created a platform where you can stay informed about the most significant events, trends, and stories happening globally, all at your fingertips.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/business">Bussiness</Link>
                            </li>
                            <li>
                                <Link to="/entertainment ">Entertainment</Link>
                            </li>
                            <li>
                                <Link to="/health">Health</Link>
                            </li>
                            <li>
                                <Link to="/science">Science</Link>
                            </li>
                            <li>
                                <Link to="/sports">Sports</Link>
                            </li>
                            <li>
                                <Link to="/technology">Technology</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Contact Us</h4>
                        <address>
                            <p>
                                Tariq Road Street,Lahore Cantt,Pakistan
                                <br />
                                Email: arslanansari786.iu@gmail.com
                                <br />
                                Phone: 03474253635
                            </p>
                        </address>
                    </div>
                </div>
            </div>
            <div className="text-center py-3 mt-auto">
                &copy; {new Date().getFullYear()} News Bang. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
