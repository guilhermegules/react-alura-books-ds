export type AbOptionType = {
  id: number;
  title: string;
  content: string;
  footerContent: string;
};

export type AbOptionGroupProps = {
  options: AbOptionType[];
  defaultValue?: AbOptionType | null;
  onSelect?: (option: AbOptionType) => void;
};
