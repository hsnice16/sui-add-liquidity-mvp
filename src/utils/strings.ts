export function shortEllipsisStr(
  value: string,
  startCharsLen: number = 6,
  endCharsLen: number = 4
) {
  if (startCharsLen + endCharsLen === value.length) {
    return value;
  }

  const startChars = value.substring(0, startCharsLen);
  const endChars = value.substring(value.length - endCharsLen, value.length);

  return startChars + "..." + endChars;
}
