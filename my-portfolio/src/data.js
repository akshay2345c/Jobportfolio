export const staticData = {
  profile: {
    name: 'Ram Patel',
    role: 'Full Stack Developer',
    tagline: 'Building beautiful, responsive web applications with modern technologies',
    email: 'ram@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA'
  },
  skills: [
    { id: 1, name: 'React', level: 'Advanced' },
    { id: 2, name: 'JavaScript', level: 'Advanced' },
    { id: 3, name: 'CSS & SCSS', level: 'Advanced' },
    { id: 4, name: 'HTML5', level: 'Advanced' },
    { id: 5, name: 'Node.js', level: 'Intermediate' },
    { id: 6, name: 'Express.js', level: 'Intermediate' },
    { id: 7, name: 'MongoDB', level: 'Intermediate' },
    { id: 8, name: 'Git & GitHub', level: 'Advanced' },
    { id: 9, name: 'Responsive Design', level: 'Advanced' },
    { id: 10, name: 'UI/UX Principles', level: 'Intermediate' }
  ],
  projects: [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with product catalog and checkout',
      image: 'https://images.unsplash.com/photo-1533050487297-86d7aac60714?w=500&h=400&fit=crop',
      liveLink: 'https://example-ecommerce.com',
      startDate: 'Jan 2024',
      endDate: 'Mar 2024',
      fullDescription: 'A complete e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product filtering, shopping cart management, secure payment integration, and admin dashboard for order management.',
      gallery: ['https://images.unsplash.com/photo-1533050487297-86d7aac60714?w=500&h=400&fit=crop']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop',
      liveLink: 'https://example-tasks.com',
      startDate: 'Nov 2023',
      endDate: 'Dec 2023',
      fullDescription: 'A real-time task management application allowing teams to collaborate on projects. Built with React, Firebase, and Firestore for real-time data synchronization. Includes features like task creation, assignment, progress tracking, and team notifications.',
      gallery: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop']
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather application with location-based forecasts',
      image: 'https://images.unsplash.com/photo-1508707185122-f51210aa8ee5?w=500&h=400&fit=crop',
      liveLink: 'https://example-weather.com',
      startDate: 'Sep 2023',
      endDate: 'Oct 2023',
      fullDescription: 'A beautiful weather dashboard displaying current conditions and forecasts. Integrates with OpenWeather API to fetch real-time data. Features location detection, search functionality, and responsive design for all devices.',
      gallery: ['https://images.unsplash.com/photo-1508707185122-f51210aa8ee5?w=500&h=400&fit=crop']
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio showcasing projects and skills',
      image: 'https://images.unsplash.com/photo-1460661910884-047cabcad071?w=500&h=400&fit=crop',
      liveLink: 'https://rampatel-portfolio.com',
      startDate: 'Aug 2023',
      endDate: 'Present',
      fullDescription: 'A professional portfolio website to showcase my projects, skills, and experience. Built with React and modern CSS with smooth animations and transitions. Fully responsive and optimized for all devices.',
      gallery: ['https://images.unsplash.com/photo-1460661910884-047cabcad071?w=500&h=400&fit=crop']
    }
  ],
  experience: [
    {
      id: 1,
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      role: 'Senior Frontend Developer',
      startDate: 'Mar 2023',
      endDate: 'Present',
      description: 'Leading frontend development for enterprise web applications. Responsible for architecting component systems, mentoring junior developers, and ensuring code quality through best practices and thorough code reviews.'
    },
    {
      id: 2,
      company: 'Digital Innovations Inc',
      location: 'Remote',
      role: 'Full Stack Developer',
      startDate: 'Jun 2022',
      endDate: 'Feb 2023',
      description: 'Developed and maintained full-stack web applications using React and Node.js. Implemented RESTful APIs, optimized database queries, and improved application performance by 40%.'
    },
    {
      id: 3,
      company: 'StartUp Labs',
      location: 'Bangalore, India',
      role: 'Junior Web Developer',
      startDate: 'Jan 2022',
      endDate: 'May 2022',
      description: 'Assisted in developing responsive web applications and fixing bugs. Gained hands-on experience with React, JavaScript, and CSS. Collaborated with senior developers on real-world projects.'
    }
  ],
  education: [
    {
      id: 1,
      institution: 'Stanford University',
      field: 'Computer Science',
      duration: '2018 - 2022',
      percentage: '3.8 GPA',
      description: 'Specialized in web development and software engineering with focus on full-stack technologies.'
    },
    {
      id: 2,
      institution: 'CodeAcademy Online',
      field: 'Advanced JavaScript & React',
      duration: '2021 - 2022',
      percentage: 'Completed',
      description: 'Intensive bootcamp covering advanced JavaScript concepts, React hooks, state management, and real-world project development.'
    },
    {
      id: 3,
      institution: 'Udacity',
      field: 'Full Stack Web Development',
      duration: '2020 - 2021',
      percentage: 'Completed',
      description: 'Comprehensive program covering frontend and backend technologies including databases, APIs, and deployment strategies.'
    }
  ]
};
