import styled from "styled-components";
import { colors } from "../../styles/variables";

export const Button = styled.button`
  background-color: ${colors.yellow};
  padding: 16px 32px;
  border: 2px solid ${colors.yellow};
  color: ${colors.white};
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.darkYellow};
    border: 2px solid ${colors.darkYellow};
  }
`;
