import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { About, Contact, Privacy, Terms } from './pages/InfoPages';

export default function App() {
  const [page, setPage] = useState('home');

  const navigate = (pg: string, anchor?: string) => {
    setPage(pg);
    window.scrollTo(0, 0);
    if (anchor) {
      setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    }
  };

  useEffect(() => {
    // Cursor
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let cx = mx, cy = my, rx = mx, ry = my;
    let reqId: number;

    const onMouseMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener('mousemove', onMouseMove);

    const tickCursor = () => {
      cx += (mx - cx) * 0.4; cy += (my - cy) * 0.4;
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      if (cursor) cursor.style.transform = `translate(${cx-7}px, ${cy-7}px)`;
      if (ring) ring.style.transform = `translate(${rx-18}px, ${ry-18}px)`;
      reqId = requestAnimationFrame(tickCursor);
    };
    tickCursor();

    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('button, a, .brand-tile, .testimonial-card, .how-card, input[type="range"], .doc-toc a, .legal-content a')) {
        cursor?.classList.add('big');
      }
    };
    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest('button, a, .brand-tile, .testimonial-card, .how-card, input[type="range"], .doc-toc a, .legal-content a')) {
        cursor?.classList.remove('big');
      }
    };
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    const onClick = (e: MouseEvent) => {
      const btn = (e.target as Element).closest('[data-ripple]') as HTMLElement;
      if (!btn) return;
      const r = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const size = Math.max(r.width, r.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - r.left - size/2) + 'px';
      ripple.style.top = (e.clientY - r.top - size/2) + 'px';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };
    document.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('click', onClick);
      cancelAnimationFrame(reqId);
    };
  }, []);

  useEffect(() => {
    const topnav = document.getElementById('topnav');
    const onNavScroll = () => {
      if (topnav) topnav.classList.toggle('scrolled', window.scrollY > 30);
    };
    onNavScroll();
    window.addEventListener('scroll', onNavScroll, { passive: true });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
        }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

    document.querySelectorAll('.reveal:not(.in)').forEach(n => io.observe(n));

    return () => window.removeEventListener('scroll', onNavScroll);
  }, [page]);

  const renderPage = () => {
    switch(page) {
      case 'home': return <Home navigate={navigate} />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      case 'privacy': return <Privacy />;
      case 'terms': return <Terms />;
      default: return <Home navigate={navigate} />;
    }
  };

  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-ring"></div>
      <div id="fx-layer"></div>
      <Navbar navigate={navigate} />
      {renderPage()}
      <Footer navigate={navigate} />
    </>
  );
}
