import styled from "@emotion/styled";

export const FlexRow = styled.div`
  width: ${({ width }) => width || "auto"};
  display: flex;
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  gap: ${({ gap }) => gap || 0.5}rem;
`;

export const FlexColumn = styled.div`
  width: ${({ width }) => width || "auto"};
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align || "flex-start"};
  justify-content: ${({ justify }) => justify || "center"};
  gap: ${({ gap }) => gap || 0.5}rem;
`;

export const Image = styled.img`
  width: ${({ size }) => size || "55px"};
  height: ${({ size }) => size || "55px"};
  border-radius: 50%;
  object-fit: cover;
`;
