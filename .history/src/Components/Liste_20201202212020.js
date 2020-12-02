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
                
                nom: 'Blache',
                prenom: 'Alexandre',
                mail: 'blache.alexandre@gmail.com'
            },
            {
                id:3,
                nom: 'Gréaume',
                prenom: 'Romain',
                mail: 'greaume.romain@gmail.com'
            }
        ]
    }
    
    render() {
        return (
            <div>
                {this.state.contacts.map(current => (
                    <Contact 
                    key={current.id}
                    Nom={current.nom}
                    Prenom={current.prenom}
                    Mail={current.mail}/>
                ))}
            </div>
        )
    }
}
