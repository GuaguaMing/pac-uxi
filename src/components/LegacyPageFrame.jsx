import { useMemo, useEffect } from 'react';
import { usePageContext } from '../context/PageContext';

// Helper to map React roles to legacy page roles
function getMappedRole(pageId, role) {
  if (pageId === 'rehab-scheduling') {
    return role; // Return raw role code (e.g. 'sup', 'pt', 'ot', 'st', 'mgr', 'nur', etc.)
  }
  if (pageId === 'home-care-scheduling') {
    if (role === 'mgr') return 'case';
    if (role === 'sup') return 'manager';
    if (role === 'adm') return 'secretary';
    return 'therapist';
  }
  return role;
}

export function LegacyPageFrame({ page, title }) {
  const { currentRole, setActiveId } = usePageContext();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.switchLegacyPage = (pageId) => {
        setActiveId(pageId);
      };
    }
    return () => {
      if (typeof window !== 'undefined') {
        delete window.switchLegacyPage;
      }
    };
  }, [setActiveId]);

  const processedHtml = useMemo(() => {
    if (!page.html) return page.html;

    let modifiedHtml = page.html;

    // 1. Inject CSS to hide internal sidebar if not admin-settings
    if (page.id !== 'admin-settings') {
      const styleToInject = `
        <style>
          .sidebar { display: none !important; }
        </style>
      `;
      if (modifiedHtml.includes('<head>')) {
        modifiedHtml = modifiedHtml.replace('<head>', `<head>${styleToInject}`);
      } else {
        modifiedHtml = styleToInject + modifiedHtml;
      }
    }

    // 2. Dynamically replace currentRole variable assignment in script
    const mappedRole = getMappedRole(page.id, currentRole);
    const regex = /let\s+currentRole\s*=\s*['"][^'"]+['"]\s*;?/g;
    modifiedHtml = modifiedHtml.replace(regex, `let currentRole = '${mappedRole}';`);

    return modifiedHtml;
  }, [page.html, page.id, currentRole]);

  return (
    <section className="frame-wrap" aria-label={title}>
      <iframe
        className="legacy-frame"
        title={title}
        srcDoc={processedHtml}
        sandbox="allow-scripts allow-forms allow-modals allow-same-origin"
      />
    </section>
  );
}


