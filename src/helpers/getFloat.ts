export function getFloat(value: string): number {
  return parseFloat(value.replace(".", "").replace(",", "."));
}