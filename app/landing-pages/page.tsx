import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './landing-pages.module.css';

export const metadata: Metadata = {
  title: 'Landing Page Templates | Nexora',
  description: 'Explore landing page directions for restaurants, professional services, and product launches.',
};

export default function LandingPages() {
  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <Link className={styles.brand} href="/">NEXORA</Link>
        <nav className={styles.navLinks} aria-label="Main navigation">
          <Link href="/#services">Services</Link>
          <Link href="/#work">Our work</Link>
        </nav>
        <Link className={styles.navCta} href="/#order">Start a project <span>↗</span></Link>
      </header>

      <section className={styles.intro}>
        <div>
          <p className={styles.eyebrow}>LANDING PAGE COLLECTION <span>01—03</span></p>
          <h1>A strong first<br />impression, <em>built for you.</em></h1>
        </div>
        <p className={styles.introCopy}>Choose a direction for your business. Each layout is built around a clear message and one useful next step.</p>
      </section>

      <section className={styles.library} aria-labelledby="templates-title">
        <div className={styles.libraryHeading}>
          <div>
            <p className={styles.eyebrow}>CHOOSE YOUR STARTING POINT</p>
            <h2 id="templates-title">Three ways to get<br />your business noticed.</h2>
          </div>
          <p>Every direction can be tailored to your brand, content, and goals.</p>
        </div>

        <div className={styles.templateGrid}>
          <article className={styles.template}>
            <div className={styles.templateHeading}>
              <span>01 / FOOD & HOSPITALITY</span>
              <h3>Restaurant & cafe</h3>
            </div>
            <div className={`${styles.preview} ${styles.restaurant}`}>
              <div className={styles.previewNav}>
                <strong><span className={styles.brandMark}>F</span> FABLE KITCHEN</strong>
                <span>MENU&nbsp;&nbsp; STORY&nbsp;&nbsp; VISIT</span>
              </div>
              <div className={styles.restaurantBody}>
                <div>
                  <p className={styles.previewEyebrow}>WOOD-FIRED · MADE DAILY</p>
                  <h4>Come hungry.<br />Leave happy.</h4>
                  <p>Good food, warm tables, and a reason to stay a little longer.</p>
                  <Link className={styles.previewCta} href="/?template=restaurant#order">Explore the menu <span>↗</span></Link>
                </div>
                <img src="/resources/super-grill-burger-logo.jpg" alt="Restaurant brand preview" />
              </div>
              <div className={styles.previewFoot}><span>OPEN DAILY · 11 AM—10 PM</span><span>FIND YOUR TABLE ↓</span></div>
            </div>
            <div className={styles.templateFooter}>
              <p>For cafes and restaurants that need menus, location, and reservations up front.</p>
              <Link className={styles.chooseLink} href="/?template=restaurant#order">Use this direction <span>↗</span></Link>
            </div>
          </article>

          <article className={styles.template}>
            <div className={styles.templateHeading}>
              <span>02 / PROFESSIONAL SERVICES</span>
              <h3>Business & consulting</h3>
            </div>
            <div className={`${styles.preview} ${styles.professional}`}>
              <div className={styles.previewNav}>
                <strong>NORTHLINE <span>ADVISORY</span></strong>
                <span>APPROACH&nbsp;&nbsp; SERVICES&nbsp;&nbsp; CONTACT</span>
              </div>
              <div className={styles.professionalBody}>
                <div>
                  <p className={styles.previewEyebrow}>CLEAR THINKING. PRACTICAL GROWTH.</p>
                  <h4>Make your next<br />move a better one.</h4>
                  <p>Strategic support for teams ready to turn plans into progress.</p>
                  <Link className={styles.previewCta} href="/?template=professional#order">Book a conversation <span>↗</span></Link>
                </div>
                <img src="/resources/n2.jpg" alt="Commercial and professional business illustration" />
              </div>
              <div className={styles.previewFoot}><span>STRATEGY · OPERATIONS · GROWTH</span><span>EST. 2012</span></div>
            </div>
            <div className={styles.templateFooter}>
              <p>For consultants and service businesses that sell trust, expertise, and results.</p>
              <Link className={styles.chooseLink} href="/?template=professional#order">Use this direction <span>↗</span></Link>
            </div>
          </article>

          <article className={styles.template}>
            <div className={styles.templateHeading}>
              <span>03 / PRODUCT & CAMPAIGN</span>
              <h3>Product launch</h3>
            </div>
            <div className={`${styles.preview} ${styles.product}`}>
              <div className={styles.previewNav}>
                <strong>FORM / OBJECTS</strong>
                <span>THE COLLECTION&nbsp;&nbsp; DETAILS</span>
              </div>
              <div className={styles.productBody}>
                <div>
                  <p className={styles.previewEyebrow}>INTRODUCING FORM 01</p>
                  <h4>Less, but<br />better.</h4>
                  <p>One considered everyday essential. Designed to earn its place.</p>
                  <Link className={styles.previewCta} href="/?template=product#order">Meet the product <span>↗</span></Link>
                </div>
                <div className={styles.productVisual} aria-label="Product packaging preview" role="img">
                  <span>FORM<br />01</span>
                  <i />
                </div>
              </div>
              <div className={styles.previewFoot}><span>DESIGNED WITH INTENTION</span><span>AVAILABLE NOW</span></div>
            </div>
            <div className={styles.templateFooter}>
              <p>For a new product or campaign that needs one focused story and one clear action.</p>
              <Link className={styles.chooseLink} href="/?template=product#order">Use this direction <span>↗</span></Link>
            </div>
          </article>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Have a different business in mind?</p>
        <Link href="/#order">Tell us what you need <span>↗</span></Link>
      </footer>
    </main>
  );
}