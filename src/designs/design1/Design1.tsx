import { FadeIn } from '../../components/FadeIn'
import { Logo } from '../../components/Logo'
import { previewImages } from '../../utils/picsum'
import './Design1.css'

export function Design1() {
  return (
    <div className="design-1">
      <header className="site-header">
        <div className="container site-header__inner">
          <a href="#" className="site-logo" aria-label="Consolidados S.A.S. inicio">
            <Logo width={180} height={48} />
          </a>
          <nav className="site-nav" aria-label="Principal">
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero__grid">
            <FadeIn onMount delay={0}>
              <p className="hero__eyebrow">Construcción · Inmobiliaria</p>
              <h1>Soluciones integrales para proyectos que perduran</h1>
              <p className="hero__lead">
                Más de una década consolidando espacios comerciales, residenciales e
                industriales con estándares de calidad y cumplimiento.
              </p>
              <div className="hero__actions">
                <a href="#contacto" className="btn btn--primary">
                  Solicitar cotización
                </a>
                <a href="#servicios" className="btn btn--ghost">
                  Ver servicios
                </a>
              </div>
            </FadeIn>
            <FadeIn className="hero__visual" onMount delay={140}>
              <img
                src={previewImages.obra}
                alt="Proyecto de construcción"
                className="hero__visual-img"
                loading="eager"
                decoding="async"
              />
            </FadeIn>
          </div>
        </section>

        <FadeIn as="section" className="section section--alt" id="servicios">
          <div className="container">
            <h2 className="section__title">Nuestros servicios</h2>
            <p className="section__subtitle">
              Acompañamos cada etapa del proyecto, desde la planeación hasta la entrega.
            </p>
            <div className="cards">
              <FadeIn as="article" className="card" delay={0}>
                <img
                  src={previewImages.servicio1}
                  alt=""
                  className="card__img"
                  loading="lazy"
                />
                <div className="card__num">01</div>
                <h3>Construcción</h3>
                <p>
                  Obras civiles, estructuras y acabados con control de calidad en sitio.
                </p>
              </FadeIn>
              <FadeIn as="article" className="card" delay={90}>
                <img
                  src={previewImages.servicio2}
                  alt=""
                  className="card__img"
                  loading="lazy"
                />
                <div className="card__num">02</div>
                <h3>Desarrollo inmobiliario</h3>
                <p>Proyectos residenciales y comerciales con visión de largo plazo.</p>
              </FadeIn>
              <FadeIn as="article" className="card" delay={180}>
                <img
                  src={previewImages.servicio3}
                  alt=""
                  className="card__img"
                  loading="lazy"
                />
                <div className="card__num">03</div>
                <h3>Consultoría</h3>
                <p>Asesoría técnica, presupuestos y gestión de licencias y permisos.</p>
              </FadeIn>
            </div>
          </div>
        </FadeIn>

        <FadeIn as="section" className="section" id="nosotros">
          <div className="container">
            <h2 className="section__title">Por qué Consolidados</h2>
            <p className="section__subtitle">
              Equipo multidisciplinario, procesos documentados y compromiso con plazos y
              presupuesto acordados con el cliente.
            </p>
          </div>
        </FadeIn>

        <FadeIn as="section" className="cta" id="contacto">
          <div className="container">
            <h2>¿Listo para iniciar su proyecto?</h2>
            <p>Escríbanos y le respondemos en menos de 24 horas hábiles.</p>
            <a href="mailto:contacto@consolidos.com" className="btn btn--primary">
              contacto@consolidos.com
            </a>
          </div>
        </FadeIn>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Consolidados S.A.S. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
