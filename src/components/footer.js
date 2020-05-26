import React from 'react'
import './footer.css'
import bernardoInc from '../assets/logo-bernardo.png'


export default function Footer(){
    return(
        <div className='footer'>
            <p><strong>Power Mobile </strong>&copy; 2020 - Todos os Direitos Reservados</p>
            <p>Desenvolvido por <img src={bernardoInc} alt="Logo Bernardo"/></p>
                <span className="version">version @2.0.0</span>
      
        </div>
    )
}