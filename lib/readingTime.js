import readingTime from "reading-time";

function extractText(node) {
  if (!node) return "";
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractText).join(" ");
  if (node.props?.children) return extractText(node.props.children);
  return "";
}

export function getReadingTime(children) {
  return readingTime(extractText(children)).text;
}
