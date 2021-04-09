import React from 'react'

import CV from '../CVDanielCisneros.pdf'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-dark">
            <div className="container">
                    {/* <a className="navbar-brand" href="#"><p className='dcv'>Descargar CV</p></a> */}
                    <a href={CV} download="Daniel Cisneros CV"
                        target="_blank" rel="noreferrer">
                            <button className="navbar-brand dcv ml-left"><b>Descargar cv   </b></button></a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#007bff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/' exact>Inicio <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/SobreMi">Sobre mi</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Habilidades">Habilidades</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Tecnologias">Tecnologias</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Portafolio">Portafolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contacto">Contactame</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
