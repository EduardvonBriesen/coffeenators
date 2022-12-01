export default function getExtrema(data: any) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  return { min, max };
}

