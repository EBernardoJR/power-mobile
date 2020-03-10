import React from 'react'
import './header.css'
import Logo from '../assets/power_mobile_logo_branco.png'
import buttonToggle from '../assets/menu.png'
import logoInsta from '../assets/instagram.png'


export default function Header(){
    return(
        <>
    <div className="header">
        <div className="containerBar">
            <div className='icone'>
                <a href="#" className="d-flex align-items-center">
                    <img src={Logo} alt='Logo' className='logo'/>
                </a>
        </div>
        <div className='items'>
                <a href='#about'>Sobre</a>
                <a href='#event'>Eventos</a >
                <a href='#anuncie'>Anuncie Conosco</a >
                <a href='#contact'>Contato</a>
        </div>
        <button className="navbar-toggler collapsed buttom" data-toggle="collapse" data-target="#header">
           <img src={buttonToggle} className='buttom-img' alt="Botão toggle"/>
        </button>
        </div>
</div>

<div className='toggle collapse' id='header'>
<a href='#about'>Sobre</a>
                <a href='#event'>Eventos</a >
                <a href='#anuncie'>Anuncie Conosco</a >
                <a href='#contact'>Contato</a>
                <spam className="logo-insta">
                    <a href='https://www.instagram.com/powermobile.br/' target="_blank" rel="noopener noreferrer">
                    Acesse nosso Instagram
                    <img src={logoInsta} alt='Logo Instagram'/>
                    </a>
                </spam>
</div>

</>
    )
}