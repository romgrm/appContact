import React, { Component } from 'react'

export default class AddContact extends Component {

    state = {
        nom : '',
        
    }
    render() {
        return (
            <div className="card body-card text-center">
                <h4>Contact</h4>
                <input 
                name="Nom" 
                placeholder="Entrez votre nom"

                ></input>
            </div>
        )
    }
}
