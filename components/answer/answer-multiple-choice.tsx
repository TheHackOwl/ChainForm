import { Radio, RadioGroup } from "@nextui-org/radio";

interface AnswerMultipleChoiceProps {
  options: string[];
}

export const AnswerMultipleChoice: React.FC<AnswerMultipleChoiceProps> = ({
  options,
}) => {
  return (
    <RadioGroup>
      {options.map((option, index) => {
        return (
          <Radio key={index} value={option}>
            {option}
          </Radio>
        );
      })}
    </RadioGroup>
  );
};
