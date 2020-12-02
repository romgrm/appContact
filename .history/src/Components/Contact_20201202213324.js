import React, { Component } from 'react'

export default class Contact extends Component {
    
    state = {
        show: true
    }

    display = () => {
        this.setState({
            show: !this.state.show
        }, console.log(this.state.show))
    }

    render() {
        return (
            <div className="card card-body bg-light text-center">
                <p className="h3">{this.props.Contact}&nbsp; <i className="fas fa-arrow-circle-down"
                onClick={this.display}>
                </i></p>
                {this.state.show ? (

                )}
                
            </div>
        )
    }
}
