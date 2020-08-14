import styled, { keyframes } from 'styled-components';

const animateTop = keyframes`
  from{
    visibility: hidden;
    transform: translateY(-100%);
  }
  to{
    visibility: visible;
    transform: translateY(0%);
  }
`;

const animateBottom = keyframes`
  from{
    visibility: hidden;
    transform: translateY(100%);
  }
  to{
    visibility: visible;
    transform: translateY(0%);
  }
`;

const animateLeft = keyframes`
  from{
    visibility: hidden;
    transform: translateX(100%);
  }
  to{
    visibility: visible;
    transform: translateX(0%);
  }
`;

const animateRight = keyframes`
  from{
    visibility: hidden;
    transform: translateX(-100%);
  }
  to{
    visibility: visible;
    transform: translateX(0%);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  margin-top: 0;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  svg #sun {
    visibility: hidden;
    animation: ${animateTop} 1.5s ease forwards;
    animation-delay: 0.5s;
  }

  svg #back-mountain {
    visibility: hidden;
    animation: ${animateBottom} 1.2s ease forwards;
  }

  svg #med-mountain {
    visibility: hidden;
    animation: ${animateBottom} 1.4s ease forwards;
    animation-delay: 0.3s;
  }

  svg #outer-mountain {
    visibility: hidden;
    animation: ${animateBottom} 1.4s ease forwards;
    animation-delay: 0.6s;
  }

  svg #tree {
    visibility: hidden;
    animation: ${animateLeft} 1.4s ease forwards;
    animation-delay: 0.3s;
  }

  svg #clouds {
    visibility: hidden;
    animation: ${animateRight} 1.4s ease forwards;
    animation-delay: 0.3s;
  }

  svg {
    min-width: 100vh;
    height: 100%;
  }
`;
