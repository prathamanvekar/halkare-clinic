export function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(" ");
}

export function decodeHtmlEntities(text: string): string {
  if (!text) return text;

  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  const decoded = textarea.value;
  textarea.remove();
  return decoded;
}
