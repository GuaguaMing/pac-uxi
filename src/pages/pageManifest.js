import personalDashboardHtml from './legacy-html/personal-dashboard.html?raw';
import caseManagementHtml from './legacy-html/case-management.html?raw';
import bedManagementHtml from './legacy-html/bed-management.html?raw';
import rehabSchedulingHtml from './legacy-html/rehab-scheduling.html?raw';
import homeCareSchedulingHtml from './legacy-html/home-care-scheduling.html?raw';
import assessmentReportHtml from './legacy-html/comprehensive-assessment-report.html?raw';
import assessmentFormsHtml from './legacy-html/assessment-forms.html?raw';
import indicatorExportHtml from './legacy-html/indicator-export.html?raw';
import userProfileHtml from './legacy-html/user-profile.html?raw';
import adminSettingsHtml from './legacy-html/admin-settings.html?raw';

export const pages = [
  {
    id: 'personal-dashboard',
    file: 'personal-dashboard.html',
    label: '個人儀表板',
    description: 'Role-based personal dashboard with notifications and task summaries.',
    icon: '🏠',
    html: personalDashboardHtml,
  },
  {
    id: 'case-management',
    file: 'case-management.html',
    label: '個案管理',
    description: 'PAC case list, case detail, intake review, and form fill workflows.',
    icon: '📋',
    html: caseManagementHtml,
  },
  {
    id: 'bed-management',
    file: 'bed-management.html',
    label: '病床管理',
    description: 'Ward and bed availability management views.',
    icon: '🛏',
    html: bedManagementHtml,
  },
  {
    id: 'rehab-scheduling',
    file: 'rehab-scheduling.html',
    label: '排班總覽',
    description: 'In-hospital rehabilitation scheduling and therapist assignment views.',
    icon: '📅',
    html: rehabSchedulingHtml,
  },
  {
    id: 'home-care-scheduling',
    file: 'home-care-scheduling.html',
    label: '居家排班管理',
    description: 'Home PAC case publishing, therapist signup, scheduling, and bonus flows.',
    icon: '🏡',
    html: homeCareSchedulingHtml,
  },
  {
    id: 'comprehensive-assessment-report',
    file: 'comprehensive-assessment-report.html',
    label: '綜合評估報告書',
    description: 'Interdisciplinary PAC team comprehensive assessment report.',
    icon: '📑',
    html: assessmentReportHtml,
  },
  {
    id: 'assessment-forms',
    file: 'assessment-forms.html',
    label: '評估量表填寫',
    description: 'Assessment case selection, role-based forms, and submission states.',
    icon: '📊',
    html: assessmentFormsHtml,
  },
  {
    id: 'indicator-export',
    file: 'indicator-export.html',
    label: '指標匯出',
    description: 'PAC indicator tracking, validation, and export workflow.',
    icon: '📤',
    html: indicatorExportHtml,
  },
  {
    id: 'user-profile',
    file: 'user-profile.html',
    label: '個人資訊頁',
    description: 'User profile, account security, notification preferences, and sessions.',
    icon: '👤',
    html: userProfileHtml,
  },
  {
    id: 'admin-settings',
    file: 'admin-settings.html',
    label: '後台設定管理',
    description: 'Admin member management, HIS import, and role permission matrix.',
    icon: '⚙️',
    html: adminSettingsHtml,
  },
];
