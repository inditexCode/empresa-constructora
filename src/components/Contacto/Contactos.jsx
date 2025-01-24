import React from 'react'
import './Contacto.css'
import FormContacto from './FormContactos'
import Footer from '../inicio/footer/Footer'

const Contactos = () => {
  return (
    <>
     <div className="conteiner-contacto">
         <img className='imagen-contacto' src="https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/pagina%20agroservicos/t6iqaxrlftdvw8kf7j3t" alt="Fondo imagen" />
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
