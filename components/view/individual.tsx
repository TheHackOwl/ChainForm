"use client";
import React from "react";
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
          key={currentIndex}
          formData={currentFormData}
          formId={currentFormData.originalFormID}
          isDisable={true}
        />
      ) : loading ? (
        <Spinner className="mt-16" />
      ) : (
        <div className="flex items-center justify-center">
          Get data is empty
        </div>
      )}
    </div>
  );
};
