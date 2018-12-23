import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
// import Map from './Map';

class Providers extends Component {
    constructor() {
        super()
        this.state = {
            providers: [],
            retailers: [],
            bakers: [],
            butchers: [],
            caterers: [],
            coffee: [],
            farms: [],
            meal: [],
            pet: [],
            restaurants: []
        }
    }
    getProviders = async () => {
        const res = await axios.get('/api/providers')
        return res.data.data
    }
    sortProviders = () => {
        this.state.providers.map(provider => {
            console.log(this.state.providers)
            if (provider.properties.category === "Retailer") {
                this.setState({ retailers: [...this.state.retailers, provider] })
            } if (provider.properties.category === "Bakery") {
                this.setState({ bakers: [...this.state.bakers, provider] })
            } if (provider.properties.category === "Butcher") {
                this.setState({ butchers: [...this.state.butchers, provider] })
            } if (provider.properties.category === "Caterer") {
                this.setState({ caterers: [...this.state.caterers, provider] })
            } if (provider.properties.category === "Coffee") {
                this.setState({ coffee: [...this.state.coffee, provider] })
            } if (provider.properties.category === "Farm") {
                this.setState({ farms: [...this.state.farms, provider]})
            } if (provider.properties.category === "Meal Delivery") {
                this.setState({ meal: [...this.state.meal, provider] })
            } if (provider.properties.category === "Pet Food") {
                this.setState({ pet: [...this.state.pet, provider] })
            } if (provider.properties.category === "Restaurant") {
                this.setState({ restaurants: [...this.state.restaurants, provider] })
            }
        })
    }
    async componentDidMount() {
        const providers = await this.getProviders()
        this.setState({ providers }), () => {
            this.sortProviders()
        }
    }
    render() {
        const { providers } = this.state
        if (!providers) return <h2>Loading...</h2>
        return (<div>
            <div className='retailers'>
                <h3>Retailers</h3>
                    {this.state.retailers.length === 0 ? <p>There aren't any retailers in the database right now. Why don't you <Link to='/providers/add'>add one</Link>?</p> :
                        this.state.retailers.map(retailer => (
                            <ul>
                                <li key={retailer._id}>
                                    <Link to={`/provider/${retailer._id}`}>
                                        {retailer.properties.name}
                                    </Link>
                                </li>
                            </ul>
                        ))}
            </div>
            <div className='bakers'>
                <h3>Bakeries</h3>
                    {this.state.bakers.length === 0 ? <p>There aren't any bakeries in the database right now. Why don't you <Link to='/providers/add'>add one</Link>?</p> :
                        this.state.bakers.map(baker => (
                            <ul>
                                <li key={baker._id}>
                                    <Link to={`/provider/${baker._id}`}>
                                        {baker.properties.name}
                                    </Link>
                                </li>
                            </ul>
                        ))}
            </div>
            <div className='butchers'>
                <h3>Butchers</h3>
                    {this.state.butchers.length === 0 ? <p>There aren't any butchers in the database right now. Why don't you <Link to='/providers/add'>add one</Link>?</p> :
                        this.state.butchers.map(butcher => (
                            <ul>
                                <li key={butcher._id}>
                                    <Link to={`/provider/${butcher._id}`}>
                                        {butcher.properties.name}
                                    </Link>
                                </li>
                            </ul>
                        ))}
            </div>
            <div className='caterers'>
                <h3>Caterers</h3>
                    {this.state.caterers.length === 0 ? <p>There aren't any caterers in the database right now. Why don't you <Link to='/providers/add'>add one</Link>?</p> :
                        this.state.caterers.map(caterer => (
                            <ul>
                                <li key={caterer._id}>
                                    <Link to={`/provider/${caterer._id}`}>
                                        {caterer.properties.name}
                                    </Link>
                                </li>
                            </ul>
                        ))}
            </div>
            <div className='coffees'>
                <h3>Coffee Shops</h3>
                    {this.state.coffee.length === 0 ? <p>There aren't any coffee shops in the database right now. Why don't you <Link to='/providers/add'>add one</Link>?</p> :
                        this.state.coffee.map(coffee => (
                            <ul>
                                <li key={coffee._id}>
                                    <Link to={`/provider/${coffee._id}`}>
                                        {coffee.properties.name}
                                    </Link>
                                </li>
                            </ul>
                        ))}
            </div>
            <div className='farms'>
                <h3>Farms</h3>
                    {this.state.farms.length === 0 ? <p>There aren't any farms in the database right now. Why don't you <Link to='/providers/add'>add one</Link>?</p> :
                        this.state.farms.map(farm => (
                            <ul>
                                <li key={farm._id}>
                                    <Link to={`/provider/${farm._id}`}>
                                        {farm.properties.name}
                                    </Link>
                                </li>
                            </ul>
                        ))}
            </div>
            <div className='meals'>
                <h3>Meal Delivery Services</h3>
                    {this.state.meal.length === 0 ? <p>There aren't any meal delivery services in the database right now. Why don't you <Link to='/providers/add'>add one</Link>?</p> :
                        this.state.meal.map(meal => (
                            <ul>
                                <li key={meal._id}>
                                    <Link to={`/provider/${meal._id}`}>
                                        {meal.properties.name}
                                    </Link>
                                </li>
                            </ul>
                        ))}
            </div>
            <div className='pets'>
                <h3>Pet Food</h3>
                    {this.state.pet.length === 0 ? <p>There aren't any pet foods in the database right now. Why don't you <Link to='/providers/add'>add one</Link>?</p> :
                        this.state.pet.map(pet => (
                            <ul>
                                <li key={pet._id}>
                                    <Link to={`/provider/${pet._id}`}>
                                        {pet.properties.name}
                                    </Link>
                                </li>
                            </ul>
                        ))}
            </div>
            <div className='restaurants'>
                <h3>Restaurants</h3>
                    {this.state.restaurants.length === 0 ? <p>There aren't any restaurants in the database right now. Why don't you <Link to='/providers/add'>add one</Link>?</p> :
                        this.state.restaurants.map(restaurant => (
                            <ul>
                                <li key={restaurant._id}>
                                    <Link to={`/provider/${restaurant._id}`}>
                                        {restaurant.properties.name}
                                    </Link>
                                </li>
                            </ul>
                        ))}
            </div>
            {/* <Map providers={this.state.providers}/> */}
          </div>
        )
    }
}

export default Providers