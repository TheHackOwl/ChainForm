"use client";

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
import { EmptyPage } from "@/components/empty-page";
interface HomeFormsProps {}

export const HomeForms: React.FC<HomeFormsProps> = () => {
  const router = useRouter();
  const shareFn = useShare();
  const publicClient = usePublicClient();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [formIds, setFormIds] = useState<bigint[]>([]);
  const [disableds, setDisableds] = useState<boolean[]>([]);

  useEffect(() => {
    getFormsId();
  }, []);

  const getFormsId = async () => {
    const logs = await publicClient?.getContractEvents({
      address: CHAINFORM_ADDRESS,
      abi: CHAINFORM_ABI,
      eventName: "FormCreated",
      fromBlock: BigInt(0),
      args: {
        isPublic: true,
      },
    });

    if (!logs) return;
    const publicLogs = logs.filter(
      (log) => log.args.isPublic && log.args.formId != undefined
    );
    const ids = publicLogs.map((log) => log.args.formId);

    setFormIds(ids as bigint[]);
    setIsLoading(false);
  };

  const changeDisable = (val: boolean, index: number) => {
    setDisableds((prev) => {
      const newList = [...prev];

      newList[index] = val;

      return newList;
    });
  };

  const toAnswer = (id: string): void => {
    router.push("/forms/answer/" + id);
  };

  if (isLoading) return <FormsSkeleton />;

  if (formIds.length === 0) return <EmptyPage />;

  return (
    <FormsLayout>
      {formIds.map((item, index) => (
        <FormInfoCard
          key={index}
          changeDisable={(val) => {
            changeDisable(val, index);
          }}
          id={item}
        >
          <CardFooter className="gap-8">
            <ShareButton
              className="flex-1"
              isDisabled={disableds[index]}
              onClick={() => {
                shareFn(item.toString());
              }}
            />
            <Button
              className="flex-1"
              color="primary"
              isDisabled={disableds[index]}
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
