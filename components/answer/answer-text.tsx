import { Input } from "@nextui-org/input";
interface AnswerTextProps {
  value: string;
  isDisable: boolean;
  onValueChange: (val: string) => void;
}
export const AnswerText: React.FC<AnswerTextProps> = ({
  value,
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
      value={value}
      variant="underlined"
      onChange={(e) => {
        onValueChange(e.target.value);
      }}
    />
  );
};
