import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark mb-3 py-0">

                    <div className="container">
                        <a href="/" className="navbar-brand">AppContact</a>
                        <ul class="navbar-nav">
                            <li class="nav-item ml-auto">
                                <a class="nav-link active" href="#">Active</a>
                            </li>
                            <li class="nav-item ml-auto">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item ml-auto">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>

        )
    }
}
