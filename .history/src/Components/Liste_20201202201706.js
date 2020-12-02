import React, { Component } from 'react'
import Contact from './Contact'

export default class Liste extends Component {
    
    state = {
        contacts: [
            {
                nom: 'Selha',
                prenom: 'Amin',
                mail: 'sehla.amin@gmail.com'
            },
            // {
            //     nom: 'Blache',
            //     prenom: 'Alexandre',
            //     mail: 'blache.alexandre@gmail.com'
            // },
            // {
            //     nom: 'Gréaume',
            //     prenom: 'Romain',
            //     mail: 'greaume.romain@gmail.com'
            // }
        ]
    }
    
    render() {
        return (
            <div>
                {this.state.contacts.map(current => (
                    <Contact 
                    Nom={current.nom}
                    Prenom={current.prenom}
                    Mail={current.mail}/>
                ))}
            </div>
        )
    }
}
