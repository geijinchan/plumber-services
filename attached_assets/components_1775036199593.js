// ── INJECT NAV ──────────────────────────────────────────────────────
function injectNav() {
  const nav = `
  <nav>
    <div class="nav-inner">
      <a class="logo" href="index.html">
        <span class="logo-icon">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="13" cy="13" r="13" fill="#1a56db"/>
            <path d="M13 6 C13 6, 9 10, 9 13.5 C9 15.98 10.79 18 13 18 C15.21 18 17 15.98 17 13.5 C17 10 13 6 13 6Z" fill="white"/>
            <circle cx="13" cy="13.5" r="2.2" fill="#1a56db"/>
          </svg>
        </span>
        <span class="logo-text">Home<span class="logo-accent">Plumber</span></span>
      </a>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="pricing.html">Pricing</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <div class="nav-cta">
        <a class="nav-call" href="tel:+911234567890">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.08.01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.3 7.74a16 16 0 006 6l1.06-1.06a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
          +91 12345678
        </a>
        <a href="booking.html" class="nav-book-btn">Book a Plumber</a>
      </div>
      <button class="nav-hamburger" onclick="toggleMobileMenu()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="mobile-menu" id="mobile-menu">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="pricing.html">Pricing</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <a href="booking.html" class="btn-primary" style="display:block;text-align:center;margin-top:16px;">Book a Plumber</a>
      <a href="tel:+911234567890" class="btn-secondary" style="display:block;text-align:center;margin-top:10px;">📞 Call Now</a>
    </div>
  </nav>`;
  document.body.insertAdjacentHTML('afterbegin', nav);
}

// ── INJECT FOOTER ────────────────────────────────────────────────────
function injectFooter() {
  const footer = `
  <footer>
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand-col">
          <div class="footer-logo">
            <span class="footer-logo-icon">
              <svg width="22" height="22" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="13" fill="#3b7bff"/><path d="M13 6 C13 6, 9 10, 9 13.5 C9 15.98 10.79 18 13 18 C15.21 18 17 15.98 17 13.5 C17 10 13 6 13 6Z" fill="white"/><circle cx="13" cy="13.5" r="2.2" fill="#3b7bff"/></svg>
            </span>
            Home<span>Plumber</span>
          </div>
          <p class="footer-about">Mohali's trusted plumbing professionals since 2012. Licensed, insured, and committed to quality work — every single time.</p>
          <div class="footer-badges">
            <span class="footer-badge">🏅 ITI Certified</span>
            <span class="footer-badge">🛡️ Fully Insured</span>
            <span class="footer-badge">⭐ 4.9 Rated</span>
          </div>
          <div class="footer-social">
            <a class="social-icon" href="#" aria-label="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a class="social-icon" href="#" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a class="social-icon" href="#" aria-label="YouTube">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
            </a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="services.html">💧 Leak Repair</a></li>
            <li><a href="services.html">🚿 Bathroom Installation</a></li>
            <li><a href="services.html">🔧 Pipe Replacement</a></li>
            <li><a href="services.html">🪣 Drain Cleaning</a></li>
            <li><a href="services.html">🏠 Tank Cleaning</a></li>
            <li><a href="services.html">⚡ Emergency 24/7</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="about.html#team">Our Team</a></li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="booking.html">Book Online</a></li>
          </ul>
        </div>
        <div class="footer-col footer-contact-col">
          <h4>Get In Touch</h4>
          <ul>
            <li><a href="tel:+9112345678">📞 +91 12345678</a></li>
            <li><a href="https://wa.me/9112345678" target="_blank">💬 WhatsApp Us</a></li>
            <li><a href="mailto:hello@homeplumber.in">✉️ hello@homeplumber.in</a></li>
            <li><a href="contact.html">📍 Mohali, Punjab</a></li>
          </ul>
          <a href="booking.html" class="footer-book-cta">Book a Plumber →</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 Home Plumber Services. All rights reserved.</span>
        <span class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <span class="footer-dot">·</span>
          <a href="#">Terms of Service</a>
        </span>
      </div>
    </div>
  </footer>`;
  document.body.insertAdjacentHTML('beforeend', footer);
}

// ── INJECT WHATSAPP BUTTON ───────────────────────────────────────────
function injectWhatsApp() {
  const wa = `
  <a class="whatsapp-btn" href="https://wa.me/911234567890?text=Hi%2C%20I%20need%20a%20plumber%21" target="_blank">
    <span class="wa-tooltip">Chat on WhatsApp</span>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
  </a>`;
  document.body.insertAdjacentHTML('beforeend', wa);
}

// ── MOBILE MENU ──────────────────────────────────────────────────────
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
  injectNav();
  injectFooter();
  injectWhatsApp();
});