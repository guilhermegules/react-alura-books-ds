import styled from "styled-components";

import { colors } from "../../styles/variables";

export const Card = styled.div`
  border-radius: 10px;
  background-color: ${colors.white};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 48px 32px 48px 48px;
  width: 551px;

  @media screen and (max-width: 1024px) {
    width: 725px;
    padding: 24px;
  }

  @media screen and (max-width: 480px) {
    width: 380px;
    padding: 16px;
  }
`;
