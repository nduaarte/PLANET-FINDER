import styled from 'styled-components';



export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  img {
    display: flex;
    width: 100%;
    max-height: 100vh;

  } 

  div {
    display: flex;
    margin-top: 40px;

    position: absolute;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    display: flex;
    font-size: 70px;
    color: var(--yellow);
  }

  p {
    display: flex;
    color: var(--white);
    font-size: 18px;
  }

  button {
    display: flex;
    background: var(--yellow2);
    color: var(--white);
    margin-top: 50px;

    font-size: 22px;
    padding: 10px 15px;
    border-radius: 5px;

    :hover {
      color: var(--lightgrey);
      background: var(--yellow);
      cursor: pointer;
    }
    
    transition: 200ms;
  }
`;
