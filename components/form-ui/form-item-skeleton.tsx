"use client";
import { memo } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Skeleton } from "@nextui-org/skeleton";
import { Button } from "@nextui-org/button";

export const FormItemSkeleton = memo(() => {
  return (
    <Card isBlurred className="p-6" shadow="lg">
      <CardHeader className="text-left">
        <div className="w-full">
          <Skeleton className="w-1/2 h-6 mb-2 rounded-lg" />
          <Skeleton className="w-full h-4 mt-2 rounded-lg" />
        </div>
      </CardHeader>
      <CardBody className="overflow-visible">
        <div className="flex justify-between gap-2">
          <Skeleton className="rounded-lg">
            <Chip className="text-xs" color="primary" variant="bordered">
              <Skeleton className="w-12 h-4" />
            </Chip>
          </Skeleton>
          <Skeleton className="rounded-lg">
            <Chip className="text-xs" color="primary" variant="bordered">
              <Skeleton className="w-12 h-4" />
            </Chip>
          </Skeleton>
          <Skeleton className="rounded-lg">
            <Chip className="text-xs" color="primary" variant="bordered">
              <Skeleton className="w-20 h-4" />
            </Chip>
          </Skeleton>
        </div>
      </CardBody>
      <CardFooter className="flex gap-4">
        <Skeleton className="flex-1 rounded-lg">
          <Button isDisabled className="flex-1" variant="bordered" />
        </Skeleton>
        <Skeleton className="flex-1 rounded-lg">
          <Button isDisabled className="flex-1" color="primary" />
        </Skeleton>
      </CardFooter>
    </Card>
  );
});

FormItemSkeleton.displayName = "FormItemSkeleton";
