import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { FONTS } from "../../styles/fonts";
import { COLORS } from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
`;

export const Label = styled.label`
  font-size: ${({ size }) => size || 16}px;
  font-weight: 700;
  text-align: start;
`;

export const Section = styled.section`
  width: 100%;
  height: ${({ isFile, type }) => isFile ? "auto" : (type === "textarea" ? "80px" : "38px")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: ${({ isFile }) => isFile ? "0" : "0.3rem 0.7rem"};
  outline: 1px solid  ${({ color }) => color};
  outline: ${({ isFile }) => isFile ? "none" : ""};
  border-radius: 0.5rem;
  background-color: ${({ backgroundColor }) => backgroundColor || "transparent"};
  overflow: hidden;
  opacity: ${({ disabled }) => disabled ? ".6" : 1};
`;

export const Main = css`
  width: 100%;
  height: 100%;
  font-weight: 600;
  border: none;
  outline: none;
  color: ${COLORS.white};
  background-color: transparent;
  font-family: ${FONTS.primary};

  &::placeholder {
    color: ${COLORS.taupe};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const TextError = styled.p`
  font-size: 13px;
  padding: 1px 4px;
  font-weight: 600;
  color: ${COLORS.white};
  border-radius: 4px;
  margin-bottom: -8px;
  background-color: ${COLORS.red};
  opacity: .8;
`;
