import React from 'react';
import { Container } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/currentInfoApiReducer';

const PlanetList: React.FC = () => {
  const planetListArr = useSelector((state: RootState) => state.currentInfoApiReducer.planetListArr);
  let importImg = 13;

  const element = (
    planetListArr.map((item: { name: string }, index: number) => (
      importImg = require(`../../images/planetsCard/${item.name}`),
      <div>
        <p key={index}>{item.name}</p>
        <img src="" alt=""/>
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