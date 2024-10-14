import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 1rem;
  background-color: ${COLORS.blue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 80;
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 900;
  cursor: pointer;
`;
