"use client";
import { useState } from "react";
import { ConnectButton as WalletConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@nextui-org/button";

import { Sidebar } from "@/components/sidebar/index";

export const ConnectButton = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <WalletConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    color="primary"
                    type="button"
                    onClick={openConnectModal}
                  >
                    Connect Wallet
                  </Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button
                    color="primary"
                    type="button"
                    onClick={openChainModal}
                  >
                    Wrong network
                  </Button>
                );
              }

              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <Button
                    color="primary"
                    type="button"
                    // onClick={openAccountModal}
                    onClick={toggleSidebar}
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </Button>
                </div>
              );
            })()}
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
          </div>
        );
      }}
    </WalletConnectButton.Custom>
  );
};
