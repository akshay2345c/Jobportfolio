import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Footer from '../components/Footer';

function Home() {
  return (
    <main className="home">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </main>
  );
}

export default Home;
