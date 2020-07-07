import React, {Component} from 'react';
import {Collapse} from 'reactstrap';
import $ from 'jquery';

class Navigation extends Component{

    constructor (props){
        super(props);
        this.state={
            isNavOpen: false,
            typenav: this.props.typenav,
            page: this.props.page
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    componentDidMount(){
        // When the user scrolls the page, execute myFunction
        window.onscroll = function() {myFunction()};

        // Get the navbar
        var navbar = document.getElementById(this.props.typenav);

        // Get the offset position of the navbar
        var sticky = navbar.offsetTop;

        // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } 
            else {
                navbar.classList.remove("sticky");
            }
        }


        //navbar scroll highlighting
        (function(){
            var navlinks =$('nav ul li'),
                navH = $('nav').height(),
                section = $('section'),
                documentl = $(document);
            
                var targetClass ='.' +$('section').attr('class')+'-marker';
                $(targetClass).addClass('active');
            
            documentl.on('scroll', function(){
                var currentScrollPos = documentl.scrollTop()+100;
                section.each(function(){
                    var self = $(this);
                    if ( self.offset().top < (currentScrollPos+navH) && (currentScrollPos +navH) < (self.offset().top +self.outerHeight()) ){
                        var targetClass ='.' +self.attr('class')+'-marker';
                        navlinks.removeClass('active');
                        $(targetClass).addClass('active');
                    }
                });
            });
        
        })();
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){

        return(
            <div className="container-fluid" id="#navigation">
                <nav className="nav nav-sm nav-smol nav-justified d-block d-md-none" id={this.props.typenav}>
                    <button onClick={this.toggleNav} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar" style={{color:'white'}}>
                        <span className="fa fa-bars"></span>
                    </button>
                    <Collapse isOpen={this.state.isNavOpen} id="Navbar">
                        <ul className="navbar-nav menu">
                            <li className="nav-item Home-marker"><a className="nav-link" href="/home">Home</a></li>
                            <li className="nav-item Blog-marker"><a className="nav-link" href="/home#main">Blog</a></li>
                            <li className="nav-item Contact-marker"><a className="nav-link" href="#contact">Contact</a></li>
                            <li className="nav-item About-marker"><a className="nav-link" href="/about">About</a></li>
                        </ul>
                    </Collapse>
                </nav>

                <nav className="nav nav-sm nav-not-sm nav-justified d-none d-md-block d-lg-none">
                    <ul className="navbar-nav">
                        <li className="nav-item Home-marker"><a className="nav-link" href="/home">Home</a></li>
                        <li className="nav-item Blog-marker"><a className="nav-link" href="/home#main">Blog</a></li>
                        <li className="nav-item Contact-marker"><a className="nav-link" href="#contact">Contact</a></li>
                        <li className="nav-item About-marker"><a className="nav-link" href="/about">About</a></li>
                    </ul>
                </nav>
                <nav className="nav nav-sm nav-for-lg nav-justified d-none d-lg-block">
                    <ul className="navbar-nav">
                        <li className="nav-item Home-marker"><a className="nav-link" href="/home">Home</a></li>
                        <li className="nav-item Blog-marker"><a className="nav-link" href="/home#main">Blog</a></li>
                        <li className="nav-item Contact-marker"><a className="nav-link" href="#contact">Contact</a></li>
                        <li className="nav-item About-marker"><a className="nav-link" href="/about">About</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

Navigation.defaultProps={
    typenav: 'alt-nav'
}

export default Navigation;