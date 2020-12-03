import React, {Component} from 'react'

const Context = React.createContext();

export class Provider extends Component {
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

    render(){
        return(
            <Provider value=>


            </Provider>
        )
    }
}