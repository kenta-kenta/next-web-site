import Image from "next/image";

export default function Header() {
  return (
    <header className="flex">
      <Image src="/next.svg" alt="ロゴ" width={200} height={50} priority />
    </header>
  );
}
