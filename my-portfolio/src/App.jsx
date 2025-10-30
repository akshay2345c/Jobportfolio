import { lazy, Suspense } from 'react';

import { DataProvider, RouteProvider, useRoute } from './context/DataContext';

import AdminLogin from './admin/AdminLogin';
import Home from './pages/Home';

const ProjectDetails = lazy(() => import('./components/ProjectDetails'));
const AdminDashboard = lazy(() => import('./admin/AdminDashboard'));

function LoadingFallback() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ color: 'var(--text-secondary)' }}>Loading...</div>
    </section>
  );
}

function AppContent() {
  const { route } = useRoute();

  if (route === '/projects/:id') {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <ProjectDetails />
      </Suspense>
    );
  }

  if (route === '/admin-login') {
    return <AdminLogin />;
  }

  if (route === '/admin-panel') {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <AdminDashboard />
      </Suspense>
    );
  }

  return <Home />;
}

function App() {
  return (
    <DataProvider>
      <RouteProvider>
        <AppContent />
      </RouteProvider>
    </DataProvider>
  );
}

export default App;
