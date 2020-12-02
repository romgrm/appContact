import React, { Component } from 'react'

export default class Contact extends Component {
    
    state = {
        show: true
    }

    

    render() {
        return (
            <div className="card card-body bg-light text-center">
                <p className="h3">{this.props.Contact}&nbsp; <i className="fas fa-arrow-circle-down "></i></p>
                <ul className="card card-body p-1">
                    <li className="list-group-item"> Nom : {this.props.Nom}</li>
                    <li className="list-group-item"> Prénom : {this.props.Prenom}</li>
                    <li className="list-group-item"> Mail : {this.props.Mail}</li>
                </ul>
            </div>
        )
    }
}
