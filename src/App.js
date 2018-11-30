import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Providers from './components/Providers'
import Provider from './components/Provider'
import './App.css';

class App extends Component {
    state = {
        user: null
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <h1>Welcome to the foods app</h1>
                    <h3>To see all the providers, <Link to='/providers'>click here</Link>.</h3>
                    <Route exact path='/providers' component={Providers} />
                    <Route path={'/provider/:provider_id'} component={Provider} />
                </div>
            </Router>
        );
    }
}

export default App