"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { useReadContract } from "wagmi";

import { formatTimestampToDate } from "@/lib/utils";
import {
  CHAINFORM_ABI,
  CHAINFORM_ADDRESS,
} from "@/constants/contract/chainForm";
import { FormItemSkeleton } from "@/components/form-ui/form-item-skeleton";
import { PublicIcon, PersonsIcon, CreateIcon } from "@/components/icons";

interface FormInfoCardProps {
  id: bigint;
  children?: React.ReactNode;
}

export const FormInfoCard: React.FC<FormInfoCardProps> = ({ id, children }) => {
  const { data, isLoading } = useReadContract({
    abi: CHAINFORM_ABI,
    address: CHAINFORM_ADDRESS,
    functionName: "getForm",
    args: [id],
  });

  if (isLoading || !data) {
    return <FormItemSkeleton />;
  }
  console.log(data);

  return (
    <Card isBlurred className="p-6" shadow="lg">
      <CardHeader className="text-left">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{data.name}</h2>
          <div className="min-h-8	 mt-2 text-xs text-gray-400 break-all	line-clamp-2">
            {data.description}
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible">
        {/* <div className="h-28">1</div> */}
        <div className="flex justify-between gap-2">
          <Chip
            className="text-xs"
            color="primary"
            startContent={<PublicIcon />}
            variant="bordered"
          >
            Public
          </Chip>

          <Chip
            className="text-xs"
            color="primary"
            startContent={<PersonsIcon />}
            variant="bordered"
          >
            392
          </Chip>
          <Chip
            className="text-xs"
            color="primary"
            startContent={<CreateIcon />}
            variant="bordered"
          >
            {formatTimestampToDate(Number(data.createdAt) * 1000)}
          </Chip>
        </div>
      </CardBody>
      {children}
    </Card>
  );
};
