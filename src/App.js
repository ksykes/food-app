import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Providers from './components/Providers'
import Provider from './components/Provider'
import AddProvider from './components/AddProvider'
// MATERIAL-UI
import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "./withRoot";

class App extends Component {
    state = {
        user: null
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <h1>Welcome to the foods app</h1>
                    <Button color="primary">OK</Button>
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