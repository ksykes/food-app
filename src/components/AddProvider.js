import React, { Component } from 'react'
import axios from 'axios'

class AddProvider extends Component {
    state = {
        name: '',
        certification: [],
        products: [],
        tours: false,
        pos: false,
        about: '',
        email: '',
        phone: '',
        website: '',
        socialMedia: [],
        category: '',
        geometry: {
            coordinates: []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChangeArray = (e) => {
        const val = e.target.value;
        if (e.target.checked === true) {
            console.log(e.target.value)
            this.setState({
                certification: [...this.state.certification, val]
            })

        } if (e.target.checked === false) {
            const filterArr = this.state.certification.filter(word => {
                return word !== val
            })
            this.setState({
                certification: filterArr
            })
            console.log('we not checked');
        }
    }

    handleSubmit = async e => {
        e.preventDefault()
        // const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding')
        // const geocodingClient = mbxGeocoding({ accessToken: 'TOKEN' })
        // /geocoding/v5/{endpoint}/{search_text}.json
        // geocodingClient
        //     .forwardGeocode({
        //         query: {},
        //         countries: ['ca']
        //     })
        //     .send()
        //     .then(response => {
        //         const match = response.body
        //     })
        try {
            const properties = this.state
            await axios.get('')
            await axios.post('/api/providers', { properties })
            this.props.history.push('/providers')
        } catch (e) {
            console.error(e)
        }
    }

    render() {
        return (
            <div>
                <h3>Add Provider</h3>
                <form onSubmit={this.handleSubmit}>
                    {/* PROVIDER NAME */}
                    <label htmlFor='name'>Name</label>
                    <input onChange={this.handleChange} type='text' name='name' id='name' placeholder="Enter the provider's name" />
                    {/* PROVIDER DESCRIPTION */}
                    <label htmlFor='about'>Description</label>
                    <input onChange={this.handleChange} type='textarea' name='about' id='about' />
                    {/* PROVIDER CONTACT INFORMATION */}
                    <fieldset>
                        <label>Contact Information</label>
                        <label htmlFor='address'>Address</label>
                        <input onChange={this.handleChange} type='number' name='coordinates' id='coordinates' />
                        <label htmlFor='phone'>Phone Number</label>
                        <input onChange={this.handleChange} type='tel' name='phone' id='phone' />
                        <label htmlFor='email'>Email</label>
                        <input onChange={this.handleChange} type='email' name='email' id='email' />
                        <label htmlFor='website'>Website</label>
                        <input onChange={this.handleChange} type='text' name='website' id='website' />
                        <label htmlFor='facebook'>Facebook</label>
                        <input onChange={this.handleChange} type='text' name='facebook' id='facebook' />
                        <label htmlFor='twitter'>Twitter</label>
                        <input onChange={this.handleChange} type='text' name='twitter' id='twitter' />
                        <label htmlFor='instagram'>Instagram</label>
                        <input onChange={this.handleChange} type='text' name='instagram' id='instagram' />
                    </fieldset>
                    {/* PROVIDER CERTIFICATIONS */}
                    <fieldset>
                        <label>
                            <input onChange={this.handleChangeArray} type='checkbox' name='certification' id='usda' value='usda' />USDA Organic
                        </label>
                        <label>
                            <input onChange={this.handleChangeArray} type='checkbox' name='certification' id='canada' value='canada'/>Canada Organic
                        </label>
                    </fieldset>
                    {/* PROVIDER TOURS */}
                    <fieldset>
                        <label>Are tours available?</label>
                        <label>
                            <input onChange={this.handleChange} type='radio' name='tours' value='true' />Yes
                        </label>
                        <label>
                            <input onChange={this.handleChange} type='radio' name='tours' value='false' />No
                        </label>
                    </fieldset>
                    {/* PROVIDER POINT OF SALE */}
                    <fieldset>
                        <label>Can products be purchased on-site?</label>
                        <label>
                            <input onChange={this.handleChange} type='radio' name='pos' value='true' />Yes
                        </label>
                        <label>
                            <input onChange={this.handleChange} type='radio' name='pos' value='false' />No
                        </label>
                    </fieldset>
                    {/* PROVIDER CATEGORY */}
                    <label htmlFor="category">What type of provider is this?</label>
                    <select id="category" name="category" onChange={this.handleChange}>
                        <option value="retailer">Retailer</option>
                        <option value="bakery">Bakery</option>
                        <option value="butcher">Butcher</option>
                        <option value="caterer">Caterer</option>
                        <option value="coffee">Coffee</option>
                        <option value="farmer">Farmer</option>
                        <option value="mealdelivery">Meal Delivery</option>
                        <option value="petfood">Pet Food</option>
                        <option value="restaurant">Restaurant</option>
                    </select>
                    {/* PROVIDER PRODUCTS */}
                    <label htmlFor="products">What type of products are available?</label>

                    <input onChange={this.handleChange} type='submit' value='Add Provider' />
                </form>
            </div>
        )
    }
}

export default AddProvider