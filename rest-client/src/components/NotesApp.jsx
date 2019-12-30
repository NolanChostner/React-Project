import React, { Component } from 'react';
import Login from './Login';
import Notes from './Notes';
import BadRoute from './BadRoute';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class NotesApp extends Component {
    render() {
        return (
            <Router>
                <Header></Header>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/notes/:name" component={Notes} />
                    <Route component={BadRoute} />
                </Switch>
            </Router>
        )
    }
}

export default NotesApp;