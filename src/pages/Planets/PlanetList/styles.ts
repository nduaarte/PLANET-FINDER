import styled from 'styled-components';
import backgroundImage from '../../../images/bgImage.png';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  align-items: center;
  flex-wrap: wrap;

  padding: 0 50px;

  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-attachment: fixed;
  background-position: center;
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
      cursor: pointer;
    }

    transition: 200ms;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  background-color: var(--secondary);
  border-radius: 4px;
  border-left: 4px solid var(--yellow2);

  z-index: 1;
  width: 200px;
  height: 60px;
  
  h2 {
    display: flex;
    color: var(--white);
  }
`;

