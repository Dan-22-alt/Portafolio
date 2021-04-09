import React from 'react'

import  Footer  from './Footer'

const Contacto = () => {
    return (
        <div className="con">
            <div className="container">
                <h1 className="h1-con">Contactame</h1>
                <p className="p-con">Por favor complete el formulario y describe las necesidades de tu proyecto, me contactare lo mas rapido posible. Muchas gracias :)</p>
                <div className="form-div">
                    <form action="https://formspree.io/f/mvodpwgd" method="POST">
                        <div className="form-div-1">
                            <input name="nombre" id="nombre" type="text" className="data" placeholder="Nombre" required/>
                            <div className="underline"></div>
                            <input name="numero" id="numero" type="text" className="data" placeholder="Numero de telefono" required/>
                            <div className="underline"></div>
                            <input name="email" id="email" type="text" className="data" placeholder="Email" required/>
                            <div className="underline"></div>
                        </div>
                        <div className="form-div-2">
                            <textarea name="descripcion" id="descripcion" className="des" placeholder="Por favor, escriba una breve descripcion" required/>
                            <button type="submit" className="from-button">Contactame</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contacto
