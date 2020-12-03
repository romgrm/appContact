import React, { Component } from 'react'
import {Consumer} from '../Context'

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

        return(
            <Consumer>
                {value => {
                    return(

                    )
                }}
            </Consumer>
        )
        return (
            
        )
    }
}
