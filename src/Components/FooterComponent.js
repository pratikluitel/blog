import React from 'react';

function Footer({contact}){
    return(
        <section className="Contact">
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
                                            <a href={contact.pos_1.url} target="_blank" rel="noopener noreferrer">
                                            &#8239;<span className={`fa fa-${contact.pos_1.font}`}></span>&emsp;&emsp;<span style={{textTransform:'capitalize'}}>{contact.pos_1.type}</span></a>
                                        </li>
                                        <li>
                                        <a href={contact.pos_3.url} target="_blank" rel="noopener noreferrer">
                                            &#8239;&#8239;<span className={`fa fa-${contact.pos_3.font}`}></span>&emsp;&emsp;<span style={{textTransform:'capitalize'}}>{contact.pos_3.type}</span></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col col-sm">
                                    <ul>
                                        <li>
                                            <a href={contact.pos_4.url} target="_blank" rel="noopener noreferrer">
                                            &#8239;&#8239;<span className={`fa fa-${contact.pos_4.font}`}></span>&emsp;&emsp;<span style={{textTransform:'capitalize'}}>{contact.pos_4.type}</span></a>
                                        </li>
                                        <li>
                                            <a href={contact.pos_5.url} target="_blank" rel="noopener noreferrer">
                                            &#8239;&#8239;<span className={`fa fa-${contact.pos_5.font}`}></span>&emsp;&emsp;<span style={{textTransform:'capitalize'}}>{contact.pos_5.type}</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </div>
                    <br/>
                    <div className="row row-content justify-content-center">
                        <p style={{fontSize:'small'}}>Built with <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer"><u>GatsbyJs</u></a> and some <a href="https://graphql.org/" target="_blank" rel="noopener noreferrer"><u>GraphQL</u></a></p>
                    </div>
                    <div className="row row-content justify-content-center">
                        <p style={{fontSize:'x-small'}}>This project is also on <a href="https://www.github.com/pratikluitel/site-meta" target="_blank" rel="noopener noreferrer"><u>Github</u></a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;