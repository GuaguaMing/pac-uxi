import { useMemo, useEffect, useRef } from 'react';
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
    return role;
  }
  return role;
}

export function LegacyPageFrame({ page, title }) {
  const { currentRole, setActiveId } = usePageContext();
  const iframeRef = useRef(null);

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

  // 當左下角角色切換時，透過 postMessage 即時同步給 iframe
  useEffect(() => {
    const mappedRole = getMappedRole(page.id, currentRole);
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        { type: 'ROLE_CHANGED', role: mappedRole },
        '*'
      );
    }
  }, [currentRole, page.id]);

  const processedHtml = useMemo(() => {
    if (!page.html) return page.html;

    let modifiedHtml = page.html;
    const mappedRole = getMappedRole(page.id, currentRole);

    // 1. 注入 CSS 與全域角色變數
    const scriptAndStyleToInject = `
      <style>
        ${page.id !== 'admin-settings' ? '.sidebar { display: none !important; }' : ''}
      </style>
      <script>
        window.__CURRENT_ROLE__ = '${mappedRole}';
      </script>
    `;

    if (modifiedHtml.includes('<head>')) {
      modifiedHtml = modifiedHtml.replace('<head>', `<head>${scriptAndStyleToInject}`);
    } else {
      modifiedHtml = scriptAndStyleToInject + modifiedHtml;
    }

    // 2. Dynamically replace currentRole variable assignment in script
    const regex = /let\s+currentRole\s*=\s*['"][^'"]+['"]\s*;?/g;
    modifiedHtml = modifiedHtml.replace(regex, `let currentRole = '${mappedRole}';`);

    return modifiedHtml;
  }, [page.html, page.id, currentRole]);

  return (
    <section className="frame-wrap" aria-label={title}>
      <iframe
        ref={iframeRef}
        className="legacy-frame"
        title={title}
        srcDoc={processedHtml}
        sandbox="allow-scripts allow-forms allow-modals allow-same-origin"
      />
    </section>
  );
}


