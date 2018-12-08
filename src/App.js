import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Providers from './components/Providers'
import Provider from './components/Provider'
import AddProvider from './components/AddProvider'
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
                    <h3>To add a new post, <Link to='/providers/add'>click here</Link>.</h3>
                    <Route path={"/provider/:provider_id"} render={
                        (props) => <Provider {...props} />
                    } />
                    <Switch>
                        <Route path={`/providers/add`} render={props => <AddProvider {...props} />} />
                        <Route exact path='/providers' component={Providers} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App