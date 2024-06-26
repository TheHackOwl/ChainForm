"use client";

import { useReadContract, useAccount } from "wagmi";
import { CardFooter } from "@nextui-org/card";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";

import { FormInfoCard } from "./form-info-card";
import { useShare } from "./hooks";

import {
  CHAINFORM_ABI,
  CHAINFORM_ADDRESS,
} from "@/constants/contract/chainForm";
import { ShareButton } from "@/components/form/share-button";
import { FormsSkeleton } from "@/components/form-ui/forms-skeleton";
import { FormsLayout } from "@/components/form-ui/forms-layout";
import { withWallet } from "@/components/hoc/withWallet";
import { ViewIcon } from "@/components/icons";
import { EmptyPage } from "@/components/empty-page";

interface OwnedFormsProps {}

const OwnedFormsWrappedComponent: React.FC<OwnedFormsProps> = () => {
  const router = useRouter();
  const shareFn = useShare();
  const { address } = useAccount();

  const { data, isLoading } = useReadContract({
    abi: CHAINFORM_ABI,
    address: CHAINFORM_ADDRESS,
    functionName: "getMyForms",
    account: address,
    args: [],
  });

  if (isLoading) {
    return <FormsSkeleton />;
  }

  const toView = (id: string): void => {
    router.push("/forms/view/" + id);
  };

  if (!data || data?.length == 0) return <EmptyPage />;

  return (
    <FormsLayout>
      {data &&
        data.map((item, index) => (
          <FormInfoCard key={index} id={item}>
            <CardFooter className="gap-8">
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
