import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
    <div className='footer'>
        <h2 className='texto2'>Seguinos en nuestras redes sociales!</h2>
        <section className='redes'>
            <Link as={NavLink} to={''} className='wsp'>WhatsApp</Link>
            <img src='../../../img/whatsapp.png'/>
            <Link as={NavLink} to={''} className='face'>Facebook</Link>
            <img src='../../../img/facebook.png'  />
            <Link as={NavLink} to={''} className='inst'>Instagram</Link>
            <img src='../../../img/instagram.png'/>
            <Link as={NavLink} to={''} className='twi'>X</Link>
            <img src='../../../img/twiter.png'/>
        </section>  
    </div>
    )
}

export default Footer
