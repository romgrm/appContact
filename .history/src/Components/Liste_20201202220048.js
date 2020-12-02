import React, { Component } from 'react'
import Contact from './Contact'

export default class Liste extends Component {
    
    state = {
        contacts: [
            {
                id:1,
                contact: 'Contact 1',
                nom: 'Selha',
                prenom: 'Amin',
                mail: 'sehla.amin@gmail.com'
            },
            {
                id:2,
                contact: 'Contact 2',
                nom: 'Blache',
                prenom: 'Alexandre',
                mail: 'blache.alexandre@gmail.com'
            },
            {
                id:3,
                contact: 'Contact 3',
                nom: 'Gréaume',
                prenom: 'Romain',
                mail: 'greaume.romain@gmail.com'
            }
        ]
    }
    
    // Fonction qui permet de delete un contact par rapport à son id rentré en paramètre de la fonction
    deleteContactData = (id) => {
        
        this.setState({
            contacts: this.state.contacts.filter(current => current.id !== id) // on ne garde que les id qui ne sont pas égaux à l'id entré en paramètre, autrement dit l'id
        })
        
    }

    render() {
        return (
            <div>
                {this.state.contacts.map(current => (
                    <Contact 
                    key={current.id}
                    Contact={current.contact}
                    Nom={current.nom}
                    Prenom={current.prenom}
                    Mail={current.mail}
                    Delete={() => this.deleteContactData(current.id)}/>
                ))}
            </div>
        )
    }
}
