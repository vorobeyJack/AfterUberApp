import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {NotFound} from './components/NotFound';
import {Header} from './components/Header';
import AddressForm from './containers/AddressForm';

import './App.css';
import {Summary} from "./components/Summary";

class App extends Component {
    render() {
        return (
            <div className='ui container'>
                <Header/>
                <Summary/>
                <AddressForm/>
                <Switch>
                    <Route exact path='/'/>
                    <Route to='*' component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default App;
