import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './custom-web-apps.module.css';

export const metadata: Metadata = {
  title: 'Custom Web Apps | Nexora',
  description: 'Workflow-focused web applications with interactive interfaces, integrations, and room to scale.',
};

export default function CustomWebApps() {
  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <Link className={styles.brand} href="/">NEXORA</Link>
        <nav aria-label="Main navigation"><Link href="/#services">Services</Link><Link href="/#work">Our work</Link></nav>
        <Link className={styles.navCta} href="/?service=custom-web-apps#order">Discuss your app <span>↗</span></Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>CUSTOM WEB APPS <span>BUILT AROUND YOUR WORK</span></p>
          <h1>Software that fits<br />the way you <em>work.</em></h1>
          <p className={styles.heroText}>Replace repetitive steps and disconnected tools with a custom application shaped around how your business actually runs.</p>
          <Link className={styles.primaryCta} href="/?service=custom-web-apps#order">Plan your application <span>↗</span></Link>
        </div>
        <div className={styles.workflow} aria-label="Example automated business workflow">
          <div className={styles.workflowHead}><span>WORKFLOW / 01</span><span className={styles.live}><i /> AUTOMATED</span></div>
          <div className={styles.flowStep}><span className={styles.stepIcon}>01</span><div><b>New request</b><small>Information captured</small></div><span className={styles.stepState}>RECEIVED</span></div>
          <div className={styles.flowConnector} />
          <div className={styles.flowStep}><span className={`${styles.stepIcon} ${styles.stepAccent}`}>02</span><div><b>Workflow rules</b><small>Tasks routed automatically</small></div><span className={styles.stepState}>RUNNING</span></div>
          <div className={styles.flowConnector} />
          <div className={styles.flowStep}><span className={`${styles.stepIcon} ${styles.stepComplete}`}>03</span><div><b>Clear next action</b><small>Team sees what matters</small></div><span className={styles.stepState}>READY</span></div>
          <div className={styles.workflowFoot}><span>DESIGNED FOR YOUR TEAM</span><span>STATUS: ON TRACK</span></div>
        </div>
      </section>

      <section className={styles.capabilities} aria-labelledby="capabilities-title">
        <div className={styles.sectionIntro}>
          <div><p className={styles.eyebrow}>WHAT WE BUILD</p><h2 id="capabilities-title">The right tools.<br /><em>None of the busywork.</em></h2></div>
          <p>From the first screen to the systems behind it, each part is planned around your workflow and the people using it.</p>
        </div>
        <div className={styles.capabilityGrid}>
          <article><span>01 / OPERATIONS</span><h3>Tailored workflow automation</h3><p>We map your real process, then turn repeatable tasks, handoffs, and approvals into a smoother flow.</p></article>
          <article><span>02 / PRODUCT</span><h3>Interactive front to back</h3><p>Responsive, fast interfaces backed by dependable application logic, built with React, Next.js, Node.js, and Tailwind CSS.</p></article>
          <article><span>03 / CONNECTIONS</span><h3>Tools that work together</h3><p>Connect third-party services, payment gateways, and databases through practical API integrations.</p></article>
          <article><span>04 / FOUNDATION</span><h3>Ready to grow securely</h3><p>Start with a clear structure that can grow with your team, using modern security practices and thoughtful access controls.</p></article>
        </div>
      </section>

      <section className={styles.process}>
        <p className={styles.eyebrow}>A PRACTICAL START</p>
        <div className={styles.processRow}>
          <h2>First, understand<br />the way you work.</h2>
          <p>We’ll talk through your process, identify the friction, and shape a useful first version. No off-the-shelf workflow imposed on your business.</p>
          <Link className={styles.secondaryCta} href="/?service=custom-web-apps#order">Tell us about your workflow <span>↗</span></Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link className={styles.brand} href="/">NEXORA</Link>
        <span>WEBSITES AND TOOLS THAT WORK.</span>
        <Link href="/#services">Back to services ↑</Link>
      </footer>
    </main>
  );
}