import { CardHeader } from "@nextui-org/card";

import { AnswerText } from "./answer-text";
import { AnswerMultipleChoice } from "./answer-multiple-choice";
import { AnswerCheckboxes } from "./answer-checkboxes";

import { FormCard } from "@/components/form-ui/form-card";
import { FormCardBody } from "@/components/form-ui/form-card-body";
import { Question, MultipleChoiceQuestion, CheckboxesQuestion } from "@/types";
import { answerOptionsEnum } from "@/constants";

interface AnserCardProps {
  question: Question;
}

export const AnserCard: React.FC<AnserCardProps> = ({ question }) => {
  return (
    <FormCard>
      <CardHeader>{question.questionTitle}</CardHeader>
      <FormCardBody>
        {question.type == answerOptionsEnum.TEXT && <AnswerText />}

        {question.type == answerOptionsEnum.MULTIPLECHOICE && (
          <AnswerMultipleChoice
            options={(question as MultipleChoiceQuestion).options}
          />
        )}

        {question.type == answerOptionsEnum.CHECKBOXES && (
          <AnswerCheckboxes
            options={(question as CheckboxesQuestion).options}
          />
        )}
      </FormCardBody>
    </FormCard>
  );
};
