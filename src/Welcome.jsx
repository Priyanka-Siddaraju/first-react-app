import React, { Component } from 'react';

class Welcome extends Component {

    constructor()
    {
        super()
        this.state = {
            count : 0,
            date : new Date()
           
        }
        
    }

    increment()
    {
        this.setState({date : new Date()})
    }

    render() {
        return (
            <div>
                
                <div>{this.state.date.getHours()} : {this.state.date.getMinutes()}</div>
                <button type="button" onClick={this.increment.bind(this)}>Increament!</button>
            </div>
            
        );
    }
}

export default Welcome;