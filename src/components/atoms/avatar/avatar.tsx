 
interface Props {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
}

export default function Avatar({ src, alt = "", size = 96, className = "" }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-full object-cover border-4 border-indigo-200 ${className}`}
    />
  );
}
