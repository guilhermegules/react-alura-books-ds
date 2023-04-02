import { Tag } from "./style";
import { AbTagProps } from "./types";

const AbTag = ({ text }: AbTagProps) => {
  return <Tag>{text}</Tag>;
};

export default AbTag;
