import { useEffect, useRef, useState } from 'react'
import './landing.css'

type Lang = 'es' | 'en'

function T({ es, en, lang }: { es: string; en: string; lang: Lang }) {
  return <>{lang === 'es' ? es : en}</>
}

const WA = 'https://wa.me/5491122704706'

const WaIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const PlusIcon = () => (
  <svg width={11} height={11} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
    <line x1={6} y1={1} x2={6} y2={11} />
    <line x1={1} y1={6} x2={11} y2={6} />
  </svg>
)

const FAQ_ITEMS = [
  {
    q: { es: '¿Cuánto tarda en estar listo mi sitio?', en: 'How long does it take to finish my site?' },
    a: { es: 'Según el alcance: una landing puede estar lista en 5–7 días. Un e-commerce o proyecto más complejo puede llevar 3–4 semanas. Siempre con fechas acordadas desde el inicio.', en: 'Depending on scope: a landing can be ready in 5–7 days. A more complex e-commerce or project can take 3–4 weeks. Always with agreed-upon dates from the start.' },
  },
  {
    q: { es: '¿Cuánto cuesta?', en: 'How much does it cost?' },
    a: { es: 'Cada proyecto es distinto. Trabajamos por proyecto, no por hora. Pedinos presupuesto y te respondemos en menos de 24hs con una propuesta clara.', en: "Every project is different. We work per project, not per hour. Ask for a quote and we'll respond within 24 hours with a clear proposal." },
  },
  {
    q: { es: '¿Trabajan con clientes fuera de Argentina?', en: 'Do you work with clients outside Argentina?' },
    a: { es: 'Sí. Trabajamos 100% remoto con clientes en toda América Latina y España. No hay límites geográficos.', en: 'Yes. We work 100% remotely with clients across Latin America and Spain. No geographic limits.' },
  },
  {
    q: { es: '¿Qué herramientas de IA usan para automatizar?', en: 'What AI tools do you use for automation?' },
    a: { es: 'Depende del proceso. Usamos Make, n8n, Zapier, OpenAI y herramientas específicas según el caso. Elegimos lo más eficiente para cada situación.', en: 'Depends on the process. We use Make, n8n, Zapier, OpenAI, and specific tools per case. We choose the most efficient for each situation.' },
  },
  {
    q: { es: '¿Necesito saber de tecnología para trabajar con ustedes?', en: 'Do I need to know about technology to work with you?' },
    a: { es: 'Para nada. Nos encargamos de toda la parte técnica. Vos solo tenés que saber lo que querés lograr — nosotros lo hacemos posible.', en: "Not at all. We handle all the technical parts. You just need to know what you want to achieve — we make it happen." },
  },
]

