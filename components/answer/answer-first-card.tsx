import { FormFirstCard } from "@/components/form-ui/form-first-card";
import { FormCardBody } from "@/components/form-ui/form-card-body";

interface AnswerFirstCardProps {
  name: string;
  description: string;
}
export const AnswerFirstCard: React.FC<AnswerFirstCardProps> = ({
  name,
  description,
}) => {
  return (
    <FormFirstCard>
      <FormCardBody>
        <div className="text-3xl font-semibold">{name}</div>
        <div className="text-base text-gray-600 mt-2">{description}</div>
      </FormCardBody>
    </FormFirstCard>
  );
};
