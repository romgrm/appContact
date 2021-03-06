import React, { Component } from 'react'

export default class AddContact extends Component {

    state = {
        nom: '',
        prenom: '',
        mail: ''
    }

    onChange=(event) => {
        this.setState({
            nom: event.target.value
        })
    }

    onSubmit=(event)=> {
        this.setState
    }
    render() {
        return (
            <div className="card body-card text-center">
                <h4>Contact</h4>
                <input 
                name="Nom" 
                placeholder="Entrez votre nom"
                onChange={this.onChange}
                value= {this.state.nom}
                ></input>
                <button onClick={this.onSubmit}></button>
            </div>
        )
    }
}
