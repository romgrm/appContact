import React, { Component } from 'react'
import Contact from './Contact'

export default class Liste extends Component {
    
    state = {
        entreeClavier: '',
        nom: '',
        prenom: '',
        mail: ''
    }
    
    // state = {
    //     contacts: [
    //         {
    //             id:1,
    //             contact: 'Contact 1',
    //             nom: 'Selha',
    //             prenom: 'Amin',
    //             mail: 'sehla.amin@gmail.com'
    //         },
    //         {
    //             id:2,
    //             contact: 'Contact 2',
    //             nom: 'Blache',
    //             prenom: 'Alexandre',
    //             mail: 'blache.alexandre@gmail.com'
    //         },
    //         {
    //             id:3,
    //             contact: 'Contact 3',
    //             nom: 'Gréaume',
    //             prenom: 'Romain',
    //             mail: 'greaume.romain@gmail.com'
    //         }
    //     ]
    // }

    onChange = (event) => {
        this.setState({
            entreeClavier: event.target.value
        })
        //console.log(this.state.entreeClavier)
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            entreeClavier: '',
            nom: [...this.state.nom,  this.state.entreeClavier ]
        })
    }
    
    // Fonction qui permet de delete un contact par rapport à son id rentré en paramètre de la fonction
    deleteContactData = (id) => {
        this.setState({
            contacts: this.state.contacts.filter(current => current.id !== id) // on ne garde que les id qui ne sont pas égaux à l'id entré en paramètre, autrement dit l'id 'current'
        }) 
        // Mon "nouveau contacts" est mtn égal à mon contacts filtré par son id 
    }

    render() {
        return (
            <React.Fragment>
                {/* {this.state.contacts.map(current => (
                    <Contact 
                    key={current.id}
                    Contact={current.contact}
                    Nom={current.nom}
                    Prenom={current.prenom}
                    Mail={current.mail}
                    // Delete est considéré comme une fonction anonyme qui prend en valeur la fonction deleteContactData() avec comme paramètre l'id de 'current', donc l'id actuel
                    Delete={() => this.deleteContactData(current.id)}/> 
                    
                ))} */}
                <div>
                <form>
                <input placeholder="entrer votre prénom" value={this.state.entreeClavier}></input>
                <Contact Nom={this.state.nom}/>
                    <button onClick={this.onSubmit}> Ajouter</button>
                </form>
                
                </div>
                
            </React.Fragment>
        )
    }
}
