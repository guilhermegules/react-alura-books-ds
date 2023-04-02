import styled from "styled-components";
import { colors } from "../../styles/variables";

const selectedGradientBackground =
  "linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%)";

export const AbOption = styled.section<{ selected: boolean }>`
  width: 194px;
  height: 88px;
  background: ${(props) =>
    props.selected ? selectedGradientBackground : colors.white};
  border: 1px solid;
  border-color: ${(props) => (props.selected ? "#002f52" : colors.darkYellow)};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 10px;
  font-family: sans-serif;
  cursor: pointer;

  header {
    color: ${(props) => (props.selected ? colors.white : colors.darkYellow)};
    font-size: 12px;
    font-weight: 400;
  }

  strong {
    color: ${(props) => (props.selected ? colors.white : colors.darkYellow)};
    font-size: 16px;
    font-weight: 600;
  }

  footer {
    color: ${(props) =>
      props.selected ? colors.white : "rgba(0, 0, 0, 0.54)"};
    font-size: 12px;
    font-weight: 400;
  }
`;
