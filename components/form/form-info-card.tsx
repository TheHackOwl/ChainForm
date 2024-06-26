"use client";

import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { useReadContracts } from "wagmi";

import { FormBaseInfo, SettingsType } from "@/types";
import { formatTimestampToDate } from "@/lib/utils";
import {
  CHAINFORM_ABI,
  CHAINFORM_ADDRESS,
} from "@/constants/contract/chainForm";
import { FormItemSkeleton } from "@/components/form-ui/form-item-skeleton";
import { PublicIcon, PersonsIcon, DeallineIcon } from "@/components/icons";

interface FormInfoCardProps {
  id: bigint;
  children?: React.ReactNode;
  changeDisable?: (val: boolean) => void;
}

export const FormInfoCard: React.FC<FormInfoCardProps> = ({
  id,
  children,
  changeDisable,
}) => {
  const { data, isLoading } = useReadContracts({
    contracts: [
      {
        abi: CHAINFORM_ABI,
        address: CHAINFORM_ADDRESS,
        functionName: "getForm",
        args: [id],
      },
      {
        abi: CHAINFORM_ABI,
        address: CHAINFORM_ADDRESS,
        functionName: "getSubmissions",
        args: [id],
      },
    ],
  });

  const [fromBaseInfo, setFromBaseInfo] = useState<FormBaseInfo | null>(null);
  const [settings, setSettings] = useState<SettingsType | null>(null);
  const [personCount, setPersonCount] = useState<number | 0>(0);

  useEffect(() => {
    if (data) {
      const formInfo = data[0].result;
      const submissions = data[1].result;

      setPersonCount(submissions?.length || 0);

      if (formInfo) {
        setFromBaseInfo(formInfo[0] as FormBaseInfo);
        setSettings(formInfo[1] as SettingsType);

        const expireAt = Number(formInfo[1].expireAt);

        const curTime = Date.now();

        if (expireAt <= curTime) {
          changeDisable && changeDisable(true);
        }
      }
    }
  }, [data]);

  if (isLoading || !fromBaseInfo) {
    return <FormItemSkeleton />;
  }

  return (
    <Card isBlurred className="p-6" shadow="lg">
      <CardHeader className="text-left">
        <div className="h-36">
          <h2 className="text-2xl font-bold text-gray-900 line-clamp-3">
            {fromBaseInfo.name}
          </h2>
          <div className="min-h-8	 mt-2 text-sm text-gray-400 break-all	line-clamp-2">
            {fromBaseInfo.description}
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible">
        <div className="flex justify-between gap-2">
          <Chip
            className="text-xs"
            color="primary"
            startContent={<PublicIcon />}
            variant="bordered"
          >
            {settings?.isPublic ? "Public" : "Private"}
          </Chip>

          <Chip
            className="text-xs"
            color="primary"
            startContent={<PersonsIcon />}
            variant="bordered"
          >
            {personCount}
          </Chip>
          <Chip
            className="text-xs"
            color="primary"
            startContent={<DeallineIcon />}
            variant="bordered"
          >
            {formatTimestampToDate(Number(settings?.expireAt))}
          </Chip>
        </div>
      </CardBody>
      {children}
    </Card>
  );
};
