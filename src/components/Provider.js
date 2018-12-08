import React, { Component } from "react";
import axios from "axios";

class Provider extends Component {
    state = {
        provider: null
    }
    getProvider = async () => {
        const { provider_id } = this.props.match.params
        const res = await axios.get(`/providers/${provider_id}`)
        return res.data.data
    }
    removeProvider = async id => {
        await axios.delete(`/providers/${id}`)
        this.props.history.push('/providers')
    }
    async componentDidMount() {
        const provider = await this.getProvider()
        this.setState({ provider })
    }
    render() {
        const { provider } = this.state;
        if (!provider) return <h2>Loading...</h2>;
        return(
            <div>
                <h2>{provider.properties.name}</h2>
                <p>{provider.properties.about}</p>
                <button onClick={() => this.removeProvider(provider._id)}>Delete Provider</button>
            </div>
        )
    }
}

export default Provider