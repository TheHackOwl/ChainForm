import { Input } from "@nextui-org/input";
interface AnswerTextProps {
  isDisable: boolean;
  onValueChange: (val: string) => void;
}
export const AnswerText: React.FC<AnswerTextProps> = ({
  isDisable,
  onValueChange,
}) => {
  return (
    <Input
      aria-label=""
      color="primary"
      disabled={isDisable}
      placeholder="Answer text"
      type="email"
      variant="underlined"
      onChange={(e) => {
        onValueChange(e.target.value);
      }}
    />
  );
};
