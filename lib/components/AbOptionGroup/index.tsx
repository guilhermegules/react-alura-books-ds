import { useState } from "react";
import { AbOption } from "./style";
import { AbOptionType, AbOptionGroupProps } from "./types";

const AbGroupOption = ({
  options,
  defaultValue = null,
  onSelect,
}: AbOptionGroupProps) => {
  const [selected, setSelected] = useState<AbOptionType | null>(defaultValue);

  const onSelectCard = (option: AbOptionType) => {
    setSelected(option);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <>
      {options.map((option) => (
        <AbOption
          onClick={() => onSelectCard(option)}
          key={option.id}
          selected={selected?.id === option.id}
        >
          <header>{option.title}</header>
          <div>
            <strong>{option.content}</strong>
          </div>
          <footer>{option.footerContent}</footer>
        </AbOption>
      ))}
    </>
  );
};

export default AbGroupOption;
