import React from 'react';

function Header(){
    return(
        <section className="Home">
            <div className="jumbotron vertical-center" id="#home">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row row-header text-center" id="hd-jumbo">
                        <div className="col-12">
                            <h2><strong>Pratik Luitel</strong></h2>
                        </div>
                        <div className="col-12 d-none d-sm-block">
                            <hr style={{ width: 300+'px'}} />
                        </div>
                        <div className="col-12 d-block d-sm-none">
                            <hr style={{ width:90+'%'}} />
                        </div>
                        <div className="col-12">
                            <h5>Former Child, Aspiring Adult</h5>
                        </div>
                        <div className="col-12">
                            <br/>
                        </div>
                        <div className="col-12">
                            <h4>
                                <a href="#main">
                                    <button className="btn btn-secondary">
                                        <span className="fa fa-angle-double-down" style={{ fontSize: 'large' }}>
                                        </span>
                                    </button>
                                </a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;