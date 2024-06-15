import { useReadContract } from "wagmi";
import { useEffect } from "react";

import { Individual } from "./individual";

import { ABI, CONTRACT_ADDRESS, GET_SUBMISSIONS } from "@/constants/contract";
import { SubmissionType } from "@/types";

interface UseReadContractReturnType {
  readonly data: SubmissionType[] | undefined;
}

interface ResponsesProps {
  formId: string;
}

export const Responses: React.FC<ResponsesProps> = ({ formId }) => {
  const { data }: UseReadContractReturnType = useReadContract({
    abi: ABI,
    address: CONTRACT_ADDRESS,
    functionName: GET_SUBMISSIONS,
    args: [BigInt(formId)],
  });

  useEffect(() => {
    console.log(data, "data");
  }, [data]);

  // Todo： 加载动画
  if (!data) return null;

  return (
    <>
      <Individual submissions={data} />

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
