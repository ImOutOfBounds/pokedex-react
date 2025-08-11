import { Container } from './style';
import PokemonPicture from '../pokemonPicture/pokemonPicture';
import StatsChart from '../statsChart/statsChart';

function ContainerLeft() {
  return (
    <Container>
      <PokemonPicture />
      <StatsChart />
    </Container>
  );
}

export default ContainerLeft;
