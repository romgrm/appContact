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
            name: event.target.value,
        })
    }

    onSubmit=(event)=> {
        this.setState({
            
        }, console.log(this.state.nom))
    }
    render() {
        return (
            <div className="card text-center">
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
                name="Mail" 
                placeholder="Entrez votre mail"
                onChange={this.onChange}
                value= {this.state.mail}
                ></input>
                <button onClick={this.onSubmit}></button>
                
            </div>
        )
    }
}
