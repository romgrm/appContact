import React, { Component } from 'react'
import Contact from './Contact'

export default class AddContact extends Component {

    state = {
        nom: '',
        prenom: '',
        mail: ''
    }

    onChange=(event) => {
        this.setState({
            nom: event.target.value,
            prenom: event.target.value,
            mail: event.target.value 
        })
    }

    onSubmit=(event)=> {
        this.setState({
            nom: '',
            nom: this.state.nom
        }, console.log(this.state.nom))
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
                <input 
                name="Prenom" 
                placeholder="Entrez votre prénom"
                onChange={this.onChange}
                value= {this.state.prenom}
                ></input>
                <input 
                name="Nom" 
                placeholder="Entrez votre nom"
                onChange={this.onChange}
                value= {this.state.nom}
                ></input>
                <button onClick={this.onSubmit}></button>
                <Contact 
                dataNom = {this.state.nom}
                dataPrenom = {this.state.prenom}
                />
            </div>
        )
    }
}
