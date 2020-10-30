import React from 'react';
import { Container } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/currentInfoApiReducer';

const PlanetList: React.FC = () => {
  const planetListArr = useSelector((state: RootState) => state.currentInfoApiReducer.planetListArr);

  const element = (
    planetListArr.map((item: { name: string }, index: number) => (
      <div>
        <p key={index}>{item.name}</p>
        <img width="300px" height="300px" src={require(`../../images/planetsCard/${item.name}.png`)} alt="planet"/>
      </div>
    ))
  );

  return (
    <Container>
      {element}
    </Container>
  );
}

export default PlanetList;