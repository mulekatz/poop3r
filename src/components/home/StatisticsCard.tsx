export default function StatisticsCard() {
  return (
    <div className="card bg-base-300 w-full shadow-sm">
      <div className="card-body gap-8">
        <h2 className="card-title">Statistics</h2>
        <div className="card-actions flex-col gap-12">
          <div className="flex flex-col w-full gap-4">
            <h2 className="badge badge-secondary w-full p-4 font-medium">
              Last 7 days
            </h2>
            <div className="flex w-full gap-4 justify-between">
              <p>Scooped poop:</p>
              <div className="badge badge-outline">
                7
                <img
                  src="/images/poop.svg"
                  alt="Poop Logo"
                  className="size-4 fill-white"
                />
              </div>
            </div>
            <div className="flex w-full gap-4 justify-between">
              <p>Earned B3tr:</p>
              <div className="badge badge-outline">
                47
                <img
                  src="/images/b3tr-token.svg"
                  alt="Better Token Logo"
                  className="size-4"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-4">
            <h2 className="badge badge-secondary w-full p-4 font-medium">
              Overall
            </h2>
            <div className="flex w-full gap-4 justify-between">
              <p>Scooped poop:</p>
              <div className="badge badge-outline">
                7683
                <img
                  src="/images/poop.svg"
                  alt="Poop Logo"
                  className="size-4 fill-white"
                />
              </div>
            </div>
            <div className="flex w-full gap-4 justify-between">
              <p>Earned B3tr:</p>
              <div className="badge badge-outline">
                534645745
                <img
                  src="/images/b3tr-token.svg"
                  alt="Better Token Logo"
                  className="size-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
