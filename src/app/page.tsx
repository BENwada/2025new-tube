import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center gap-2">
      <Image src="/logo.svg" height={50} width={50} alt="logo" />
      <p className="text-xl font-semibold tracking-tight">New Tube</p>
    </div>
  );
}
