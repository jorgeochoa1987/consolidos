import { useState } from 'react'
import {
  FloatingDesignMenu,
  type DesignOption,
} from './components/FloatingDesignMenu'
import { Design1 } from './designs/design1/Design1'
import { DesignPlaceholder } from './designs/DesignPlaceholder'

export default function App() {
  const [design, setDesign] = useState<DesignOption>(1)

  return (
    <>
      {design === 1 && <Design1 />}
      {design === 2 && <DesignPlaceholder number={2} />}
      {design === 3 && <DesignPlaceholder number={3} />}

      <FloatingDesignMenu value={design} onChange={setDesign} />
    </>
  )
}
