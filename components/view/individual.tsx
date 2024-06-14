"use client";
import React, { useEffect } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Pagination } from "@nextui-org/pagination";

import { useIndividualFormData } from "./hooks/useIndivualFormData";

import { AnswerForm } from "@/components/answer/answer-form";
import { cardGap } from "@/components/primitives";
import { SubmissionType } from "@/types";

interface IndividualProps {
  submissions: SubmissionType[];
}

export const Individual: React.FC<IndividualProps> = ({ submissions }) => {
  const { currentIndex, setIndividualIndex, currentFormData, loading } =
    useIndividualFormData(submissions, 1);

  useEffect(() => {
    if (currentFormData) {
      currentFormData.originalFormID;
    }
  }, [currentFormData]);

  return (
    <div className={cardGap()}>
      <Card>
        <CardBody className="flex items-center justify-center">
          <Pagination
            showControls
            initialPage={1}
            total={submissions.length}
            onChange={(page) => {
              setIndividualIndex(page);
            }}
          />
        </CardBody>
      </Card>
      {currentFormData && (
        <AnswerForm
          formData={currentFormData}
          formId={currentFormData.originalFormID}
          isDisable={true}
        />
      )}
    </div>
  );
};
