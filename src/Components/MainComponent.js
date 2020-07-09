import React, {Component} from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Category from './CategoryComponent';
import Post from './PostComponent';
import categories from '../shared/categories';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';

const HandleCategory = ({match}) => {
    return(
        <Category cat={categories.filter((category)=> category.name === match.params.category)}/>
    );
}
const HandlePost = ({match}) => {
    return(
        <Post cat={categories.filter((category)=> category.name === match.params.category)}
                    post={posts.filter((post)=> post.name === match.params.post)}/>
    );
}

class Main extends Component {

    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/:category" component={HandleCategory} />
                    <Route path="/:category/:title" component={HandlePost} />
                    <Redirect to="/home"/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Main;
