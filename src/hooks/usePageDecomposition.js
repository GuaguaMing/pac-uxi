import { useMemo } from 'react';
import { getHtmlStats, getHtmlTitle } from '../utils/htmlAnalysis';

export function usePageDecomposition(pages) {
  return useMemo(
    () =>
      pages.map((page) => ({
        ...page,
        title: getHtmlTitle(page.html, page.label),
        stats: getHtmlStats(page.html),
      })),
    [pages],
  );
}
