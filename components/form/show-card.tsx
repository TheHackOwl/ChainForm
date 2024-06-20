"use client";
import React from "react";
import { useReadContract } from "wagmi";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

import {
  CHAINFORM_ABI,
  CHAINFORM_ADDRESS,
} from "@/constants/contract/chainForm";
interface ShowCardProps {
  id: bigint;
}

export const ShowCard: React.FC<ShowCardProps> = ({ id }) => {
  const router = useRouter();

  const { data, isLoading } = useReadContract({
    abi: CHAINFORM_ABI,
    address: CHAINFORM_ADDRESS,
    functionName: "getForm",
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
