import Image from "next/image";

export default function Home() {
  return (
    <Image
      style={{
        maxWidth: "60vw",
        maxHeight: "60vh",
        width: "auto",
        height: "auto",
        margin: "auto",
      }}
      width={703}
      height={752}
      src="/images/groceries.png"
      alt="groceries"
      loading="lazy"
    />
  );
}
