import { Clock, PlayCircle, Stack } from '@phosphor-icons/react'
import { courseImage } from '../../utils/picsum'
import type { Course } from '../design2/data'

type CourseOfferCardProps = {
  course: Course
  featured?: boolean
}

export function CourseOfferCard({ course, featured = false }: CourseOfferCardProps) {
  const isOpen = course.status === 'open'

  return (
    <article className={`d3-course${featured ? ' d3-course--featured' : ''}`}>
      <div className="d3-course__thumb">
        <img src={courseImage(course.id)} alt="" loading="lazy" decoding="async" />
        <span className={`d3-course__badge${isOpen ? ' d3-course__badge--open' : ''}`}>
          {isOpen ? 'Inscripciones abiertas' : 'Próximamente'}
        </span>
        <PlayCircle className="d3-course__play" size={featured ? 36 : 28} weight="duotone" aria-hidden />
      </div>
      <div className="d3-course__body">
        <p className="d3-course__area">{course.areaLabel}</p>
        <h3>{course.title}</h3>
        <p className="d3-course__excerpt">{course.excerpt}</p>
        <ul className="d3-course__meta">
          <li>
            <Stack size={15} aria-hidden />
            {course.modules} módulos
          </li>
          <li>
            <Clock size={15} aria-hidden />
            {course.hours} horas
          </li>
        </ul>
        <p className="d3-course__teacher">
          {course.instructorRole}
        </p>
        <button type="button" className="d3-btn d3-btn--gold d3-course__cta" disabled={!isOpen}>
          {isOpen ? 'Inscribirme al curso' : 'Avisarme cuando abra'}
        </button>
      </div>
    </article>
  )
}
