import TypeMarker from '../typeMarker/typeMarker';
import { Container, TypeSection, Title, InfoSection, ButtonSection } from './style';
import InteractionBtn from '../interactionBtn/interactionBtn.jsx';

function PokemonDesc(pokemonData) {
  return (
    <Container>
        <InfoSection>
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
        </InfoSection>
        <ButtonSection>
            <InteractionBtn />
        </ButtonSection>
    </Container>
  );
}

export default PokemonDesc;
