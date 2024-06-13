import { useAccount, useConnect } from "wagmi";
import { injected } from "wagmi/connectors";

export const useRequireConect = () => {
  const { isConnected } = useAccount();
  const { connectAsync } = useConnect();

  const requireConnect = async () => {
    if (isConnected) return isConnected;

    await connectAsync({ connector: injected() });
  };

  return {
    requireConnect,
  };
};
