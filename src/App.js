import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Providers from './components/Providers'
import Provider from './components/Provider'
import AddProvider from './components/AddProvider'
import About from './components/About'

class App extends Component {
    state = {
        user: null
    }
    render() {
        return (
            <Router>
                <div className="App container">
                    <h1><Link to='/' class='text-success'>Food Finder</Link></h1>
                    <h2>Find ethical sources for your groceries or dining out</h2>
                    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                        <ul className="nav">
                            <li className="nav-item">
                                <Link className='nav-link text-light' to='/providers'>Food Sources</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link text-light' to='/providers/add'>Add a Food Source</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route path={"/provider/:provider_id"} render={
                        (props) => <Provider {...props} />
                    } />
                    <Switch>
                        <Route path={`/providers/add`} render={props => <AddProvider {...props} />} />
                        <Route exact path='/providers' component={Providers} />
                    </Switch>
                    <Route exact path='/' component={About} />
                </div>
            </Router>
        );
    }
}

export default App