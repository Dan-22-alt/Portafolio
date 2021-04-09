import React from 'react'

import linked from '../iconos/linked.png'
import facebook from '../iconos/facebook.png'

import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <div className="footer-1">
                        <p>15-6144-9186</p>
                        <p>dan.alejandro2210@gmail.com</p>
                    </div>
                    <div className="footer-2">
                        <div className="refs-1">
                            <Link to="/" exact>Inicio</Link>
                            <Link to="/SobreMi">Sobre Mi</Link>
                            <Link to="/Habilidades">Habilidades</Link>
                        </div>
                        <div className="refs-2">
                            <Link to="/Tecnologias">Tecnologias</Link>
                            <Link to="/Portafolio">Portafolio</Link>
                            <Link to="/Contacto">Contacteme</Link>
                        </div>
                    </div>
                    <div className="footer-3">
                        <div className="iconos-foo">
                            <a href="https://www.linkedin.com/in/developer-daniel-cisneros/"><img src={linked} alt="linkedin" /></a>
                            <a href="https://m.facebook.com/dan.cisneros.73?ref=bookmarks"><img src={facebook} alt="facebook" /></a>
                        </div>
                       2021© | Derechos reservados
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
