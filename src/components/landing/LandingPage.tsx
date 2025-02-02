import Connect from "../connect/Connect";
import Vechain from "../header/Vechain";

export default function LandingPage() {
  return (
    <section className="flex flex-col w-full flex-1 gap-12 justify-between">
      <Connect />
      <Vechain />
    </section>
  );
}
