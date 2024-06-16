"use client";

import { useReadContract, useAccount } from "wagmi";
import { CardFooter } from "@nextui-org/card";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";

import { FormInfoCard } from "./form-info-card";
import { useShare } from "./hooks";

import { ABI, GET_MY_FORMS, CONTRACT_ADDRESS } from "@/constants/contract";
import { ShareButton } from "@/components/form/share-button";
import { FormsSkeleton } from "@/components/form-ui/forms-skeleton";
import { FormsLayout } from "@/components/form-ui/forms-layout";
import { withWallet } from "@/components/hoc/withWallet";
import { ViewIcon } from "@/components/icons";

interface OwnedFormsProps {}

const OwnedFormsWrappedComponent: React.FC<OwnedFormsProps> = () => {
  const router = useRouter();
  const shareFn = useShare();
  const { address } = useAccount();

  const { data, isLoading } = useReadContract({
    abi: ABI,
    address: CONTRACT_ADDRESS,
    functionName: GET_MY_FORMS,
    account: address,
    args: [],
  });

  if (isLoading) {
    return <FormsSkeleton />;
  }

  const toView = (id: string): void => {
    router.push("/forms/view/" + id);
  };

  return (
    <FormsLayout>
      {data &&
        data.map((item, index) => (
          <FormInfoCard key={index} id={item}>
            <CardFooter className="gap-2">
              <ShareButton
                className="flex-1"
                onClick={() => {
                  shareFn(item.toString());
                }}
              />
              <Button
                className="flex-1"
                color="primary"
                startContent={<ViewIcon />}
                onClick={() => toView(item.toString())}
              >
                View
              </Button>
            </CardFooter>
          </FormInfoCard>
        ))}
    </FormsLayout>
  );
};

export const OwnedForms = withWallet<OwnedFormsProps>(
  OwnedFormsWrappedComponent
);
