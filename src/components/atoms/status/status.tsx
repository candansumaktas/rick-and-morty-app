interface Props {
  status: string;
}

export default function StatusBadge({ status }: Props) {
  const colors = {
    alive: "bg-green-100 text-green-800",
    dead: "bg-red-100 text-red-800",
    unknown: "bg-gray-100 text-gray-800",
  } as const; 
  
  const colorClass = colors[status.toLowerCase() as keyof typeof colors] || colors.unknown;

  return (
    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${colorClass}`}>
      {status}
    </span>
  );
}
