import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Temperature = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 30%;
  margin: 0;
  background: rgb(115, 114, 114, 0.31);
  border-radius: 20px;
  padding: 5px;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: 500;
    margin: 0;
    padding: 0;
  }

  span {
    font-size: 1.2rem;
    margin: 0;
  }
`;

export const WeatherInfo = styled.div`
  height: 24vh;
  padding: 5px;
  width: 100vw;
  background: #fff;
  position: absolute;
  border-radius: 30px 30px 0 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    span {
      margin-bottom: 10px;
      margin-top: 5px;
      text-align: center;
      width: 100%;
    }
    h2 {
      color: rgb(100, 100, 100);
      font-size: 14px;
      font-weight: 400;
    }
  }
`;

export const Loading = styled.div`
  height: 100vh;
  width: 100vw;
  background: white;
  display: flex;
  place-content: center;
  align-items: center;
`;
