
import './App.css';
import ContainerLeft from './components/containerLeft/containerLeft';
import ContainerRight from './components/containerRight/containerRight';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
    <Wrapper>
      <ContainerLeft></ContainerLeft>
      <ContainerRight></ContainerRight>
    </Wrapper>
    </>
  );
}

export default App;
