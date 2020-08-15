import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(41, 62, 118, 0.9);
  input {
    margin-top: 200px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    width: 230px;
    font-size: 18px;
  }
`;

export const City = styled.div`
  border: 1px solid white;
  /* border-radius: 5px; */
  padding: 10px;
  width: 230px;
  background: white;
  color: gray;
  &:first-of-type {
    margin-top: 10px;
  }
`;

interface CitiesProps {
  show: boolean;
}

export const Cities = styled.div<CitiesProps>`
  visibility: hidden;
  ${(props) =>
    props.show &&
    css`
      visibility: visible;
    `}

  height: 400px;
`;
