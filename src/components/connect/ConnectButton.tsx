import { WalletIcon } from "@heroicons/react/24/solid";
import { useWalletModal } from "@vechain/dapp-kit-react";

export default function ConnectButton({
  children,
}: {
  children?: React.ReactNode;
}) {
  const modal = useWalletModal();

  return (
    <button onClick={modal.open} className="btn btn-primary w-full gap-4">
      <WalletIcon className="size-6" />
      {children || "Connect"}
    </button>
  );
}
