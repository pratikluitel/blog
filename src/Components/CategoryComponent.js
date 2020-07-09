import React, {Component} from 'react';
import Footer from './FooterComponent';
import Navigation from './NavComponent';
import PostList from './PostsListComponent';

class Category extends Component {
    render(){
        return (
            <>
                <h1>{JSON.stringify(this.props.cat)}</h1>
                <Navigation />
                <PostList />
                <Footer />
            </>
        );
    }
}

export default Category;
