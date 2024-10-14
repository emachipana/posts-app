import { useState } from "react";
import { useAuth } from "../../context/auth";
import Modal from "../Modal";
import { Formik } from "formik";
import { validate } from "./validate";
import { Form, Text, Title } from "./styles";
import Input from "../Input";
import Button from "../Button";
import { Username } from "../Post/styles";
import { TextError } from "../Input/styles";

function AuthModal({ isActive, setIsActive, action }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login, register } = useAuth();

  const handleClick = () => {
    setIsActive(prev => ({ ...prev, isActive: false }));
    setError(null);
  }

  const initialValues = {
    username: "",
    password: "",
    name: "",
    confirmPassword: ""
  }

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      action === "login" ? await login(values) : await register(values);
      setError(null);
      setIsLoading(false);
      setIsActive(prev => ({...prev, isActive: false}));
    }catch(error) {
      console.error(error);
      setError(error.message);
      setIsLoading(false);      
    }
  }

  return (
    <Modal
      isActive={isActive}
      setIsActive={handleClick}
    >
      <Formik
        initialValues={initialValues}
        validate={(values) => validate(values, action)}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          handleBlur,
          handleChange,
          handleSubmit
        }) => (
          <Form onSubmit={handleSubmit}>
            <Title>
              {
                action === "login"
                ? "Ingresar"
                : "Registrarme"
              }
            </Title>
            {
              action === "register"
              &&
              <Input 
                id="name"
                label="Nombre"
                placeholder="Ingresa un nombre"
                value={values.name}
                touched={touched.name}
                error={errors.name}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            }
            <Input 
              id="username"
              label="Usuario"
              placeholder="Nombre de usuario"
              value={values.username}
              touched={touched.username}
              error={errors.username}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <Input 
              id="password"
              label="Contraseña"
              placeholder="*************"
              type="password"
              value={values.password}
              touched={touched.password}
              error={errors.password}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            {
              action === "register"
              &&
              <Input 
                id="confirmPassword"
                label="Confirma la contraseña"
                placeholder="*************"
                type="password"
                value={values.confirmPassword}
                touched={touched.confirmPassword}
                error={errors.confirmPassword}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            }
            <Username style={{alignSelf: "flex-start", marginTop: "1rem"}}>
              {
                action === "register"
                ? <>
                    Ya tengo una cuenta
                    {" "}
                    <Text
                      onClick={() => setIsActive(prev => ({ ...prev, action: "login" }))}
                    >
                      Ingresar
                    </Text>
                  </>
                : <>
                    Aún no tengo una cuenta
                    {" "}
                    <Text
                      onClick={() => setIsActive(prev => ({ ...prev, action: "register" }))}
                    >
                      Registrarme
                    </Text>
                  </>
              }
            </Username>
            {
              error
              &&
              <TextError>
                { 
                  error.includes("duplicate key")
                  ? "El usuario ya esta en uso"
                  : error.replaceAll('"', "")
                }
              </TextError>
            }
            <Button
              type="submit"
              disabled={!isValid || isLoading}
              color="secondary"
              style={{marginTop: "1rem"}}
            >
              {
                action === "register"
                ? (
                    isLoading
                    ? "Registrando..."
                    : "Registrar"
                  )
                : (
                    isLoading
                    ? "Ingresando..."
                    : "Ingresar"
                  )
              }
            </Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default AuthModal;
