import styled from "styled-components";
import { colors } from "../../styles/variables";

export const QuantityButton = styled.button`
  background-color: ${colors.blue};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  border: none;
  cursor: pointer;
  color: ${colors.white};
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

export const Quantity = styled.span`
  font-size: 18px;
  line-height: 27px;
  margin: 0 12px;
  color: ${colors.blue};
  font-family: Arial, Helvetica, sans-serif;
`;

export const QuantityFieldWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
