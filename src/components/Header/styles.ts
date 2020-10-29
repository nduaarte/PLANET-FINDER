import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0 40px;

  background: var(--primary);

  align-items: center;
  justify-content: space-between;

  
  img {
    width: 6%;
    height: 6%;
  }
`;

export const Search = styled.div`
  display: flex;
  width: 60%;
  margin: 0 20px;

  img {
    display: flex;
    width: 40px;
    height: 40px;

    margin: 0 5px;
    color: var(--yellow2);
  }
  
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
