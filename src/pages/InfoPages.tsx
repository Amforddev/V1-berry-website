import { useEffect } from 'react';

function useTocScroll() {
  useEffect(() => {
    const toc = document.querySelector('.doc-toc');
    if (!toc) return;
    const links = Array.from(toc.querySelectorAll('a[href^="#"]'));
    const sections = links.map(a => document.querySelector(a.getAttribute('href')!)).filter(Boolean) as HTMLElement[];

    const update = () => {
      const y = window.scrollY + 140;
      let active = sections[0];
      sections.forEach(s => { if (s && s.offsetTop <= y) active = s; });
      if (active) {
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href')?.slice(1) === active.id));
      }
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
}

export function About() {
  return (
    <div id="page-about" className="spa-page">
      <section className="doc-hero">
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot"></span> About Berry</div>
          <h1 className="reveal">A reward layer for <span className="it">honest opinions.</span></h1>
          <p className="lede reveal">Built in Lagos by Rivabit, Berry pays Nigerians in real Naira for the truth about the brands they use, the products they buy, and the lives they live. No spam, no tricks, no fine print.</p>
        </div>
      </section>

      <section>
        <div className="wrap about-grid">
          <div className="about-card reveal">
            <h3>Our story</h3>
            <p>Berry started with a question: <strong>why are brands spending billions on consumer research while the people whose opinions they want never see a Naira of it?</strong></p>
            <p>So we built a platform that flips the model. Real people answer honest surveys. Brands get sharp, verified insights. Everybody gets paid.</p>
            <p>Today, over 50,000 Nigerians earn Berry tokens every day — cash that lands instantly in their wallets.</p>
          </div>
          <div className="about-card reveal d1">
            <div className="stat-big">50,000+</div>
            <div className="stat-lab">Active earners across Nigeria</div>
            <div style={{ margin: '24px 0', height: '1px', background: 'var(--line-strong)' }}></div>
            <div className="stat-big">₦2.3M+</div>
            <div className="stat-lab">Paid out since 2023</div>
            <div style={{ margin: '24px 0', height: '1px', background: 'var(--line-strong)' }}></div>
            <div className="stat-big">14M</div>
            <div className="stat-lab">Surveys answered</div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal" style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 className="section-title">What we <span className="orange-text">stand for.</span></h2>
          </div>
          <div className="values-grid">
            <div className="value-card reveal d1">
              <div className="icon-wrap"><svg width="26" height="26"><use href="#coin"/></svg></div>
              <h4>Pay people what they're owed</h4>
              <p>Your time and opinion have value. We pay in real Naira, instantly, with zero "pending" purgatory.</p>
            </div>
            <div className="value-card reveal d2">
              <div className="icon-wrap"><svg width="26" height="26"><use href="#sticker-spark"/></svg></div>
              <h4>Respect attention</h4>
              <p>No spam. No 50-question marathons. Most Berry surveys take under three minutes — and they're written by humans who care.</p>
            </div>
            <div className="value-card reveal d3">
              <div className="icon-wrap"><svg width="26" height="26"><use href="#sticker-heart"/></svg></div>
              <h4>Privacy by default</h4>
              <p>Brands see aggregate insights, never your identity. Your data is yours; we just borrow your honest take.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Contact() {
  return (
    <div id="page-contact" className="spa-page">
      <section className="doc-hero">
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot"></span> Contact</div>
          <h1 className="reveal">Get in <span className="it">touch.</span></h1>
          <p className="lede reveal">Questions about your wallet, a withdrawal, or a brand partnership? Drop us a line. We read every message and reply within one business day.</p>
        </div>
      </section>

      <section>
        <div className="wrap contact-grid">
          <form className="contact-form reveal" onSubmit={(e) => { e.preventDefault(); const btn = e.currentTarget.querySelector('button'); if(btn){ btn.textContent = 'Thanks! We will reply soon.'; btn.disabled = true; }}}>
            <div className="form-field">
              <label htmlFor="cf-name">Your name</label>
              <input type="text" id="cf-name" placeholder="Adaeze Okafor" required />
            </div>
            <div className="form-field">
              <label htmlFor="cf-email">Email address</label>
              <input type="email" id="cf-email" placeholder="you@example.com" required />
            </div>
            <div className="form-field">
              <label htmlFor="cf-topic">I&apos;m contacting about</label>
              <select id="cf-topic">
                <option>My Berry wallet</option>
                <option>A withdrawal issue</option>
                <option>A specific survey</option>
                <option>Brand partnerships</option>
                <option>Press &amp; media</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="cf-msg">Message</label>
              <textarea id="cf-msg" placeholder="Tell us what's on your mind&hellip;" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" data-ripple style={{ width: '100%', justifyContent: 'center' }}>
              Send message
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </form>

          <div className="contact-side">
            <div className="contact-card reveal d1">
              <div className="ic-wrap"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5440FF" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7 L12 13 L21 7"/></svg></div>
              <h4>Email us directly</h4>
              <p>For wallet, withdrawal &amp; account questions.</p>
              <a href="mailto:hello@berry.rivabit.com">hello@berry.rivabit.com</a>
            </div>
            <div className="contact-card reveal d2">
              <div className="ic-wrap"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5440FF" strokeWidth="1.8"><path d="M5 4 C5 3 6 3 7 3 L9 3 C10 3 10 4 11 6 L9 8 C10 12 12 14 16 15 L18 13 C20 14 21 14 21 15 L21 17 C21 18 21 19 20 19 C12 19 5 12 5 4 Z"/></svg></div>
              <h4>Phone & WhatsApp</h4>
              <p>9am – 6pm WAT, Monday to Friday.</p>
              <a href="tel:+2348000000000">+234 800 000 0000</a>
            </div>
            <div className="contact-card reveal d3">
              <div className="ic-wrap"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5440FF" strokeWidth="1.8"><path d="M12 22 C 7 16 4 12 4 8 A 8 8 0 0 1 20 8 C 20 12 17 16 12 22 Z"/><circle cx="12" cy="8" r="2.5"/></svg></div>
              <h4>Our HQ</h4>
              <p>Drop by during business hours.</p>
              <p style={{ marginTop: '6px' }}><strong>Rivabit Labs</strong><br/>14 Adeola Hopewell Street<br/>Victoria Island, Lagos · Nigeria</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Privacy() {
  useTocScroll();
  return (
    <div id="page-privacy" className="spa-page">
      <section className="doc-hero">
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot"></span> Privacy</div>
          <h1 className="reveal">Privacy <span className="it">Policy.</span></h1>
          <p className="lede reveal">A plain-English explanation of what we collect, why we collect it, and what you can do about it. We try to keep it short because nobody reads the long ones anyway.</p>
          <div className="doc-meta reveal">
            <span>Last updated <strong>23 May 2026</strong></span>
            <span style={{ width: '1px', height: '14px', background: 'var(--line-bold)' }}></span>
            <span>Version <strong>3.0</strong></span>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap legal-layout">
          <aside className="doc-toc">
            <h5>Contents</h5>
            <ol>
                <li><a href="#s1">Who we are</a></li>
                <li><a href="#s2">Information we collect</a></li>
                <li><a href="#s3">How we use your info</a></li>
                <li><a href="#s4">Who sees your data</a></li>
                <li><a href="#s5">Your rights</a></li>
                <li><a href="#s6">How we keep data safe</a></li>
                <li><a href="#s7">Cookies &amp; tracking</a></li>
                <li><a href="#s8">Children</a></li>
                <li><a href="#s10">Contact us</a></li>
            </ol>
          </aside>
          <article className="legal-content">
            <h2 id="s1">Who we are</h2>
            <p>Berry is operated by <strong>Rivabit Technologies Limited</strong>, a company registered in Lagos, Nigeria. References to "Berry", "we", "us", or "our" mean Rivabit. This Privacy Policy explains how we collect, use, and protect your information when you use the Berry app or website.</p>
            <h2 id="s2">Information we collect</h2>
            <p>To make Berry work, we collect a small amount of information — the minimum needed to send you relevant surveys and pay you accurately.</p>
            <ul>
              <li>Your name, email, and phone number</li>
              <li>Your bank account or mobile-money details (for payouts only)</li>
            </ul>
            <h2 id="s3">How we use your info</h2>
            <p>To match you with surveys that are relevant to who you are, and to credit your wallet and process withdrawals.</p>
            <h2 id="s4">Who sees your data</h2>
            <p>Brands buying research see aggregated, anonymized reports. They never see your name or contact details.</p>
            <h2 id="s5">Your rights</h2>
            <p>Under the Nigeria Data Protection Act and applicable international standards, you have the right to access the personal information we hold about you and correct anything that is inaccurate.</p>
            <h2 id="s6">How we keep data safe</h2>
            <p>All data in transit is encrypted with TLS 1.3. Sensitive fields (bank details, contact info) are encrypted at rest using AES-256.</p>
            <h2 id="s7">Cookies &amp; tracking</h2>
            <p>Our website uses a small number of first-party cookies to remember that you're logged in and to count anonymous visits. We don't run any third-party advertising trackers.</p>
            <h2 id="s8">Children</h2>
            <p>Berry is for users aged 18 and over. If we discover an account belongs to someone under 18, we'll close it and refund any pending balance to a verified guardian on request.</p>
            <h2 id="s10">Contact us</h2>
            <p>Privacy questions, data requests, or complaints: <a href="mailto:privacy@berry.rivabit.com">privacy@berry.rivabit.com</a></p>
          </article>
        </div>
      </section>
    </div>
  );
}

export function Terms() {
  useTocScroll();
  return (
    <div id="page-terms" className="spa-page">
      <section className="doc-hero">
        <div className="wrap">
          <div className="eyebrow reveal"><span className="dot"></span> Terms</div>
          <h1 className="reveal">Terms of <span className="it">Service.</span></h1>
          <p className="lede reveal">The rules of the road for using Berry. We've tried to write these in plain English; the legalese is kept to a minimum because we want you to actually understand what you're agreeing to.</p>
          <div className="doc-meta reveal">
            <span>Last updated <strong>23 May 2026</strong></span>
            <span style={{ width: '1px', height: '14px', background: 'var(--line-bold)' }}></span>
            <span>Version <strong>3.0</strong></span>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap legal-layout">
          <aside className="doc-toc">
            <h5>Contents</h5>
            <ol>
                <li><a href="#t1">Agreement</a></li>
                <li><a href="#t2">Who can use</a></li>
                <li><a href="#t3">Your account</a></li>
                <li><a href="#t4">How Berries work</a></li>
                <li><a href="#t5">Raffles &amp; draws</a></li>
                <li><a href="#t6">Things you agree not to do</a></li>
                <li><a href="#t7">Intellectual property</a></li>
                <li><a href="#t12">Contact</a></li>
            </ol>
          </aside>
          <article className="legal-content">
            <h2 id="t1">Agreement to these terms</h2>
            <p>By creating a Berry account or using the Berry app or website, you agree to these Terms of Service. If you do not agree, please don't use Berry. These terms are a legal contract between you and Rivabit Technologies Limited.</p>
            <h2 id="t2">Who can use Berry</h2>
            <p>You must be at least 18 years old, legally resident in Nigeria, and act on your own behalf.</p>
            <h2 id="t3">Your account</h2>
            <p>You're responsible for keeping your password safe and for everything that happens on your account.</p>
            <h2 id="t4">How Berries work</h2>
            <p>Berries are points credited to your Berry wallet when you complete eligible surveys. They are not legal tender.</p>
            <h2 id="t5">Raffles &amp; draws</h2>
            <p>Berry draws are skill-and-chance promotions, not gambling. Entry costs are clearly displayed before you confirm.</p>
            <h2 id="t6">Things you agree not to do</h2>
            <p>Create multiple accounts, use bots, scrape, or attempt to disrupt our service. Breaking these rules can result in account suspension and forfeiture of unredeemed Berries.</p>
            <h2 id="t7">Intellectual property</h2>
            <p>Everything you see on the Berry app and website belongs to Rivabit Technologies Limited. You may not copy or redistribute it without our written permission.</p>
            <h2 id="t12">Contact</h2>
            <p>Questions about these Terms? Email <a href="mailto:legal@berry.rivabit.com">legal@berry.rivabit.com</a>.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
