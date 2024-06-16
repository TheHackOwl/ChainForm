import React from "react";

import { FormItemSkeleton } from "./form-item-skeleton";
import { FormsLayout } from "./forms-layout";

interface FormsSkeletonProps {}

export const FormsSkeleton: React.FC<FormsSkeletonProps> = () => {
  return (
    <FormsLayout>
      {Array.from({ length: 6 }, (_, index) => {
        return <FormItemSkeleton key={index} />;
      })}
    </FormsLayout>
  );
};
