import React from 'react';
import { Container, Logo, Search, PlanetIcon, Sign } from './styles';

import logo from '../images/logo_star_wars.png';


const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>

      <Search>
        <PlanetIcon />
        <input type="text" placeholder="Buscar planeta..." />
      </Search>

      <Sign>
        <h4>Made by redspaace</h4>
        <span>with Swapi API</span>
      </Sign>
    </Container>
  );
}

export default Header;