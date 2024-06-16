import { NextPage } from "next";
import { useAccount } from "wagmi";
import { ComponentType } from "react";

import { ConnectWalletModal } from "@/components/connect-wallet-modal";

/**
 * 高阶组件：检查用户是否已连接钱包
 * @param WrappedComponent - 需要包裹的组件
 * @param FallbackComponent - 可选参数，当未连接钱包时显示的组件，默认为 ConnectWalletModal
 * @returns 高阶组件，检查钱包连接状态
 */
export const withWallet = <P extends Object>(
  WrappedComponent: NextPage<P>,
  FallbackComponent?: ComponentType<any>
) => {
  /**
   * 包装组件：根据钱包连接状态决定显示内容
   * @param props - 被包裹组件的属性
   * @returns 已连接钱包则显示包裹组件，否则显示 FallbackComponent
   */
  const Wrapper: NextPage<P> = (props) => {
    const { isConnected } = useAccount();

    const getFallbackComponent = () => {
      if (FallbackComponent) {
        return <FallbackComponent />;
      }

      return <ConnectWalletModal isOpen={true} />;
    };

    return isConnected ? (
      <WrappedComponent {...props} />
    ) : (
      getFallbackComponent()
    );
  };

  return Wrapper;
};
