import Image from "next/image";

export default function Chains() {
  return (
    <div className="flex items-center gap-1 bg-neutral-950 px-3 py-2 rounded-full">
      <span className="relative flex shrink-0 overflow-hidden rounded-full size-4">
        <Image
          className="aspect-square h-full w-full object-contain"
          src="/sui-circle-logo.webp"
          alt="sui-logo"
          width={16}
          height={16}
        />
      </span>

      <span className="mx-0.5 text-base font-medium">Sui</span>
    </div>
  );
}
