import { lazy, Suspense } from 'react';
import { DataProvider, RouteProvider, useRoute } from './context/DataContext';
import Home from './pages/Home';

const ProjectDetails = lazy(() => import('./components/ProjectDetails'));
const Resume = lazy(() => import('./pages/Resume'));

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

  if (route === '/resume') {
    return (
      <Suspense fallback={<LoadingFallback />}>
        <Resume />
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
