"use client";
// import { FormsLayout } from "@/components/form-ui/forms-layout";
import { usePublicClient } from "wagmi";
import { useEffect, useState } from "react";
import { CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

import { useShare } from "./hooks";
import { FormInfoCard } from "./form-info-card";

import {
  CHAINFORM_ABI,
  CHAINFORM_ADDRESS,
} from "@/constants/contract/chainForm";
import { ShareButton } from "@/components/form/share-button";
import { FormsSkeleton } from "@/components/form-ui/forms-skeleton";
import { FormsLayout } from "@/components/form-ui/forms-layout";
import { FillOutIcon } from "@/components/icons";

interface HomeFormsProps {}

export const HomeForms: React.FC<HomeFormsProps> = () => {
  const router = useRouter();
  const shareFn = useShare();
  const publicClient = usePublicClient();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [formIds, setFormIds] = useState<bigint[]>([]);

  useEffect(() => {
    getFormsId();
  }, []);

  const getFormsId = async () => {
    const logs = await publicClient?.getContractEvents({
      address: CHAINFORM_ADDRESS,
      abi: CHAINFORM_ABI,
      eventName: "FormCreated",
      fromBlock: BigInt(0),
    });

    if (!logs) return;
    const publicLogs = logs.filter(
      (log) => log.args.isPublic && log.args.formId != undefined
    );
    const ids = publicLogs.map((log) => log.args.formId);

    setFormIds(ids as bigint[]);
    setIsLoading(false);
  };

  const toAnswer = (id: string): void => {
    router.push("/forms/answer/" + id);
  };

  if (isLoading) return <FormsSkeleton />;

  return (
    <FormsLayout>
      {formIds.map((item, index) => (
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
              startContent={<FillOutIcon />}
              onClick={() => {
                toAnswer(item.toString());
              }}
            >
              Fill out
            </Button>
          </CardFooter>
        </FormInfoCard>
      ))}
    </FormsLayout>
  );
};
