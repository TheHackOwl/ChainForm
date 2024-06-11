interface AnswerTextProps {}
import { Input } from "@nextui-org/input";

export const AnswerText: React.FC<AnswerTextProps> = ({}) => {
  return (
    <Input
      aria-label=""
      color="primary"
      placeholder="text"
      type="email"
      variant="underlined"
    />
  );
};
