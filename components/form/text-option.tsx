import { Textarea } from "@nextui-org/input";

interface TextOptionProps {}
export const TextOption: React.FC<TextOptionProps> = () => {
  return (
    <Textarea
      disabled
      aria-label=" "
      className="h-8 w-1/2"
      classNames={{
        inputWrapper: "border-b-2 border-dotted",
      }}
      placeholder="Answer text"
      variant="underlined"
    />
  );
};
