import React, { Component } from 'react'
import Contact from './Contact'

export default class AddContact extends Component {

    state = {
        nom: '',
        prenom: '',
        mail: ''
    }

    onChange = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    onSubmit = (event) => {
        this.setState({

        }, console.log(this.state.nom))
    }
    render() {
        return (
            <div className="card text-center">
                <div className=" card-header">Ajouter un contact</div>

                <div className="card-body">
                    <form>
                        <div className="form-group">
                        <label htmlFor="nom">Nom</label>
                        <input
                        type="text"
                            name="Nom"
                            placeholder="Entrez votre nom"
                            onChange={this.onChange}
                            value={this.state.nom}
                            ></input>
                        
                            </div>

                    </form>
                </div>

            </div>
        )
    }
}
