import { decode } from "html-entities";

export default function getExcerpt(html: string): string {
  const plainText = html.replace(/<[^>]*>/g, "");
  const decoded = decode(plainText);

  return decoded;
}
