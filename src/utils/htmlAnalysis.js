export function getHtmlTitle(html, fallback) {
  return html.match(/<title>(.*?)<\/title>/is)?.[1]?.trim() || fallback;
}

export function getHtmlStats(html) {
  return {
    bytes: new Blob([html]).size,
    styles: (html.match(/<style\b/gi) || []).length,
    scripts: (html.match(/<script\b/gi) || []).length,
    functions: (html.match(/\bfunction\s+\w+/g) || []).length,
  };
}
