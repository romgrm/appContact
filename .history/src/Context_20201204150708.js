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
                contacts: state.contacts.filter(current => current.id !== action.payload) // on return la fonction similaire qu'on avait fait dans Liste.js pour delete un contact sauf qu'a la fin 
                                                                                        //c'est pas juste 'id' mais action.payload, payload signifiant lorsque l'action est effectuée/résultat de l'évènement
                                                                                        // donc on va garder seulement ceux sur quoi on a pas eu un évènement/action, en l'occurence le clic sur la croix rouge 
                };
        case 'ADD_CONTACT':                                     // Action qui va nous permettre d'ajouter un contact via le formulaire de Addcontact.js
            return{
                contacts: [action.payload, ...state.contacts]  // On reprend notre state 'contacts', auquel on assigne le 'action.payload' qui est l'action de créer/ajouter un contact, au state 'contacts' déjà existant
                                                                // pour garder nos contacts existants et en ajouter un autre (d'ou le spread operator)
            }
            default: return state; 
    }
} 

export class Provider extends Component {
    state = {
        contacts: [
            {
                id:1,
                contact: 'Developpeur',
                nom: 'Selha',
                prenom: 'Amin',
                mail: 'sehla.amin@gmail.com'
            },
            {
                id:2,
                contact: 'Developpeur',
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
        ],

        /** Le Dispatch va permettre d'executer les actions du reducer avec les components. C'est donc logique d'avoir une modification du state (setState) qui renvoie le reducer avec le state&action */
        dispatch: action => {
            this.setState(state => reducer(state,action))
        }
    }

    render(){
        return(

            /**Le provider va nous permettre de donner/rendre/fournir notre state à des components car il va entourer toute notre application. Le this.props.children va permettre à nos composants d'apparaitre/d'être affichés vu que notre provider va entourer toute l'app */
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

// on exporte le Consumer qui va permettre aux components d'utiliser le state de notre provider. 
export const Consumer = Context.Consumer;