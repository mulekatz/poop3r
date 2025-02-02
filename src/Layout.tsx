import { Outlet } from "react-router";
import { DAppKitProvider } from "@vechain/dapp-kit-react";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import { NETWORK, NODE_URL, WALLETS } from "./config";

export default function Layout() {
  return (
    <>
      <DappKitContainer>
        <div className="relative flex flex-col w-full h-full min-h-screen items-center">
          <div className="fixed -z-50 top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full bg-[url(/images/poop-background.svg)] bg-contain bg-bottom bg-no-repeat opacity-15" />
          <main className="flex flex-col w-full max-w-2xl flex-1 items-center p-2 pb-32 gap-4">
            <Header />
            <Outlet />
            <Navigation />
          </main>
        </div>
      </DappKitContainer>
    </>
  );
}

function DappKitContainer({ children }: { children: React.ReactNode }) {
  return (
    <DAppKitProvider
      nodeUrl={NODE_URL}
      genesis={NETWORK}
      usePersistence
      allowedWallets={[WALLETS]}
    >
      {children}
    </DAppKitProvider>
  );
}
