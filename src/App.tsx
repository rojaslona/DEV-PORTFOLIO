import { useState, useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

// Components
import Navigation from './components/layout/Navigation.tsx';
import Hero from './components/sections/Hero.tsx';
import Bio from './components/sections/Bio.tsx';
import Contact from './components/sections/Contact.tsx';
import Footer from './components/layout/Footer.tsx';
import ThemeToggle from './components/layout/ThemeToggle.tsx';
import Skills from './components/sections/Skills.tsx';
import Projects from './components/sections/Projects.tsx';

// Types
import type { Theme } from './types';

function App() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="App">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <Navigation />
      <main>
        <Hero />
        <Bio />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
