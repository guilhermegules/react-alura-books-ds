import { Quantity, QuantityButton, QuantityFieldWrapper } from "./style";
import { AbQuantityFieldProps } from "./types";

const AbQuantityField = ({
  quantity = 0,
  onClick,
  hasNegativeNumbers = false,
}: AbQuantityFieldProps) => {
  return (
    <QuantityFieldWrapper>
      <QuantityButton
        onClick={() => {
          if (quantity <= 0 && !hasNegativeNumbers) {
            return;
          }

          onClick(quantity - 1);
        }}
      >
        -
      </QuantityButton>
      <Quantity>{quantity}</Quantity>
      <QuantityButton onClick={() => onClick(quantity + 1)}>+</QuantityButton>
    </QuantityFieldWrapper>
  );
};

export default AbQuantityField;
