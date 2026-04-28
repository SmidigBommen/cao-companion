export function splitTitle(title: string): { number: string | null; name: string } {
  const match = title.match(/^Guideline (\d+):\s*(.+)$/);
  if (match) return { number: match[1], name: match[2] };
  return { number: null, name: title };
}
