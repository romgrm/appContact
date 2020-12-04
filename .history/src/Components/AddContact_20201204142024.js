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
            [event.target.name]: event.target.value // [event.target.name] -> récupère tous les 'name' des inputs (donc nom,prenom,mail). event.target.valuue -> récupère tous les 'value' des inputs.
        },console.log(this.state.nom))
    }

    onSubmit = (event) => {
        event.preventDefault()
        console.log()
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
                            <label htmlFor="prenom" className="mt-3">Prénom</label>
                            <input
                                type="text"
                                className="form-control"
                                name="prenom"
                                placeholder="Entrez votre prenom"
                                onChange={this.onChange}
                                value={this.state.prenom}
                            ></input>
                            <label htmlFor="mail" className="mt-3">Mail</label>
                            <input
                                type="text"
                                className="form-control"
                                name="nom"
                                placeholder="Entrez votre e-mail"
                                onChange={this.onChange}
                                value={this.state.mail}
                            ></input>
                            <input
                            type="submit"
                            value="Ajouter"
                            className="btn btn-info mt-4"
                            >
                            </input>

                        </div>

                    </form>
                </div>

            </div>
        )
    }
}
