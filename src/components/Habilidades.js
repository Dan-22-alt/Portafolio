import React from 'react'
import Card from './Card'

import Arrow from './Arrow'

import { Link } from 'react-router-dom'

const Habilidades = () => {
    return (
        <div className="hab">
                <h1>Habilidades</h1>
                <div className="hab2">
                    <Card title={"Desarrollo Web"}
                    description={"Cosntrucion y mantencion de aplicaciones y paginas web, ofrecioendo un funcionamiento rapido y una buena experiencia para el usuario."}/>
                    <Card title={"Testing"}
                    description={"Analisis de la aplicacion para prevencion de futuros errores inesperados al agregar funciones nuevas u otros cambios."}/>
                    <Card title={"Responsive Design"}
                    description={"Capacidad de hacer a un sitio web accesible y adaptable a distintas plataformas/dispositivos."}/>
                    <Card title={"Diseño Web"}
                    description={"Nociones en maquetado, planificacion, interfaces y experiencia de usuario para la creacion de aplicaciones atractivas y faciles de usar."}/>
                </div>
                <div className="arrow-div">
                    <Link to="/Tecnologias"><Arrow /></Link>
                </div>
        </div>
    )
}

export default Habilidades
