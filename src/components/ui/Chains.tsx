import Image from "next/image";

export default function Chains() {
  return (
    <div className="flex items-center gap-1 bg-neutral-950 px-3 py-2 rounded-full">
      <Image
        width={16}
        height={16}
        alt="sui-circle-logo"
        src="/sui-circle-logo.webp"
      />
      <span className="mx-0.5 text-base font-medium">Sui</span>
    </div>
  );
}
