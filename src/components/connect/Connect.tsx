import ConnectButton from "./ConnectButton";

export default function Connect() {
  return (
    <section className="flex flex-col w-full gap-4">
      <div className="card bg-base-300 w-full shadow-sm">
        <div className="card-body gap-4 xs:gap-8">
          <h2 className="card-title">Please connect.</h2>
          <div className="flex flex-col gap-4">
            <p>To use POOP3r you need to connect with your Vechain wallet.</p>
            <div className="card-actions justify-end">
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>
      <div className="divider">OR</div>
      <div className="card bg-base-300 w-full shadow-sm">
        <div className="card-body gap-4 xs:gap-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <h2 className="card-title">Get your VeWorld wallet now!</h2>
            <a
              href="https://www.veworld.com/"
              className="flex w-full sm:w-fit"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn w-full gap-4">
                <img src="/images/veworld.svg" alt="" className="size-6" />
                VeWorld
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
