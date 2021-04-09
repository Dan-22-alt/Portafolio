import React from 'react'

import Arrow from './Arrow'

import pelis from '../Imagenes/peliculas-img.jpg'
import rym from '../Imagenes/rickandmor-img.jpg'

import { Link } from 'react-router-dom'

const Portafolio = () => {
    return (
        <div className="por">
            <h1>Portafolio</h1>
            <div className="container">
                <div className="proyectos">
                    <div className="proyecto">
                        <div className="proyecto-1">
                            <img src={pelis} alt="pelis" /> 
                        </div>
                        <div className="proyecto-2">
                            <h1>Peliculas v1</h1>
                            <div className="text-div">
                                <p>Esta aplicacion te permitira encontrar tus peliculas y podras ver algunos
                                     de sus detalles tales como el año de su estreno, sus actores, su 
                                     puntuacion, etc.</p>
                                <p><b>Tecnologias: React.js, HTML, CSS, node.js, React-router, Hooks</b></p>
                            </div>
                            <div className="button-div">
                                <button className="button-demo" 
                                onClick={() => window.location="https://dan-22-alt.github.io/app-peliculas/"}>
                                    Probar ahora</button>
                                <button className="button-github" 
                                onClick={() => window.location="https://github.com/Dan-22-alt/app-peliculas"}>
                                    Ve el codigo aqui</button>
                            </div>
                        </div>
                    </div>
                    <div className="proyecto">
                        <div className="proyecto-1">
                            <img src={rym} alt="rickandmorty" /> 
                        </div>
                        <div className="proyecto-2">
                            <h1>Rick & Morty v1</h1>
                            <div className="text-div">
                                <p>Usa tu cuenta de google para poder almacenar tus personajes favoritos de eesta serie animada.</p>
                                <p><b>Tecnologias: React.js, HTML, CSS, yarn, React-router, Hooks, Redux, Firebase</b></p>
                            </div>
                            <div className="button-div">
                                <button className="button-demo" 
                                onClick={() => window.location="https://dan-22-alt.github.io/rickandmorty-favs/"}>
                                    Probar ahora</button>
                                <button className="button-github"
                                onClick={() => window.location="https://github.com/Dan-22-alt/rickandmorty-favs"}>
                                    Ve el codigo aqui</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="arrow-div">
                <Link to="/Contacto"><Arrow /></Link>
            </div>
        </div>
    )
}

export default Portafolio
