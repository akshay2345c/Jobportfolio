import React from 'react';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <main className="home">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}

export default Home;
