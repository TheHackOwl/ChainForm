import { Radio, RadioGroup } from "@nextui-org/radio";

interface AnswerMultipleChoiceProps {
  options: string[];
  isDisable: boolean;
  onValueChange: (val: string) => void;
}

export const AnswerMultipleChoice: React.FC<AnswerMultipleChoiceProps> = ({
  options,
  isDisable,
  onValueChange,
}) => {
  const handleChange = (value: string) => {
    onValueChange(value);
  };

  return (
    <RadioGroup onValueChange={handleChange}>
      {options.map((option, index) => {
        return (
          <Radio key={index} isDisabled={isDisable} value={option}>
            {option}
          </Radio>
        );
      })}
    </RadioGroup>
  );
};
