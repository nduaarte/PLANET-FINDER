import React, { useEffect } from 'react';
import { Container } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/currentInfoApiReducer';

const PlanetList: React.FC = () => {
  const planetListArr = useSelector((state: RootState) => state.currentInfoApiReducer.planetListArr);
  let element;
  

  //parei no useref console.log do browser
  useEffect(() => {
    element = (
      planetListArr.map((item: { name: string }, index: number) => (
        <p key={index}>{item.name}</p>
      ))
    );

    console.log(planetListArr);
  }, [planetListArr]);


  return (
    <Container>
      <div>
        {element}
      </div>
    </Container>
  );
}

export default PlanetList;