import { Radio, RadioGroup } from "@nextui-org/radio";

interface AnswerMultipleChoiceProps {
  value: string;
  options: string[];
  isDisable: boolean;
  onValueChange: (val: string) => void;
}

export const AnswerMultipleChoice: React.FC<AnswerMultipleChoiceProps> = ({
  value,
  options,
  isDisable,
  onValueChange,
}) => {
  const handleChange = (value: string) => {
    onValueChange(value);
  };

  return (
    <RadioGroup value={value} onValueChange={handleChange}>
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
