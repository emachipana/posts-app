import { useState } from "react";
import { Formik } from "formik";
import { useAuth } from "../../context/auth";
import { FlexColumn, FlexRow, Image } from "../../styles/layout";
import Button from "../Button";
import TextArea from "../Input/TextArea";
import { Container, Name, Username } from "../Post/styles";
import { Form } from "../AuthModal/styles";
import { useData } from "../../context/data";

function NewPost() {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const { addPost } = useData();

  const initialValues = {content: ""};

  const validate = (values) => {
    const errors = {};

    if(!values.content) {
      errors.content = "Escribe algo primero";
    }else if(values.content.length < 10) {
      errors.content = "El mínimo son 10 caracteres";
    }

    return errors;
  }

  const handleSubmit = async (values, resetForm) => {
    try {
      setIsLoading(true);
      await addPost(values);
      setIsLoading(false);
      resetForm();
      window.scrollBy({ top: 200, behavior: "smooth" });
    }catch(error) {
      setIsLoading(false);
      console.error(error);
    }
  }

  return (
    <Container isToCreate>
      <FlexColumn
        gap={1}
        style={{padding: "1rem", width: "100%"}}
      >
        <FlexRow>
          <Image 
            alt={`user-${user.username}`}
            src="/img/user_default.jpg"
          />
          <FlexColumn gap={0.1}>
            <Name>{ user.name }</Name>
            <Username>@{ user.username }</Username>
          </FlexColumn>
        </FlexRow>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
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
            <Form
              onSubmit={handleSubmit}
              gap="0.5rem"
            >
              <TextArea
                id="content"
                placeholder="Escribe algo..."
                value={values.content}
                error={errors.content}
                touched={touched.content}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
              <Button
                type="submit"
                style={{alignSelf: "flex-end"}}
                color="secondary"
                disabled={!isValid || isLoading}
              >
                {
                  isLoading
                  ? "Publicando..."
                  : "Publicar"
                }
              </Button>
            </Form>
          )}
        </Formik>
      </FlexColumn>
    </Container>
  );
}

export default NewPost;
