import React, {Component} from 'react';
import {Nav, Collapse} from 'reactstrap';

class Navigation extends Component{

    constructor (props){
        super(props);
        this.state={
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){

        return(
            <div className="container-fluid" id="#navigation">
                <nav className="nav nav-sm nav-smol nav-justified d-block d-md-none" id="alt-nav">
                    <button onClick={this.toggleNav} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar" style={{color:'white'}}>
                        <span className="fa fa-bars"></span>
                    </button>
                    <Collapse isOpen={this.state.isNavOpen} id="Navbar">
                        <ul className="navbar-nav menu">
                            <li className="nav-item"><a className="nav-link" href="/home">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="/home#main">Blog</a></li>
                            <li className="nav-item Contact-marker"><a className="nav-link" href="#contact">Contact</a></li>
                            <li className="nav-item About-marker"><a className="nav-link" href="/about">About</a></li>
                        </ul>
                    </Collapse>
                </nav>

                <nav className="nav nav-sm nav-not-sm nav-justified d-none d-md-block d-lg-none">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="/home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/home#main">Blog</a></li>
                        <li className="nav-item Contact-marker"><a className="nav-link" href="#contact">Contact</a></li>
                        <li className="nav-item About-marker"><a className="nav-link" href="/about">About</a></li>
                    </ul>
                </nav>
                <nav className="nav nav-sm nav-for-lg nav-justified d-none d-lg-block">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="/home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/home#main">Blog</a></li>
                        <li className="nav-item Contact-marker"><a className="nav-link" href="#contact">Contact</a></li>
                        <li className="nav-item About-marker"><a className="nav-link" href="/about">About</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;