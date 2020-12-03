import React, { Component } from 'react'
import Contact from './Contact'

export default class Liste extends Component {
    
    state = {
        contacts: ""
    }
    
    // Fonction qui permet de delete un contact par rapport à son id rentré en paramètre de la fonction
    deleteContactData = (id) => {
        this.setState({
            contacts: this.state.contacts.filter(current => current.id !== id) // on ne garde que les id qui ne sont pas égaux à l'id entré en paramètre, autrement dit l'id 'current'
        }) 
        // Mon "nouveau contacts" est mtn égal à mon contacts filtré par son id 
    }

    render() {
        return (
            <React.Fragment>
                <input ></input>
                {this.state.contacts.map(current => (
                    <Contact 
                    key={current.id}
                    Contact={current.contact}
                    Nom={current.nom}
                    Prenom={current.prenom}
                    Mail={current.mail}
                    // Delete est considéré comme une fonction anonyme qui prend en valeur la fonction deleteContactData() avec comme paramètre l'id de 'current', donc l'id actuel
                    Delete={() => this.deleteContactData(current.id)}/> 
                    
                ))}
            </React.Fragment>
        )
    }
}
