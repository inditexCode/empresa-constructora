import React from 'react'
import './Contacto.css'
import FormContacto from './FormContactos'
import imagen from './img/2.jpg'
import Footer from '../inicio/footer/Footer'

const Contactos = () => {
  return (
    <>
     <div className="conteiner-contacto">
         <img className='imagen-contacto' src={ imagen  } alt="Fondo imagen" />
         <p>FORMULARIO DE CONTACTO:</p>
         <h4>Envíanos tus comentarios usando el siguiente formulario</h4>
       <div className="formulario">
         <FormContacto/>
       </div>
    </div>
    <Footer/>

    </>
    
  )
}

export default Contactos

