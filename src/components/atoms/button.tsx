interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "5px 10px",
        margin: "5px",
        cursor: "pointer",
        borderRadius: "5px",
        border: "1px solid #333",
        backgroundColor: "#eee"
      }}
    >
      {children}
    </button>
  );
}
