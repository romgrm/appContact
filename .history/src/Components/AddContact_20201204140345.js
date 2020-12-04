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
                                className="form-control"
                                name="nom"
                                placeholder="Entrez votre nom"
                                style={{textCenter: 'center'}}
                                onChange={this.onChange}
                                value={this.state.nom}
                            ></input>
                            <label htmlFor="prenom">Prénom</label>
                            <input
                                type="text"
                                className="form-control"
                                name="prenom"
                                placeholder="Entrez votre prenom"
                                onChange={this.onChange}
                                value={this.state.prenom}
                            ></input>
                            <label htmlFor="mail">Mail</label>
                            <input
                                type="text"
                                className="form-control"
                                name="nom"
                                placeholder="Entrez votre e-mail"
                                onChange={this.onChange}
                                value={this.state.mail}
                            ></input>
                            <input
                            type="submit",
                            value="Ajouter"
                            >
                            </input>

                        </div>

                    </form>
                </div>

            </div>
        )
    }
}
