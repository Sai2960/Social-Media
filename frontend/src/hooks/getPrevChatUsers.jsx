import axios from 'axios'
import React, { useEffect } from 'react'
import { serverUrl } from '../App'
import { useDispatch } from 'react-redux'  // ✅ removed useSelector
import { setPrevChatUsers } from '../redux/messageSlice'

function getPrevChatUsers() {
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const result = await axios.get(`${serverUrl}/api/message/prevChats`, { withCredentials: true })
                dispatch(setPrevChatUsers(result.data))
                console.log(result.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUser()
    }, [])  // ✅ empty dependency array - fetch once on mount
}

export default getPrevChatUsers