import React from 'react'
import Header from './Componentes/Header'
import Sidenav from './Componentes/Sidenav'
import Resumo from './Pages/Resumo'
import { DataContextProvider } from './Context/DataContext'

const App = () => {
  return (
    <DataContextProvider>
      <div className='container'>
        <Sidenav />
        <main>
          {/* <Header />
          <Resumo /> */}
        </main>
      </div>
    </DataContextProvider>
  )
} 

export default App