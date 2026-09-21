import './styles.css';

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('App root not found');

app.innerHTML = `
  <header class="nav">
    <a class="brand" href="#home"><img class="brand-logo" src="/resources/nexora-favicon.jpg" alt="Nexora logo"><span>NEXORA</span></a>
    <nav>
      <a href="#services">Services</a><a href="#work">Our Work</a><a href="#pricing">Pricing</a><a href="https://wa.me/923298803509?text=Hi%20Nexora%2C%20I%20want%20a%20website." target="_blank" rel="noreferrer">WhatsApp</a>
    </nav>
    <a class="nav-cta" href="https://wa.me/923298803509?text=Hi%20Nexora%2C%20I%20want%20a%20website." target="_blank" rel="noreferrer">WhatsApp Us <span>↗</span></a>
  </header>

  <main id="home">
    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow"><i></i> WEB DEVELOPMENT STUDIO</div>
        <h1>We build <em>websites</em><br>that grow businesses.</h1>
        <p>Modern, fast and conversion-focused websites for businesses ready to look serious online.</p>
        <div class="actions"><a class="button primary" href="#order">Build My Website <span>↗</span></a><a class="button ghost" href="#work">See Our Work</a></div>
        <div class="trust"><span>✦</span> Custom design · Responsive · Fast delivery</div>
      </div>
      <div class="hero-card">
        <div class="browser"><div class="dots">● ● ●</div><div class="url">yourbusiness.com</div></div>
        <div class="site-preview"><div class="mini-nav">YOUR BRAND <span>MENU</span></div><div class="mini-title">Make your<br><b>business visible.</b></div><div class="mini-line"></div><div class="mini-btn">GET STARTED →</div><div class="mini-stats"><b>01</b><b>02</b><b>03</b></div></div>
      </div>
    </section>

    <section class="ticker"><span>WEB DESIGN</span><b>✦</b><span>E-COMMERCE</span><b>✦</b><span>LANDING PAGES</span><b>✦</b><span>WEB APPS</span><b>✦</b><span>WEB DESIGN</span></section>

    <section id="services" class="section">
      <div class="section-head"><div><div class="eyebrow">WHAT WE DO</div><h2>Everything you need<br>to <em>stand out.</em></h2></div><p>From a simple business site to a complete online store, we turn your idea into a polished web experience.</p></div>
      <div class="cards">
        <article><span class="num">01</span><h3>Business Websites</h3><p>Professional websites that make customers trust your business.</p><a href="#order">Explore →</a></article>
        <article><span class="num">02</span><h3>Online Stores</h3><p>Beautiful e-commerce stores built to turn visitors into buyers.</p><a href="#order">Explore →</a></article>
        <article><span class="num">03</span><h3>Landing Pages</h3><p>Focused pages designed around one goal: getting results.</p><a href="#order">Explore →</a></article>
        <article><span class="num">04</span><h3>Custom Web Apps</h3><p>Interactive tools and web apps tailored to your workflow.</p><a href="#order">Explore →</a></article>
      </div>
    </section>

    <section id="work" class="section work">
      <div class="section-head"><div><div class="eyebrow">SELECTED PROJECTS</div><h2>Built with <em>purpose.</em></h2></div><p>Explore our work by project type and open a live experience.</p></div>
      <div class="portfolio-filters" role="tablist" aria-label="Portfolio filters">
        <button class="filter-button active" type="button" data-filter="all">All</button>
        <button class="filter-button" type="button" data-filter="restaurant">Restaurants</button>
        <button class="filter-button" type="button" data-filter="ai">AI / Apps</button>
        <button class="filter-button" type="button" data-filter="business">Business</button>
      </div>
      <div class="portfolio-grid">
        <a class="project portfolio-card" data-category="restaurant" href="https://super-grill-burger.vercel.app/" target="_blank" rel="noreferrer">
          <div class="project-visual"><img class="portfolio-site-image" src="/resources/super-grill-burger-logo.jpg" alt="Super Grill Burger logo" loading="lazy"></div>
          <div class="project-info"><span>RESTAURANT WEBSITE · 2026</span><h3>Super Grill Burger</h3><p>A bold restaurant experience with menu presentation and strong ordering-focused design.</p><b>Open live site ↗</b></div>
        </a>
        <article class="portfolio-card portfolio-placeholder" data-category="ai">
          <div class="portfolio-art"><span>PF</span><strong>AI<br>TOOLS</strong><small>COMING NEXT</small></div>
          <div class="project-info"><span>AI / WEB APP CONCEPT</span><h3>PixelForge AI</h3><p>A polished product direction for an AI-powered creative workflow and dashboard experience.</p><b>Portfolio preview</b></div>
        </article>
        <article class="portfolio-card portfolio-placeholder" data-category="business">
          <div class="portfolio-art portfolio-business"><span>01</span><strong>BUSINESS<br>ONLINE</strong><small>CASE STUDY</small></div>
          <div class="project-info"><span>BUSINESS WEBSITE CONCEPT</span><h3>Modern Business</h3><p>A clean conversion-focused layout built around trust, services and clear calls to action.</p><b>Portfolio preview</b></div>
        </article>
      </div>
    </section>

    <section class="section testimonials">
      <div class="section-head"><div><div class="eyebrow">CLIENT FEEDBACK</div><h2>Good work gets<br><em>remembered.</em></h2></div><p>Short feedback highlights the experience clients can expect from a focused web project.</p></div>
      <div class="testimonial-grid">
        <article><div class="stars">★★★★★</div><blockquote>“The new site made our business look much more professional and gave customers a clearer way to order.”</blockquote><div class="person"><strong>Super Grill Burger</strong><span>Restaurant website</span></div></article>
        <article><div class="stars">★★★★★</div><blockquote>“Clean design, smooth mobile experience and a much stronger first impression for our customers.”</blockquote><div class="person"><strong>Business Client</strong><span>Business website</span></div></article>
        <article><div class="stars">★★★★★</div><blockquote>“The process was straightforward and the final result felt polished instead of like a generic template.”</blockquote><div class="person"><strong>Nexora Client</strong><span>Custom project</span></div></article>
      </div>
    </section>

    <section class="section faq-section">
      <div class="section-head"><div><div class="eyebrow">FAQ</div><h2>Questions?<br><em>We've got answers.</em></h2></div><p>Quick answers to the questions clients usually ask before starting a website project.</p></div>
      <div class="faq-list">
        <details open><summary>How long does a website take?</summary><p>Most business websites can be completed in around 1–2 weeks, depending on the number of pages, content and feedback rounds.</p></details>
        <details><summary>Do I get revisions?</summary><p>Yes. Revisions are part of the project process so the final design can be refined around your feedback and business goals.</p></details>
        <details><summary>Will my website work on mobile?</summary><p>Yes. Responsive layouts are included so the experience adapts cleanly to phones, tablets and desktops.</p></details>
        <details><summary>Can you connect WhatsApp?</summary><p>Yes. We can add WhatsApp buttons and inquiry flows so visitors can contact your business directly.</p></details>
        <details><summary>Do you build online stores and web apps?</summary><p>Yes. E-commerce and custom web app projects are available through the Premium package or a tailored quote.</p></details>
      </div>
    </section>

    <section id="pricing" class="section pricing">
      <div class="section-head"><div><div class="eyebrow">SIMPLE PRICING</div><h2>Pick a package.<br><em>Start building.</em></h2></div><p>Every project is customized to your needs. These packages give you a clear starting point.</p></div>
      <div class="price-grid">
        <article><span>STARTER</span><h3>Basic</h3><div class="price">From <b>PKR 15K</b></div><p>Perfect for a personal brand or small business.</p><ul><li>✓ Up to 4 pages</li><li>✓ Mobile responsive</li><li>✓ Contact / WhatsApp CTA</li><li>✓ Basic SEO setup</li></ul><a href="#order" class="button ghost">Choose Basic</a></article>
        <article class="featured"><span>POPULAR</span><h3>Professional</h3><div class="price">From <b>PKR 30K</b></div><p>For businesses that want a stronger online presence.</p><ul><li>✓ Up to 8 pages</li><li>✓ Custom modern design</li><li>✓ Portfolio / gallery</li><li>✓ Advanced animations</li></ul><a href="#order" class="button primary">Choose Professional</a></article>
        <article><span>ADVANCED</span><h3>Premium</h3><div class="price">Custom <b>Quote</b></div><p>For stores, web apps and advanced requirements.</p><ul><li>✓ E-commerce / custom features</li><li>✓ Admin functionality</li><li>✓ Performance optimization</li><li>✓ Priority support</li></ul><a href="#order" class="button ghost">Get a Quote</a></article>
      </div>
    </section>

    <section id="order" class="order"><div class="order-contact"><a class="button primary" href="https://wa.me/923298803509?text=Hi%20Nexora%2C%20I%20want%20a%20website." target="_blank" rel="noreferrer">Chat on WhatsApp ↗</a></div>
      <div><div class="eyebrow">LET'S WORK TOGETHER</div><h2>Have an idea?<br><em>Let's build it.</em></h2><p>Tell us what you need and we'll get back to you with the next steps.</p></div>
      <form id="project-form">
        <label>Your name<input required name="name" placeholder="Ahmed"></label>
        <label>Business / project name<input required name="business" placeholder="Your Business"></label>
        <label>What do you need?<select name="type"><option>Business Website</option><option>Online Store</option><option>Landing Page</option><option>Custom Web App</option></select></label>
        <label>Tell us about your project<textarea required name="details" rows="4" placeholder="What should your website do?"></textarea></label>
        <button class="button primary" type="submit">Send Project Request ↗</button>
        <small id="form-status"></small>
      </form>
    </section>
  </main>

  <footer><div class="brand">NEXORA</div><p>Websites that work as hard as you do.</p><div><a href="#services">Services</a><a href="#work">Work</a><a href="#order">Start a Project</a><a href="https://wa.me/923298803509?text=Hi%20Nexora%2C%20I%20want%20a%20website." target="_blank" rel="noreferrer">WhatsApp</a></div><p class="developer-credit">Made by Cheema developer</p></footer>
`;

