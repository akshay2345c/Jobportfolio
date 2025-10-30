import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();
const RouteContext = createContext();

const initialData = {
  profile: {
    name: 'Akshay Patel',
    role: 'React JS Developer',
    tagline: 'Building scalable, high-performance, and responsive web applications.',
    email: 'akshay.patel@example.com',
    phone: '+91 98765 43210',
    location: 'Ahmedabad, Gujarat',
  },
  skills: [
    { id: 1, name: 'React', level: 'Advanced' },
    { id: 2, name: 'Redux', level: 'Advanced' },
    { id: 3, name: 'JavaScript', level: 'Advanced' },
    { id: 4, name: 'HTML5', level: 'Advanced' },
    { id: 5, name: 'CSS3', level: 'Advanced' },
    { id: 6, name: 'Git', level: 'Intermediate' },
    { id: 7, name: 'REST APIs', level: 'Advanced' },
    { id: 8, name: 'Responsive Design', level: 'Advanced' },
  ],
  projects: [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React and Redux.',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=300&fit=crop',
      liveLink: 'https://example.com/ecommerce',
      startDate: 'Jan 2024',
      endDate: 'Mar 2024',
      fullDescription: 'Built a complete e-commerce platform with product listing, cart management, and checkout functionality. Implemented responsive design and optimized performance.',
      gallery: [
        'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800&h=600&fit=crop',
      ],
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A React-based task management application with real-time updates.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      liveLink: 'https://example.com/tasks',
      startDate: 'Apr 2024',
      endDate: 'Jun 2024',
      fullDescription: 'Developed a task management application with drag-and-drop functionality, real-time notifications, and local storage persistence.',
      gallery: [
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      ],
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio showcasing projects and skills.',
      image: 'https://images.unsplash.com/photo-1517694712a17-d7cc1f1d9e0d?w=500&h=300&fit=crop',
      liveLink: 'https://example.com/portfolio',
      startDate: 'Jul 2024',
      endDate: 'Sep 2024',
      fullDescription: 'Created a modern, fully responsive portfolio website with smooth scrolling, dynamic project filtering, and contact integration.',
      gallery: [
        'https://images.unsplash.com/photo-1517694712a17-d7cc1f1d9e0d?w=800&h=600&fit=crop',
      ],
    },
  ],
  experience: [
    {
      id: 1,
      company: 'FABAF Pvt. Ltd.',
      location: 'Ahmedabad',
      role: 'Frontend Developer',
      startDate: 'Feb 2025',
      endDate: 'Present',
      description: 'Created responsive UI components, tested for functional accuracy and smooth user experience. Collaborated with design and backend teams to deliver high-quality web applications.',
    },
    {
      id: 2,
      company: 'Tech Solutions Inc.',
      location: 'Bangalore',
      role: 'Junior React Developer',
      startDate: 'Aug 2023',
      endDate: 'Jan 2025',
      description: 'Developed and maintained React components for multiple projects. Implemented state management using Redux and Context API. Participated in code reviews and team meetings.',
    },
  ],
  education: [
    {
      id: 1,
      institution: 'Bachelor of Technology',
      field: 'Computer Science',
      duration: '2019 - 2023',
      percentage: '7.8 CGPA',
      description: 'Graduated with honors. Focused on web development and software engineering.',
    },
    {
      id: 2,
      institution: 'React Complete Guide',
      field: 'Online Certification',
      duration: '2023',
      percentage: 'Completed',
      description: 'Comprehensive online course covering React fundamentals to advanced concepts.',
    },
    {
      id: 3,
      institution: 'JavaScript Mastery',
      field: 'Online Certification',
      duration: '2022 - 2023',
      percentage: 'Completed',
      description: 'In-depth JavaScript course covering ES6+, async programming, and design patterns.',
    },
  ],
};

export function DataProvider({ children }) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const storedData = localStorage.getItem('portfolioData');
    if (storedData) {
      try {
        setData(JSON.parse(storedData));
      } catch (error) {
        console.error('Failed to parse stored data:', error);
        setData(initialData);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolioData', JSON.stringify(data));
  }, [data]);

  const updateData = (newData) => {
    setData(newData);
  };

  const updateProfile = (profileData) => {
    setData(prev => ({
      ...prev,
      profile: { ...prev.profile, ...profileData }
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
    const newProject = {
      ...project,
      id: Math.max(...data.projects.map(p => p.id), 0) + 1
    };
    setData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
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
