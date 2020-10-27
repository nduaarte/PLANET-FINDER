import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: flex;
    margin: 50px 0;

    border: solid 2px var(--yellow);
    border-radius: 20px;
    width: 1100px;
    height: 600px;
  }
`;

export const Info = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-around;

  margin-bottom: 120px;
  align-self: flex-end;

  h2, span {
    font-family: Turret Road, sans-serif;
    color: var(--white);
    margin: 3px 0;
  }

  h2 {
    font-size: 24px;
  }

  span {
    font-size: 20px;
  }
`;