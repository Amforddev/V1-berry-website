import { useEffect, useRef, useState } from 'react';
import { FloatingBackground } from '../components/FloatingBerries';

export default function Home({ navigate }: { navigate: (page: string, anchor?: string) => void }) {
  const [bal, setBal] = useState(3593);
  const rate = 4.56;
  const dashCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setBal(b => b + Math.floor(Math.random() * 4) + 1);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const dashCard = dashCardRef.current;
    if (!dashCard) return;
    const dashWrap = dashCard.parentElement;
    if (!dashWrap) return;

    const handleMove = (e: MouseEvent) => {
      const r = dashWrap.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      dashCard.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(0)`;
    };
    const handleLeave = () => { dashCard.style.transform = ''; };

    dashWrap.addEventListener('mousemove', handleMove);
    dashWrap.addEventListener('mouseleave', handleLeave);
    return () => {
      dashWrap.removeEventListener('mousemove', handleMove);
      dashWrap.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div id="page-home" className="spa-page">
      <FloatingBackground />
      <section className="hero">

        <div className="wrap hero-grid">
          <div className="reveal">
            <h1>
              Earn <span className="it">Berries</span><br/>
              for things you <span className="underline">already do
                <svg viewBox="0 0 200 16" preserveAspectRatio="none"><path d="M2 12 Q50 2 100 8 T198 6" stroke="#FFF275" strokeWidth="4" fill="none" strokeLinecap="round"/></svg>
              </span>.
            </h1>
            <p className="lede">Answer quick honest surveys. Stack Berry tokens. Cash out to your bank, top up airtime & data, or enter raffles for bigger prizes. <strong style={{ color: 'var(--ink)' }}>That's it — no fluff.</strong></p>
            <div className="hero-actions">
              <a href="#cta" className="btn btn-primary" data-ripple onClick={(e) => { e.preventDefault(); navigate('home', 'cta'); }}>
                Start earning free
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#how" className="btn btn-ghost" data-ripple onClick={(e) => { e.preventDefault(); navigate('home', 'how'); }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M10 8 L16 12 L10 16 Z"/></svg>
                Watch demo · 60s
              </a>
            </div>
            <div className="hero-trust">
              <div className="avatar-stack">
                <div className="av" style={{ background: 'var(--yellow)', borderColor: 'var(--paper)' }}>A</div>
                <div className="av" style={{ background: 'var(--lime)', borderColor: 'var(--paper)' }}>T</div>
                <div className="av" style={{ background: 'var(--pink)', borderColor: 'var(--paper)' }}>C</div>
                <div className="av" style={{ background: 'var(--sky)', borderColor: 'var(--paper)' }}>+</div>
              </div>
              <div>
                <div className="stars">★★★★★ <strong style={{ color: 'var(--ink)' }}>4.9</strong></div>
                <div className="meta"><strong>50,000+</strong> <span>earning every day</span></div>
              </div>
            </div>
          </div>

          <div className="hero-dash reveal d2">
            <div className="dash-card" id="dashCard" ref={dashCardRef}>
              <div className="dash-head">
                <span className="label">My Berry Wallet</span>
              </div>
              <div className="dash-balance">
                <svg className="coin-big"><use href="#coin"/></svg>
                <div>
                  <div className="num" id="dashBalance">{bal.toLocaleString()}</div>
                  <div className="sub">≈ ₦{Math.round(bal * rate).toLocaleString()} cash value</div>
                </div>
              </div>
              <div className="rate-row">
                <span className="rate-label">Conversion rate</span>
                <span className="rate-value">1 <svg className="coin-tiny"><use href="#coin"/></svg> Berry = ₦4.56</span>
              </div>

              <div className="dash-section-label">Redeem your Berries</div>
              <div className="brand-grid">
                <div className="brand-tile">
                  <div className="logo"><svg width="44" height="44"><use href="#ico-cash"/></svg></div>
                  <div className="name">Cash</div>
                  <div className="cost">₦500 · 110 <svg width="10" height="10"><use href="#coin"/></svg></div>
                </div>
                <div className="brand-tile">
                  <div className="logo"><svg width="44" height="44"><use href="#ico-airtime"/></svg></div>
                  <div className="name">Airtime</div>
                  <div className="cost">₦1,000 · 219 <svg width="10" height="10"><use href="#coin"/></svg></div>
                </div>
                <div className="brand-tile">
                  <div className="logo"><svg width="44" height="44"><use href="#ico-data"/></svg></div>
                  <div className="name">Data</div>
                  <div className="cost">1GB · 110 <svg width="10" height="10"><use href="#coin"/></svg></div>
                </div>
                <div className="brand-tile">
                  <div className="logo"><svg width="44" height="44"><use href="#ico-raffle"/></svg></div>
                  <div className="name">Raffle</div>
                  <div className="cost">₦5K Draw · 100 <svg width="10" height="10"><use href="#coin"/></svg></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> How it works</div>
            <h2 className="section-title">Take surveys. <span className="orange-text">Get paid.</span></h2>
            <p className="section-sub">Three honest steps. Real Berries. Real cash — straight to your bank, your airtime, or into a raffle if you're feeling lucky.</p>
          </div>

          <div className="how-grid">
            <div className="how-card reveal d1">
              <div className="step-num">01</div>
              <svg className="icon-art"><use href="#art-tap"/></svg>
              <h3>Take surveys</h3>
              <p>Quick honest surveys from real brands. Most take under 3 minutes — share your opinion, no fluff.</p>
            </div>
            <div className="how-card reveal d2">
              <div className="step-num">02</div>
              <svg className="icon-art"><use href="#art-stack"/></svg>
              <h3>Earn Berries</h3>
              <p>Tokens land in your wallet instantly. No "pending", no surprise rejections. What you see is what you earned.</p>
            </div>
            <div className="how-card reveal d3">
              <div className="step-num">03</div>
              <svg className="icon-art"><use href="#art-gift"/></svg>
              <h3>Cash out or enter raffles</h3>
              <p>Withdraw straight to your bank, top up airtime &amp; data, or buy raffle tickets for a chance at bigger prizes.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="voices">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow"><span className="dot"></span> What earners say</div>
            <h2 className="section-title">Real people. <span className="orange-text">Real money.</span></h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card reveal d1">
              <svg className="corner-coin" width="40" height="40"><use href="#coin"/></svg>
              <div className="stars">★★★★★</div>
              <p className="quote">"Made ₦12,000 my first month — for opinions I'd give freely anyway. The chat surveys are weirdly fun."</p>
              <div className="who">
                <div className="av" style={{ background: 'var(--pink)' }}>A</div>
                <div><div className="name">Adaeze O.</div><div className="role">Lagos · Gold tier</div></div>
              </div>
            </div>
            <div className="testimonial-card reveal d2">
              <svg className="corner-coin" width="40" height="40"><use href="#coin"/></svg>
              <div className="stars">★★★★★</div>
              <p className="quote">"Cash out every Friday like clockwork. Pays for my data sub with change to spare. Set-and-forget income."</p>
              <div className="who">
                <div className="av" style={{ background: 'var(--lime)' }}>T</div>
                <div><div className="name">Tunde K.</div><div className="role">Abuja · Platinum tier</div></div>
              </div>
            </div>
            <div className="testimonial-card reveal d3">
              <svg className="corner-coin" width="40" height="40"><use href="#coin"/></svg>
              <div className="stars">★★★★★</div>
              <p className="quote">"Bought my first raffle ticket with Berries last month — and won ₦25,000. Just for answering a few surveys on my lunch break."</p>
              <div className="who">
                <div className="av" style={{ background: 'var(--yellow)' }}>C</div>
                <div><div className="name">Chinedu A.</div><div className="role">PH · Silver tier</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: '80px' }}>
        <div className="wrap">
          <div className="cta-card reveal" id="cta">

            <h2>Ready to earn your <span className="it">first 500</span>?</h2>
            <p>Free to join. First 500 Berries land in your wallet the moment you sign up. Cash out, redeem, play — your call.</p>
            <div className="cta-actions">
              <a href="#" className="btn btn-primary" data-ripple style={{ padding: '18px 32px', fontSize: '16px' }} onClick={(e) => e.preventDefault()}>
                <svg width="18" height="18" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                App Store
              </a>
              <a href="#" className="btn btn-ghost" data-ripple style={{ padding: '18px 32px', fontSize: '16px' }} onClick={(e) => e.preventDefault()}>
                <svg width="16" height="18" viewBox="0 0 512 512" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
