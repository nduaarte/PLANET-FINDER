import styled from 'styled-components';
import { IoMdPlanet } from 'react-icons/io';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 15px 40px;

  background: var(--primary);

  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;

  img {
    width: 120px;
    height: 50px;

    @media(max-width: 600px) {
    width: 80px;
    height: 35px;
  }
  }
`;

export const Search = styled.div`
  display: flex;
  width: 60%;
  margin: 0 20px;
  
  input {
    width: 100%;
    background: var(--secondary);
    color: var(--lightgrey);

    outline: 0;
    padding: 5px;
    border-radius: 4px;
    font-size: 15px;

    &:focus {
      width: 50%;
    }

    transition: 200ms;
  }
`;

export const PlanetIcon = styled(IoMdPlanet)`
  display: flex;
  width: 34px;
  height: 34px;

  margin: 0 5px;
  color: var(--yellow2);
`;

export const Sign = styled.div`
  display: flex;
  align-items: center;
  color: var(--yellow2);
  margin: 0 10px;

  span {
    font-size: 12px;
    margin-left: 8px;
  }

  @media(max-width: 600px) {
    display: none;
  }
`;
