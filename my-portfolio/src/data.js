
export const staticData = {
  profile: {
    name: 'Akshay Patel',
    role: 'Frontend Developer (React js)',
    tagline: 'Building beautiful, responsive web applications with modern technologies',
    email: 'patelakshay1421@gmail.com',
    phone: '+91 8320383885',
    location: '65, Safal Exotica, Kadi, Gujarat-382715'
  },
  skills: [
    { id: 1, name: 'React', level: 'Advanced' },
    { id: 2, name: 'JavaScript', level: 'Advanced' },
    { id: 3, name: 'CSS', level: 'Advanced' },
    { id: 4, name: 'HTML', level: 'Advanced' },
    { id: 5, name: 'Tailwind css', level: 'Intermediate' },
    { id: 6, name: 'Context Api', level: 'Intermediate' },
    { id: 7, name: 'Redux', level: 'Intermediate' },
    { id: 8, name: 'Manual Testing', level: 'Intermediate' },
    { id: 9, name: 'Responsive Design', level: 'Advanced' }
   
  ],
  projects: [
    {
      id: 1,
      title: 'XOSportsHub',
      description: 'XOSportsHub is an online platform where sports enthusiasts can explore and trade game-strategies: browse expert playbooks, buy or sell coaching tactics across football, basketball, baseball and soccer, and connect with a community of competitive players.',
      image: '../src/assets/images/XOsports-hub-logo.png',
      liveLink: 'https://xosportshub.com/',
      startDate: 'May 2025',
      endDate: 'Aug 2025',
      fullDescription: 'Developed a responsive and interactive sports strategy marketplace using React.js, Tailwind CSS, and extensive custom CSS for fine-grained design control. Implemented Redux for efficient global state management and lazy loading for optimized performance. Integrated a custom Lottie-based loader for smooth loading feedback and used Framer Motion to create engaging, scroll-based animations that enhance user experience. Built a secure admin panel with features for page control (blogs, content updates) and user management, including the ability to activate or deactivate users, ensuring streamlined platform administration. Collaborated with designers and backend developers to integrate APIs and ensure seamless functionality. Focused on clean, maintainable code, manual testing, and cross-browser compatibility to deliver a high-quality, user-centric interface.',
      
    },
    {
      id: 2,
      title: 'IIM LMS',
      description: 'IIM LMS is an online learning management platform designed to streamline education through interactive courses, progress tracking, and seamless user experience. It enables students to access learning materials, manage assignments, and track performance in one centralized, user-friendly system.',
      image: '../src/assets/images/bluelogo.svg',
      liveLink: 'https://iim.thefabaf.com/',
      startDate: 'jun 2025',
      endDate: 'Working',
      fullDescription: 'Developed a fully responsive and interactive learning management system using React.js and custom CSS to deliver a clean, consistent, and user-friendly interface. Implemented Redux for efficient global state management and lazy loading to optimize performance and reduce initial load times. Collaborated closely with designers and backend developers to integrate APIs for course management, authentication, and student progress tracking. Focused on writing clean, maintainable code and performed manual testing to ensure seamless functionality, UI accuracy, and cross-browser compatibility across all devices.',
  
    },
    {
      id: 3,
      title: 'Party Pipeline',
      description: 'Party Pipeline is an online marketplace built to bring events to life with ease. Users can browse a wide variety of vendors — from food trucks and entertainment acts to equipment rentals — all in one place. With a streamlined booking system and purchase-protection guarantee, it empowers customers to plan confidently and vendors to showcase their services seamlessly.',
      image: '../src/assets/images/party-pipeline-logo.svg',
      liveLink: 'https://party-pipeline.thefabaf.com/',
      startDate: 'Sep 2025',
      endDate: 'Working',
      fullDescription: 'Developed a responsive and feature-rich event marketplace platform using React.js, custom CSS with CSS variables, and minimal Tailwind CSS for efficient styling and layout control. Implemented Redux for streamlined state management and lazy loading to enhance performance and page responsiveness. Integrated Framer Motion for smooth, scroll-based animations that enrich user interaction. Added a Google Calendar integration to simplify event scheduling and tracking, and utilized React Recharts for data visualization and insights. Built an advanced admin panel with interactive graphs, user management, payment control, category management, and blog features to ensure complete operational oversight. Included a scroll-to-top button for improved navigation and performed partial backend development with assistance from AI tools to support data handling and automation. Focused on delivering a dynamic, scalable, and visually appealing user experience through clean, optimized, and maintainable code.',

    }

  ],
  experience: [
    {
      id: 1,
      company: 'FabAF Private Limited',
      location: 'Pehel Lake View, 811, Gandhinagar, Gujarat 382501',
      role: 'Frontend Developer',
      startDate: 'Feb 2025',
      endDate: 'Present',
      description: 'Responsible for creating and maintaining responsive and user-friendly UI for websites. Also perform manual testing to ensure functional accuracy, UI consistency, and smooth user experience across different devices and browsers.'
    }
  ],
  education: [
    {
      id: 1,
      institution: 'Stanford University',
      field: 'Information Technology',
      duration: '2019 - 2023',
      percentage: '7.82 CGPA',
      description: 'Completed'
    },
    {
      id: 2,
      institution: 'S.V. High School, Kadi',
      field: 'HSC (A Group)',
      duration: '2018 - 2019',
      percentage: '76%',
      description: 'Completed'
    },
    {
      id: 3,
      institution: 'S.V. High School, Kadi',
      field: 'SSC',
      duration: '2016 - 2017',
      percentage: '80%',
      description: 'Completed'
    }
  ]
};
