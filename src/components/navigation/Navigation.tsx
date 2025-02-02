import {
  AdjustmentsHorizontalIcon,
  BookOpenIcon,
  HomeIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { useWallet } from "@vechain/dapp-kit-react";
import { Link } from "react-router";
import AddPickup from "./AddPickup";

export default function Navigation() {
  const { account } = useWallet();

  if (!account) {
    return null;
  }

  return (
    <div className="fixed bottom-0 w-full max-w-2xl">
      <div className="relative flex w-full py-0 bg-primary items-center justify-around">
        <Link
          to="/home"
          className="flex w-full h-full items-center justify-center"
        >
          <HomeIcon className="size-6 xs:size-6 text-primary-content" />
        </Link>
        <Link
          to="/statistics"
          className="flex w-full h-full items-center justify-center"
        >
          <BookOpenIcon className="size-6 xs:size-6 text-primary-content" />
        </Link>
        <AddPickup className="invisible" />
        <AddPickup className="absolute m-auto left-0 right-0 w-fit -top-8" />
        <Link
          to="/settings"
          className="flex w-full h-full items-center justify-center"
        >
          <AdjustmentsHorizontalIcon className="size-6 xs:size-6 text-primary-content" />
        </Link>
        <Link
          to="/info"
          className="flex w-full h-full items-center justify-center"
        >
          <InformationCircleIcon className="size-6 xs:size-6 text-primary-content" />
        </Link>
      </div>
    </div>
  );
}
