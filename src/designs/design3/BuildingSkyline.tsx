import type { CSSProperties, ReactNode } from 'react'

type LayerFn = (config: {
  scroll: number
  mouse: number
  scaleFalloff?: number
}) => CSSProperties

type BuildingSkylineProps = {
  layer: LayerFn
}

/** Silueta urbana en capas — parallax con el hero */
export function BuildingSkyline({ layer }: BuildingSkylineProps) {
  return (
    <div className="d3-skyline" aria-hidden>
      <div
        className="d3-skyline__layer d3-skyline__layer--back"
        style={layer({ scroll: 0.06, mouse: 0.12, scaleFalloff: 0.02 })}
      >
        <SkylineBack />
      </div>
      <div
        className="d3-skyline__layer d3-skyline__layer--mid"
        style={layer({ scroll: 0.14, mouse: 0.22, scaleFalloff: 0.04 })}
      >
        <SkylineMid />
      </div>
      <div
        className="d3-skyline__layer d3-skyline__layer--front"
        style={layer({ scroll: 0.24, mouse: 0.35, scaleFalloff: 0.06 })}
      >
        <SkylineFront />
      </div>
      <div className="d3-skyline__ground" />
    </div>
  )
}

function SkylineBack() {
  return (
    <svg className="d3-skyline__svg" viewBox="0 0 1440 220" preserveAspectRatio="xMidYMax slice">
      <g className="d3-skyline__mass d3-skyline__mass--muted">
        <rect x="40" y="120" width="72" height="100" rx="2" />
        <rect x="130" y="95" width="56" height="125" rx="2" />
        <rect x="210" y="110" width="88" height="110" rx="2" />
        <rect x="1180" y="105" width="64" height="115" rx="2" />
        <rect x="1260" y="88" width="80" height="132" rx="2" />
        <rect x="1360" y="115" width="60" height="105" rx="2" />
        <rect x="920" y="100" width="70" height="120" rx="2" />
        <rect x="1005" y="118" width="52" height="102" rx="2" />
      </g>
      <Windows cols={3} startX={52} startY={132} colW={18} rowH={16} rows={4} seed={1} />
      <Windows cols={2} startX={142} startY={112} colW={18} rowH={16} rows={5} seed={2} />
    </svg>
  )
}

function SkylineMid() {
  return (
    <svg className="d3-skyline__svg" viewBox="0 0 1440 280" preserveAspectRatio="xMidYMax slice">
      <g className="d3-skyline__mass">
        <rect x="280" y="70" width="110" height="210" rx="3" />
        <rect x="410" y="110" width="78" height="170" rx="3" />
        <rect x="1050" y="55" width="120" height="225" rx="3" />
        <rect x="1188" y="90" width="86" height="190" rx="3" />
        <polygon points="335,70 335,45 390,20 445,45 445,70" className="d3-skyline__roof" />
        <rect x="500" y="130" width="95" height="150" rx="2" />
      </g>
      <Windows cols={4} startX={298} startY={92} colW={20} rowH={18} rows={8} seed={3} />
      <Windows cols={3} startX={1070} startY={78} colW={22} rowH={18} rows={9} seed={4} />
      <Windows cols={2} startX={518} startY={148} colW={20} rowH={16} rows={5} seed={5} />
    </svg>
  )
}

function SkylineFront() {
  return (
    <svg className="d3-skyline__svg" viewBox="0 0 1440 340" preserveAspectRatio="xMidYMax slice">
      <g className="d3-skyline__mass d3-skyline__mass--front">
        <rect x="0" y="140" width="140" height="200" rx="2" />
        <rect x="155" y="95" width="165" height="245" rx="3" />
        <rect x="340" y="160" width="125" height="180" rx="2" />
        <rect x="1120" y="75" width="155" height="265" rx="3" />
        <rect x="1295" y="125" width="145" height="215" rx="2" />
        <rect x="620" y="180" width="200" height="160" rx="2" />
        <rect x="835" y="120" width="130" height="220" rx="3" />
        <line x1="620" y1="180" x2="820" y2="180" className="d3-skyline__crane-base" />
        <line x1="720" y1="180" x2="720" y2="55" className="d3-skyline__crane-mast" />
        <line x1="720" y1="55" x2="810" y2="85" className="d3-skyline__crane-jib" />
        <line x1="720" y1="55" x2="680" y2="100" className="d3-skyline__crane-jib d3-skyline__crane-jib--counter" />
      </g>
      <Windows cols={3} startX={18} startY={162} colW={22} rowH={18} rows={7} seed={6} />
      <Windows cols={5} startX={175} startY={118} colW={24} rowH={20} rows={9} seed={7} />
      <Windows cols={4} startX={1140} startY={98} colW={24} rowH={20} rows={10} seed={8} />
      <Windows cols={3} startX={855} startY={142} colW={22} rowH={18} rows={8} seed={9} />
    </svg>
  )
}

type WindowsProps = {
  cols: number
  rows: number
  startX: number
  startY: number
  colW: number
  rowH: number
  seed: number
}

function Windows({ cols, rows, startX, startY, colW, rowH, seed }: WindowsProps) {
  const nodes: ReactNode[] = []
  let i = 0
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const lit = (i * 7 + seed * 13) % 5 !== 0
      const delay = ((i + seed) % 7) * 0.35
      nodes.push(
        <rect
          key={`${seed}-${r}-${c}`}
          className={`d3-skyline__window${lit ? ' d3-skyline__window--lit' : ''}`}
          style={{ animationDelay: `${delay}s` }}
          x={startX + c * colW}
          y={startY + r * rowH}
          width={10}
          height={8}
          rx={1}
        />,
      )
      i++
    }
  }
  return <g className="d3-skyline__windows">{nodes}</g>
}
