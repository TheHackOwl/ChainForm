import { useAccount, useConnect } from "wagmi";
import { injected } from "wagmi/connectors";

export const useRequireConnect = () => {
  const { isConnected } = useAccount();
  const { connectAsync, isPending } = useConnect();

  const requireConnect = async () => {
    if (isConnected) return isConnected;

    try {
      await connectAsync({ connector: injected() });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    requireConnect,
    isPending,
  };
};
