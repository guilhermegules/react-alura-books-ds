import styled from "styled-components";
import { colors } from "../../styles/variables";

export const AbTextFieldLabel = styled.label`
  color: ${colors.blue};
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 4px;
  margin-left: 12px;
`;

export const AbTextFieldInput = styled.input`
  font-size: 16px;
  border: 1px solid ${colors.blue};
  border-radius: 18px;
  padding: 8px 12px;

  &:placeholder {
    color: ${colors.gray};
  }
`;

export const AbTextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