const hideInjectedWidgets = () => {
  const selectors = [
    'iframe[src*="chat" i]','iframe[src*="messenger" i]','iframe[src*="intercom" i]','iframe[src*="crisp" i]','iframe[src*="zendesk" i]','iframe[src*="tawk" i]','iframe[title*="chat" i]','[aria-label*="chat" i]','[aria-label*="live support" i]','[id*="intercom" i]','[id*="crisp" i]','[id*="tawk" i]','[id*="zendesk" i]','[id*="messenger" i]','[class*="intercom" i]','[class*="crisp" i]','[class*="tawk" i]','[class*="zendesk" i]','[class*="messenger" i]'
  ];
  document.querySelectorAll<HTMLElement>(selectors.join(',')).forEach(el => el.classList.add('floating-widget-hidden'));
};
hideInjectedWidgets();
new MutationObserver(hideInjectedWidgets).observe(document.documentElement, { childList: true, subtree: true });

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    const target = document.querySelector(link.getAttribute('href') || '');
    target?.scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelectorAll<HTMLButtonElement>('.filter-button').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter || 'all';
    document.querySelectorAll<HTMLButtonElement>('.filter-button').forEach(item => item.classList.toggle('active', item === button));
    document.querySelectorAll<HTMLElement>('.portfolio-card').forEach(card => card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter));
  });
});

const form = document.querySelector<HTMLFormElement>('#project-form');
const status = document.querySelector<HTMLElement>('#form-status');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const message = `Hi, I want a website. Name: ${data.get('name')}. Business: ${data.get('business')}. Type: ${data.get('type')}. Details: ${data.get('details')}`;
  const url = `https://wa.me/923298803509?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
  if (status) status.textContent = 'Opening WhatsApp with your project request…';
});
