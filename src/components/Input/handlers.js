import { COLORS } from "../../styles/colors";

export const onBlur = (e, setFocused, handleBlur) => {
  setFocused(false);

  handleBlur && handleBlur(e);
}

export const setColor = (error, touched, focused) => {
  return error && touched
  ? COLORS.red
  : (touched && !error
    ? COLORS.blue
    : (focused
        ? COLORS.blue
        : COLORS.taupe));
}
