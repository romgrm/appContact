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

            /**Le provider va nous permettre de donner/rendre notre state à des components car il va entourer toute notre application. Le this.props.children va permettre d'avoir accès aux composants entourés par le provider */
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}

export const Consumer = Context.Consumer;