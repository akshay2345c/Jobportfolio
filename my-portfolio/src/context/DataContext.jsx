import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

const DataContext = createContext();
const RouteContext = createContext();

const initialData = {
  profile: null,
  skills: [],
  projects: [],
  experience: [],
  education: [],
  contact: null,
};

export function DataProvider({ children }) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;
    async function fetchFromFirestore() {
      try {
        const [projectsSnap, experienceSnap, educationSnap, skillsSnap] = await Promise.all([
          getDocs(collection(db, 'projects')),
          getDocs(collection(db, 'experience')),
          getDocs(collection(db, 'education')),
          getDocs(collection(db, 'skills')),
        ]);

        const projects = projectsSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        const experience = experienceSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        const education = educationSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        const skills = skillsSnap.docs.map(d => ({ id: d.id, ...d.data() }));

        const [contactDoc, profileDoc] = await Promise.all([
          getDoc(doc(db, 'contact', 'info')),
          getDoc(doc(db, 'profile', 'main')),
        ]);

        const contact = contactDoc.exists() ? contactDoc.data() : null;
        const profile = profileDoc.exists() ? profileDoc.data() : null;

        if (!isCancelled) {
          setData({ projects, experience, education, skills, contact, profile });
          setLoading(false);
        }
      } catch (e) {
        console.error('Failed to load Firestore data', e);
        if (!isCancelled) {
          setError('Failed to load data');
          setData(initialData);
          setLoading(false);
        }
      }
    }
    fetchFromFirestore();
    return () => {
      isCancelled = true;
    };
  }, []);

  const updateData = (newData) => {
    setData(newData);
  };

  const updateProfile = (profileData) => {
    setData(prev => ({
      ...prev,
      profile: { ...(prev.profile || {}), ...profileData }
    }));
  };

  const updateSkills = (skills) => {
    setData(prev => ({
      ...prev,
      skills
    }));
  };

  const updateProjects = (projects) => {
    setData(prev => ({
      ...prev,
      projects
    }));
  };

  const addProject = (project) => {
    const nextId = Array.isArray(data.projects) && data.projects.length > 0
      ? Math.max(...data.projects.map(p => Number(p.id) || 0), 0) + 1
      : 1;
    const newProject = {
      ...project,
      id: nextId,
    };
    setData(prev => ({
      ...prev,
      projects: [...(prev.projects || []), newProject]
    }));
  };

  const updateExperience = (experience) => {
    setData(prev => ({
      ...prev,
      experience
    }));
  };

  const updateEducation = (education) => {
    setData(prev => ({
      ...prev,
      education
    }));
  };

  const value = {
    data,
    loading,
    error,
    updateData,
    updateProfile,
    updateSkills,
    updateProjects,
    addProject,
    updateExperience,
    updateEducation,
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
    } else if (path === '/admin-login' || path === '/admin-panel') {
      setRoute(path);
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
    navigate,
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
