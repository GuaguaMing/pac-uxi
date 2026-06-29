# PAC React 整理版

這個專案把資料夾內的 9 個 PAC HTML 原型整理進 React/Vite 架構。

## 已拆解的 HTML 對應

| React page id | 檔案 | 頁面 |
| --- | --- | --- |
| `personal-dashboard` | `src/pages/legacy-html/personal-dashboard.html` | 個人儀表板 |
| `case-management` | `src/pages/legacy-html/case-management.html` | 個案管理 |
| `bed-management` | `src/pages/legacy-html/bed-management.html` | 病床管理 |
| `rehab-scheduling` | `src/pages/legacy-html/rehab-scheduling.html` | 復健排班 |
| `home-care-scheduling` | `src/pages/legacy-html/home-care-scheduling.html` | 居家排班管理 |
| `assessment-forms` | `src/pages/legacy-html/assessment-forms.html` | 評估量表填寫 |
| `indicator-export` | `src/pages/legacy-html/indicator-export.html` | 指標匯出 |
| `user-profile` | `src/pages/legacy-html/user-profile.html` | 個人資訊頁 |
| `admin-settings` | `src/pages/legacy-html/admin-settings.html` | 後台設定管理 |

## 架構

- `src/main.jsx`：React 入口，只負責掛載 App。
- `src/App.jsx`：注入全域 Page Context 並載入主要 layout。
- `src/assets/`：靜態資源保留區。
- `src/components/`：全域通用 UI，例如側欄、topbar、拆解面板、HTML iframe frame。
- `src/context/`：全域頁面狀態，例如目前選取頁面、是否顯示拆解清單。
- `src/hooks/`：自定義 hook，例如頁面拆解統計。
- `src/layouts/`：頁面外框版型，目前是 `AppLayout`。
- `src/pages/`：頁面級元件、頁面 manifest、原始 HTML 分類檔。
- `src/services/`：API / HIS / 後端串接保留區。
- `src/styles/`：全域樣式，目前是 `global.css`。
- `src/utils/`：通用工具函式，例如 HTML title / stats 分析。
- `src/pages/legacy-html/`：保留原始 HTML/CSS/JS，透過 Vite `?raw` 匯入 React。
- `LegacyPageFrame`：用 `iframe srcDoc` 隔離每頁原本的 inline script、onclick、CSS，避免不同頁面的全域變數互相衝突。

```text
src/
├── assets/
├── components/
├── context/
├── hooks/
├── layouts/
├── pages/
│   └── legacy-html/
├── services/
├── styles/
└── utils/
```

## 執行

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

目前設計重點是先完整保留所有原型頁內容與互動，並建立 React 的頁面管理框架。後續若要把每頁改成純 JSX/data，可以從 `src/pages/pageManifest.js` 開始，逐頁抽出資料與元件。
