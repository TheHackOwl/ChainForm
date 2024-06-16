"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { useReadContract } from "wagmi";

import { Responses } from "./responses";

import { AnswerForm } from "@/components/answer/answer-form";
import { FormDataType } from "@/types";
import { ABI, CONTRACT_ADDRESS, GET_FORM } from "@/constants/contract";
import { withWallet } from "@/components/hoc/withWallet";

interface UseReadContractReturnType {
  readonly data: FormDataType | undefined;
  // 其他属性
}

interface ViewTabsProps {
  id: string;
}

const ViewTabsWappedComponent: React.FC<ViewTabsProps> = ({ id }) => {
  const { data: formData }: UseReadContractReturnType = useReadContract({
    abi: ABI,
    address: CONTRACT_ADDRESS,
    functionName: GET_FORM,
    args: [BigInt(id)],
  });

  // Todo: 加载动画
  if (!formData) return null;

  return (
    <Tabs aria-label="Options" className="relative" color="primary">
      <Tab key="questions" title="Questions">
        <AnswerForm formData={formData} formId={id} isDisable={true} />
      </Tab>
      <Tab key="responses" title="Responses">
        <Responses formId={id} />
      </Tab>
      <Tab key="setting" title="Setting">
        <Card>
          <CardBody>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </CardBody>
        </Card>
      </Tab>
    </Tabs>
  );
};

export const ViewTabs = withWallet<ViewTabsProps>(ViewTabsWappedComponent);
