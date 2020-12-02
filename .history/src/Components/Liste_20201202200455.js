import React, { Component } from 'react'
import Contact from './Contact'

export default class Liste extends Component {
    
    state = {
        contacts: [
            {
                nom: 'Selha',
                prénom: 'Amin',
                mail: 'sehla.amin@gmail.com'
            },
            {
                nom: 'Blache',
                prénom: 'Alexandre',
                mail: 'blache.alexandre@gmail.com'
            },
            {
                nom: 'Gréaume',
                prénom: 'Romain',
                mail: 'greaume.romain@gmail.com'
            }
        ]
    }
    
    render() {
        return (
            <div>
                {this.state.contacts.map(current => {
                    <Contact 
                    nom={current.nom}
                    />
                }}
                
            </div>
        )
    }
}
