import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Header extends Component {

    /** Ici les balises <Link> sont importées du Router qui permet de créer des liens entre les pages simulées par le router
     * et un lien cliquable. On remplace les <a> par <Link> et les href="" par des to="" en mettant le même chemin indiqué dans le
     * Router créé dans App.js
     */
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-info py-0">
                    <div className="container">
                        <a href="/" className="navbar-brand">AppContact</a>
                        <ul className="navbar-nav d-inline-block">
                            <li className="nav-item d-inline-block mr-3">
                                <Link className="nav-link " to="/liste">Liste des contacts</Link>
                            </li>
                            <li className="nav-item d-inline-block mr-3">
                                <Link className="nav-link" to="/ajouter">Ajouter un contact</Link>
                            </li>
                            <li className="nav-item d-inline-block mr-3">
                                <a className="nav-link" href="/">` propos`</a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </React.Fragment>

        )
    }
}
