import React from 'react';
import { Container, Search, Sign } from './styles';

import logo from '../../images/icons/logo_star_wars.svg';
import r2d2 from '../../images/icons/r2d2.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />

      <Search>
        <img src={r2d2} alt="r2d2" />
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