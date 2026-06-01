/** Imágenes de vista previa vía https://picsum.photos (seed estable por sección) */
export function picsum(seed: string, width: number, height: number): string {
  const safe = seed.replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase()
  return `https://picsum.photos/seed/${safe}/${width}/${height}`
}

export const previewImages = {
  heroMain: picsum('consolidos-academia-hero', 960, 1200),
  heroAccent: picsum('consolidos-academia-skyline', 800, 600),
  classroom: picsum('consolidos-aula-ingenieria', 720, 900),
  construction: picsum('consolidos-obra-civil', 800, 600),
  blueprint: picsum('consolidos-planos', 700, 500),
  team: picsum('consolidos-equipo-tecnico', 600, 600),
  campus: picsum('consolidos-campus', 900, 500),
  structure: picsum('consolidos-estructuras', 640, 480),
  bim: picsum('consolidos-bim-3d', 640, 480),
  obra: picsum('consolidos-construccion-obra', 1200, 800),
  servicio1: picsum('consolidos-servicio-1', 600, 400),
  servicio2: picsum('consolidos-servicio-2', 600, 400),
  servicio3: picsum('consolidos-servicio-3', 600, 400),
} as const

export function courseImage(courseId: string): string {
  return picsum(`consolidos-curso-${courseId}`, 720, 480)
}
