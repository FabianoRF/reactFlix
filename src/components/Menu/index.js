import React from 'react';
import { Link } from 'react-router-dom';
import LogoMain from '../../assets/img/LogoMain.png';
import Button from '../Button';

import './Menu.css';

const Menu = () => (
  <nav className="Menu">
    <Link to="/">
      <img className="Logo" src={LogoMain} alt="AluraFlix logo" />
    </Link>

    <Button as={Link} className="ButtonLink" to="/cadastro/video">
      Novo vídeo
    </Button>
  </nav>
);

export default Menu;
