import "@dialectlabs/react-ui/index.css";

import { DialectSolanaSdk } from "@dialectlabs/react-sdk-blockchain-solana";
import { NotificationsButton } from "@dialectlabs/react-ui";


// Dialect Notication Component
export const DialectNotficationComponent = () => {
  const dappAddress = process.env.NEXT_PUBLIC_DAPP_ADDRESS;
  if (!dappAddress) {
    throw new Error("DAPP_ADDRESS is not set, please check your .env.example file for more information.");
  }

  return (
    <DialectSolanaSdk
      dappAddress={dappAddress}
      config={{
        environment: "production",
      }}
    >
      <NotificationsButton />
    </DialectSolanaSdk>
  );
};
