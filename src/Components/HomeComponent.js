import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Navigation from './NavComponent';
import $  from 'jquery';

class Home extends Component {
    
    render(){
        return (
            <>
                <Navigation />
                <Header />
                <Footer />
            </>
        );
    }
}

export default Home;
