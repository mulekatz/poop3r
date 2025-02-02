import { useWallet } from "@vechain/dapp-kit-react";
import Connect from "../connect/Connect";
import Vechain from "../header/Vechain";
import { Navigate } from "react-router";

export default function LandingPage() {
  const { account } = useWallet();

  if (account) {
    return <Navigate to="/home" replace />;
  }

  return (
    <section className="flex flex-col w-full flex-1 gap-12 justify-between">
      {!account && <Connect />}
      <Vechain />
    </section>
  );
}
