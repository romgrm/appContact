import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="card card-body bg-info">
                <ul className="card card-body">
                    <li className="list-group-item"> Nom </li>
                    <li className="list-group-item"> Prénom </li>
                    <li className="list-group-item"> Mail </li>
                </ul>
            </div>
        )
    }
}
