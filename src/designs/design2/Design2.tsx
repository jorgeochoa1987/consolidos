import { useMemo, useState } from 'react'
import {
  Certificate,
  GraduationCap,
  MagnifyingGlass,
  UsersThree,
} from '@phosphor-icons/react'
import { FadeIn } from '../../components/FadeIn'
import { Logo } from '../../components/Logo'
import { previewImages } from '../../utils/picsum'
import { CourseCard } from './CourseCard'
import { areaFilters, courses, instructors, type CourseArea } from './data'
import './Design2.css'

export function Design2() {
  const [query, setQuery] = useState('')
  const [area, setArea] = useState<CourseArea | 'all'>('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return courses.filter((c) => {
      const matchesArea = area === 'all' || c.area === area
      const matchesQuery =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.areaLabel.toLowerCase().includes(q) ||
        c.excerpt.toLowerCase().includes(q)
      return matchesArea && matchesQuery
    })
  }, [area, query])

  const featured = useMemo(() => {
    const pool = filtered.length > 0 ? filtered : courses
    return pool.find((c) => c.status === 'open') ?? pool[0]
  }, [filtered])

  const catalog = useMemo(
    () => filtered.filter((c) => c.id !== featured?.id),
    [filtered, featured],
  )

  return (
    <div className="design-2">
      <header className="d2-header">
        <div className="d2-container d2-header__inner">
          <a href="#" className="d2-header__brand" aria-label="Academia Consolidados">
            <Logo width={150} height={45} />
          </a>
          <nav className="d2-nav" aria-label="Principal">
            <a href="#catalogo">Cursos</a>
            <a href="#rutas">Rutas</a>
            <a href="#docentes">Docentes</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a href="#catalogo" className="d2-btn d2-btn--cta d2-header__cta">
            Ver catálogo
          </a>
        </div>
      </header>

      <section className="d2-hero">
        <div className="d2-container d2-hero__layout">
          <FadeIn className="d2-hero__copy" onMount delay={0}>
            <p className="d2-hero__label">Academia · Ingeniería civil</p>
            <h1>
              Cursos profesionales basados en{' '}
              <span className="d2-hero__emphasis">normativa colombiana</span>
            </h1>
            <p className="d2-hero__lead">
              Video, guías y casos de obra impartidos por especialistas locales — desde
              planos hasta estructuras y BIM.
            </p>
            <form
              className="d2-search"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <MagnifyingGlass
                className="d2-search__icon"
                size={20}
                weight="regular"
                aria-hidden
              />
              <label className="d2-sr-only" htmlFor="d2-search-input">
                Buscar cursos
              </label>
              <input
                id="d2-search-input"
                type="search"
                className="d2-search__input"
                placeholder="Buscar por tema o área…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit" className="d2-btn d2-btn--primary d2-search__btn">
                Buscar
              </button>
            </form>
          </FadeIn>

          <FadeIn className="d2-hero__aside" onMount delay={120}>
            <figure className="d2-hero__media">
              <img
                src={previewImages.campus}
                alt="Campus y formación técnica"
                loading="eager"
                decoding="async"
              />
            </figure>
            <ul className="d2-hero__proof" aria-label="Resumen de la academia">
              <li>
                <GraduationCap size={22} weight="duotone" aria-hidden />
                <div>
                  <strong>7</strong>
                  <span>áreas de ing. civil</span>
                </div>
              </li>
              <li>
                <Certificate size={22} weight="duotone" aria-hidden />
                <div>
                  <strong>NSR-10</strong>
                  <span>y reglamento nacional</span>
                </div>
              </li>
              <li>
                <UsersThree size={22} weight="duotone" aria-hidden />
                <div>
                  <strong>5</strong>
                  <span>líneas docentes</span>
                </div>
              </li>
            </ul>
          </FadeIn>
        </div>
      </section>

      <FadeIn as="section" className="d2-catalog" id="catalogo">
        <div className="d2-container">
          <FadeIn className="d2-catalog__head" delay={0}>
            <h2>Catálogo de cursos</h2>
            <p>
              Contenido en producción con el gremio de ingeniería. Priorizamos rigor
              técnico sobre volumen.
            </p>
          </FadeIn>

          <FadeIn delay={80}>
            <div
              className="d2-filters"
              role="tablist"
              aria-label="Filtrar por área"
            >
            {areaFilters.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={area === id}
                className={`d2-filter${area === id ? ' d2-filter--active' : ''}`}
                onClick={() => setArea(id)}
              >
                {label}
              </button>
            ))}
            </div>
          </FadeIn>

          {filtered.length === 0 ? (
            <FadeIn className="d2-empty" delay={120}>
              <div role="status">
              <p>No hay cursos con ese criterio.</p>
              <button
                type="button"
                className="d2-btn d2-btn--secondary"
                onClick={() => {
                  setQuery('')
                  setArea('all')
                }}
              >
                Limpiar filtros
              </button>
              </div>
            </FadeIn>
          ) : (
            <>
              <FadeIn className="d2-featured-wrap" delay={120}>
                <h3 className="d2-sr-only">Curso destacado</h3>
                <CourseCard course={featured} featured />
              </FadeIn>

              {catalog.length > 0 && (
                <div className="d2-grid">
                  {catalog.map((course, i) => (
                    <FadeIn key={course.id} delay={160 + i * 70}>
                      <CourseCard course={course} />
                    </FadeIn>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </FadeIn>

      <FadeIn as="section" className="d2-paths" id="rutas">
        <div className="d2-container">
          <h2>Rutas por área</h2>
          <p className="d2-paths__lead">
            Siete grandes áreas de ingeniería civil. Cada ruta agrupa módulos progresivos
            según se publique el contenido.
          </p>
          <ol className="d2-paths__list">
            {areaFilters
              .filter((a) => a.id !== 'all')
              .map(({ id, label }, index) => {
                const count = courses.filter((c) => c.area === id).length
                return (
                  <li key={id}>
                    <span className="d2-paths__index">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{label}</h3>
                      <p>
                        {count > 0
                          ? `${count} curso${count > 1 ? 's' : ''} en catálogo`
                          : 'Ruta en planificación'}
                      </p>
                    </div>
                  </li>
                )
              })}
          </ol>
        </div>
      </FadeIn>

      <FadeIn as="section" className="d2-instructors" id="docentes">
        <div className="d2-container">
          <h2>Quién enseña</h2>
          <p className="d2-instructors__lead">
            Cada curso lo imparte quien lo hace en proyecto: dibujo, estructuras, BIM y
            gestión de obra.
          </p>
          <div className="d2-instructors__grid">
            {instructors.map((person, i) => (
              <FadeIn key={person.role} as="article" className="d2-instructor-card" delay={i * 80}>
                <h3>{person.role}</h3>
                <p className="d2-instructor-card__focus">{person.courses}</p>
                <p className="d2-instructor-card__meta">{person.modules}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn as="section" className="d2-cta" id="contacto">
        <div className="d2-container d2-cta__inner">
          <div>
            <h2>Lista de espera para nuevos cursos</h2>
            <p>
              Reciba aviso cuando abramos inscripción en su área. Ideal para colegios,
              cámaras y empresas del gremio.
            </p>
          </div>
          <form
            className="d2-waitlist"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="d2-waitlist__label" htmlFor="d2-email">
              Correo profesional
            </label>
            <input
              id="d2-email"
              type="email"
              className="d2-waitlist__input"
              placeholder="nombre@empresa.com"
              autoComplete="email"
            />
            <button type="submit" className="d2-btn d2-btn--cta">
              Unirme a la lista
            </button>
          </form>
        </div>
      </FadeIn>

      <footer className="d2-footer">
        <div className="d2-container d2-footer__inner">
          <Logo width={130} height={40} />
          <p>
            © {new Date().getFullYear()} Consolidados S.A.S · Academia de ingeniería civil
          </p>
        </div>
      </footer>
    </div>
  )
}
