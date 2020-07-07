import React, {Component} from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';

class Main extends Component {
    
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Redirect to="/home"/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Main;
