import { Container } from './style';

function TypeMarker({type}) {
  return (
    <Container type={type}>
         {type}
    </Container>
  );
}

export default TypeMarker;
