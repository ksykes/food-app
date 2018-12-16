import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import Map from './Map';

class Providers extends Component {
    state = {
        providers: []
    }
    getProviders = async () => {
        const res = await axios.get('/providers')
        return res.data.data
    }
    async componentDidMount() {
        const providers = await this.getProviders()
        this.setState({ providers })
    }
    render() {
        const { providers } = this.state
        if (!providers) return <h2>Loading...</h2>
        return <div>
            <h2>Providers</h2>
            <ul>
              {this.state.providers.map(provider => (
                <li key={provider._id}>
                  <Link to={`/provider/${provider._id}`}>
                    {provider.properties.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Map providers={this.state.providers} />
            {console.log(this.state.providers)}
          </div>;
    }
}

export default Providers