import styled from "styled-components";
import { colors } from "../../styles/variables";

export const AbTextFieldLabel = styled.label`
  color: ${colors.blue};
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
  margin-left: 16px;
`;

export const AbTextFieldInput = styled.input`
  font-size: 16px;
  border: 1px solid ${colors.blue};
  border-radius: 45px;
  padding: 8px 24px;
  line-height: 24px;
  width: 100%;

  &:placeholder {
    color: ${colors.gray};
  }
`;
