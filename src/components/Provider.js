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
    async componentDidMount() {
        const provider = await this.getProvider()
        console.log(provider)
        this.setState({ provider })
    }
    render() {
        console.log('hello>')
        const { provider } = this.state;
        if (!provider) return <h2>Loading...</h2>;
        return(
            <div>
                <h2>{provider.name}</h2>
                <p>{provider.about}</p>
            </div>
        )
    }
}

export default Provider