import React from 'react'
import Header from './Componentes/Header'
import Sidenav from './Componentes/Sidenav'
import Resumo from './Pages/Dashboard'
import { DataContextProvider } from './Context/DataContext'

const App = () => {
  return (
    <DataContextProvider>
      <div className='container'>
        <Sidenav />
        <main className='main'>
          <Header/>
          {/* <Header />
          <Resumo /> */}
        </main>
      </div>
    </DataContextProvider>
  )
} 

export default App