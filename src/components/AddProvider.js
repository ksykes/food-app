import React, { Component } from 'react'
import axios from 'axios'

class AddProvider extends Component {
    state = {
            name: '',
            certification: '',
            products: [],
            tours: false,
            pos: false,
            about: '',
            email: '',
            phone: '',
            website: '',
            socialMedia: [],
            geometry: {
                coordinates: []
            }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        try {
            const properties = this.state
            await axios.post('/providers', { properties })
            this.props.history.push('/providers')
        } catch(e) {
            console.error(e)
        }
    }

    render() {
        return (
            <div>
                <h3>Add Provider</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input onChange={this.handleChange} type='text' name='name' id='name' placeholder="Enter the provider's name"/>
                    <label htmlFor='about'>Description</label>
                    <input onChange={this.handleChange} type='textarea' name='about' id='about'/>
                    <fieldset>
                        <label>Contact Information</label>
                        <label htmlFor='address'>Address</label>
                        <input onChange={this.handleChange} type='number' name='coordinates' id='coordinates'/>
                        <label htmlFor='phone'>Phone Number</label>
                        <input onChange={this.handleChange} type='tel' name='phone' id='phone'/>
                        <label htmlFor='email'>Email</label>
                        <input onChange={this.handleChange} type='email' name='email' id='email'/>
                        <label htmlFor='website'>Website</label>
                        <input onChange={this.handleChange} type='text' name='website' id='website'/>
                        <label htmlFor='facebook'>Facebook</label>
                        <input onChange={this.handleChange} type='text' name='facebook' id='facebook'/>
                        <label htmlFor='twitter'>Twitter</label>
                        <input onChange={this.handleChange} type='text' name='twitter' id='twitter' />
                        <label htmlFor='instagram'>Instagram</label>
                        <input onChange={this.handleChange} type='text' name='instagram' id='instagram' />
                    </fieldset>
                    <fieldset>
                        <label>
                            <input onChange={this.handleChange} type='checkbox' name='certification'/>USDA Organic
                        </label>
                        <label>
                            <input onChange={this.handleChange} type='checkbox' name='certification' />Canada Organic
                        </label>
                    </fieldset>
                    <fieldset>
                        <label>Are tours available?</label>
                        <label>
                            <input onChange={this.handleChange} type='radio' name='tours' />Yes
                        </label>
                        <label>
                            <input onChange={this.handleChange} type='radio' name='tours' />No
                        </label>
                    </fieldset>
                    <fieldset>
                        <label>Can products be purchased on-site?</label>
                        <label>
                            <input onChange={this.handleChange} type='radio' name='pos' />Yes
                        </label>
                        <label>
                            <input onChange={this.handleChange} type='radio' name='pos' />No
                        </label>
                    </fieldset>
                    <input onChange={this.handleChange} type='submit' value='Add Provider'/>
                </form>
            </div>
        )
    }
}

export default AddProvider