import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { Container, Title } from "./styles";
import { FlexRow } from "../../styles/layout";
import Button from "../Button";
import { Name } from "../Post/styles";

function Navbar({ setAuthModal }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    user ? logout() : setAuthModal({ action: "login", isActive: true });
  }

  return (
    <Container>
      <Title
        onClick={() => navigate("/")}
      >
        POSTS APP
      </Title>
      <FlexRow gap={1}>
        {
          user
          &&
          <Name>@{ user.username }</Name>
        }
        <Button
          onClick={handleClick}
          >
          {
            user
            ? "Salir"
            : "Ingresar"
          }
        </Button>
      </FlexRow>
    </Container>
  );
}

export default Navbar;
