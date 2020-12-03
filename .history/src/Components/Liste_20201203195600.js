import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../Context'


// On importe le Consumer qui va permettre au component Liste d'utiliser notre Provider et donc utiliser notre State 
export default class Liste extends Component {



    // Fonction qui permet de delete un contact par rapport à son id rentré en paramètre de la fonction
    deleteContactData = (id) => {
        this.setState({
            contacts: this.state.contacts.filter(current => current.id !== id) // on ne garde que les id qui ne sont pas égaux à l'id entré en paramètre, autrement dit l'id 'current'
        })
        // Mon "nouveau contacts" est mtn égal à mon contacts filtré par son id 
    }

    render() {
        return (
            // On intègre le Consumer à notre render(). On utilise 'value' qui fait référence au value de notre Provider dans Context.js, autrement dit à la valeur de notre state, puis on return notre code qui fait appel au state et qui renvoie des props à Contact.js
            <Consumer>
                {value => {
                    return (
                        <React.Fragment>
                            {value.contacts.map(current => ( // ici on appelle plus this.state.contacts mais value.contacts, ce
                                <Contact
                                    key={current.id}
                                    Contact={current.contact}
                                    Nom={current.nom}
                                    Prenom={current.prenom}
                                    Mail={current.mail}
                                    // Delete est considéré comme une fonction anonyme qui prend en valeur la fonction deleteContactData() avec comme paramètre l'id de 'current', donc l'id actuel
                                    Delete={() => this.deleteContactData(current.id)} />

                            ))}
                        </React.Fragment>
                    )
                }}
            </Consumer>

        )
    }
}
