import { COLORS } from "../../styles/colors";
import { Container } from "./styles";

function Button({ Icon, color, fontSize, iconSize, children, ...props }) {
  const colorList = {
    primary: {
      background: COLORS.gray,
      hover: COLORS.black
    },
    secondary: {
      background: COLORS.blue,
      hover: COLORS.blue
    }
  }

  return (
    <Container 
      {...props}
      color={colorList[color || "primary"]}
      fontSize={fontSize}
    >
      { Icon && <Icon size={(iconSize || 22)} style={{marginTop: "-2px"}} /> }
      { children }
    </Container>
  );
}

export default Button;
