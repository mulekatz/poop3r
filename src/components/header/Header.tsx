export default function Header() {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img
            src="/images/poop3r-logo.svg"
            alt="POOP3r Logo"
            className="w-full h-full"
          />
          <div className="flex justify-between items-center gap-2 h-6 text-sm xs:text-base px-2 xs:px-4">
            <h2 className="tracking-widest">Scoop</h2>
            <div className="bg-primary h-2 xs:h-3 w-full"></div>
            <h2 className="tracking-widest">Dispose</h2>
            <div className="bg-primary h-2 xs:h-3 w-full"></div>
            <h2 className="tracking-widest">Earn</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
