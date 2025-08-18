import styled, { keyframes } from "styled-components";

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px 12px rgba(69, 205, 220, 0.9);
    opacity: 1;
  }
  50% {
    box-shadow: 0 0 40px 24px rgba(69, 205, 220, 0.5);
    opacity: 0.6;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 10vh;
  height: 10vh;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(69, 205, 220, 1) 0%, rgba(32, 35, 250, 0.77) 70%);
  overflow: hidden;

  /* Borda estática sem animação */
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 6px;
    border-radius: 50%;
    background: linear-gradient(to right, #313131ff, #141414ff);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    pointer-events: none;
    z-index: -1;
  }

  /* Brilho pulsante forte no centro */
  &:after {
    content: "";
    position: absolute;
    inset: 12px; /* um pouco para dentro da borda */
    border-radius: 50%;
    background: transparent;
    animation: ${pulseGlow} 2.5s ease-in-out infinite;
    pointer-events: none;
    z-index: 1;
  }
`;
