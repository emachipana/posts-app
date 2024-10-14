import { ClipLoader } from "react-spinners";
import { useData } from "../../context/data";
import { Container } from "./styles";
import { COLORS } from "../../styles/colors";
import Post from "../../components/Post";

function Posts({ setAuthModal }) {
  const { posts, isLoading } = useData();

  return (
    <Container>
      {
        isLoading
        ? <ClipLoader 
            color={COLORS.white}
          />
        : <>
            {
              posts.map((post, index) => (
                <Post
                  setAuthModal={setAuthModal}
                  key={index}
                  post={post}
                />
              ))
            }
          </>
      }
    </Container>
  );
}

export default Posts;
