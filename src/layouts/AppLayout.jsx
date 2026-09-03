import { AppSidebar } from '../components/AppSidebar';
import { DecompositionPanel } from '../components/DecompositionPanel';
import { WorkspaceTopbar } from '../components/WorkspaceTopbar';
import { usePageContext } from '../context/PageContext';
import { usePageDecomposition } from '../hooks/usePageDecomposition';
import { LegacyHtmlPage } from '../pages/LegacyHtmlPage';
export function AppLayout() {
  const { activeId, activePage, activeTitle, pages, showMap } = usePageContext();
  const decomposedPages = usePageDecomposition(pages);

  return (
    <div className="app-shell">
      <AppSidebar />

      <main className="workspace">
        <WorkspaceTopbar />
        {showMap && <DecompositionPanel pages={decomposedPages} activeId={activeId} />}
        {activePage && <LegacyHtmlPage key={activePage.id} page={activePage} title={activeTitle} />}
      </main>
    </div>
  );
}

