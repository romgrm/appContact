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
    
    deleteContactData = (id) => {
        this.setState{
            con: 
        }
        this.state.contacts.filter(current => current.id !== id)
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
