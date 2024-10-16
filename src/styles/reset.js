import { css } from "@emotion/react";
import { FONTS } from "./fonts";
import { COLORS } from "./colors";

export const RESET = css`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  p {
    margin: 0;
    padding: 0;
  }
  
  body {
    overflow-x: hidden;
    overflow-y: auto;
    font-family: ${FONTS.primary};
    color: ${COLORS.white};
    background-color: ${COLORS.black};
    font-size: 1rem;
  }

  // styling scrollbar

  ::-webkit-scrollbar {
    width: 5px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${COLORS.graylight};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.onyx};
    border-radius: 6px;
    cursor: grab;
  }

  ::-webkit-scrollbar-thumb:active {
    cursor: grabbing;
  }
`;
