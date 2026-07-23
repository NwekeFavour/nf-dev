import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MODE_CONTENT = {
  engineer: {
    word: 'run on',
    sub: (
      <>
        <b>Full-stack developer</b> shipping event, commerce, and services
        platforms end to end,  from frontend interfaces to backend
        architecture, payment flows to deployment, with a habit of writing
        the campaign copy that gets the product noticed.
      </>
    ),
  },
  marketer: {
    word: 'talk about',
    sub: (
      <>
        <b>Growth-minded builder</b> who writes the onboarding emails, promo
        campaigns, and UGC content strategy for the same products they
        engineer,  because the best pitch for a feature is understanding
        exactly how it was built.
      </>
    ),
  },
};

const ENGINEERING_TAGS = [
  'Frontend Development', 'Backend Architecture', 'Database Design',
  'Payment Integrations', 'API Development', 'Cloud Deployment',
  'Multi-tenant Systems', 'Authentication & Security', 'State Management',
  'Performance Optimization',
];

const MARKETING_TAGS = [
  'UGC content strategy', 'Brand voice', 'Campaign copy',
  'Onboarding & lifecycle email', 'Landing page conversion',
  'Referral / promo systems', 'Product storytelling',
];

export default function Home() {
  const [mode, setModeState] = useState('engineer');
  const projects = useSelector((state) => state.projects.projects);
  const glowRef = useRef(null);
  const heroWordRef = useRef(null);
  const heroSubRef = useRef(null);
  const rootRef = useRef(null);

  // Cursor-follow glow
  useEffect(() => {
    const handleMove = (e) => {
      if (!glowRef.current) return;
      gsap.to(glowRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: 'power3.out',
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // Load-in sequence + scroll reveals
  // Wrapped in gsap.context() so cleanup can fully REVERT every inline
  // style GSAP applied (not just stop the tween). React 18 StrictMode
  // mounts effects twice in dev; without revert(), the first throwaway
  // run's .from() leaves elements at a partial opacity/position, and the
  // second run animates "back to" that partial state instead of 1/0 , 
  // which is why the nav (and hero content) can flash in then settle
  // faint or invisible.
  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = rootRef.current.querySelectorAll(
        'h1.headline .line span span'
      );
      gsap.set(chars, { y: '110%' });

      gsap
        .timeline({ delay: 0.2 })
        .to(chars, {
          y: '0%',
          duration: 1,
          stagger: 0.012,
          ease: 'power4.out',
        })
        .from(
          '.hero-sub',
          { opacity: 0, y: 16, duration: 0.8, ease: 'power2.out' },
          '-=0.5'
        )
        .from(
          '.hero-meta > div',
          { opacity: 0, y: 12, duration: 0.6, stagger: 0.08, ease: 'power2.out' },
          '-=0.4'
        )
        .from('.scroll-cue', { opacity: 0, duration: 0.6 }, '-=0.3')
        .from('nav', { y: -20, opacity: 0, duration: 0.6, ease: 'power2.out' }, 0);

      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });

      gsap.utils.toArray('.case').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const setMode = (next) => {
    if (next === mode) return;
    const c = MODE_CONTENT[next];

    gsap.to(heroWordRef.current, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        setModeState(next);
        gsap.to(heroWordRef.current, { opacity: 1, duration: 0.3 });
      },
    });
    gsap.to(heroSubRef.current, { opacity: 0, y: 6, duration: 0.25 });
  };

  useEffect(() => {
    gsap.to(heroSubRef.current, { opacity: 1, y: 0, duration: 0.35 });
  }, [mode]);

  const current = MODE_CONTENT[mode];

  return (
    <div ref={rootRef} data-mode={mode} className="pf-root">
      <div className="noise" />
      <div className="glow" ref={glowRef} />

      <div className="wrap">
        <nav>
          <div className="logo text-white!">
            N<em>.</em> Favour
          </div>
          <div className="nav-links">
            <a className="text-white!" href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="mode-toggle" role="group" aria-label="Portfolio mode">
            <button
              className={mode === 'engineer' ? 'active' : ''}
              onClick={() => setMode('engineer')}
            >
              &lt;/&gt; Engineer
            </button>
            <button
              className={mode === 'marketer' ? 'active' : ''}
              onClick={() => setMode('marketer')}
            >
              ▲ Marketer
            </button>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero">
          <p className="eyebrow">Abuja, Nigeria - Full-Stack Developer</p>
          <h1 className="headline">
            <SplitLine text="I build the products" />
            <span className="line">
              <span className="text-[32px]! md:text-[50px]! sm:text-[42px]! lg:text-[80px]!">
                <CharsOnly text="Nigerian brands " />
                <span className="accent-word text-[32px]! md:text-[50px]! sm:text-[42px]! lg:text-[80px]!" ref={heroWordRef}>
                  {current.word}
                </span>
              </span>
            </span>
          </h1>
          <p className="hero-sub " ref={heroSubRef}>
            {current.sub}
          </p>
          <div className="hero-meta">
            <div>
              <div className="num">4+</div>
              <div className="label">Years of Experience</div>
            </div>
            <div>
              <div className="num">10+</div>
              <div className="label">Live SaaS platforms</div>
            </div>
            <div>
              <div className="num">01</div>
              <div className="label">Person doing both</div>
            </div>
          </div>
          <div className="scroll-cue bottom-[-80px] lg:bottom-[20px] md:bottom-[40px] ">
            <span>Scroll</span>
            <span className="dash" />
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills" id="skills">
          <div className="section-head">
            <span className="section-title">What I bring</span>
            <span className="section-tag">01 / Skills</span>
          </div>
          <div className="skill-cols">
            <div className="skill-col reveal">
              <h3>Engineering</h3>
              <p className="desc">
                The systems side, architecture, integrations, and the
                unglamorous plumbing that keeps a multi-tenant platform
                standing at 2am.
              </p>
              <div className="tag-cloud">
                {ENGINEERING_TAGS.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-col reveal">
              <h3>Marketing &amp; Growth</h3>
              <p className="desc">
                The audience side ,  because a well-built platform still needs
                someone who can explain why it matters and get people to show
                up.
              </p>
              <div className="tag-cloud">
                {MARKETING_TAGS.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section className="work" id="work">
          <div className="section-head flex-wrap space-y-4">
            <span className="section-title">Selected work</span>
            <span className="section-tag">02 / Case Studies</span>
          </div>

          {projects &&
            projects.length > 0 &&
            projects.map((p, i) => (
              <a
                className="case reveal"
                key={p.id}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="case-index">{String(i + 1).padStart(2, '0')}</div>
                <div className="case-left">
                  <div className="case-title">{p.title}</div>
                  <div className="case-tags">
                    {p.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="case-right">
                  <p className="case-desc">{p.summary}</p>
                </div>
                <div className="case-arrow">↗</div>
              </a>
            ))}
        </section>

        {/* APPROACH */}
        <section className="approach" id="approach">
          <div className="section-head">
            <span className="section-title">How I work</span>
            <span className="section-tag">03 / Approach</span>
          </div>
          <div className="approach-grid">
            <p className="approach-quote md:text-[24px] text-[20px] reveal">
              A product isn't finished when it <em>ships</em> ,  it's finished
              when someone <em>uses</em> it and someone else{' '}
              <em>hears about it</em>. I stay close to both ends.
            </p>
            <div className="approach-steps reveal">
              <div className="approach-step">
                <span className="n">01</span>
                <p>
                  <b>Build for the real constraint.</b> Nigerian-market
                  products live and die on payment reliability, low
                  bandwidth, and trust ,  I design for that from the first
                  commit.
                </p>
              </div>
              <div className="approach-step">
                <span className="n">02</span>
                <p>
                  <b>Ship, then measure.</b> I'd rather have something live
                  and imperfect than perfect and unreleased ,  iteration beats
                  prediction.
                </p>
              </div>
              <div className="approach-step">
                <span className="n">03</span>
                <p>
                  <b>Write the words myself.</b> Onboarding emails, promo
                  copy, landing pages ,  the person who built the feature
                  usually explains it best.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <p className="eyebrow">Let's talk</p>
          <h2 className="contact-title  lg:text-[30px] text-[24px]">
            Got something to <em>build</em>, or a story to <em>tell</em>?
            Both, ideally.
          </h2>
          <div className="contact-row">
            <a href="mailto:hmu@heyunclenf.dev" className="contact-email">
              hmu@heyunclenf.dev
            </a>
            <div className="contact-links">
              <a href="#">Github</a>
              <a href="#">LinkedIn</a>
              <a href="#">X</a>
            </div>
          </div>
        </section>

        <footer>
          © 2026 Nweke Favour,  Built with Pure Intentions, and a healthy dislike
          of templates.
        </footer>
      </div>
    </div>
  );
}

/* Renders a headline line pre-split into per-character spans so the
   load-in stagger animation (see useEffect above) can animate them. */
function SplitLine({ text }) {
  return (
    <span className="line text-[32px]! md:text-[50px]! sm:text-[42px]! lg:text-[80px]!">
      <span>
        <CharsOnly text={text} />
      </span>
    </span>
  );
}

function CharsOnly({ text }) {
  return (
    <>
      {[...text].map((ch, i) => (
        <span key={i}>{ch === ' ' ? '\u00A0' : ch}</span>
      ))}
    </>
  );
}

