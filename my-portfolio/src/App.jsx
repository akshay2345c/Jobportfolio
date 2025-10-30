import { DataProvider, RouteProvider, useRoute } from './context/DataContext';
import Home from './pages/Home';
import ProjectDetails from './components/ProjectDetails';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';

function AppContent() {
  const { route } = useRoute();

  if (route === '/projects/:id') {
    return <ProjectDetails />;
  }

  if (route === '/admin-login') {
    return <AdminLogin />;
  }

  if (route === '/admin-panel') {
    return <AdminDashboard />;
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
