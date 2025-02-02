interface UserCardProps {
  account: string | null;
}

export default function UserCard({ account }: UserCardProps) {
  return (
    <div className="card bg-base-300 w-full shadow-sm">
      <div className="card-body">
        <h2 className="card-title flex-col items-start">
          Willkommen,
          <p className="text-sm max-w-md truncate">{account}</p>
        </h2>
        {/*         <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p> */}
        {/*         <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div> */}
      </div>
    </div>
  );
}
