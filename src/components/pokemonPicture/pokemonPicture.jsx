import { Container, PokePictureContainer, PokePicture, PokeName } from './style';
import img from '../../assets/001.png';
import bg from '../../assets/bg1.png';


function PokemonPicture() {
  return (
    <Container>
      <PokePictureContainer bgImage={bg}>
        <PokePicture src={img} />
      </PokePictureContainer>
      <PokeName>#0001 - Bulbassaur</PokeName>
    </Container>
  );
}

export default PokemonPicture;
