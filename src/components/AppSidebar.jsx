import { usePageContext } from '../context/PageContext';

export function AppSidebar() {
  const { activeId, pages, setActiveId, showMap, toggleMap } = usePageContext();

  return (
    <aside className="app-sidebar">
      <div className="brand">
        <div className="brand-title">PAC 系統</div>
      </div>

      <nav className="app-nav" aria-label="PAC pages">
        {pages.map((page) => (
          <button
            key={page.id}
            className={`nav-button ${activeId === page.id ? 'active' : ''}`}
            type="button"
            onClick={() => setActiveId(page.id)}
          >
            <span>{page.icon}</span>
            <span>{page.label}</span>
          </button>
        ))}
      </nav>

      {/*

      <button className="map-toggle" type="button" onClick={toggleMap}>
        {showMap ? '隱藏拆解清單' : '查看拆解清單'}
      </button>
      */}
    </aside>
  );
}
