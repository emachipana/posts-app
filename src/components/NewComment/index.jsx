import { useState } from "react";
import { Container } from "./styles";
import { FlexRow } from "../../styles/layout";
import Input from "../Input";
import { IoSend } from "react-icons/io5";
import { COLORS } from "../../styles/colors";
import { ClipLoader } from "react-spinners";
import apiFetch from "../../services/apiFetch";
import { useData } from "../../context/data";

function NewComment({ postId, setComments }) {
  const [isLoading, setIsLoding] = useState(false);
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const { sumCommentToPost } = useData();

  const handleClick = async () => {
    try {
      if(!content) return;
      setIsLoding(true);
      const body = {
        postId,
        content
      }

      const comment = await apiFetch("comments", { body });
      setComments(comments => [comment, ...comments]);
      setError(null);
      setContent("");
      sumCommentToPost(postId);
      setIsLoding(false);
    }catch(error) {
      setIsLoding(false);
      console.error(error);
    }
  }

  const handleChange = (e) => {
    const value = e.target.value;

    if(!value) {
      setError("Campo obligatorio");
    }else if(value.length < 3) {
      setError("Minimo 3 caracteres");
    }else {
      setError(null);
    }

    setContent(value);
  }

  return (
    <Container>
      <FlexRow 
        width="100%"
        gap={2}
      >
        <Input
          id="content"
          value={content}
          handleChange={handleChange}
          backgroundColor={COLORS.onyx}
          placeholder="Escribe algo..."
        />
        {
          isLoading
          ? <ClipLoader 
              color={COLORS.white}
            />
          : <IoSend
              onClick={handleClick}
              color={COLORS.blue}
              style={{cursor: error || !content ? "not-allowed" : "pointer"}}
              size={25}
            />
        }
      </FlexRow>
    </Container>
  );
}

export default NewComment;
