import { FlexColumn, Image } from "../../styles/layout";
import { Name, Text, Username } from "../Post/styles";
import { Container } from "./styles";

function Comment({ comment }) {
  return (
    <Container>
      <Image
        size="32px"
        alt="user-profile"
        src="/img/user_default.jpg"
      />
      <FlexColumn gap={0.01}>
        <Name size={0.9}>{ comment.user.name }</Name>
        <Username size={13}>@{ comment.user.username }</Username>
        <Text style={{marginTop: "0.5rem", fontSize: "14px"}}>
          { comment.content }
        </Text>
      </FlexColumn>
    </Container>
  );
}

export default Comment;
