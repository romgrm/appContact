import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Header extends Component {

    /** Ici les balises <Link> sont importées du Router qui permet de créer des liens entre les pages simulées par le router
     * et un lien cliquable. On remplace les <a> par <Link> et les href="" par des to="" en mettant le même chemin indiqué dans le
     * 
     */
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-info mb-3 py-0">
                    <div className="container">
                        <a href="/" className="navbar-brand">AppContact</a>
                        <ul className="navbar-nav">
                            <li className="nav-item ml-auto">
                                <Link className="nav-link " to="/liste">Liste des contacts</Link>
                            </li>
                            <li className="nav-item ml-auto">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item ml-auto">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </React.Fragment>

        )
    }
}
