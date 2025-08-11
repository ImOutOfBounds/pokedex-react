import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 51vw;
  bottom: 0vh;
  width: 4vw;
  height: 60vh;
  background-color: rgba(179, 13, 13, 1);
  border-radius: 40px 0 0 0;
  
  clip-path: polygon(
    100% 0%,   /* topo direito */
    0% 10%,    /* topo esquerdo descendo um pouco */
    0% 100%,   /* canto inferior esquerdo */
    100% 100%  /* canto inferior direito */
  );
  z-index: 10;
  transform: translateX(-100%); /* puxa o retângulo para a esquerda, ficando "encostado" na linha do meio */
`;
