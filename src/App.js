import React from 'react';

import Navbar from './components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchPage from './components/SearchPage';
import AlbumPage from './components/AlbumPage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/album/:Id">
                        <AlbumPage />
                    </Route>
                    <Route exact path="/">
                        <SearchPage />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
