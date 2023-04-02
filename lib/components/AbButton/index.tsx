import { Button } from "./style";
import { AbButtonProps } from "./types";

export const AbButton = ({
  text,
  buttonStyle = "primary",
  onClick,
}: AbButtonProps) => {
  return (
    <Button onClick={onClick} buttonStyle={buttonStyle}>
      {text}
    </Button>
  );
};
