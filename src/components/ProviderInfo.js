import React, { PureComponent } from 'react';

export default class ProviderInfo extends PureComponent {
    render() {
        const {info} = this.props
        return (
            <div className="provider-info-flag">
                <div>
                    Kait | {info.properties.name}
                </div>
            </div>
        )
    }
}