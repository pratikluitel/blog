import React, {Component} from 'react';

class Navigation extends Component{

    render(){

        return(
            <div class="container-fluid" id="#navigation">
                <nav class="nav nav-sm nav-smol nav-justified d-block d-md-none" id="alt-nav">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar" style={{color:'white'}}>
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="Navbar">
                        <ul class="navbar-nav menu">
                            <li class="nav-item"><a class="nav-link" href="/home">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="/home#main">Blog</a></li>
                            <li class="nav-item Contact-marker"><a class="nav-link" href="#contact">Contact</a></li>
                            <li class="nav-item About-marker active"><a class="nav-link" href="/about">About</a></li>
                        </ul>
                    </div>
                </nav>

                <nav class="nav nav-sm nav-not-sm nav-justified d-none d-md-block d-lg-none">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="/home">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="/home#main">Blog</a></li>
                        <li class="nav-item Contact-marker"><a class="nav-link" href="#contact">Contact</a></li>
                        <li class="nav-item About-marker active"><a class="nav-link" href="/about">About</a></li>
                    </ul>
                </nav>
                <nav class="nav nav-sm nav-for-lg nav-justified d-none d-lg-block">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="/home">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="/home#main">Blog</a></li>
                        <li class="nav-item Contact-marker"><a class="nav-link" href="#contact">Contact</a></li>
                        <li class="nav-item About-marker active"><a class="nav-link" href="/about">About</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;