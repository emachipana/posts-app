import { ClipLoader } from "react-spinners";
import { Container } from "./styles";
import { COLORS } from "../../styles/colors";

function Loader({ isMain }) {
  return (
    <Container
      isMain={isMain}
    >
      <ClipLoader 
        size={isMain ? 90 : 60}
        color={COLORS.white}
      />
    </Container>
  );
}

export default Loader;
