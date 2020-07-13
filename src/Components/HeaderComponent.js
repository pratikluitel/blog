import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'

function Header({image}){
    console.log(image)
    return(
        <section className="Home">
            <div className="jumbotron vertical-center" id="#home">
                <div className="bgim">
                    <Img fluid={image} alt="man staring at a peculiar cloud" style={{width:'100%', height:'100%',objectFit:'cover'}}/>
                    {/* <img src="/img/personal/jumbotron.jpeg" alt="man staring at a peculiar cloud" style={{width:'100%', height:'100%',objectFit:'cover'}}/> */}
                </div>
                <div className="overlay"></div>
                <div className="container" id="hd-jumbo">
                    <div className="row row-header text-center" >
                        <div className="col-12">
                            <h2 style={{color:"#ffffff"}}><strong>Pratik Luitel</strong></h2>
                        </div>
                        <div className="col-12 d-none d-sm-block">
                            <hr style={{ width: 300+'px'}} />
                        </div>
                        <div className="col-12 d-block d-sm-none">
                            <hr style={{ width:90+'%', borderTop: '1px solid #8bcbc9'}} />
                        </div>
                        <div className="col-12">
                            <h5 style={{color:"#ffffff"}}>Former Child, Aspiring Adult</h5>
                        </div>
                        <div className="col-12">
                            <br/>
                        </div>
                        <div className="col-12">
                            <h4>
                                <Link to="#main">
                                    <button className="btn btn-secondary">
                                        <span className="fa fa-angle-double-down" style={{ fontSize: 'large' }}>
                                        </span>
                                    </button>
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;