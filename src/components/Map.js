import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactMapGL, { Marker, Popup, NavigationControl } from 'react-map-gl'
import Pin from './Pin'
import ProviderInfo from './ProviderInfo'

const TOKEN = 'pk.eyJ1Ijoia2FpdHN5a2VzIiwiYSI6ImNqcG90cjVwcDAwYXU0MnFsbWdkN2R4dmYifQ.BPx-JuwLTEwusYuoupitZg'

const navStyle= {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
}

class Map extends Component {
    state = {
        viewport: {
            latitude: 43.707620,
            longitude: -79.512000,
            zoom: 8,
            bearing: 0,
            pitch: 0,
            width: 500,
            height: 500
        },
        popupInfo: null
    }

    componentDidMount() {
    }

    renderPopup() {
        const { popupInfo } = this.state
        return popupInfo && (
            <Popup
                tipSize={5}
                anchor="top"
                longitude={43.707620}
                latitude={-79.512000}
                closeOnClick={false}
                // onClose={() => this.setState({ popupInfo: null })}
            >
                <ProviderInfo info={popupInfo} />
            </Popup>
        )
    }

    updateViewport = (viewport) => {
        this.setState({ viewport });
    }

    render() {
        const providers = this.props.providers
        return (
            <ReactMapGL
                {...this.state.viewport}
                onViewportChange={this.updateViewport}
                mapboxApiAccessToken={TOKEN}
            >
                <div className='nav' style={navStyle}>
                    <NavigationControl onViewportChange={this.updateViewport} />
                </div>
                <div className='markers'>
                    {providers.map((provider) => 
                        <Marker 
                            key={provider._id}
                            latitude={provider.properties.geometry.coordinates[0]}
                            longitude={provider.properties.geometry.coordinates[1]}
                        >
                            <Pin size={20} onClick={() => this.setState(
                                { popupInfo: provider }, 
                                this.renderPopup()
                            )} />
                        </Marker>
                    )}
                </div>
            </ReactMapGL>
        )
    }
}

export default Map