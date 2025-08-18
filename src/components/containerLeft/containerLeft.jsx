import { Container } from "./style";
import PokemonPicture from "../pokemonPicture/pokemonPicture";
import StatsChart from "../statsChart/statsChart";

function ContainerLeft({ pokemon }) {
  if (!pokemon || !pokemon.stats) return <p>Carregando...</p>;

  const stats = pokemon.stats.map((s) => s.base_stat);
  console.log("Stats que estou passando pro gráfico:", stats);

  return (
    <Container>
      <PokemonPicture pokemon={pokemon} />
      {stats && <StatsChart stats={stats} />}
    </Container>
  );
}

export default ContainerLeft;
