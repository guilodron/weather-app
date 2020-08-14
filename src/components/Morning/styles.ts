import styled, { keyframes } from 'styled-components';

const animateBackMountain = keyframes`
  from {
    transform: translateY(100%);
    visibility: hidden;
  }
  to {
    transform: translateY(0);
    visibility: visible;
  }
`;

const animateInnerMountain = keyframes`
  from {
    transform: translateY(100%);
    visibility: hidden;
  }
  to {
    transform: translateY(0);
    visibility: visible;
  }
`;

const animateForest = keyframes`
  from {
    transform: translateY(100%);
    visibility: hidden;
  }
  to {
    transform: translateY(0);
    visibility: visible;
  }
`;

const animateClouds = keyframes`
  from {
    transform: translateX(100%);
    visibility: hidden;
  }
  to {
    transform: translateX(0);
    visibility: visible;
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

  svg #back-mountain {
    visibility: hidden;
    animation: ${animateBackMountain} 0.8s ease forwards;
  }
  svg #inner-mountain {
    visibility: hidden;
    animation: ${animateInnerMountain} 0.8s ease forwards;
    animation-delay: 0.3s;
  }
  svg #forest {
    visibility: hidden;
    animation: ${animateForest} 0.8s ease forwards;
    animation-delay: 0.5s;
  }
  svg #clouds {
    visibility: hidden;
    animation: ${animateClouds} 0.8s ease forwards;
    animation-delay: 0.5s;
  }
  svg #sun {
    visibility: hidden;
    animation: ${animateForest} 1.2s ease forwards;
    animation-delay: 0.5s;
  }

  svg {
    min-width: 100vh;
    height: 100%;
  }
`;
