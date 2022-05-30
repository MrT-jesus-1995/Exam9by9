import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/aboutus'>About Us</Link></li>
                            <li><Link to='/menu'>Menu</Link></li>
                            
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Contract</h5>
                        <address>
                        89425-74X, Andromeda<br />
                        Taodhr'vhurh nebula, Z'oxe<br />
                        CTIOTLOR<br />
                        <i className="fa fa-phone fa-lg"></i>: +086-371-XXXX<br />
                        <i className="fa fa-steam fa-lg"></i>:<a href="https://s.team/p/cphd-gkqh/GWVWRRQM">Інженерія</a><br />
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:livemlg1995@gmail.com">
                            livemlg1995@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-github" href="https://github.com/"><i className="fa fa-github"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon btn-reddit" href="https://www.reddit.com/"><i className="fa fa-reddit-square"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright 42069 DANSER AU SOLEIL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
