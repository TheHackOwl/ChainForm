"use client";
import React, { useMemo, useCallback } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";

import { useRequireConnect } from "@/hooks";

interface ConnectWalletModalProps {
  isOpen: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
}

/**
 * 连接钱包弹窗组件
 * @param {boolean} isOpen - 控制弹窗的显示状态
 * @param {Function} [onClose] - 可选，关闭弹窗的回调函数
 * @param {Function} [onConfirm] - 可选，确认操作的回调函数
 */
export const ConnectWalletModal: React.FC<ConnectWalletModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const { requireConnect, isPending } = useRequireConnect();
  const router = useRouter();

  // 默认的关闭处理函数
  const _onClose = useCallback(() => {
    router.replace("/");
  }, [router]);

  // 默认的确认处理函数
  const _onConfirm = useCallback(() => {
    requireConnect();
  }, [requireConnect]);

  // 合并传入的 onClose 和默认的 _onClose
  const handleOnClose = useMemo(() => onClose || _onClose, [onClose, _onClose]);

  // 合并传入的 onConfirm 和默认的 _onConfirm
  const handleOnConfirm = useMemo(
    () => onConfirm || _onConfirm,
    [onConfirm, _onConfirm]
  );

  return (
    <Modal backdrop="blur" isOpen={isOpen} onClose={handleOnClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          Connect Your Wallet to Continue
        </ModalHeader>
        <ModalBody>
          <p>To access all features, please connect your wallet.</p>
        </ModalBody>
        <ModalFooter>
          <Button variant="light" onPress={handleOnClose}>
            Cancel
          </Button>
          <Button
            color="primary"
            isLoading={isPending}
            onPress={handleOnConfirm}
          >
            Start Connecting
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

// PropTypes 类型检查
ConnectWalletModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
};
