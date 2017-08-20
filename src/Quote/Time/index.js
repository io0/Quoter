import React, { Component } from 'react';

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getTimestamp() {
    var d = new Date();
    var day = addZero(d.getDate());
    var month = addZero(d.getMonth() + 1);
    var year = d.getFullYear();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    return day + "/" + month + "/" + year + " "+ h + ":" + m + ":" + s;
}

function getTimes(){
	var d = new Date();
	return d.getSeconds();
}
class Time extends Component {
	constructor(){
		super();
		this.state = {property: getTimestamp()};
	}

    /**
     *
     * @returns markup
     */
    render() {
		setTimeout(() => {
			this.setState({property: getTimestamp()});
		}, 1000);
		var d = new Date();

        return (
            <div className="Time">
                {this.state.property}
            </div>
        )
    }

}

export default Time