export default function LandingPage() {
  const [lang, setLang] = useState<Lang>('es')
  const [navScrolled, setNavScrolled] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setNavScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target) } }),
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )
    rootRef.current?.querySelectorAll('.rv').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={rootRef}>

      {/* ── NAV ── */}
      <nav className={`lp-nav${navScrolled ? ' sc' : ''}`}>
        <a href="#" className="nav-logo"><img src="/logo-black.png" alt="utop—q" /></a>
        <ul className="nav-mid">
          <li><a href="#services"><T es="Servicios" en="Services" lang={lang} /></a></li>
          <li><a href="#work"><T es="Proyectos" en="Work" lang={lang} /></a></li>
          <li><a href="#testimonials"><T es="Clientes" en="Clients" lang={lang} /></a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div className="nav-right">
          <div className="lang-sw">
            <button className={`lang-btn${lang === 'es' ? ' active' : ''}`} onClick={() => setLang('es')}>ES</button>
            <button className={`lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')}>EN</button>
          </div>
          <a href={WA} target="_blank" rel="noreferrer" className="nav-cta">
            <T es="Hablemos →" en="Let's talk →" lang={lang} />
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero">
        <div className="hero-left">
          <p className="hero-eyebrow">
            <T es="Agencia digital · Buenos Aires" en="Digital agency · Buenos Aires" lang={lang} />
          </p>
          <h1>
            {lang === 'es'
              ? <>Tu negocio en el mundo digital,<br /><span className="hl">potenciado con IA.</span></>
              : <>Your business in the digital world,<br /><span className="hl">powered by AI.</span></>}
          </h1>
          <div className="hero-bottom">
            <p className="hero-sub">
              <T
                es="Diseñamos tu marca, construimos tu web y automatizamos tus procesos con IA — para que tu negocio sea más eficiente, capte más clientes y crezca de verdad."
                en="We design your brand, build your website and automate your processes with AI — so your business is more efficient, attracts more clients, and grows for real."
                lang={lang}
              />
            </p>
            <div className="hero-ctas">
              <a href={WA} target="_blank" rel="noreferrer" className="btn-wa">
                <WaIcon size={16} />
                <T es="Hablemos por WhatsApp" en="WhatsApp us" lang={lang} />
              </a>
              <a href="#work" className="btn-outline">
                <T es="Ver proyectos" en="See our work" lang={lang} />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-img">
            <img src="/nosotros.png" alt="Equipo utop—q" />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div id="stats">
        <div className="stats-inner">
          <div className="stat rv">
            <p className="stat-num">15<span>+</span></p>
            <p className="stat-label"><T es="Proyectos entregados" en="Projects delivered" lang={lang} /></p>
          </div>
          <div className="stat rv d1">
            <p className="stat-num">3<span> sem</span></p>
            <p className="stat-label"><T es="Tiempo promedio de entrega" en="Average delivery time" lang={lang} /></p>
          </div>
          <div className="stat rv d2">
            <p className="stat-num">100<span>%</span></p>
            <p className="stat-label"><T es="Remoto — sin fronteras" en="Remote — no borders" lang={lang} /></p>
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section id="services">
        <div className="srv-header">
          <div className="srv-title-col">
            <p className="s-label rv"><T es="Qué hacemos" en="What we do" lang={lang} /></p>
            <h2 className="s-title rv d1">
              {lang === 'es' ? <>Todo lo que tu negocio necesita para <em>crecer.</em></> : <>Everything your business needs to <em>grow.</em></>}
            </h2>
          </div>
          <div className="srv-intro-col">
            <p className="srv-intro rv">
              <T
                es="No somos una agencia tradicional. Usamos inteligencia artificial como herramienta central de producción. Eso nos permite entregar más rápido, con más precisión y a precios accesibles."
                en="We're not a traditional agency. We use artificial intelligence as our core production tool — delivering faster, more precisely, and at accessible prices."
                lang={lang}
              />
            </p>
          </div>
        </div>
        <div className="srv-grid">
          {[
            {
              n: '01', title: { es: 'Diseño Web', en: 'Web Design' },
              desc: { es: 'Sitios modernos, rápidos y orientados a convertir. Desde una landing hasta un e-commerce. Sin templates genéricos.', en: 'Modern, fast, conversion-focused sites. From a landing page to a full e-commerce. No generic templates.' },
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
            },
            {
              n: '02', title: { es: 'Branding', en: 'Branding' },
              desc: { es: 'Identidad visual completa: logo, paleta, tipografía y tono. Para negocios que quieren verse profesionales desde el día uno.', en: 'Complete visual identity: logo, palette, typography, and tone. For businesses that want to look professional from day one.' },
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>,
            },
            {
              n: '03', title: { es: 'UX / UI', en: 'UX / UI' },
              desc: { es: 'Interfaces que la gente entiende sin manual. Aplicaciones, dashboards, flujos de usuario.', en: 'Interfaces people understand without a manual. Apps, dashboards, and user flows.' },
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
            },
            {
              n: '04', title: { es: 'Automatización IA', en: 'AI Automation' },
              desc: { es: 'Convertimos tareas repetitivas en procesos automáticos. Sin saber programar, sin fricción técnica.', en: 'We turn repetitive tasks into automatic processes. No coding needed, no technical friction.' },
              icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2 2 0 012 2v2a2 2 0 01-4 0V4a2 2 0 012-2z"/><path d="M12 16a2 2 0 012 2v2a2 2 0 01-4 0v-2a2 2 0 012-2z"/><path d="M2 12a2 2 0 012-2h2a2 2 0 010 4H4a2 2 0 01-2-2z"/><path d="M16 12a2 2 0 012-2h2a2 2 0 010 4h-2a2 2 0 01-2-2z"/><path d="M6 6l3 3M15 15l3 3M6 18l3-3M15 6l3-3"/></svg>,
            },
          ].map((s, i) => (
            <div key={s.n} className={`srv-card rv${i > 0 ? ` d${i}` : ''}`}>
              <p className="srv-n">{s.n}</p>
              <div className="srv-icon">{s.icon}</div>
              <h3>{lang === 'es' ? s.title.es : s.title.en}</h3>
              <p>{lang === 'es' ? s.desc.es : s.desc.en}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WORK ── */}
      <section id="work">
        <div className="work-header">
          <div className="work-title-col">
            <p className="s-label rv"><T es="Proyectos destacados" en="Featured work" lang={lang} /></p>
            <h2 className="s-title rv d1" style={{ fontSize: 'clamp(32px,3.2vw,48px)' }}>
              {lang === 'es' ? <>Lo que<br />construimos.</> : <>What we<br />build.</>}
            </h2>
          </div>
          <div className="work-desc-col">
            <p className="work-desc rv">
              <T
                es="Cada proyecto arranca entendiendo el negocio del cliente. Después ejecutamos rápido, iteramos con feedback real y entregamos algo que funciona."
                en="Every project starts by understanding the client's business. Then we execute fast, iterate on real feedback, and deliver something that works."
                lang={lang}
              />
            </p>
            <a href="#contact" className="btn-dark rv"><T es="Trabajemos juntos" en="Work with us" lang={lang} /></a>
          </div>
        </div>
        <div className="work-grid">
          <div className="proj proj-large rv">
            <div className="proj-img">
              <svg viewBox="0 0 500 480" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
                <defs><pattern id="ph2" width="16" height="16" patternTransform="rotate(45)" patternUnits="userSpaceOnUse"><rect width="16" height="16" fill="oklch(22% 0.02 255)"/><rect width="1" height="16" fill="oklch(28% 0.02 255)"/></pattern></defs>
                <rect width="500" height="480" fill="url(#ph2)"/>
                <text x="250" y="232" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="oklch(55% 0.01 255)" letterSpacing="0.12em">IMAGEN DE PROYECTO</text>
                <text x="250" y="252" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="oklch(55% 0.01 255)" letterSpacing="0.12em">diseño web / e-commerce</text>
              </svg>
            </div>
            <div className="proj-info">
              <div><p className="proj-name">SaborHub</p><p className="proj-type"><T es="Diseño Web · E-commerce" en="Web Design · E-commerce" lang={lang} /></p></div>
              <span className="proj-year">2024</span>
            </div>
          </div>
          <div className="proj rv d1">
            <div className="proj-img">
              <svg viewBox="0 0 300 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
                <defs><pattern id="ph3" width="14" height="14" patternTransform="rotate(45)" patternUnits="userSpaceOnUse"><rect width="14" height="14" fill="oklch(94% 0.006 82)"/><rect width="1" height="14" fill="oklch(87% 0.006 82)"/></pattern></defs>
                <rect width="300" height="220" fill="url(#ph3)"/>
                <text x="150" y="106" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="oklch(62% 0.008 255)" letterSpacing="0.1em">branding / identidad</text>
              </svg>
            </div>
            <div className="proj-info">
              <div><p className="proj-name">Studio M</p><p className="proj-type">Branding</p></div>
              <span className="proj-year">2024</span>
            </div>
          </div>
          <div className="proj rv d2" style={{borderRight:'1px solid var(--border)'}}>
            <div className="proj-img">
              <svg viewBox="0 0 300 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
                <defs><pattern id="ph4" width="14" height="14" patternTransform="rotate(45)" patternUnits="userSpaceOnUse"><rect width="14" height="14" fill="oklch(60% 0.28 128 / .1)"/><rect width="1" height="14" fill="oklch(91% 0.28 128 / .4)"/></pattern></defs>
                <rect width="300" height="220" fill="oklch(95% 0.02 128)"/>
                <rect width="300" height="220" fill="url(#ph4)"/>
                <text x="150" y="106" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="oklch(50% 0.15 128)" letterSpacing="0.1em">UX/UI · dashboard</text>
              </svg>
            </div>
            <div className="proj-info">
              <div><p className="proj-name">Fuelup</p><p className="proj-type">UX / UI · Dashboard</p></div>
              <span className="proj-year">2025</span>
            </div>
          </div>
          <div className="proj rv d3" style={{borderRight:'none'}}>
            <div className="proj-img">
              <svg viewBox="0 0 300 220" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%',display:'block'}}>
                <defs><pattern id="ph5" width="14" height="14" patternTransform="rotate(45)" patternUnits="userSpaceOnUse"><rect width="14" height="14" fill="oklch(14% 0.02 265)"/><rect width="1" height="14" fill="oklch(22% 0.02 265)"/></pattern></defs>
                <rect width="300" height="220" fill="url(#ph5)"/>
                <text x="150" y="106" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="oklch(55% 0.01 255)" letterSpacing="0.1em">automatización / IA</text>
              </svg>
            </div>
            <div className="proj-info">
              <div><p className="proj-name">MercadoChico</p><p className="proj-type"><T es="Automatización con IA" en="AI Automation" lang={lang} /></p></div>
              <span className="proj-year">2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATEMENT ── */}
      <section id="statement">
        <div className="stmt-inner">
          <h2 className="stmt-q rv">
            {lang === 'es'
              ? <>No somos la opción más barata.<br />Somos la opción <em>más inteligente.</em></>
              : <>We're not the cheapest option.<br />We're the <em>smartest one.</em></>}
          </h2>
          <div className="stmt-body rv d1">
            <p><T es="Usamos inteligencia artificial como herramienta central. Eso nos permite entregar en menos tiempo, con mayor precisión y a precios accesibles — sin resignar calidad." en="We use artificial intelligence as our core tool. That lets us deliver faster, with greater precision and at accessible prices — without sacrificing quality." lang={lang} /></p>
            <p><T es="No somos una agencia con estructuras pesadas. Somos un equipo chico, ágil y muy enfocado en resultados." en="We're not an agency with heavy structures. We're a small, agile team, laser-focused on results." lang={lang} /></p>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials">
        <div className="tst-header">
          <div>
            <p className="s-label rv"><T es="Clientes" en="Clients" lang={lang} /></p>
            <h2 className="s-title rv d1" style={{marginBottom:0}}>
              {lang === 'es' ? <>Lo que dicen quienes<br />ya dieron el salto.</> : <>What those who already<br />took the leap say.</>}
            </h2>
          </div>
        </div>
        <div className="tst-grid">
          {[
            { init:'SR', name:'Santiago R.', role:{ es:'Fundador, SaborHub · CABA', en:'Founder, SaborHub · CABA' }, q:{ es:'"Teníamos el producto, pero no la cara digital. utop—q nos armó todo en tres semanas y empezamos a captar clientes desde el primer día."', en:'"We had the product, but not the digital face. utop—q put everything together in three weeks and we started getting clients from day one."' } },
            { init:'VM', name:'Valentina M.', role:{ es:'Psicóloga independiente · Palermo', en:'Independent psychologist · Palermo' }, q:{ es:'"Necesitaba verme profesional sin gastar fortunas. Me armaron el branding y el sitio en tiempo récord. Los resultados hablan solos."', en:'"I needed to look professional without spending a fortune. They built my branding and site in record time. The results speak for themselves."' } },
            { init:'IT', name:'Ignacio T.', role:{ es:'CTO, Fuelup · Startup BA', en:'CTO, Fuelup · Startup BA' }, q:{ es:'"La automatización que implementaron nos ahorró 15 horas semanales de trabajo manual. Una de las mejores inversiones del año."', en:'"The automation they implemented saved us 15 hours of manual work per week. One of the best investments of the year."' } },
          ].map((t, i) => (
            <div key={t.init} className={`tst-card rv${i > 0 ? ` d${i}` : ''}`}>
              <div className="tst-mark">"</div>
              <blockquote>{lang === 'es' ? t.q.es : t.q.en}</blockquote>
              <div className="tst-author">
                <div className="tst-av">{t.init}</div>
                <div>
                  <p className="tst-name">{t.name}</p>
                  <p className="tst-role">{lang === 'es' ? t.role.es : t.role.en}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq">
        <div className="faq-layout">
          <div className="faq-left">
            <p className="s-label rv">FAQ</p>
            <h2 className="s-title rv d1" style={{marginBottom:0, fontSize:'clamp(30px,3vw,46px)'}}>
              {lang === 'es' ? <>Preguntas<br />frecuentes.</> : <>Frequently<br />asked.</>}
            </h2>
          </div>
          <div className="faq-right">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{lang === 'es' ? item.q.es : item.q.en}</span>
                  <div className="faq-ico"><PlusIcon /></div>
                </button>
                <div className="faq-ans">
                  <p>{lang === 'es' ? item.a.es : item.a.en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact">
        <div className="cta-inner">
          <div className="rv">
            <p className="cta-pre"><T es="¿Empezamos?" en="Ready to start?" lang={lang} /></p>
            <h2 className="cta-t">
              {lang === 'es' ? <>Contanos tu idea.<br />Nosotros la construimos.</> : <>Tell us your idea.<br />We'll build it.</>}
            </h2>
          </div>
          <div className="cta-right rv d1">
            <p className="cta-sub">
              <T es={"Primera consulta sin costo.\nTe respondemos en menos de 24hs."} en={"First consultation free.\nWe reply within 24 hours."} lang={lang} />
            </p>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-wa-white">
              <WaIcon size={18} />
              <T es="Escribinos por WhatsApp" en="WhatsApp us" lang={lang} />
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="ft">
          <div>
            <p className="ft-logo"><img src="/logo-black.png" alt="utop—q" /></p>
            <p className="ft-tag"><T es="Tu mejor versión, hecha realidad." en="The best version of your business, made real." lang={lang} /></p>
          </div>
          <p className="ft-meta">Buenos Aires, Argentina<br />© 2026 utop—q</p>
        </div>
      </footer>

    </div>
  )
}
