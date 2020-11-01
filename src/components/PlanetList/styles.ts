import styled from 'styled-components';
import backgroundImage from '../../images/test.png';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  align-items: center;
  flex-wrap: wrap;
  padding: 0 75px;

  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
`;

export const PlanetCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 30px;

  > img {
    display: flex;
    margin-bottom: -30px;
    filter: saturate(0%);

    width: 120px;
    height: 120px;
    z-index: 2;

    :hover {
      filter: saturate(100%);
    }

    transition: 200ms;
  }

  :hover {
    cursor: pointer;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  background-color: var(--secondary);
  border-radius: 6px;

  z-index: 1;
  width: 200px;
  height: 60px;
  
  h2 {
    display: flex;
    color: var(--white);
  }
`;

