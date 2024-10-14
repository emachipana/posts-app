import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/fonts";

export const Container = styled.button`
  border: none;
  font-family: ${FONTS.primary};
  color: ${({ color }) => color.background === "white" ? COLORS.gray : COLORS.white};
  padding: 0.3rem 0.9rem;
  background-color: ${({ color }) => color.background};
  font-size: ${({ fontSize }) => fontSize || 16}px;
  font-weight: 700;
  width: ${({ size }) => size === "full" ? "100%" : "auto"};
  border-radius: 10px;
  cursor: pointer;
  transition: .3s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${({ color }) => color.hover};
    color: ${COLORS.white};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .8;
  }
`;
