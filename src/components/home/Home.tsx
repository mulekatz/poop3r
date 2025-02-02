import { useWallet } from "@vechain/dapp-kit-react";
import UserCard from "./UserCard";
import StatisticsCard from "./StatisticsCard";

export default function Home() {
  const { account } = useWallet();

  return (
    <section className="flex flex-col w-full flex-1 items-center gap-4">
      <UserCard account={account} />
      <StatisticsCard />
    </section>
  );
}
