import { useEffect, useState } from "react";
import { FlexColumn, FlexRow, Image } from "../../styles/layout";
import { Button, Comments, Container, First, Name, Section, Text, Username } from "./styles";
import { FaHeart, FaRegHeart, FaComment, FaRegComment } from "react-icons/fa6";
import { COLORS } from "../../styles/colors";
import { useAuth } from "../../context/auth";
import apiFetch from "../../services/apiFetch";
import { useData } from "../../context/data";
import { ClipLoader } from "react-spinners";
import Comment from "../Comment";

function Post({ post, setAuthModal }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeId, setLikeId] = useState("");
  const [comments, setComments] = useState([]);
  const [isCommentsLoaded, setIsCommentsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const { user } = useAuth();
  const { changePostLike } = useData();

  useEffect(() => {
    const fetch = async () => {
      try {
        if(user) {
          const response = await apiFetch(`likes/isPostLiked/${post.id}`);
          setIsLiked(response.isLiked);
          setLikeId(response.id);
        }
      }catch(error) {
        console.error(error);
      }
    }

    fetch();
  }, [ user, post.id ]);

  const handleLikeClick = async () => {
    try {
      if(!user) return setAuthModal({ action: "login", isActive: true });
      if(!isLiked) {
        const newLike = await apiFetch("likes", { body: { postId: post.id } });
        setLikeId(newLike.id);
      }else {
        await apiFetch(`likes/${likeId}`, { method: "DELETE" });
      }
      changePostLike(post.id, isLiked ? "res" : "sum");
      setIsLiked(!isLiked);
    }catch(error) {
      console.error(error);
    }
  }

  const handleCommentsClick = async () => {
    try {
      setIsCommentsOpen(!isCommentsOpen);
      if(isCommentsLoaded) return;
      setIsLoading(true);
      const comments = await apiFetch(`comments/${post.id}`);
      setComments(comments);
      setIsCommentsLoaded(true);
      setIsLoading(false);
    }catch(error) {
      setIsLoading(false);
      setIsCommentsLoaded(false);
      console.error(error);
    }
  }

  return (
    <Container isCommentsOpen={isCommentsOpen}>
      <First>
        <FlexColumn 
          gap={1}
          style={{padding: "1rem"}}
        >
          <FlexRow>
            <Image 
              alt={`user-${post.user.username}`}
              src="/img/user_default.jpg"
            />
            <FlexColumn gap={0.1}>
              <Name>{ post.user.name }</Name>
              <Username>@{ post.user.username }</Username>
            </FlexColumn>
          </FlexRow>
          <Text>{ post.content }</Text>
        </FlexColumn>
        <Section>
          <Button onClick={handleLikeClick}>
            <FlexRow>
              {
                isLiked && user
                ? <FaHeart 
                    color={COLORS.red}
                    size={16}
                  />
                : <FaRegHeart 
                    color={COLORS.white}
                    size={16}
                  />
              }
              <Text>{ post.likes }</Text>
            </FlexRow>
          </Button>
          <Button 
            onClick={handleCommentsClick}
            isActive={isCommentsOpen}
          >
            <FlexRow>
              {
                isCommentsOpen
                ? <FaComment 
                    color={COLORS.taupe}
                    size={16}
                  />
                : <FaRegComment 
                    color={COLORS.white}
                    size={16}
                  />
              }
              <Text>{ post.comments }</Text>
            </FlexRow>
          </Button>
        </Section>
      </First>
      {
        isCommentsOpen
        &&
        <Comments>
          {
            isLoading
            ? <ClipLoader
                color={COLORS.white}
              />
            : comments.map((comment, index) => (
                <Comment 
                  key={index}
                  comment={comment}
                />
              ))
          }
        </Comments>
      }
    </Container>
  );
}

export default Post;
