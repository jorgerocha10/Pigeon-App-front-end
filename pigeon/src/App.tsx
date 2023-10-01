import React from 'react'
import Header from './Componentes/Header'
import Sidenav from './Componentes/Sidenav'
import Resumo from './Pages/Dashboard'
import { DataContextProvider } from './Context/DataContext'
import Navbar from './Componentes/Navbar'

const App = () => {
  return (
    <DataContextProvider>
      <Navbar />
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