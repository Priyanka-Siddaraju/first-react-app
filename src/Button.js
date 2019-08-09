import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    clickhandle()
    {
        console.log("child click")
        this.props.whenclick()
    }
    render() {
        return (
            <button onClick={this.clickhandle.bind(this)} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.caption}
            </button>

        );
    }
}

export default Button;