import { usePageContext } from '../context/PageContext';

export function WorkspaceTopbar() {
  const { activePage, activeTitle } = usePageContext();

  return (
    <header className="workspace-topbar">
      <div>
        <div className="eyebrow">{activePage.file}</div>
        <h1>{activeTitle}</h1>
      </div>
    </header>
  );
}
