"use client";
import React, { useEffect } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Spinner } from "@nextui-org/spinner";

import { useIndividualFormData } from "./hooks/useIndivualFormData";
import { SurveyNavigator } from "./surveyNavigator";

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
    console.log(currentFormData, "currentFormData");
  }, [currentFormData]);

  return (
    <div className={cardGap()}>
      <Card>
        <CardBody className="flex items-center justify-center">
          <SurveyNavigator
            initialSurvey={currentIndex}
            totalSurveys={submissions.length}
            onSurveyChange={(val) => setIndividualIndex(val)}
          />
        </CardBody>
      </Card>
      {!loading && currentFormData ? (
        <AnswerForm
          formData={currentFormData}
          formId={currentFormData.originalFormID}
          isDisable={true}
        />
      ) : (
        <Spinner className="mt-16" />
      )}
    </div>
  );
};
