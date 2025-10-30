import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Home from './pages/Home';
import ProjectDetails from './components/ProjectDetails';
import Admin from './admin/Admin';

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
