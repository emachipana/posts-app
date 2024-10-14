import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${COLORS.white};
`;

export const Text = styled.span`
  text-decoration: underline;
  color: ${COLORS.blue};
  cursor: pointer;
`;
