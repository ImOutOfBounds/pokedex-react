import TypeMarker from '../typeMarker/typeMarker';
import { Container, TypeSection, Title } from './style';

function PokemonDesc() {
  return (
    <Container>
        <p>
            For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.
        </p>
        <Title>Type</Title>
        <TypeSection>
            <TypeMarker type="Grass"/>
            <TypeMarker type="Poison"/>
        </TypeSection>
        <Title>Weakness</Title>
        <TypeSection>
            <TypeMarker type="Fire"/>
            <TypeMarker type="Ice"/>
            <TypeMarker type="Flying"/>
            <TypeMarker type="Psychic"/>
        </TypeSection>
    </Container>
  );
}

export default PokemonDesc;
