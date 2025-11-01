import React, { createContext, useContext, useState } from 'react';
import { staticData } from '../data';

const DataContext = createContext();
const RouteContext = createContext();

export function DataProvider({ children }) {
  const [data] = useState(staticData);

  const value = {
    data,
    loading: false,
    error: null
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}

export function RouteProvider({ children }) {
  const [route, setRoute] = useState('/');
  const [projectId, setProjectId] = useState(null);

  const navigate = (path) => {
    if (path.startsWith('/projects/')) {
      const id = parseInt(path.split('/')[2]);
      setProjectId(id);
      setRoute('/projects/:id');
    } else if (path === '/resume') {
      setRoute('/resume');
      setProjectId(null);
    } else {
      setRoute(path);
      setProjectId(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const value = {
    route,
    projectId,
    navigate
  };

  return (
    <RouteContext.Provider value={value}>
      {children}
    </RouteContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within DataProvider');
  }
  return context;
}

export function useRoute() {
  const context = useContext(RouteContext);
  if (!context) {
    throw new Error('useRoute must be used within RouteProvider');
  }
  return context;
}
