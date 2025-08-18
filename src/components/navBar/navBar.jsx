import { Container, BtnContainer, BigButton, MidBtn } from './style';
import { FaArrowLeft, FaArrowRight, FaBars } from "react-icons/fa";

function NavBar({ onPrev, onNext }) {
  return (
    <Container>
      <BtnContainer>
        <BigButton onClick={onPrev}><FaArrowLeft /> Anterior</BigButton>
        <BigButton onClick={onNext}>Próximo <FaArrowRight /></BigButton>
        <MidBtn><FaBars /></MidBtn>
      </BtnContainer>
    </Container>
  );
}

export default NavBar;
