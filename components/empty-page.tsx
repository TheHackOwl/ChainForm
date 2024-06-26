"use client";

import React from "react";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
interface EmptyPageProps {}

export const EmptyPage: React.FC<EmptyPageProps> = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/forms/create");
  };

  return (
    <div className="w-full h-full flex justify-center items-start mt-36">
      <div className="text-center">
        <h1 className="text-3xl font-bold">No Forms Found</h1>
        <p className="text-gray-500">Create a new form to get started.</p>
        <Button className="mt-4" color="primary" onClick={handleClick}>
          Create
        </Button>
      </div>
    </div>
  );
};
