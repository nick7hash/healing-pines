'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Check, Menu, Sparkles, X } from 'lucide-react'
import { useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

const images = {
  logo: '/images/logo_pines.png',
  hero: '/images/hero.jpg',
  herbs: '/images/herbs.png',
  hand: '/images/hand.jpg',
  oils: '/images/oils.png',
  spices: '/images/spices.jpg',
  leaf1: '/images/leaf1.png',
  leaf2: '/images/leaf2.png',
  leaf3: '/images/leaf3.png',
  plant: '/images/plant.png',
  botanical: '/images/botanical.png',
}

const services = ['Online & in-clinic consultations', 'Personalized Prakriti analysis', 'Panchakarma procedures', 'Abhyanga massage therapy', 'Nadi Swedana & Basti therapies', 'Shirodhara & Uttara Basti', 'Personalized medicines delivered across India', 'Ayurvedic diet & lifestyle guidance']
const conditions = ['Digestive health', 'Joint & musculoskeletal health', 'Skin & hair health', "Women's health", 'Fertility & reproductive health', 'General wellness']

export default function Page() {
  const root = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero intro
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
      intro
        .from('.nav-side a, .nav-cta-link', { opacity: 0, y: -12, stagger: 0.05, duration: 0.6, clearProps: 'all' }, 0.2)
        .from('.hero-kicker', { opacity: 0, y: 20, duration: 0.7 }, 0.4)
        .from('.hero-title .line', { yPercent: 110, opacity: 0, stagger: 0.1, duration: 1.1 }, '-=0.35')
        .from('.hero-copy, .hero-cta', { opacity: 0, y: 24, stagger: 0.12, duration: 0.8 }, '-=0.5')
        .from('.arch-center', { scale: 0.92, opacity: 0, duration: 1.4 }, 0)
        .from('.arch-left', { x: -60, opacity: 0, duration: 1.2 }, 0.15)
        .from('.arch-right', { x: 60, opacity: 0, duration: 1.2 }, 0.15)

      // Leaf animations
      gsap.utils.toArray<HTMLElement>('.hero-leaf').forEach((leaf, i) => {
        gsap.from(leaf, { opacity: 0, scale: 0, rotation: i % 2 ? -35 : 35, duration: 1.2, delay: 0.45 + i * 0.12, ease: 'back.out(1.7)' })
        gsap.to(leaf, { y: i % 2 ? -16 : 16, rotation: i % 2 ? 8 : -8, duration: 3 + i * 0.4, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: i * 0.2 })
      })

      // Scroll reveals
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.from(el, { y: 60, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 82%' } })
      })
      gsap.utils.toArray<HTMLElement>('.service-card').forEach((el, i) => {
        gsap.from(el, { y: 50, opacity: 0, rotate: i % 2 ? 2 : -2, duration: 0.8, delay: i * 0.05, scrollTrigger: { trigger: '.services-grid', start: 'top 78%' } })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={root} className="site-shell">
      <main id="top">
        <section className="hero reference-hero">
          <div className="hero-bg"></div>
          <div className="hero-leaves" aria-hidden="true">
            <img className="hero-leaf leaf-a" src={images.leaf1} alt="" />
            <img className="hero-leaf leaf-b" src={images.leaf2} alt="" />
            <img className="hero-leaf leaf-c" src={images.leaf3} alt="" />
            <img className="hero-leaf leaf-d" src={images.leaf1} alt="" />
            <img className="hero-leaf leaf-e" src={images.leaf2} alt="" />
          </div>

          {/* ── DIRECT TRANSPARENT NAVBAR ── */}
          <header className="reference-nav">
            <nav className="nav-side nav-left" aria-label="Primary navigation left">
              <a className="nav-brand-link" href="#top" aria-label="Healing Pines Ayurveda Home">
                <img className="nav-brand-logo" src={images.logo} alt="Healing Pines Ayurveda Logo" />
              </a>
              <a href="#story">Story</a>
              <a href="#services">Treatments</a>
              <a href="#conditions">Conditions</a>
            </nav>

            <nav className="nav-side nav-right" aria-label="Primary navigation right">
              <a href="#faq">FAQs</a>
              <a href="#contact">Contact</a>
              <a
                className="nav-cta-link"
                href="https://wa.me/917018302278?text=Hello%20Healing%20Pines%20Ayurveda%2C%20I%27d%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noreferrer"
              >
                Book Consultation <ArrowUpRight size={14} />
              </a>
            </nav>

            <button
              className="reference-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </header>

          {/* Mobile dropdown */}
          {menuOpen && (
            <nav className="reference-mobile-menu">
              <a href="#story" onClick={() => setMenuOpen(false)}>Story</a>
              <a href="#services" onClick={() => setMenuOpen(false)}>Treatments</a>
              <a href="#conditions" onClick={() => setMenuOpen(false)}>Conditions</a>
              <a href="#faq" onClick={() => setMenuOpen(false)}>FAQs</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
              <a
                className="mobile-cta"
                href="https://wa.me/917018302278?text=Hello%20Healing%20Pines%20Ayurveda%2C%20I%27d%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Book Consultation <ArrowUpRight size={14} />
              </a>
            </nav>
          )}

          {/* Three arched images */}
          <div className="reference-arch arch-center">
            <img src={images.botanical} alt="Ayurvedic herbs, flowers, and oils" />
            {/* Brand name centered on top of the arch image */}
            <div className="arch-brand-overlay">
              {/* <span className="brand-name">Healing Pines</span> */}
              {/* <span className="brand-sub">Ayurveda</span> */}
            </div>
          </div>
          <div className="reference-arch arch-left">
            <img src={images.hand} alt="Hands receiving an Ayurvedic oil treatment" />
          </div>
          <div className="reference-arch arch-right">
            <img src={images.hero} alt="Calming Ayurvedic treatment ritual" />
          </div>

          <p className="reference-vertical vertical-left">Natural Balance Ayurveda</p>

          {/* Hero copy */}
          <div className="reference-intro">
            <p className="eyebrow hero-kicker"><Sparkles size={14} /> Authentic, individualized care</p>
            <h1 className="hero-title">
              <span className="line">Healing Pine</span>
              <span className="line accent-text">Ayurveda</span>
            </h1>
            <p className="hero-copy">Rooted in classical Ayurvedic principles, our Vaidyas deliver personalized care that heals the body, calms the mind, and restores balance.</p>
            <a className="button button-dark hero-cta" href="https://wa.me/917018302278?text=Hello%20Healing%20Pines%20Ayurveda%2C%20I%27d%20like%20to%20book%20a%20consultation." target="_blank" rel="noreferrer">Book your consultation <ArrowUpRight size={17} /></a>
          </div>
        </section>

        {/* ── MARQUEE (pure CSS, no JS) ── */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-inner">
            {[0, 1].map(n => (
              <span key={n} className="marquee-track">
                AUTHENTIC AYURVEDA <span>✦</span> INDIVIDUALIZED CARE <span>✦</span> NERVOUS SYSTEM RESTORATION <span>✦</span> HEALING PINES AYURVEDA <span>✦</span> PERSONALIZED CARE <span>✦</span>
              </span>
            ))}
          </div>
        </div>

        <section className="story section-pad" id="story">
          <div className="story-media reveal">
            <img src={images.hand} alt="Hands receiving an Ayurvedic oil treatment" />
            <span className="image-note">Care begins<br />with listening.</span>
          </div>
          <div className="story-copy reveal">
            <p className="eyebrow">01 / Our philosophy</p>
            <h2>Health is a conversation between <em>you</em> and nature.</h2>
            <p>Welcome to Healing Pines Ayurveda, recognised for individualized, authentic Ayurvedic healthcare. Our Vaidyas combine traditional North Indian healing traditions with a modern diagnostic approach, so every recommendation feels as unique as you are.</p>
            <p>From your first consultation to your ongoing care, we make space for the whole you — your rhythms, your history, your aspirations.</p>
            <a className="text-link dark-link" href="#services">How we care <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">02 / What we offer</p>
              <h2>A gentler way<br /><em>forward.</em></h2>
            </div>
            <p>Personalized Ayurvedic healthcare that meets you exactly where you are.</p>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <article className="service-card" key={service}>
                <span>0{i + 1}</span>
                <h3>{service}</h3>
                <ArrowUpRight size={19} />
              </article>
            ))}
          </div>
        </section>

        <section className="dark-band" id="conditions">
          <div className="herbs-wrap reveal">
            <img src={images.oils} alt="Ayurvedic herbs and oils" />
          </div>
          <div className="conditions-copy reveal">
            <p className="eyebrow light">03 / Areas of care</p>
            <h2>Listen to what your body is <em>saying.</em></h2>
            <p>Our approach is rooted in individualized consultation, traditional principles, personalized treatment planning, and ongoing guidance.</p>
            <div className="condition-list">
              {conditions.map((condition) => (
                <div key={condition}><Check size={15} />{condition}</div>
              ))}
            </div>
            <a className="button button-light" href="#contact">Find your balance <ArrowUpRight size={18} /></a>
          </div>
        </section>

        <section className="ritual section-pad">
          <div className="ritual-copy reveal">
            <p className="eyebrow">04 / The Healing Pines ritual</p>
            <h2>Small rituals.<br /><em>Lasting change.</em></h2>
            <p>Ayurveda is not a quick fix. It is a return to the wisdom already held within your body. We give you practical, compassionate ways to make that return every day.</p>
            <a className="text-link dark-link" href="#contact">Meet your Vaidya <ArrowUpRight size={16} /></a>
          </div>
          <div className="ritual-image reveal">
            <img src={images.spices} alt="Traditional herbs being prepared in a stone mortar" />
            <div className="stamp">SINCE<br /><strong>2022</strong><br />AUTHENTIC CARE</div>
          </div>
        </section>

        <section className="faq section-pad" id="faq">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">05 / Before you begin</p>
              <h2>Questions, <em>answered.</em></h2>
            </div>
            <p>Everything you need to know before your first visit or online consultation.</p>
          </div>
          <div className="faq-grid">
            <details><summary>Where are you located?</summary><p>Healing Pines Ayurveda is in Yol Cantt, Dharamshala, Himachal Pradesh. Prior booking is mandatory and appointments are free to book.</p></details>
            <details><summary>Do you offer online consultations?</summary><p>Yes. Audio and video consultations are available across India, including support for long-standing and chronic concerns.</p></details>
            <details><summary>Can medicines be delivered to my home?</summary><p>Yes. Prescribed Ayurvedic medicines can be delivered across India, usually within 5–10 days. Medicines are charged separately.</p></details>
            <details><summary>What are the consultation charges?</summary><p>In-person consultations are ₹499 and online consultations are ₹299, inclusive of taxes. Please bring previous medical records.</p></details>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-inner reveal">
            <p className="eyebrow light">Your next chapter starts here</p>
            <h2>Feel at home<br /><em>in your body.</em></h2>
            <p>Book a consultation with our Vaidyas and take the first step towards a more balanced you.</p>
            <a className="button button-light" href="https://wa.me/917018302278?text=Hello%20Healing%20Pines%20Ayurveda%2C%20I%27d%20like%20to%20book%20a%20consultation." target="_blank" rel="noreferrer">Book a consultation <ArrowUpRight size={18} /></a>
            <div className="contact-details">
              <a href="tel:+917018302278">+91 70183 02278</a>
              <a href="mailto:healingpinesayurveda@gmail.com">healingpinesayurveda@gmail.com</a>
            </div>
          </div>
          <img src={images.hero} alt="" className="contact-bg" />
        </section>
      </main>

      <footer>
        <a className="brand" href="#top">
          <img className="brand-logo" src={images.logo} alt="Healing Pines Ayurveda Logo" />
          <span>Healing Pines<small>AYURVEDA CLINIC</small></span>
        </a>
        <p>© 2026 Healing Pines Ayurveda. Rooted in care.</p>
        <div className="footer-contact">
          <a href="tel:+917018302278">+91 70183 02278</a>
          <a href="mailto:healingpinesayurveda@gmail.com">healingpinesayurveda@gmail.com</a>
        </div>
      </footer>
    </div>
  )
}
