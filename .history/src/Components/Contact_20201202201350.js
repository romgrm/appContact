import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="card card-body bg-light">
                <ul className="card card-body p-1">
                    <li className="list-group-item"> Nom : {this.props.Nom}</li>
        <li className="list-group-item"> Prénom : {this.props.prenom}</li>
                    <li className="list-group-item"> Mail : </li>
                </ul>
            </div>
        )
    }
}
