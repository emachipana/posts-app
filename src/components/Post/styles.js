import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";

export const Container = styled.div`
  background-color: ${COLORS.gray};
  border-radius: 1rem;
  width: 480px;
  height: ${({ isCommentsOpen }) => isCommentsOpen ? 420 : 200}px;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, .2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  transition: height .3s ease;

  @media screen and (max-width: 570px) {
    width: 100%;
  }
`;

export const Name = styled.h3`
  font-size: ${({ size }) => size || 1}rem;
  font-weight: 700;
`;

export const Username = styled.h5`
  font-size: ${({ size }) => size || 14}px;
  font-weight: 500;
  color: ${COLORS.taupe};
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: white;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  background-color: ${({ isActive }) => isActive ? COLORS.graylight : "transparent"};
  transition: .3s ease;

  &:hover {
    background-color: ${COLORS.graylight};
  }
`;

export const First = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Comments = styled.section`
  width: 100%;
  height: 220px;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  padding: 1rem;
`;
