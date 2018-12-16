import React, { Component } from 'react'
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl'

const TOKEN = 'pk.eyJ1Ijoia2FpdHN5a2VzIiwiYSI6ImNqcG90cjVwcDAwYXU0MnFsbWdkN2R4dmYifQ.BPx-JuwLTEwusYuoupitZg'

const navStyle= {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
}

class Map extends Component {
    state = {
        providers: [],
        viewport: {
            latitude: 37.785164,
            longitude: -122.41,
            zoom: 8,
            bearing: 0,
            pitch: 0,
            width: 500,
            height: 500
        }
    }

    async componentDidMount() {
        const providers = await this.props.providers
        this.setState({ providers })
    }

    render() {
        return (
            <ReactMapGL
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
                mapStyle='mapbox://styles/mapbox/dark-v9'
                mapboxApiAccessToken={TOKEN}
            >
                <div className='nav' style={navStyle}>
                    <NavigationControl />
                </div>
                <div className='markers'>
                    {/* {providers.map(provider =>
                        <Marker latitude={} longitude={} offsetLeft={-20} offsetTop={-10}>
                            <p>test</p>
                        </Marker>
                    )}} */}
                    <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
                        <div>You are here</div>
                    </Marker>
                </div>
            </ReactMapGL>
        )
    }
}

export default Map