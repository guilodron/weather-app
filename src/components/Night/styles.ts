import styled, { keyframes } from 'styled-components';

// const animateTop = keyframes`
//   from{
//     visibility: hidden;
//     transform: translateY(-100%);
//   }
//   to{
//     visibility: visible;
//     transform: translateY(0%);
//   }
// `;

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

const pisca = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
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

  svg #clouds {
    visibility: hidden;
    animation: ${animateRight} 1.4s ease forwards;
    animation-delay: 0.3s;
  }

  svg #moon {
    visibility: hidden;
    animation: ${animateBottom} 1.4s ease forwards;
    animation-delay: 0.8s;
  }

  svg #outer-trees {
    visibility: hidden;
    animation: ${animateBottom} 1.4s ease forwards;
    animation-delay: 0.3s;
  }

  svg #inner-trees {
    visibility: hidden;
    animation: ${animateBottom} 1.4s ease forwards;
    /* animation-delay: 0.3s; */
  }

  svg #cabana,
  #fogueira {
    visibility: hidden;
    animation: ${animateBottom} 1.4s ease forwards;
    animation-delay: 0.6s;
  }

  svg #stars1 {
    animation: ${pisca} 2s infinite alternate;
  }

  svg #stars2 {
    opacity: 0;
    animation: ${pisca} 2s infinite alternate;
    animation-delay: 1s;
  }

  svg {
    min-width: 100vh;
    height: 100%;
  }
`;
