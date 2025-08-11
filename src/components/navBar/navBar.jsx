import { Container, BtnContainer, BigButton, MidBtn } from './style';
import { FaArrowLeft, FaArrowRight, FaBars } from "react-icons/fa";

function NavBar() {
  return (
    <Container>
        <BtnContainer>
            <BigButton><FaArrowLeft /> pokemon tal</BigButton>
            <BigButton>pokemon tal <FaArrowRight /></BigButton>
            <MidBtn> <FaBars /></MidBtn>
        </BtnContainer>
    </Container>
  );
}

export default NavBar;
