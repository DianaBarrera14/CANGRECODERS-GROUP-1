import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">General search API PLOS
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/searchId">Search API PLOS by id
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ShowClient">Search Client Info API
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>

                    </ul>

                </div>
            </nav>
        )
    }
}