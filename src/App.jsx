import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
function App() {

  const [loading, setLoading] = useState(true)
  const dispatch= useDispatch()


  useEffect(() => {
    authService.getAccount()
      .then(
        (userData) => {
          if (userData) {
            dispatch(login({userData}))
          } else {
            dispatch(logout())
          }
        }
      )
      .finally(() => {
        setLoading(false)
      }
      )
      .catch((error) => {
        console.error('Error fetching user data:', error)
        dispatch(logout())
      })

  }, [])

  return (
    <>
      <div>
        <h2>Blogspot</h2>
      </div>
    </>
  )
}

export default App
