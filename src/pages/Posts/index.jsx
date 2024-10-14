import { ClipLoader } from "react-spinners";
import { useData } from "../../context/data";
import { Container } from "./styles";
import { COLORS } from "../../styles/colors";
import Post from "../../components/Post";
import NewPost from "../../components/NewPost";
import { useAuth } from "../../context/auth";

function Posts({ setAuthModal }) {
  const { user } = useAuth();
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
              user
              &&
              <NewPost />
            }
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
