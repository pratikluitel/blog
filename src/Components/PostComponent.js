import React, {Component} from 'react';
import Footer from './FooterComponent';
import Navigation from './NavComponent';
import PostList from './PostsListComponent';

class Post extends Component {
    render(){
        return (
            <>
                <Navigation />
                <PostList /> {/* Replace this with <Content /> or something*/}
                <Footer />
            </>
        );
    }
}

export default Post;
