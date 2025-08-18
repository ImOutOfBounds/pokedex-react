import './App.css';
import ContainerLeft from './components/containerLeft/containerLeft';
import ContainerRight from './components/containerRight/containerRight';
import styled from 'styled-components';
import Rectangle from './components/rectangle/Rectangle';
import { useEffect } from 'react';

const Wrapper = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
    <Wrapper>
      <ContainerLeft></ContainerLeft>
      <ContainerRight></ContainerRight>
      <Rectangle></Rectangle>
    </Wrapper>
    </>
  );
}

export default App;
