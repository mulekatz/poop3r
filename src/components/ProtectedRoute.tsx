import { Navigate, Outlet } from "react-router";
import { useWallet } from "@vechain/dapp-kit-react";

export default function ProtectedRoute() {
  const { account } = useWallet();

  if (!account) {
    return <Navigate to="/connect" replace />;
  }

  return <Outlet />;
}
