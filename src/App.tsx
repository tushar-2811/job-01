import {Routes , Route } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import LandingPage from './pages/LandingPage'
import SignIn from './pages/SignIn'
import Signup from './pages/Signup'
import JobForm from './pages/JobForm'


function App() {
  

  return (
    <>
      <Routes>
         <Route path='/' element={<Layout/>} >
            <Route index element={<LandingPage/>} />
            <Route path='sign-in' element={<SignIn/>} />
            <Route path='sign-up' element={<Signup/>} />
            <Route path='jobform' element={<JobForm/>} />
         </Route>
      </Routes>
    </>
  )
}

export default App
