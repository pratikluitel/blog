import React, {Component} from 'react';
import Footer from './FooterComponent';
import Navigation from './NavComponent';
import PostList from './PostsListComponent';

class Category extends Component {
    render(){
        return (
            <>
                <Navigation />
                <PostList />
                <Footer />
            </>
        );
    }
}

export default Category;
