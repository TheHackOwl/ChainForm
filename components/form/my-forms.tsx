"use client";
import { useReadContract, useAccount } from "wagmi";

import { ShowCard } from "./show-card";

import { abi } from "@/constants/abi";
import { contractAddress } from "@/constants/index";

interface MyFormsProps {}

export const MyForms: React.FC<MyFormsProps> = () => {
  const { address } = useAccount();

  const { data, isLoading } = useReadContract({
    abi,
    address: contractAddress,
    functionName: "getMyForms",
    account: address,
    args: [],
  });

  if (isLoading) {
    return <>加载中</>;
  }

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {data && data.map((item, index) => <ShowCard key={index} id={item} />)}
    </div>
  );
};
