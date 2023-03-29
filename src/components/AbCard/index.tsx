import { ReactNode } from "react";
import { Card } from "./style";

type AbCardProps = {
  children: ReactNode;
};

const AbCard = ({ children }: AbCardProps) => {
  return <Card>{children}</Card>;
};

export default AbCard;
