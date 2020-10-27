import React from 'react';
import { Container, Logo, Search, Sign } from './styles';

import logo from '../images/logo_star_wars.png';


const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" width="120" height="50" />
      </Logo>

      <Search>
        <input type="text" placeholder="Buscar planeta..." />
        <button type="button"></button>
      </Search>

      <Sign>
        <h3>MADE BY redspaace</h3>
        <span>with SWAPI API</span>
      </Sign>
    </Container>
  );
}

export default Header;