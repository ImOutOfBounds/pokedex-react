import { useState, useEffect } from 'react';
import { Container } from './style';
import NavBar from '../navBar/navBar';
import PokemonDesc from '../pokemonDescription/pokemonDesciption';



function ContainerRight() {

  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(res => res.json())
      .then(data => {
        setPokemonData(data);
        console.log(data);
      })
      .catch(err => console.error("Erro ao buscar Pokémon:", err));
  }, [pokemonId]);

  const handlePrev = () => {
    setPokemonId(prev => (prev > 1 ? prev - 1 : 1025)); 
  };

  const handleNext = () => {
    setPokemonId(prev => (prev == 1025? 1 : prev + 1));
  };

  return (
    <>
        <Container>
            < NavBar onPrev={handlePrev} onNext={handleNext}/>
            < PokemonDesc pokemon={pokemonData} />
        </Container>
    </>
  );
}

export default ContainerRight;
