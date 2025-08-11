import { Container } from './style';
import NavBar from '../navBar/navBar';
import PokemonDesc from '../pokemonDescription/pokemonDesciption';



function ContainerRight() {
  return (
    <Container>
        < NavBar/>
        < PokemonDesc />
    </Container>
  );
}

export default ContainerRight;
