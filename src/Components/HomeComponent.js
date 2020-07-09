import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Navigation from './NavComponent';
import PostList from './PostsListComponent';

class Home extends Component {
    render(){
        return (
            <>
                <Navigation typenav='nav'/>
                <Header />
                <PostList />
                <Footer />
            </>
        );
    }
}

export default Home;
