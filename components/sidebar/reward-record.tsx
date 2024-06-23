"use client";
import { useAccount, usePublicClient } from "wagmi";
import React, { useEffect, useState } from "react";
import { formatEther } from "viem";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import clsx from "clsx";

import {
  CHAINFORM_ABI,
  CHAINFORM_ADDRESS,
} from "@/constants/contract/chainForm";
import { formatTimestampToDate } from "@/lib/utils";

interface RecordType {
  date: string;
  changeType: number;
  amount: string;
}

interface RwardRecordProps {}

export const RewardRecord: React.FC<RwardRecordProps> = () => {
  const { address } = useAccount();
  const publicCient = usePublicClient();
  const [records, setRecords] = useState<RecordType[]>();
  const cellStyle = clsx("text-center");

  useEffect(() => {
    getEventLog();
  }, []);

  const getEventLog = async () => {
    const logs = await publicCient?.getContractEvents({
      abi: CHAINFORM_ABI,
      address: CHAINFORM_ADDRESS,
      eventName: "RewardChanged",
      fromBlock: BigInt(0),
      args: {
        user: address,
      },
    });

    if (!logs) return;
    const records: RecordType[] = logs?.map((item) => {
      return {
        date: formatTimestampToDate(Number(item.args.timestamp) * 1000),
        changeType: item.args.changeType || 0,
        amount: item.args.rewardAmount
          ? formatEther(item.args.rewardAmount)
          : "0",
      };
    });

    setRecords(records);
  };

  return (
    <div className="">
      <Table
        fullWidth
        aria-label=" "
        classNames={{
          base: "max-h-[520px] overflow-y-scroll no-scrollbar",
        }}
        isHeaderSticky={true}
      >
        <TableHeader>
          <TableColumn className={cellStyle}>DATE</TableColumn>
          <TableColumn className={cellStyle}>TYPE</TableColumn>
          <TableColumn className={cellStyle}>AMOUNT</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No record"}>
          {records
            ? records.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell className={cellStyle}>{item.date}</TableCell>
                    <TableCell className={cellStyle}>
                      {item.changeType == 1 ? "Reward" : "Claim"}
                    </TableCell>
                    <TableCell className={cellStyle}>
                      {item.changeType == 1 ? (
                        <span className="text-lime-600">{`+${item.amount}`}</span>
                      ) : (
                        <span className="text-red-600">{`-${item.amount}`}</span>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })
            : []}
        </TableBody>
      </Table>
    </div>
  );
};
