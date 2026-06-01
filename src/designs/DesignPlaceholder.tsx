import { Logo } from '../components/Logo'
import './DesignPlaceholder.css'

type DesignPlaceholderProps = {
  number: 2 | 3
}

export function DesignPlaceholder({ number }: DesignPlaceholderProps) {
  return (
    <div className={`design-placeholder design-placeholder--${number}`}>
      <header className="design-placeholder__header">
        <Logo width={200} height={67} />
      </header>
      <main className="design-placeholder__main">
        <h1>Diseño {number}</h1>
        <p>Próximamente. Seleccione Diseño 1 para ver la landing corporativa.</p>
      </main>
    </div>
  )
}
