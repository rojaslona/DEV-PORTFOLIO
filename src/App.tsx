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

  // Set CSS var for navbar height so native anchor navigation respects fixed header
  useEffect(() => {
    const setNavHeightVar = () => {
      const nav = document.querySelector('nav');
      const height = nav ? (nav as HTMLElement).offsetHeight : 0;
      document.documentElement.style.setProperty('--nav-height', `${height}px`);
    };

    // Run once after a small delay to allow navbar to render, then on resize
    const t = setTimeout(setNavHeightVar, 50);
    window.addEventListener('resize', setNavHeightVar);
    // Also update when the DOM loads images/fonts that could affect layout
    window.addEventListener('load', setNavHeightVar);

    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', setNavHeightVar);
      window.removeEventListener('load', setNavHeightVar);
    };
  }, []);

  // Delegated click handler for anchor links to hashes (#id) — robust Safari fallback
  useEffect(() => {
    const onDocClick = (ev: MouseEvent) => {
      // Only handle primary button clicks without modifier keys
      if (ev.defaultPrevented) return;
      if (ev.button !== 0) return; // left click only
      if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;

      const target = ev.target as Element | null;
      if (!target) return;

      // Find the nearest anchor element
      const anchor = (target.closest && target.closest('a[href^="#"]')) as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const id = href.slice(1);
      if (!id) return;

      const element = document.getElementById(id);
      if (!element) return; // allow default if no target found

      // Prevent the default jump and perform a navbar-aware smooth scroll
      ev.preventDefault();

      const navEl = document.querySelector('nav');
      const navHeight = navEl ? (navEl as HTMLElement).offsetHeight : 0;
      const offset = 10;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const targetPosition = Math.max(elementTop - navHeight - offset, 0);

      try {
        (element as HTMLElement).style.scrollMarginTop = `${navHeight + offset}px`;
      } catch (e) { /* ignore */ }

      try {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch (e) { /* ignore */ }

      try {
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      } catch (e) {
        try { window.location.hash = `#${id}`; } catch (err) { /* ignore */ }
      }

      setTimeout(() => {
        try { (element as HTMLElement).style.scrollMarginTop = ''; } catch (e) { /* ignore */ }
      }, 1000);
    };

    document.addEventListener('click', onDocClick, { passive: false });
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  // Capturing click logger: helps detect if clicks are intercepted before bubbling (Safari debugging)
  useEffect(() => {
    const captureLogger = (ev: MouseEvent) => {
      try {
        const target = ev.target as Element | null;
        const rectInfo = target ? { tag: target.tagName, cls: target.className } : null;
        const cx = ev.clientX;
        const cy = ev.clientY;
        let elemsInfo: any[] = [];
        try {
          elemsInfo = document.elementsFromPoint(cx, cy).slice(0, 8).map((el) => ({ tag: el.tagName, cls: el.className }));
        } catch (e) { elemsInfo = [(e as Error).message]; }
        console.log('[CAPTURE-CLICK] client:', { cx, cy }, 'target:', rectInfo, 'topElements:', elemsInfo);
      } catch (err) {
        console.log('[CAPTURE-CLICK] error:', err);
      }
    };

    document.addEventListener('click', captureLogger, { capture: true, passive: true });
    return () => document.removeEventListener('click', captureLogger, { capture: true } as any);
  }, []);

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
