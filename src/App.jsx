import { useState } from 'react'
import './App.css'

export default function App() {
  const [clicks, setClicks] = useState(0)

  return (
    <main className="wrap">
      <span className="badge">React + Vite</span>
      <h1>EKT Reporte</h1>
      <p className="sub">
        Página en <strong>ektreporte.irsg.work</strong>, servida desde tu VPS.
      </p>

      <button onClick={() => setClicks((c) => c + 1)}>
        Clics: {clicks}
      </button>

      <p className="foot">Hecho por Claude · {new Date().getFullYear()}</p>
    </main>
  )
}
