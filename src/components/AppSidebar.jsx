import { useState } from 'react';
import { usePageContext } from '../context/PageContext';

export function AppSidebar() {
  const { activeId, pages, setActiveId } = usePageContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* 🍔 手機版漢堡按鈕 */}
      <button
        className="hamburger-toggle-btn"
        type="button"
        onClick={toggleSidebar}
        aria-label="打開選單"
      >
        ☰
      </button>

      {/* 側邊欄主體 */}
      <aside className={`app-sidebar ${isOpen ? 'mobile-open' : ''}`}>
        <div className="brand">
          <div className="brand-title">PAC 系統</div>
          {/* ✕ 關閉按鈕 */}
          <button
            className="sidebar-close-btn"
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="關閉選單"
          >
            ✕
          </button>
        </div>

        {/* 導覽連結區塊 */}
        <nav className="app-nav" aria-label="PAC pages">
          {pages.map((page) => (
            <button
              key={page.id}
              className={`nav-button ${activeId === page.id ? 'active' : ''}`}
              type="button"
              onClick={() => {
                setActiveId(page.id);
                setIsOpen(false); // 點擊後自動關閉選單
              }}
            >
              <span className="nav-icon">{page.icon}</span>
              <span className="nav-label">{page.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* 點擊旁邊空白處關閉選單 */}
      {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
}
