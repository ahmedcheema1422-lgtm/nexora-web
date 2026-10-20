import type { Metadata } from 'next';
import styles from './portfolio-preview.module.css';

export const metadata: Metadata = {
  title: 'Modern Business | Portfolio Preview',
  description: 'A modern business website concept by Nexora.',
};

const services = [
  {
    number: '01',
    title: 'Find your focus',
    description: 'A clear point of view gives people a reason to choose you.',
  },
  {
    number: '02',
    title: 'Show your value',
    description: 'Make your best work and strongest ideas easy to understand.',
  },
  {
    number: '03',
    title: 'Make the next move',
    description: 'Turn a good first impression into a confident next step.',
  },
];

export default function PortfolioPreview() {
  return (
    <main className={styles.site}>
      <header className={styles.header}>
        <a className={styles.brand} href="#home" aria-label="Northline home">
          <span className={styles.brandMark}>N</span>
          <span>NORTHLINE<span className={styles.brandDot}>.</span></span>
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#approach">Approach</a>
          <a href="#services">What we do</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className={styles.headerCta} href="#contact">Let&apos;s talk <span>↗</span></a>
      </header>

      <section className={styles.hero} id="home">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span /> BUSINESS WEBSITE CONCEPT</p>
          <h1>Make room<br /><em>for what&apos;s next.</em></h1>
          <p className={styles.intro}>
            Good businesses deserve a presence that feels as considered as the work behind them.
          </p>
          <a className={styles.primaryCta} href="#services">Explore our approach <span>↗</span></a>
          <p className={styles.heroNote}>A portfolio preview by <a href="https://nexora-web-developer.vercel.app/" target="_blank" rel="noreferrer">Nexora</a></p>
        </div>
        <div className={styles.heroArtwork} aria-label="Abstract green and lime business artwork" role="img">
          <div className={styles.artOrbit} />
          <div className={styles.artDisc} />
          <span className={styles.artIndex}>INDEPENDENT THINKING<br />SINCE DAY ONE</span>
          <span className={styles.artNumber}>01<span> / 03</span></span>
          <span className={styles.artAccent}>N</span>
        </div>
      </section>

      <div className={styles.ticker} aria-label="Clarity, craft, and forward motion">
        <span>CLARITY</span><i>✳</i><span>CRAFT</span><i>✳</i><span>FORWARD MOTION</span><i>✳</i><span>CLARITY</span>
      </div>

      <section className={styles.approach} id="approach">
        <p className={styles.eyebrow}><span /> THE NORTHLINE APPROACH</p>
        <div className={styles.approachBody}>
          <h2>Built around<br />your <em>next chapter.</em></h2>
          <p>Less noise. More of what makes your business matter. We shape thoughtful digital experiences that help ambitious teams move forward.</p>
        </div>
      </section>

      <section className={styles.services} id="services">
        <div className={styles.servicesHeading}>
          <p className={styles.eyebrow}><span /> FROM IDEA TO IMPACT</p>
          <h2>Small steps.<br /><em>Lasting change.</em></h2>
        </div>
        <div className={styles.serviceList}>
          {services.map((service) => (
            <article className={styles.service} key={service.number}>
              <span className={styles.serviceNumber}>{service.number}</span>
              <div><h3>{service.title}</h3><p>{service.description}</p></div>
              <span className={styles.serviceArrow} aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer} id="contact">
        <p className={styles.eyebrow}><span /> YOUR NEXT MOVE STARTS HERE</p>
        <h2>Let&apos;s make it<br /><em>mean something.</em></h2>
        <a className={styles.primaryCta} href="https://nexora-web-developer.vercel.app/" target="_blank" rel="noreferrer">
          Talk to Nexora <span>↗</span>
        </a>
        <div className={styles.footerBottom}>
          <a className={styles.brand} href="/" aria-label="Nexora home"><span className={styles.brandMark}>N</span><span>NEXORA</span></a>
          <span>PORTFOLIO PREVIEW · BUSINESS WEBSITE CONCEPT</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}
