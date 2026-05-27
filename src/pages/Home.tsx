import { useEffect, useRef, useState } from 'react';

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
      <section className="hero">
        <svg className="hero-decor d1" width="56" height="56"><use href="#sticker-star"/></svg>
        <svg className="hero-decor d2" width="48" height="48"><use href="#sticker-spark"/></svg>
        <svg className="hero-decor d3" width="50" height="50"><use href="#sticker-heart"/></svg>
        <svg className="hero-decor d4" width="40" height="50"><use href="#sticker-fire"/></svg>

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
            <svg className="deco-mascot" width="120" height="130"><use href="#mascot"/></svg>
            <svg className="deco-coin" width="80" height="80"><use href="#coin"/></svg>

            <h2>Ready to earn your <span className="it">first 500</span>?</h2>
            <p>Free to join. First 500 Berries land in your wallet the moment you sign up. Cash out, redeem, play — your call.</p>
            <div className="cta-actions">
              <a href="#" className="btn btn-primary" data-ripple style={{ padding: '18px 32px', fontSize: '16px' }} onClick={(e) => e.preventDefault()}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.94-3.08.5-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.5C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                App Store
              </a>
              <a href="#" className="btn btn-ghost" data-ripple style={{ padding: '18px 32px', fontSize: '16px' }} onClick={(e) => e.preventDefault()}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.25-.84-.76-.84-1.35z"/></svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
