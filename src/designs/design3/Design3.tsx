import {
  BookOpenText,
  Certificate,
  ChalkboardTeacher,
  Scales,
} from '@phosphor-icons/react'
import { FadeIn } from '../../components/FadeIn'
import { Logo } from '../../components/Logo'
import { d3Images } from './images'
import { useParallaxScene } from '../../hooks/useParallaxScene'
import { ParallaxImage } from './ParallaxImage'
import './Design3.css'

const pillars = [
  {
    title: 'Normativa vigente',
    text: 'Cada módulo se revisa contra NSR-10 y reglamentos colombianos — no copias de cursos extranjeros.',
    image: d3Images.pillar(1),
  },
  {
    title: 'Criterio de obra',
    text: 'Casos reales: licencia, interventoría, estructuras y BIM explicados por quien los ejecuta.',
    image: d3Images.pillar(2),
  },
  {
    title: 'Rigor del gremio',
    text: 'Contenido pensado con cámaras y colegios: formación que eleva el estándar del sector.',
    image: d3Images.pillar(3),
  },
] as const

const areas = [
  'Estructuras',
  'Geotecnia',
  'Hidráulica',
  'Transporte',
  'Construcción',
  'Ambiental',
  'Urbanismo',
] as const

const gallery = [d3Images.gallery(1), d3Images.gallery(2), d3Images.gallery(3)] as const

export function Design3() {
  const { sceneRef, layer } = useParallaxScene()

  return (
    <div className="design-3">
      <header className="d3-header">
        <div className="d3-container d3-header__inner">
          <a href="#" className="d3-header__brand" aria-label="Consolidados Academia">
            <Logo width={150} height={45} />
          </a>
          <nav className="d3-nav" aria-label="Principal">
            <a href="#propuesta">Propuesta</a>
            <a href="#programa">Programa</a>
            <a href="#inscripcion">Inscripción</a>
          </nav>
          <a href="#inscripcion" className="d3-btn d3-btn--gold d3-header__cta">
            Reservar cupo
          </a>
        </div>
      </header>

      <section className="d3-hero" ref={heroRef}>
        <div className="d3-container d3-hero__layout">
          <FadeIn className="d3-hero__copy" onMount delay={0}>
            <p className="d3-hero__seal">Academia Consolidados · Ingeniería civil</p>
            <h1 className="d3-hero__title">
              La formación técnica que el{' '}
              <span className="d3-hero__gold">gremio colombiano</span> estaba esperando
            </h1>
            <p className="d3-hero__lead">
              Cursos de alto nivel, anclados en normativa nacional. Para ingenieros que no
              pueden permitirse aprender con estándares de otro país.
            </p>
            <div className="d3-hero__actions">
              <a href="#inscripcion" className="d3-btn d3-btn--gold">
                Asegurar mi lugar
              </a>
              <a href="#programa" className="d3-btn d3-btn--outline">
                Ver programa
              </a>
            </div>
          </FadeIn>

          <FadeIn as="figure" className="d3-hero__figure" onMount delay={140}>
            <img
              src={d3Images.heroAccent}
              alt=""
              className="d3-hero__photo d3-hero__photo--back"
              style={{ transform: `translate3d(0, ${layers.back}px, 0)` }}
              loading="eager"
              decoding="async"
            />
            <img
              src={d3Images.heroMain}
              alt="Ingenieros en obra civil revisando planos"
              className="d3-hero__photo d3-hero__photo--front"
              style={{ transform: `translate3d(0, ${layers.front}px, 0)` }}
              loading="eager"
              decoding="async"
            />
          </FadeIn>
        </div>
      </section>

      <FadeIn as="section" className="d3-manifesto" id="propuesta">
        <div className="d3-container d3-manifesto__inner">
          <figure className="d3-manifesto__media">
            <img
              src={d3Images.classroom}
              alt="Sesión de formación técnica"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="d3-manifesto__text">
            <blockquote className="d3-manifesto__quote">
              <p>
                «En Colombia casi nadie enseña ingeniería civil con la normativa que
                realmente firmamos en planos. Esta academia existe para cambiar eso.»
              </p>
            </blockquote>
            <div className="d3-manifesto__stats">
              <div>
                <strong>7</strong>
                <span>áreas de especialización</span>
              </div>
              <div>
                <strong>NSR-10</strong>
                <span>eje estructural del catálogo</span>
              </div>
              <div>
                <strong>5</strong>
                <span>líneas docentes en producción</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section" className="d3-pillars">
        <div className="d3-container">
          <h2 className="d3-section-title">Por qué inscribirse ahora</h2>
          <div className="d3-pillars__grid">
            {pillars.map((item, i) => (
              <FadeIn
                key={item.title}
                as="article"
                className="d3-pillar"
                delay={i * 90}
              >
                <div className="d3-pillar__media">
                  <img src={item.image} alt="" loading="lazy" decoding="async" />
                </div>
                <span className="d3-pillar__index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section" className="d3-program" id="programa">
        <div className="d3-container">
          <h2 className="d3-section-title">Programa académico en despliegue</h2>
          <p className="d3-program__lead">
            Siete grandes áreas de ingeniería civil. Rutas progresivas con video, guías y
            evaluación aplicada a obra colombiana.
          </p>

          <div className="d3-gallery">
            {gallery.map((src, i) => (
              <FadeIn key={src} as="figure" className="d3-gallery__item" delay={i * 100}>
                <img
                  src={src}
                  alt={`Módulo formativo ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              </FadeIn>
            ))}
          </div>

          <ul className="d3-program__areas">
            {areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          <ul className="d3-program__features">
            <li>
              <ChalkboardTeacher size={22} weight="duotone" aria-hidden />
              Clases por especialistas locales
            </li>
            <li>
              <BookOpenText size={22} weight="duotone" aria-hidden />
              Material descargable para obra
            </li>
            <li>
              <Scales size={22} weight="duotone" aria-hidden />
              Enfoque normativo y licenciamiento
            </li>
            <li>
              <Certificate size={22} weight="duotone" aria-hidden />
              Certificación en desarrollo
            </li>
          </ul>
        </div>
      </FadeIn>

      <FadeIn as="section" className="d3-offer" id="inscripcion">
        <div className="d3-container d3-offer__inner">
          <figure className="d3-offer__media">
            <img
              src={d3Images.team}
              alt="Equipo técnico en sitio"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="d3-offer__panel">
            <h2>Lista de fundadores</h2>
            <p>
              Los primeros inscritos acceden a precio preferencial y prioridad en apertura
              de módulos. Cupos limitados por cohorte.
            </p>
            <form className="d3-offer__form" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="d3-name">Nombre completo</label>
              <input id="d3-name" type="text" autoComplete="name" placeholder="Ingeniero(a)…" />
              <label htmlFor="d3-email-offer">Correo profesional</label>
              <input
                id="d3-email-offer"
                type="email"
                autoComplete="email"
                placeholder="nombre@empresa.com"
              />
              <button type="submit" className="d3-btn d3-btn--gold d3-btn--wide">
                Unirme a la lista de fundadores
              </button>
              <p className="d3-offer__legal">Sin compromiso. Aviso antes de apertura pública.</p>
            </form>
          </div>
        </div>
      </FadeIn>

      <footer className="d3-footer">
        <div className="d3-container d3-footer__inner">
          <Logo width={130} height={40} />
          <p>© {new Date().getFullYear()} Consolidados S.A.S · Academia de ingeniería</p>
        </div>
      </footer>
    </div>
  )
}
