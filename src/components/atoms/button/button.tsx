interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className = "" }: Props) {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded-lg font-medium transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
