import { useReadContract } from "wagmi";

import { Individual } from "./individual";

import {
  CHAINFORM_ABI,
  CHAINFORM_ADDRESS,
} from "@/constants/contract/chainForm";
import { SubmissionType } from "@/types";

interface UseReadContractReturnType {
  readonly data: SubmissionType[] | undefined;
}

interface ResponsesProps {
  formId: string;
}

export const Responses: React.FC<ResponsesProps> = ({ formId }) => {
  const { data }: UseReadContractReturnType = useReadContract({
    abi: CHAINFORM_ABI,
    address: CHAINFORM_ADDRESS,
    functionName: "getSubmissions",
    args: [BigInt(formId)],
  });

  // Todo： 加载动画
  if (!data) return <></>;

  return (
    <>
      {data && data.length !== 0 ? (
        <Individual submissions={data} />
      ) : (
        <div className="h-32 flex items-center justify-center">
          No one has submitted the form yet
        </div>
      )}

      {/*
      <Tabs
        aria-label="Options"
        color="primary"
        fullWidth={true}
        variant="underlined"
      >
        <Tab key="summary" title="Summary">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="question" title="Question">
          <Card>
            <CardBody>Excepteur sint occaecat cupidatat non proident,</CardBody>
          </Card>
        </Tab>
        <Tab key="individual" title="Individual">
          <Individual submissions={data} />
        </Tab>
      </Tabs> */}
    </>
  );
};
