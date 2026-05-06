import axios from 'axios'
import { useEffect, useState } from 'react'
import { serverUrl } from '../App'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/userSlice'

function getCurrentUser() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)  // 👈 local state instead

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(`${serverUrl}/api/user/current`, { withCredentials: true })
        dispatch(setUserData(result.data))
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)  // 👈 local setState, no Redux needed
      }
    }
    fetchUser()
  }, [])

  return loading  // 👈 return it so the caller can use it if needed
}

export default getCurrentUser