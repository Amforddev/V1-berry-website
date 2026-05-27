export default function Footer({ navigate }: { navigate: (page: string, anchor?: string) => void }) {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <h6><svg width="34" height="34"><use href="#coin"/></svg> Berry by Rivabit</h6>
            <p>Take surveys. Earn Berry tokens. Cash out to your bank, top up airtime & data, or enter raffles. That's it — no tricks, no fine print.</p>
          </div>
          <div className="footer-col">
            <h6>Product</h6>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }}>How it works</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }}>Voices</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }}>Download the app</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>Earn &amp; spend</h6>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }}>Take surveys</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }}>Bank withdrawal</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }}>Airtime &amp; data</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }}>Raffles</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h6>Company</h6>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('about'); }}>About Rivabit</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('contact'); }}>Contact</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('privacy'); }}>Privacy</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('terms'); }}>Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span>&copy; 2026 Berry by Rivabit · Made in Lagos with ♥</span>
          <div className="social-icons">
            <a href="#" aria-label="X"><svg width="16" height="16"><use href="#s-x"/></svg></a>
            <a href="#" aria-label="Instagram"><svg width="16" height="16"><use href="#s-ig"/></svg></a>
            <a href="#" aria-label="TikTok"><svg width="16" height="16"><use href="#s-tt"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
