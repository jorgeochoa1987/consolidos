import { BookOpen, Clock, PlayCircle, Stack } from '@phosphor-icons/react'
import type { Course } from './data'
import './CourseCard.css'

type CourseCardProps = {
  course: Course
  featured?: boolean
}

export function CourseCard({ course, featured = false }: CourseCardProps) {
  return (
    <article
      className={`d2-course${featured ? ' d2-course--featured' : ''}`}
      data-area={course.area}
    >
      <div className="d2-course__thumb" aria-hidden>
        <span className="d2-course__area">{course.areaLabel}</span>
        <PlayCircle className="d2-course__play" size={featured ? 40 : 28} weight="duotone" />
      </div>

      <div className="d2-course__body">
        <div className="d2-course__meta-top">
          <span className={`d2-course__status d2-course__status--${course.status}`}>
            {course.status === 'open' ? 'Inscripciones abiertas' : 'Próximamente'}
          </span>
          <span className="d2-course__level">{course.level}</span>
        </div>

        <h3 className="d2-course__title">{course.title}</h3>
        <p className="d2-course__excerpt">{course.excerpt}</p>

        <ul className="d2-course__facts" aria-label="Detalles del curso">
          <li>
            <Stack size={16} weight="regular" aria-hidden />
            {course.modules} módulos
          </li>
          <li>
            <Clock size={16} weight="regular" aria-hidden />
            {course.hours} h
          </li>
          <li>
            <BookOpen size={16} weight="regular" aria-hidden />
            {course.instructorRole}
          </li>
        </ul>

        <div className="d2-course__footer">
          <p className="d2-course__instructor">
            Imparte: <strong>{course.instructor}</strong>
          </p>
          <button
            type="button"
            className="d2-course__cta"
            disabled={course.status === 'soon'}
          >
            {course.status === 'open' ? 'Ver programa' : 'Avisarme'}
          </button>
        </div>
      </div>
    </article>
  )
}
