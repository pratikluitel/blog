import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Navigation from './NavComponent';

class Home extends Component {
    
    render(){
        return (
            <>
              <Header />
              <Navigation />
              <Footer />
            </>
        );
    }
}

export default Home;
