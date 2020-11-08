import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;
  flex-direction: column;
  margin: 30px 0;

  img {
    display: flex;

    border: solid 2px var(--yellow);
    border-radius: 20px;
    width: 90%;
    height: 90%;

    max-height: 620px;
  }
`;

export const Title = styled.div`
  margin-bottom: 10px;

  h1 {
    font-family: Turret Road, sans-serif;
    font-size: 40px;
    color: var(--white);

    @media (max-width: 375px) {
      font-size: 28px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-around;

  margin-top: 350px;

  h2, span {
    font-family: Turret Road, sans-serif;
    color: var(--white);
    margin: 3px 0;
  }

  h2 {
    font-size: 24px;
    @media (max-width: 375px) {
      font-size: 18px;
    }
  }

  span {
    font-size: 20px;
    @media (max-width: 375px) {
      font-size: 16px;
    }
  }
`;