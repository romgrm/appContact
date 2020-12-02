import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark mb-3 py-0">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  
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
                        </ul>
                    </div>
                </nav>
                
            </div>

        )
    }
}
