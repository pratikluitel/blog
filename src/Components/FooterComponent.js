import React from 'react';

function Footer(){
    return(
        <div className="Contact">
            <div className="footer" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-8 offset-sm-2">
                            <div className="row row-header justify-content-center">
                                <h1 style={{color:'white'}}>Links</h1>
                            </div>
                            <hr/>
                            <div className="row row-content" id="contactlinks">
                                <div className="col-12 col-sm-6">
                                    <ul>
                                        <li>
                                            <a href="mailto:pluitel11@gmail.com" target="_blank">
                                                <span className="fa fa-envelope"></span>&emsp;&emsp;Gmail</a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/pratik-luitel-639a58175/" target="_blank">
                                                <span className="fa fa-linkedin"></span>&emsp;&emsp;
                                                Linkedin</a>
                                        </li>
                                        <li>
                                            <a href="https://www.goodreads.com/user/show/54605032-pratik-luitel" target="_blank">
                                                <span className="icon-stack">
                                                    <i className="icon-sign-blank icon-stack-base"></i>
                                                    <i className="icon-light">
                                                        <span style={{
                                                            fontFamily:'helvetica', 
                                                            fontSize: 'x-large'
                                                    }}>g</span></i>
                                                </span>&emsp;&emsp;&#8239;&#8239;
                                                Goodreads</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col col-sm">
                                    <ul>
                                        <li>
                                            <a href="https://www.github.com/pratikluitel" target="_blank">
                                                <span className="fa fa-github"></span>&emsp;&emsp;&#8239;Github</a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com/pratikHluitel" target="_blank">
                                                <span className="fa fa-twitter"></span>&emsp;&emsp;&#8239;Twitter</a>
                                        </li>
                                        <li>
                                            <a href="https://soundcloud.com/pratik_luitel" target="_blank">
                                                <span className="fa fa-soundcloud"></span>&emsp;&#8239;
                                                Soundcloud</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </div>
                    <br/>
                    <div className="row row-content justify-content-center">
                        <p>&#169; Pratik Luitel, 2020</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;