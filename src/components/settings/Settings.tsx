import { WalletIcon } from "@heroicons/react/24/solid";
import { useWallet } from "@vechain/dapp-kit-react";

export default function Settings() {
  const { disconnect } = useWallet();

  return (
    <section className="flex flex-col w-full flex-1 items-center gap-4">
      <div className="card bg-base-300 w-full shadow-sm">
        <div className="card-body gap-4 xs:gap-8">
          <h2 className="card-title">Disconnect your wallet</h2>
          <div className="flex flex-col gap-4">
            <div className="card-actions justify-end">
              <button
                onClick={() => {
                  disconnect();
                }}
                className="btn btn-primary w-full gap-4"
              >
                <WalletIcon className="size-6" />
                Disconnect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
