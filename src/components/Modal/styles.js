import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { COLORS } from "../../styles/colors";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  max-height: 100vh;
  z-index: 100;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, .5);
  animation: modal .4s ease-out;
  display: flex;
  align-items: ${({ align }) => align || "center"};
  justify-content: center;
  padding: 2rem 1rem 1rem 1rem;
  overflow-y: auto;

  @keyframes modal {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 600px) {
    align-items: start;
  }
`;

export const Section = styled.section`
  padding: ${({ padding }) => padding || "1.5rem"};
  width: ${({ width }) => width};
  background-color: ${COLORS.gray};
  position: relative;
  border-radius: 1rem;
  z-index: 70;
  animation: move .5s ease;

  @keyframes move {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const Close = css`
  font-size: 28px;
  color: ${COLORS.white};
  position: absolute;
  top: 6px;
  right: 6px;
  cursor: pointer;
`;
