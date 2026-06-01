import { picsum, previewImages } from '../../utils/picsum'

export const d3Images = {
  ...previewImages,
  pillar: (n: number) => picsum(`consolidos-pilar-${n}`, 480, 320),
  gallery: (n: number) => picsum(`consolidos-galeria-${n}`, 560, 380),
} as const
