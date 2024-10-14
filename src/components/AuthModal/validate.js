export const validate = (values, action) => {
  const errors = {};

  if(!values.username) {
    errors.username = "Este campo es obligatorio";
  }else if(values.username.length < 3) {
    errors.username = "El mínimo son 3 caracteres";
  }

  if(!values.password) {
    errors.password = "Este campo es obligatorio";
  }else if(values.password.length < 6) {
    errors.password = "El mínimo son 6 caracteres";
  }

  if(action === "register") {
    if(!values.name) {
      errors.name = "Este campo es obligatorio";
    }else if(values.name.length < 3) {
      errors.name = "El mínimo son 3 caracteres";
    }

    if(!values.confirmPassword) {
      errors.confirmPassword = "Este campo es obligatorio";
    }else if(values.confirmPassword !== values.password) {
      errors.confirmPassword = "Las contraseñas no coinciden";
    }
  }

  return errors;
}
