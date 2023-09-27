import React from 'react'
import Header from './Componentes/Header'
import Sidenav from './Componentes/Sidenav'
import Resumo from './Pages/Resumo'

const App = () => {
  return (
    <div>
      <Sidenav />
      <main>
        <Header />
        <Resumo />
      </main>
    </div>
  )
} 

export default App