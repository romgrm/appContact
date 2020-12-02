import React, { Component } from 'react'

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
                mail: 'sehla.amin@gmail.com'
            }
        ]
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
