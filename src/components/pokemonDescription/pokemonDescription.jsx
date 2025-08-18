import TypeMarker from '../typeMarker/typeMarker.jsx';
import { Container, TypeSection, Title, InfoSection, ButtonSection } from './style.js';
import InteractionBtn from '../interactionBtn/interactionBtn.jsx';

function PokemonDesc({ pokemon, description }) {
  if (!pokemon) return <p>Carregando...</p>;

  return (
    <Container>
      <InfoSection>
        <p>{description || "No description available."}</p>

        <Title>Type</Title>
        <TypeSection>
          {pokemon.types.map((t, index) => {
            const typeName = t.type.name;
            const capitalizedType = typeName.charAt(0).toUpperCase() + typeName.slice(1);
            return <TypeMarker key={index} type={capitalizedType} />;
          })}
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
