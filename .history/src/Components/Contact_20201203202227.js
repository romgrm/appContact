import React, { Component } from 'react'
import {Consumer} from '../'

export default class Contact extends Component {
    
    state = {
        show: true
    }

    // Fonction qui permet de faire l'inverse de show (tips: on fait une fonction flechée car les fonctions simple ne peuvent être référencées avec le this.nomdelafunction)
    display = () => {
        this.setState({
            show: !this.state.show
        }, console.log(this.state.show))
    }

    // Fonction qui permet de récupérer la fonction anonyme Delete() qui va permettre de supprimer un contact via son Id (l'id courant) et cette function va elle-même s'executer via le clic sur la croix 
    deleteContact = () => {
        
    }

    render() {
        return (
            <div className="card card-body bg-light text-center mb-3">
                <p className="h3">{this.props.Contact}&nbsp; <i style={{cursor: 'pointer', color: '#18A2B8'}} className="fas fa-arrow-circle-down"
                onClick={this.display}></i>
                <i className="fas fa-times" style={{float:'right', cursor: 'pointer', color: 'salmon'}} 
                onClick={this.deleteContact}></i>
                </p>
                {/*Opération ternaire qui permet de dire : est ce que le show de state est 'true' ? si oui, affiche moi les données, si non, return null, donc cache les */}
                {this.state.show ? (                
                    <ul className="card card-body">
                    <li className="list-group-item"> Nom : {this.props.Nom}</li>
                    <li className="list-group-item"> Prénom : {this.props.Prenom}</li>
                    <li className="list-group-item"> Mail : {this.props.Mail}</li>
                </ul>
                ) : null}
            </div>
        )
    }
}
