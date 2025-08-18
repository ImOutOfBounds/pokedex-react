import './App.css';
import ContainerLeft from './components/containerLeft/containerLeft';
import ContainerRight from './components/containerRight/containerRight';
import styled from 'styled-components';
import Rectangle from './components/rectangle/Rectangle';
import musicFile from './assets/uiSfx.mp3'; 
import { useState, useEffect, useRef } from "react";


const Wrapper = styled.div`
  display: flex;
`;

function App() {

  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonDescription, setPokemonDescription] = useState("");

  const audioRef = useRef(new Audio(musicFile));

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await res.json();
        setPokemonData(data);

        const resSpecies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
        const species = await resSpecies.json();
        const flavorText = species.flavor_text_entries.find(entry => entry.language.name === "en");

        
        if (flavorText) {
          setPokemonDescription(flavorText.flavor_text.replace(/\f/g, " "));
        }
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      } catch (err) {
        console.error("Erro ao buscar Pokémon:", err);
      }
    };

    fetchPokemon();
  }, [pokemonId]);

  const handlePrev = () => setPokemonId(prev => (prev > 1 ? prev - 1 : 1025));
  const handleNext = () => setPokemonId(prev => (prev === 1025 ? 1 : prev + 1));

  return (
    
    <>
    <Wrapper>
      <ContainerLeft pokemon={pokemonData} />
      <ContainerRight
        pokemon={pokemonData}
        description={pokemonDescription}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <Rectangle />
    </Wrapper>
    </>
  );
}

export default App;
