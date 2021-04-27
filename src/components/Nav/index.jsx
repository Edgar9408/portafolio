import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <nav className='Nav'>
            <Link className='Link' to='/portafolio' style={{ textDecoration: 'none' }}>
                <p>INICIO</p>
            </Link>
            <Link className='Link' to='/profile' style={{ textDecoration: 'none' }}>
                <p>PERFIL</p>
            </Link>
            <Link className='Link' to='/education' style={{ textDecoration: 'none' }}>
                <p>EDUCACION +CV</p>
            </Link>
            <Link className='Link' to='/projects' style={{ textDecoration: 'none' }}>
                <p>PROYECTOS</p>
            </Link>
            <Link className='Link' to='/skills' style={{ textDecoration: 'none' }}>
                <p>HABILIDADES</p>
            </Link>
            <Link className='Link' to='/contact' style={{ textDecoration: 'none' }}>
                <p>CONTACTO</p>
            </Link>
        </nav>
    )
}

export default Nav;