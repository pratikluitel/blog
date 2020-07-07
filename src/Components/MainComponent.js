import React, {Component} from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Category from './CategoryComponent';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';

class Main extends Component {
    
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/stories" component={Category} />
                    <Route path="/poems" component={Category}/>
                    <Route path="/essays" component={Category}/>
                    <Redirect to="/home"/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Main;
