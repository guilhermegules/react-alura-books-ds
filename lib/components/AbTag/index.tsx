import { GlobalStyle } from "../../styles/global";
import { Tag } from "./style";
import { AbTagProps } from "./types";

const AbTag = ({ text }: AbTagProps) => {
  return (
    <>
      <GlobalStyle />
      <Tag>{text}</Tag>
    </>
  );
};

export default AbTag;
