import { useMemo } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";

export default function useDifferentAddrLen(poolId: string) {
  const width = useWindowWidth();

  const {
    kernelAddrEndCharsLen,
    kernelAddrStartCharsLen,
    tokenAddrEndCharsLen,
    tokenAddrStartCharsLen,
    poolIdAddrEndCharsLen,
    poolIdAddrStartCharsLen,
  } = useMemo(() => {
    let kernelAddrEndCharsLen = 16;
    let kernelAddrStartCharsLen = 10;

    let tokenAddrEndCharsLen = 18;
    let tokenAddrStartCharsLen = 10;

    let poolIdAddrEndCharsLen = poolId.length / 2;
    let poolIdAddrStartCharsLen = poolId.length / 2;

    if (width <= 1180) {
      kernelAddrEndCharsLen = 10;
      kernelAddrStartCharsLen = 10;

      tokenAddrEndCharsLen = 12;
      tokenAddrStartCharsLen = 10;

      poolIdAddrEndCharsLen -= 4;
      poolIdAddrStartCharsLen -= 8;
    }

    if (width <= 1035) {
      kernelAddrEndCharsLen = 8;
      kernelAddrStartCharsLen = 8;

      tokenAddrEndCharsLen = 8;
      tokenAddrStartCharsLen = 8;

      poolIdAddrEndCharsLen -= 2;
      poolIdAddrStartCharsLen -= 4;
    }

    if (width <= 900) {
      poolIdAddrEndCharsLen -= 4;
      poolIdAddrStartCharsLen -= 8;
    }

    if (width <= 820) {
      kernelAddrEndCharsLen = 6;
      kernelAddrStartCharsLen = 6;

      tokenAddrEndCharsLen = 6;
      tokenAddrStartCharsLen = 6;

      poolIdAddrEndCharsLen -= 2;
      poolIdAddrStartCharsLen -= 4;
    }

    if (width < 768) {
      kernelAddrEndCharsLen = 10;
      kernelAddrStartCharsLen = 10;

      tokenAddrEndCharsLen = 12;
      tokenAddrStartCharsLen = 10;

      poolIdAddrEndCharsLen = poolId.length / 2 - 8;
      poolIdAddrStartCharsLen = poolId.length / 2 - 8;
    }

    if (width <= 650) {
      kernelAddrEndCharsLen = 8;
      kernelAddrStartCharsLen = 8;

      tokenAddrEndCharsLen = 8;
      tokenAddrStartCharsLen = 8;

      poolIdAddrEndCharsLen -= 4;
      poolIdAddrStartCharsLen -= 4;
    }

    if (width <= 540) {
      kernelAddrEndCharsLen = 6;
      kernelAddrStartCharsLen = 6;

      tokenAddrEndCharsLen = 6;
      tokenAddrStartCharsLen = 6;

      poolIdAddrEndCharsLen -= 4;
      poolIdAddrStartCharsLen -= 4;
    }

    if (width <= 440) {
      kernelAddrEndCharsLen = 4;
      kernelAddrStartCharsLen = 4;

      tokenAddrEndCharsLen = 4;
      tokenAddrStartCharsLen = 4;

      poolIdAddrEndCharsLen -= 4;
      poolIdAddrStartCharsLen -= 4;
    }

    if (width <= 370) {
      kernelAddrEndCharsLen = 12;
      kernelAddrStartCharsLen = 10;

      tokenAddrEndCharsLen = 14;
      tokenAddrStartCharsLen = 10;

      poolIdAddrEndCharsLen -= 2;
      poolIdAddrStartCharsLen -= 1;
    }

    return {
      kernelAddrEndCharsLen,
      kernelAddrStartCharsLen,
      tokenAddrEndCharsLen,
      tokenAddrStartCharsLen,
      poolIdAddrEndCharsLen,
      poolIdAddrStartCharsLen,
    };
  }, [poolId.length, width]);

  return {
    kernelAddrEndCharsLen,
    kernelAddrStartCharsLen,
    tokenAddrEndCharsLen,
    tokenAddrStartCharsLen,
    poolIdAddrEndCharsLen,
    poolIdAddrStartCharsLen,
  };
}
