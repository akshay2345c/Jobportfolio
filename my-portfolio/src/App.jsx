import { lazy, Suspense } from 'react';
import { DataProvider, RouteProvider, useRoute } from './context/DataContext';

const Home = lazy(() => import('./pages/Home'));
const ProjectDetails = lazy(() => import('./components/ProjectDetails'));
const Resume = lazy(() => import('./pages/Resume'));

function LoadingFallback() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-color)' }}>
      <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
        <div style={{ fontSize: '18px', fontWeight: '500' }}>Loading...</div>
      </div>
    </section>
  );
}

function AppContent() {
  const { route } = useRoute();

  return (
    <Suspense fallback={<LoadingFallback />}>
      {route === '/projects/:id' ? (
        <ProjectDetails />
      ) : route === '/resume' ? (
        <Resume />
      ) : (
        <Home />
      )}
    </Suspense>
  );
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
