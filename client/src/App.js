import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {NotFound} from './components/NotFound';
import {Main} from './components/Main';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className='ui container'>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route to='*' component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default App;
