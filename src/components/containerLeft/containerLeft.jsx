import { Container } from "./style";
import PokemonPicture from "../pokemonPicture/pokemonPicture";
import StatsChart from "../statsChart/statsChart";

function ContainerLeft({ pokemon }) {
  return (
    <Container>
      <PokemonPicture pokemon={pokemon} />
      <StatsChart pokemon={pokemon} />
    </Container>
  );
}

export default ContainerLeft;
