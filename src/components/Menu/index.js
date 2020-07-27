import React from 'react';
import LogoMain from '../../assets/img/LogoMain.png';
import Button from '../Button'

//import ButtonLink from './ButtonLink';
import './Menu.css'

const Menu = () =>{
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={LogoMain} alt="AluraFlix logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/home" >
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;