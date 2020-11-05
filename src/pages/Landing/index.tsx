import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import img1 from '../../images/landingImages/bobafet.jpg';
import img2 from '../../images/landingImages/darthmaul.jpg';
import img3 from '../../images/landingImages/darthvader.jpg';
import img4 from '../../images/landingImages/darthvader2.jpg';
import img5 from '../../images/landingImages/kyloren.jpg';
import img6 from '../../images/landingImages/luke.jpg';
import img7 from '../../images/landingImages/yoda.jpg';

import { Container } from './styles';

const Landing: React.FC = () => {
  const imagesArr = [img1, img2, img3, img4, img5, img6, img7];
  const [image, setImage] = useState(img1);
  let count = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 6)
        count = 0;
      setImage(imagesArr[count]);

      count++;

      return () => clearInterval(interval);
    }, 5000)
  }, []);

  
  const history = useHistory();
  function navigate() {
    history.push('/planetSearch');
  }

  return (
    <Container>
      <img src={image} alt="image" />
      
      <div>
        <h1>PLANET FINDER</h1>

        <p>
          Aqui é possível consultar todos os planetas da galáxia e ver quais espécies e
          criaturas habitam cada planeta.
      </p>

      <button onClick={navigate}>Começar</button>
      </div>
    </Container>
  );
}

export default Landing;