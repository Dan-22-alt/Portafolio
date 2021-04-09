import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-router-dom'

import Arrow from './Arrow'

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Desarrollador Web | Tecnico en Informatica</h1>
                <Typed 
                    className="typed-text"
                    strings={["Web Design", "Web Development", "FullStack Development", "MERN Stack"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link to="/Contacto" className="btn-main-offer">Contacta conmigo</Link>
                <Link to="/SobreMi"><Arrow /></Link>
                {/* <div className="flecha">
                    <Link to="/SobreMi"><img src={flecha}/></Link>
                </div> */}
            </div>
        </div>
    )
}

export default Header
