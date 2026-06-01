import { Logo } from '../../components/Logo'
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
            <div>
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
            </div>
            <div className="hero__visual" aria-hidden="true">
              <svg className="hero__visual-icon" viewBox="0 0 120 100" fill="currentColor">
                <rect x="10" y="40" width="25" height="55" />
                <rect x="45" y="20" width="30" height="75" />
                <rect x="85" y="35" width="25" height="60" />
              </svg>
            </div>
          </div>
        </section>

        <section className="section section--alt" id="servicios">
          <div className="container">
            <h2 className="section__title">Nuestros servicios</h2>
            <p className="section__subtitle">
              Acompañamos cada etapa del proyecto, desde la planeación hasta la entrega.
            </p>
            <div className="cards">
              <article className="card">
                <div className="card__num">01</div>
                <h3>Construcción</h3>
                <p>
                  Obras civiles, estructuras y acabados con control de calidad en sitio.
                </p>
              </article>
              <article className="card">
                <div className="card__num">02</div>
                <h3>Desarrollo inmobiliario</h3>
                <p>Proyectos residenciales y comerciales con visión de largo plazo.</p>
              </article>
              <article className="card">
                <div className="card__num">03</div>
                <h3>Consultoría</h3>
                <p>Asesoría técnica, presupuestos y gestión de licencias y permisos.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="nosotros">
          <div className="container">
            <h2 className="section__title">Por qué Consolidados</h2>
            <p className="section__subtitle">
              Equipo multidisciplinario, procesos documentados y compromiso con plazos y
              presupuesto acordados con el cliente.
            </p>
          </div>
        </section>

        <section className="cta" id="contacto">
          <div className="container">
            <h2>¿Listo para iniciar su proyecto?</h2>
            <p>Escríbanos y le respondemos en menos de 24 horas hábiles.</p>
            <a href="mailto:contacto@consolidos.com" className="btn btn--primary">
              contacto@consolidos.com
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Consolidados S.A.S. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
