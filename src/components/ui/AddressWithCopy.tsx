"use client";

import { useMemo, useState } from "react";
import { shortEllipsisStr } from "@/utils/strings";
import { CopySimpleIcon } from "@phosphor-icons/react";

type AddressWithCopyProps = {
  address: string;
  showShort?: boolean;
  endCharsLen?: number;
  startCharsLen?: number;
};

export default function AddressWithCopy({
  address,
  showShort,
  endCharsLen,
  startCharsLen,
}: AddressWithCopyProps) {
  const [isCopied, setIsCopied] = useState(false);

  const addressToShow = useMemo(() => {
    if (showShort) {
      return shortEllipsisStr(address, startCharsLen, endCharsLen);
    }

    return address;
  }, [address, endCharsLen, showShort, startCharsLen]);

  const handleButtonClick = async () => {
    setIsCopied(true);
    const timerId = setTimeout(() => {
      setIsCopied(false);
      clearTimeout(timerId);
    }, 750);

    await navigator.clipboard.writeText(address);
  };

  return (
    <button
      className="flex items-center gap-1 cursor-pointer"
      onClick={handleButtonClick}
    >
      {addressToShow}
      <CopySimpleIcon
        size={16}
        className="text-neutral-500"
        weight={isCopied ? "fill" : "regular"}
      />
    </button>
  );
}
