interface Props {
  src: string;
  alt: string;
  size?: number;
}

export default function Avatar({ src, alt, size = 200 }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="rounded-full border-4 border-gray-100 shadow-md object-cover"
    />
  );
}
