"use client";

import React, { useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

interface RemindModalProps {
  isOpen: boolean;
  content: React.ReactNode;
  onConfirm?: () => void;
}

export const RemindModal: React.FC<RemindModalProps> = ({
  isOpen,
  content,
  onConfirm,
}) => {
  const router = useRouter();
  // 默认的确认处理函数
  const _onConfirm = useCallback(() => {
    router.back();
  }, []);

  // 合并传入的 onConfirm 和默认的 _onConfirm
  const handleOnConfirm = useMemo(
    () => onConfirm || _onConfirm,
    [onConfirm, _onConfirm]
  );

  return (
    <Modal backdrop="blur" hideCloseButton={true} isOpen={isOpen}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Tips</ModalHeader>
        <ModalBody>{content}</ModalBody>
        <ModalFooter>
          <Button color="primary" onPress={handleOnConfirm}>
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
