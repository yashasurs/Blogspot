import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Landing, Profile, Login, Signup } from './pages'

function AppContent() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const { status } = useSelector((state) => state.auth)

  useEffect(() => {
    authService.getAccount()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error)
        dispatch(logout())
      })
      .finally(() => {
        setLoading(false)
      })
  }, [dispatch])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route 
          path="/login" 
          element={status ? <Navigate to="/profile" /> : <Login />} 
        />
        <Route 
          path="/signup" 
          element={status ? <Navigate to="/profile" /> : <Signup />} 
        />
        <Route 
          path="/profile" 
          element={status ? <Profile /> : <Navigate to="/login" />} 
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}

export default App
