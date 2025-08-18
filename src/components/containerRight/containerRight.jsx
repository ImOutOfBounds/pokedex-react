import { Container } from "./style";
import NavBar from "../navBar/navBar";
import PokemonDesc from "../pokemonDescription/pokemonDescription";

function ContainerRight({ pokemon, description, onPrev, onNext }) {
  return (
    <Container>
      <NavBar onPrev={onPrev} onNext={onNext} />
      <PokemonDesc pokemon={pokemon} description={description} />
    </Container>
  );
}

export default ContainerRight;
