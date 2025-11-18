interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

export default function Avatar({ src, alt, size = 150 }: AvatarProps) {
  return <img src={src} alt={alt} width={size} height={size} style={{ borderRadius: "10px" }} />;
}
