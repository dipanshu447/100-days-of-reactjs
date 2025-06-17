import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard from './Dashboard'
import Login from './Login'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  redirect
} from 'react-router-dom'
import Protection from './Protection'
import auth from './utils'

function App() {
  // const [isAuthenticated, setisAuthentication] = useState(false);
  const isAuthenticated = false;
  const login = () => setisAuthentication(true);
  const logout = () => setisAuthentication(false);

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      {/* <Route path='/' element={<Login login={login} />} />
    <Route element={<Protection isAuth={isAuthenticated}/>}>
      <Route path='dashboard' element={<Dashboard logout={logout}/>} />
    </Route> */}

      <Route path='/' element={<Login login={() => console.log("login")} />} />
      <Route path='dashboard' element={<Dashboard logout={() => console.log("log out")} />} loader={async () => await auth()} />

        
    </>
  ))

  return (
    <RouterProvider router={router} />
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)