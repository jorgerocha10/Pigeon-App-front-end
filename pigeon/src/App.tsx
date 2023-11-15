import React from 'react'
import Header from './Componentes/Header'
import Sidenav from './Componentes/Sidenav'
import Resumo from './Pages/Dashboard'
import { DataContextProvider } from './Context/DataContext'
import Navbar from './Componentes/Navbar'
import Login from './Componentes/Login'
import SignInSide from './Componentes/SignInSide'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Componentes/Dashboard/Dashboard'

const App = () =>
  const login = false;
  return (

  <BrowserRouter>
    <DataContextProvider>
      {/* <div>
        <SignInSide />
      </div> */}
      {/* <div className='App'>
        <Login />
      </div> */}
      {/* <Navbar /> */}
      {/* <div className='container'>
        <Sidenav />
        <main className='main'>
          <Header/>
          <Resumo />
          <Routes>
            <Route path='/signin' element={<SignInSide/>} />
          </Routes>
        </main>
      </div> */}
          <Routes>
            {/* Adicionar posteriormente na rota abaixo o componente de criar registro */}
            <Route path='/signin/*' element={<Login/>} />
            <Route path='/signin/' element={<SignInSide/>} />
            <Route path='/' element={<Dashboard/>} />
          </Routes>
    </DataContextProvider>
  </BrowserRouter>

  )
} 

export default App