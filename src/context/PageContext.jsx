import { createContext, useContext, useMemo, useState } from 'react';
import { pages } from '../pages/pageManifest';
import { getHtmlTitle } from '../utils/htmlAnalysis';

export const roles = [
  { code: 'mgr', label: '個管師', name: '林美惠', ch: '林', av: 'av-mgr', pages: ['personal-dashboard', 'case-management', 'bed-management', 'rehab-scheduling', 'home-care-scheduling', 'comprehensive-assessment-report', 'assessment-forms', 'indicator-export', 'user-profile'] },
  { code: 'sup', label: '復健主管', name: '黃志豪', ch: '黃', av: 'av-sup', pages: ['personal-dashboard', 'rehab-scheduling', 'home-care-scheduling', 'comprehensive-assessment-report', 'assessment-forms', 'user-profile'] },
  { code: 'pt', label: 'PT (物理治療)', name: '王大明', ch: '王', av: 'av-pt', pages: ['personal-dashboard', 'rehab-scheduling', 'home-care-scheduling', 'comprehensive-assessment-report', 'assessment-forms', 'user-profile'] },
  { code: 'ot', label: 'OT (職能治療)', name: '李佳穎', ch: '李', av: 'av-ot', pages: ['personal-dashboard', 'rehab-scheduling', 'home-care-scheduling', 'comprehensive-assessment-report', 'assessment-forms', 'user-profile'] },
  { code: 'st', label: 'ST (語言治療)', name: '吳怡君', ch: '吳', av: 'av-st', pages: ['personal-dashboard', 'rehab-scheduling', 'home-care-scheduling', 'comprehensive-assessment-report', 'assessment-forms', 'user-profile'] },
  { code: 'nur', label: '護理師', name: '陳玉玲', ch: '陳', av: 'av-nur', pages: ['personal-dashboard', 'bed-management', 'comprehensive-assessment-report', 'assessment-forms', 'user-profile'] },
  { code: 'doc', label: '醫師', name: '張宗達', ch: '張', av: 'av-doc', pages: ['personal-dashboard', 'comprehensive-assessment-report', 'assessment-forms', 'user-profile'] },
  { code: 'pha', label: '藥師', name: '林建志', ch: '林', av: 'av-pha', pages: ['personal-dashboard', 'assessment-forms', 'user-profile'] },
  { code: 'nut', label: '營養師', name: '周雅玲', ch: '周', av: 'av-nut', pages: ['personal-dashboard', 'assessment-forms', 'user-profile'] },
  { code: 'adm', label: '行政', name: '蔡書明', ch: '蔡', av: 'av-adm', pages: ['personal-dashboard', 'home-care-scheduling', 'user-profile'] },
  { code: 'it', label: 'IT（資訊人員）', name: '王志偉', ch: '資', av: 'av-it', pages: ['admin-settings'] },
];

const PageContext = createContext(null);

export function PageProvider({ children }) {
  const [currentRole, setCurrentRole] = useState('sup');
  const [activeId, setActiveIdState] = useState('rehab-scheduling');
  const [showMap, setShowMap] = useState(false);

  // 智慧依據頁面切換登錄身分角色 (滿足指示 4)
  const setActiveId = (nextPageId) => {
    setActiveIdState(nextPageId);
    if (['case-management', 'bed-management', 'indicator-export', 'personal-dashboard'].includes(nextPageId)) {
      setCurrentRole('mgr'); // 林美惠
    } else if (['rehab-scheduling', 'home-care-scheduling', 'comprehensive-assessment-report', 'assessment-forms'].includes(nextPageId)) {
      setCurrentRole('sup'); // 黃志豪（復健主管）
    }
  };

  const value = useMemo(() => {
    const activeRole = roles.find((r) => r.code === currentRole) || roles[0];
    const allowedPages = pages.filter((page) => activeRole.pages.includes(page.id));

    // Fallback if activeId is not allowed for the selected role
    let activePage = allowedPages.find((page) => page.id === activeId);
    if (!activePage && allowedPages.length > 0) {
      activePage = allowedPages[0];
    }

    return {
      currentRole,
      activeRole,
      roles,
      activeId: activePage?.id || '',
      activePage,
      activeTitle: activePage ? getHtmlTitle(activePage.html, activePage.label) : '',
      pages: allowedPages,
      setActiveId,
      selectRole: (roleCode) => {
        setCurrentRole(roleCode);
        const targetRole = roles.find((r) => r.code === roleCode) || roles[0];
        const targetAllowed = pages.filter((page) => targetRole.pages.includes(page.id));
        if (targetAllowed.length > 0) {
          if (!targetRole.pages.includes(activeId)) {
            setActiveIdState(targetAllowed[0].id);
          }
        }
      },
      showMap,
      toggleMap: () => setShowMap((current) => !current),
    };
  }, [currentRole, activeId, showMap]);

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}

export function usePageContext() {
  const context = useContext(PageContext);

  if (!context) {
    throw new Error('usePageContext must be used inside PageProvider');
  }

  return context;
}

