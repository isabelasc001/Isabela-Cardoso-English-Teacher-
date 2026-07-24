export function pxToRem(px: number): string {
  return `${px / 16}rem`;
}

export function rgba(hex: string, opacity: number): string {
  const normalized = hex.replace("#", "");

  const bigint = parseInt(normalized, 16);

  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export function clamp(
  min: number,
  preferred: number,
  max: number
): string {
  return `clamp(${min}rem, ${preferred}vw, ${max}rem)`;
}