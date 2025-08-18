import TypeMarker from '../typeMarker/typeMarker.jsx';
import { Container, TypeSection, Title, InfoSection, ButtonSection } from './style.js';
import InteractionBtn from '../interactionBtn/interactionBtn.jsx';

function PokemonDesc({ pokemon, description }) {
  if (!pokemon) return <p>Carregando...</p>;

  const typeChart = {
    Normal: { weak: ["Fighting"], resist: [], immune: ["Ghost"] },
    Fire: { weak: ["Water", "Ground", "Rock"], resist: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"], immune: [] },
    Water: { weak: ["Electric", "Grass"], resist: ["Fire", "Water", "Ice", "Steel"], immune: [] },
    Electric: { weak: ["Ground"], resist: ["Electric", "Flying", "Steel"], immune: [] },
    Grass: { weak: ["Fire", "Ice", "Poison", "Flying", "Bug"], resist: ["Water", "Electric", "Grass", "Ground"], immune: [] },
    Ice: { weak: ["Fire", "Fighting", "Rock", "Steel"], resist: ["Ice"], immune: [] },
    Fighting: { weak: ["Flying", "Psychic", "Fairy"], resist: ["Bug", "Rock", "Dark"], immune: [] },
    Poison: { weak: ["Ground", "Psychic"], resist: ["Grass", "Fighting", "Poison", "Bug", "Fairy"], immune: [] },
    Ground: { weak: ["Water", "Grass", "Ice"], resist: ["Poison", "Rock"], immune: ["Electric"] },
    Flying: { weak: ["Electric", "Ice", "Rock"], resist: ["Grass", "Fighting", "Bug"], immune: ["Ground"] },
    Psychic: { weak: ["Bug", "Ghost", "Dark"], resist: ["Fighting", "Psychic"], immune: [] },
    Bug: { weak: ["Fire", "Flying", "Rock"], resist: ["Grass", "Fighting", "Ground"], immune: [] },
    Rock: { weak: ["Water", "Grass", "Fighting", "Ground", "Steel"], resist: ["Normal", "Fire", "Poison", "Flying"], immune: [] },
    Ghost: { weak: ["Ghost", "Dark"], resist: ["Poison", "Bug"], immune: ["Normal", "Fighting"] },
    Dragon: { weak: ["Ice", "Dragon", "Fairy"], resist: ["Fire", "Water", "Electric", "Grass"], immune: [] },
    Dark: { weak: ["Fighting", "Bug", "Fairy"], resist: ["Ghost", "Dark"], immune: ["Psychic"] },
    Steel: { weak: ["Fire", "Fighting", "Ground"], resist: ["Normal", "Grass", "Ice", "Flying", "Psychic", "Bug", "Rock", "Dragon", "Steel", "Fairy"], immune: ["Poison"] },
    Fairy: { weak: ["Poison", "Steel"], resist: ["Fighting", "Bug", "Dark"], immune: ["Dragon"] },
  };

  function calculateTypeEffectiveness(types) {
    const effectiveness = {};

    types.forEach(t => {
      const typeName = t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1);
      const chart = typeChart[typeName];
      if (!chart) return;

      // fraquezas
      chart.weak.forEach(w => {
        effectiveness[w] = (effectiveness[w] || 1) * 2;
      });

      // resistências
      chart.resist.forEach(r => {
        effectiveness[r] = (effectiveness[r] || 1) * 0.5;
      });

      // imunidades
      chart.immune.forEach(i => {
        effectiveness[i] = 0;
      });
    });

    const weaknesses = [];
    const resistances = [];
    const immunities = [];

    Object.entries(effectiveness).forEach(([type, mult]) => {
      if (mult === 0) immunities.push(type);
      else if (mult > 1) weaknesses.push(type);
      else if (mult < 1) resistances.push(type);
    });

    return { weaknesses, resistances, immunities };
  }

  const { weaknesses, resistances, immunities } = calculateTypeEffectiveness(pokemon.types);

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
          {weaknesses.map((w, index) => <TypeMarker key={index} type={w} />)}
        </TypeSection>

        <Title>Resistance</Title>
        <TypeSection>
          {resistances.map((r, index) => <TypeMarker key={index} type={r} />)}
        </TypeSection>

        <Title>Immunity</Title>
        <TypeSection>
          {immunities.map((i, index) => <TypeMarker key={index} type={i} />)}
        </TypeSection>
      </InfoSection>

      <ButtonSection>
        <InteractionBtn />
      </ButtonSection>
    </Container>
  );
}

export default PokemonDesc;
