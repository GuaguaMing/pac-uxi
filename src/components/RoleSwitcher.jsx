import { useState, useEffect, useRef } from 'react';
import { usePageContext } from '../context/PageContext';

export function RoleSwitcher() {
  const { currentRole, activeRole, roles, selectRole } = usePageContext();
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);

  // Close panel when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const togglePanel = () => setIsOpen((prev) => !prev);

  return (
    <div className="role-switcher-container" ref={panelRef}>
      {/* Floating Action Button */}
      <button
        className={`fab-role-button active-role-${currentRole}`}
        onClick={togglePanel}
        aria-label="切換角色"
        type="button"
      >
        <span className={`fab-avatar ${activeRole.av}`}>{activeRole.ch}</span>
        <span className="fab-label">{activeRole.label}</span>
      </button>

      {/* Floating Menu Panel */}
      {isOpen && (
        <div className="role-panel">
          <div className="role-panel-header">
            <h3>切換系統角色</h3>
            <p>模擬不同醫護人員的操作介面與權限</p>
          </div>
          <div className="role-list">
            {roles
              .filter((role) => role.code !== 'ot' && role.code !== 'st')
              .map((role) => {
                const isActive = role.code === currentRole;
                const allowedRoles = ['mgr', 'sup', 'pt', 'adm'];
                const isDisabled = !allowedRoles.includes(role.code);

              return (
                <button
                  key={role.code}
                  className={`role-item ${isActive ? 'active' : ''} ${isDisabled ? 'disabled' : ''}`}
                  onClick={() => {
                    if (isDisabled) return;
                    selectRole(role.code);
                    setIsOpen(false);
                  }}
                  type="button"
                  disabled={isDisabled}
                  style={isDisabled ? { opacity: 0.4, cursor: 'not-allowed' } : {}}
                >
                  <div className={`role-item-avatar ${role.av}`}>{role.ch}</div>
                  <div className="role-item-info">
                    <div className="role-item-label">{role.label}</div>
                    <div className="role-item-name">{role.name}</div>
                  </div>
                  {isActive && <span className="active-check">✓</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
