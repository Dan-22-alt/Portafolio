import React from 'react'
import foto from '../Imagenes/foto-mua-v2.jpg'

import Arrow from './Arrow'

import { Link } from 'react-router-dom'

const SobreNi = () => {
    return (
        <div className="sobreMi">
            <div className="container">
                <h1>Sobre mi</h1>
                <div className="sm2">
                    <img src={foto} alt="Daniel Cisneros" id="foto"/>
                    <div className="sm3">
                        <h2>Mi nombre es Daniel Alejandro Cisneros</h2>
                        <p>Soy un técnico en informática que
                        se ha orientado al desarrollo de
                        aplicaciones y paginas web, con 
                        un enorme deseo por llevar mis capacidades
                        y conocimientos a un nuevo nivel,
                        actualmente estoy en búsqueda de una
                        oportunidad para comenzar mi
                        carrera profesional en el rubro de
                        Tecnologías de la Información.</p>
                    </div>
                </div>
                <div className="arrow-div">
                    <Link to="/Habilidades"><Arrow /></Link>
                </div>
            </div>
        </div>
    )
}

export default SobreNi
