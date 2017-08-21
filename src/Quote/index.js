import React, { Component } from 'react';
import Time from './Time';
//import { Link } from 'react-router'

/**
 * Comment index component
 */
 function getTimestamp(time) {
    var d = new Date(+time);
    return d.toLocaleString();
}
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
                    {getTimestamp(this.props.date)}
                </div>
            </div>
        )
    }

}

export default Quote
