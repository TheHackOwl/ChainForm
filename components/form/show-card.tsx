"use client";
import React from "react";
import { useReadContract } from "wagmi";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

import { ABI, CONTRACT_ADDRESS, GET_FORM } from "@/constants/contract";
interface ShowCardProps {
  id: bigint;
}

export const ShowCard: React.FC<ShowCardProps> = ({ id }) => {
  const router = useRouter();

  const { data, isLoading } = useReadContract({
    abi: ABI,
    address: CONTRACT_ADDRESS,
    functionName: GET_FORM,
    args: [id],
  });

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  const handleShareClick = () => {
    router.push(`/forms/answer/${id}`);
  };

  return (
    <Card isPressable shadow="sm">
      <CardBody className="overflow-visible">
        <h2>{data.name}</h2>
        <p className="text-default-500">{data.description}</p>
      </CardBody>
      <CardFooter>
        <div>
          <Button color="primary" onClick={handleShareClick}>
            To answer page
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
