import { PageProvider } from './context/PageContext';
import { AppLayout } from './layouts/AppLayout';

export function App() {
  return (
    <PageProvider>
      <AppLayout />
    </PageProvider>
  );
}
