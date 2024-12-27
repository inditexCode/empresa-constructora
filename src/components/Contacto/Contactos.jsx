import React from 'react'
import './Contacto.css'
import FormContacto from './FormContactos'
import imagen from './img/campo.jpg'
import Telefono from '../telefono/Telefono'

const Contactos = () => {
  return (
    <>
     <div className="conteiner-contacto">
         <img className='imagen-contacto' src={ imagen  } alt="Fondo imagen" />
         <Telefono/>
         <p>FORMULARIO DE CONTACTO:</p>
         <h4>Envíanos tus comentarios usando el siguiente formulario</h4>
       <div className="formulario">
         <FormContacto/>
       </div>
    </div>

    </>
    
  )
}

export default Contactos

