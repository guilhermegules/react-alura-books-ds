import styled, { css } from "styled-components";

import { colors } from "../../styles/variables";
import { AbButtonProps } from "./types";

export const Button = styled.button<Partial<AbButtonProps>>`
  background-color: ${(props) =>
    props.buttonStyle === "primary" ? colors.yellow : colors.white};
  padding: 16px 32px;
  border: 2px solid ${colors.yellow};
  color: ${(props) =>
    props.buttonStyle === "primary" ? colors.white : colors.yellow};
  font-size: 20px;
  cursor: pointer;

  ${(props) =>
    props.buttonStyle === "primary"
      ? css`
          &:hover {
            background-color: ${colors.darkYellow};
            border: 2px solid ${colors.darkYellow};
          }
        `
      : css`
          &:hover {
            background-color: ${colors.white};
            border: 2px solid ${colors.darkYellow};
            color: ${colors.darkYellow};
          }
        `}
`;
