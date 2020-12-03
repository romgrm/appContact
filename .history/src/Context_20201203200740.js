import React, {Component} from 'react'

// création de l'Api context 
const Context = React.createContext();

// création du Reducer, qui va permettre d'effecturer des actions 
// Il prend en paramètre le state et 'action' qui va donc permettre de gérer les actions avec action entré en paramètre de notre reducer

const reducer = (state, action) => {
      
    // Le switch permet de gérer plusieurs actions. Notre première action est la suppression d'un contact.
    switch(action.type) {
        case 'DELETE_CONTACT':
            return{
                contacts: state.contacts.filter(current => current.id !== action.payload) // on return la fonction similaire qu'on avait fait dans Liste.js pour delete un contact sauf qu'a la fin c'est pas juste 'id' mais action.payload, payload signifiant lorsque l'action est effectuée/
            }
    }
} 

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

            /**Le provider va nous permettre de donner/rendre/fournir notre state à des components car il va entourer toute notre application. Le this.props.children va permettre à nos composants d'apparaitre/d'être affichés vu que notre provider va entourer toute l'app */
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}

// on exporte le Consumer qui va permettre aux components d'utiliser le state de notre provider 
export const Consumer = Context.Consumer;