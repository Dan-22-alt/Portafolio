import React from 'react'
import Star from './Star'
import TecIcons from './TecIcons'

import Arrow from './Arrow'

import { Link } from 'react-router-dom'

const Tecnologias = () => {
    return (
        <div className="tec">
            <h1>Tecnologias</h1>
            <TecIcons />
            <div className="arrow-div">
                <Link to="/Portafolio"><Arrow /></Link>
            </div>
            <Star />
        </div>
    )
}

export default Tecnologias
