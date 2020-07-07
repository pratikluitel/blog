import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Navigation from './NavComponent';

class Home extends Component {
    render(){
        return (
            <>
                <Navigation typenav='nav'/>
                <Header />
                <Footer />
            </>
        );
    }
}

export default Home;
