import { usePageContext } from '../context/PageContext';

export function WorkspaceTopbar() {
  const { activePage, activeTitle } = usePageContext();

  return (
    <header className="workspace-topbar">
      <div className="topbar-left">
        <h1 className="page-heading-title">{activeTitle || activePage?.label || 'PAC 管理系統'}</h1>
      </div>
      <div className="topbar-right">
        <div className="system-datetime">
          <span className="datetime-text">2026.08.01 星期一 下午 2:47</span>
        </div>
        <button className="topbar-notif-btn" type="button" aria-label="系統通知" title="未讀通知">
          <span className="notif-icon">🔔</span>
          <span className="notif-badge-dot"></span>
        </button>
      </div>
    </header>
  );
}
