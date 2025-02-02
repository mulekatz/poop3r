import { Link } from "react-router";

export default function Vechain() {
  return (
    <div className="flex flex-col xs:flex-row w-full justify-between items-center gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-center font-semibold">POWERED BY</h3>
        <Link
          to="https://vechain.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/images/vechain.png"
            alt="Colorfull Vechain Logo"
            className="h-10"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-center font-semibold">VOTE FOR US</h3>
        <Link
          to="https://governance.vebetterdao.org/apps/0x52239ee9403d804413a5dff852c4f6d6935ed8c0ee76634e9e54c5dcd46d8e47"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/images/vebetterdao-logo.svg"
            alt="Colorfull VebetterDAO Logo"
            className="h-10"
          />
        </Link>
      </div>
    </div>
  );
}
