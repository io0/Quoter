import React, { Component } from 'react';
import Time from './Time';
//import { Link } from 'react-router'

/**
 * Comment index component
 */
class Quote extends Component {

    /**
     *
     * @returns markup
     */
    render() {
        return (
            <div className="Quote">
                <div className="text">
                    {this.props.quoteText}
                </div>
                <div className="Time">
                    <Time />
                </div>
            </div>
        )
    }

}

export default Quote
