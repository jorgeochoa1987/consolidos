import { useState } from 'react'
import { Logo } from './components/Logo'
import { Icon } from './components/Icon'
import {
  FloatingDesignMenu,
  type DesignOption,
} from './components/FloatingDesignMenu'
import './App.css'

const socialLinks = [
  { name: 'github-icon' as const, href: '#', label: 'GitHub' },
  { name: 'x-icon' as const, href: '#', label: 'X' },
  { name: 'discord-icon' as const, href: '#', label: 'Discord' },
  { name: 'bluesky-icon' as const, href: '#', label: 'Bluesky' },
]

export default function App() {
  const [design, setDesign] = useState<DesignOption>(1)

  return (
    <div className="app" data-design={design}>
      <header className="header">
        <Logo className="header__logo" width={240} height={80} />
      </header>

      <main className="main">
        <h1 className="main__title">Bienvenido</h1>
        <p className="main__lead">
          Sitio web de Consolidados S.A.S. Edita{' '}
          <code>src/App.tsx</code> para construir tu contenido.
        </p>
      </main>

      <footer className="footer">
        <nav className="footer__nav" aria-label="Redes sociales">
          {socialLinks.map(({ name, href, label }) => (
            <a
              key={name}
              href={href}
              className="footer__link"
              aria-label={label}
            >
              <Icon name={name} size={22} />
            </a>
          ))}
        </nav>
        <p className="footer__copy">
          © {new Date().getFullYear()} Consolidados S.A.S
        </p>
      </footer>

      <FloatingDesignMenu value={design} onChange={setDesign} />
    </div>
  )
}
