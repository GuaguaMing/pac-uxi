export function DecompositionPanel({ pages, activeId }) {
  return (
    <section className="decomposition-panel" aria-label="HTML decomposition">
      {pages.map((page) => (
        <article key={page.id} className={`page-card ${activeId === page.id ? 'active' : ''}`}>
          <div className="page-card-title">
            <span>{page.icon}</span>
            <strong>{page.title}</strong>
          </div>
          <div className="page-card-file">{page.file}</div>
          <div className="page-card-desc">{page.description}</div>
          <div className="page-card-grid">
            <span>{Math.round(page.stats.bytes / 1024)} KB</span>
            <span>{page.stats.styles} style</span>
            <span>{page.stats.scripts} script</span>
            <span>{page.stats.functions} functions</span>
          </div>
        </article>
      ))}
    </section>
  );
}
