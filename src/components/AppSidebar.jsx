import { useState } from 'react';
import { usePageContext } from '../context/PageContext';

export function AppSidebar() {
  const { activeId, pages, setActiveId, activeRole, roles, currentRole, selectRole } = usePageContext();
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showRoleMenu, setShowRoleMenu] = useState(false);
  const [collapsedGroups, setCollapsedGroups] = useState({});

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const toggleCollapse = () => setIsCollapsed((prev) => !prev);

  const toggleGroup = (groupKey) => {
    setCollapsedGroups((prev) => ({
      ...prev,
      [groupKey]: !prev[groupKey],
    }));
  };

  // 1920w 樹狀結構定義
  const navTree = [
    {
      type: 'item',
      id: 'personal-dashboard',
      label: '個人儀表板',
      icon: '⊞',
    },
    {
      type: 'group',
      key: 'patient-mgmt',
      label: '患者管理',
      icon: '👤',
      items: [
        { id: 'case-intake', label: '收案管理', targetId: 'case-management' },
        { id: 'pac-cases', label: 'PAC個案管理', targetId: 'case-management' },
        { id: 'ward-cases', label: '復健病房個案管理', targetId: 'case-management' },
        { id: 'general-cases', label: '一般個案管理', targetId: 'case-management' },
        { id: 'case-summary', label: '個案管理總表', targetId: 'case-management' },
      ],
    },
    {
      type: 'item',
      id: 'bed-management',
      label: '排床管理 (未開放)',
      icon: '🛏',
    },
    {
      type: 'group',
      key: 'rehab-schedule',
      label: '復健排班',
      icon: '📅',
      items: [
        { id: 'rehab-scheduling', label: '排班總覽', targetId: 'rehab-scheduling' },
        { id: 'home-care-scheduling', label: '居家排班管理', targetId: 'home-care-scheduling' },
      ],
    },
    {
      type: 'group',
      key: 'rehab-records',
      label: '復健紀錄',
      icon: '📄',
      items: [
        { id: 'comprehensive-assessment-report', label: '綜合評估報告書', targetId: 'comprehensive-assessment-report' },
        { id: 'assessment-forms', label: '復健評估', targetId: 'comprehensive-assessment-report' },
      ],
    },
    {
      type: 'item',
      id: 'indicator-export',
      label: '統計數據 (未開放)',
      icon: '📊',
    },
    {
      type: 'item',
      id: 'admin-settings',
      label: '後台設定管理',
      icon: '⚙️',
    },
  ];

  // 目前開放的核心頁面（包含使用者特別指定的綜合評估報告書）
  const isPageEnabled = (id) => {
    return (
      id === 'rehab-scheduling' ||
      id === 'home-care-scheduling' ||
      id === 'comprehensive-assessment-report' ||
      id === 'case-management' ||
      id === 'personal-dashboard'
    );
  };

  return (
    <>
      {/* 手機版漢堡按鈕 */}
      <button
        className="hamburger-toggle-btn"
        type="button"
        onClick={toggleSidebar}
        aria-label="打開選單"
      >
        ☰
      </button>

      {/* 側邊欄主體 (1920w 藍色醫療風格，支援展開與收合) */}
      <aside className={`app-sidebar ${isOpen ? 'mobile-open' : ''} ${isCollapsed ? 'collapsed' : ''}`}>
        {/* 左上院所標誌文字與收合按鈕 (對齊 06 模擬排版) */}
        <div className="brand">
          <div className="brand-logo-text-group">
            <span className="brand-logo-icon">❖</span>
            {!isCollapsed && (
              <div className="brand-titles">
                <span className="brand-sub">員郭醫療社團法人</span>
                <span className="brand-main">員郭醫院</span>
              </div>
            )}
          </div>
          <button
            className="sidebar-collapse-toggle-btn"
            type="button"
            onClick={toggleCollapse}
            aria-label="收合側邊欄"
            title={isCollapsed ? '展開選單' : '收合選單'}
          >
            {isCollapsed ? '▶' : '◀'}
          </button>
        </div>

        {/* 1920w 樹狀階層導覽 */}
        <nav className="app-nav" aria-label="PAC 導覽">
          {navTree.map((node) => {
            if (node.type === 'item') {
              const enabled = isPageEnabled(node.id);
              const isActive = activeId === node.id;
              return (
                <button
                  key={node.id}
                  className={`nav-button ${isActive ? 'active' : ''} ${!enabled ? 'disabled' : ''}`}
                  type="button"
                  disabled={!enabled}
                  onClick={() => {
                    if (!enabled) return;
                    setActiveId(node.id);
                    setIsOpen(false);
                  }}
                >
                  <span className="nav-icon">{node.icon}</span>
                  <span className="nav-label">{node.label}</span>
                </button>
              );
            }

            // 群組型節點（如 PAC 患者管理、復健排班、復健紀錄）
            const isCollapsed = !!collapsedGroups[node.key];
            const hasActiveChild = node.items.some((child) => activeId === child.targetId);

            return (
              <div key={node.key} className="nav-group">
                <button
                  type="button"
                  className={`nav-group-header ${hasActiveChild ? 'has-active' : ''}`}
                  onClick={() => toggleGroup(node.key)}
                >
                  <span className="nav-icon">{node.icon}</span>
                  <span className="nav-label">{node.label}</span>
                  <span className={`nav-arrow ${isCollapsed ? 'collapsed' : 'expanded'}`}>
                    ▾
                  </span>
                </button>

                {!isCollapsed && (
                  <div className="nav-sub-items">
                    {node.items.map((subItem) => {
                      const enabled = isPageEnabled(subItem.targetId);
                      const isActive = activeId === subItem.targetId;
                      return (
                        <button
                          key={subItem.id}
                          type="button"
                          className={`nav-sub-button ${isActive ? 'active' : ''} ${!enabled ? 'disabled' : ''}`}
                          disabled={!enabled}
                          onClick={() => {
                            if (!enabled) return;
                            setActiveId(subItem.targetId);
                            setIsOpen(false);
                          }}
                        >
                          <span className="nav-sub-bullet">•</span>
                          <span className="nav-sub-label">{subItem.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* 側邊欄左下角：當前使用者資訊與角色切換 (取代懸浮按鈕) */}
        <div className="sidebar-user-container">
          {showRoleMenu && (
            <div className="sidebar-role-popover">
              <div className="role-popover-title">切換身分角色</div>
              <div className="role-popover-list">
                {roles.map((r) => {
                  const isCurrent = currentRole === r.code;
                  return (
                    <button
                      key={r.code}
                      type="button"
                      className={`role-popover-item ${isCurrent ? 'active' : ''}`}
                      onClick={() => {
                        selectRole(r.code);
                        setShowRoleMenu(false);
                      }}
                    >
                      <span className="role-avatar-tiny">{r.ch}</span>
                      <span className="role-info">
                        <strong>{r.name}</strong>
                        <small>{r.label}</small>
                      </span>
                      {isCurrent && <span className="check-mark">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <button
            type="button"
            className="sidebar-user-footer"
            onClick={() => setShowRoleMenu((prev) => !prev)}
            title="點擊切換使用者身分角色"
          >
            <div className="user-avatar-circle">
              {activeRole?.ch || '林'}
            </div>
            <div className="user-info-text">
              <div className="user-name">{activeRole?.name || '林美惠'}</div>
              <div className="user-role-title">{activeRole?.label || '個管師'} ▾</div>
            </div>
          </button>
        </div>
      </aside>

      {/* 遮罩 */}
      {(isOpen || showRoleMenu) && (
        <div
          className="sidebar-overlay"
          onClick={() => {
            setIsOpen(false);
            setShowRoleMenu(false);
          }}
        />
      )}
    </>
  );
}
