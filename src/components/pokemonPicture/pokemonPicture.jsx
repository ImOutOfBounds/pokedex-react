import { Container, PokePictureContainer, PokePicture, PokeName } from './style';
import bg from '../../assets/bg1.png';

function PokemonPicture({ pokemon }) {
  if (!pokemon) return null;

  const idFormatted = pokemon.id.toString().padStart(4, "0");
  const nameCapitalized = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <Container>
      <PokePictureContainer $bgImage={bg}>
        <PokePicture src={pokemon.sprites.other['official-artwork'].front_default} alt={nameCapitalized} />
      </PokePictureContainer>
      <PokeName>#{idFormatted} - {nameCapitalized}</PokeName>
    </Container>
  );
}

export default PokemonPicture;
