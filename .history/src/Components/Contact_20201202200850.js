import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="card card-body bg-light">
                <ul className="card card-body p-1">
                    <li className="list-group-item"> Nom : {this.props.prénom}</li>
                    <li className="list-group-item"> Prénom : </li>
                    <li className="list-group-item"> Mail : </li>
                </ul>
            </div>
        )
    }
}
