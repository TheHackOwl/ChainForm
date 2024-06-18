"use client";
import React, { useCallback, useState } from "react";

import { Stepper, Step } from "@/components/stepper";
export default function Page() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);

  const [step, setStep] = useState(0);

  const handleStepChange = (stepNumber: number) => {
    console.log("Step changed to:", stepNumber);
  };

  const onSum = useCallback((num2: number) => {
    console.log("num2: ", num2);
    console.log("num:", num);

    setSum(num2 + num);
  }, []);

  return (
    <div className="p-4">
      <Stepper activeStep={step} onStepChange={(step) => setStep(step)}>
        <Step> Crea </Step>
        <Step> Crea </Step>
        <Step> Crea </Step>
        <Step> Crea </Step>
        <Step> Crea </Step>
      </Stepper>
      <div>sum: {sum}</div>
      <button onClick={() => onSum(1)}>onSum</button>
      <button
        onClick={() => {
          setNum(sum + 1);
        }}
      >
        changeNum
      </button>
    </div>
  );
}
