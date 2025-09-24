import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="container">
      <header>
        <h1>Olá, eu sou o Neto 👋</h1>
        <p>Este é um starter super básico em React + Vite para publicar no Netlify.</p>
      </header>

      <section className="card">
        <h2>Contador</h2>
        <p>Valor atual: <strong>{count}</strong></p>
        <button onClick={() => setCount((c) => c + 1)}>Incrementar</button>
      </section>

      <footer>
        <p>
          Código aberto em <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>. 
          Deploy em <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">Netlify</a>.
        </p>
      </footer>
    </main>
  )
}
