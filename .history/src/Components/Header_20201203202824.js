import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-info mb-3 py-0">
                    <div className="container">
                        <a href="/" className="navbar-brand">AppContact</a>
                        <ul className="navbar-nav">
                            <li className="nav-item ml-auto">
                                <a className="nav-link " href="/">Active</a>
                            </li>
                            <li className="nav-item ml-auto">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item ml-auto">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </React.Fragment>

        )
    }
}
