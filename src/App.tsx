import './App.css'
import {Route, Routes, useNavigate} from "react-router-dom";
import {Auth} from "./pages/Auth/Auth.tsx";
import {useEffect} from "react";
import {useActions} from "./hooks/useActions.ts";
import {useAuth} from "./hooks/useAuth.ts";
import Cookies from "js-cookie";
import {Wrapper} from "./pages/Wrapper/Wrapper.tsx";

function App() {
  const navigate = useNavigate()
  const {user} = useAuth()

  const {checkAuthTC, logoutTC} = useActions()

  useEffect(() => {
    const accessToken = Cookies.get('accessToken')
    if (accessToken) checkAuthTC()
  }, [])

  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken')
    if (!refreshToken && user) logoutTC()
  }, [])

  useEffect(() => {
    if (!user) {
      navigate('/auth')
    }
  }, [user])

  return (
    <Routes>
      <Route path={'/auth'} element={<Auth/>}/>
      <Route path={'/'} element={<Wrapper/>}/>
    </Routes>
  )
}

export default App
