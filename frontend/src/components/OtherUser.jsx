import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import dp from "../assets/dp.webp"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { serverUrl } from '../App'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/userSlice'

function OtherUser({ user }) {
  const { userData } = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
const [isFollowing, setIsFollowing] = useState(
  userData?.following?.some(f => f._id === user._id || f === user._id)
)
  const handleFollow = async () => {
    try {
      await axios.post(`${serverUrl}/api/user/follow/${user._id}`, {}, { withCredentials: true })
      setIsFollowing(!isFollowing)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full h-[80px] flex items-center justify-between border-b-2 border-gray-800'>
      <div className='flex items-center gap-[10px]'>
        <div
          className='w-[50px] h-[50px] border-2 border-black rounded-full cursor-pointer overflow-hidden'
          onClick={() => navigate(`/profile/${user.userName}`)}
        >
          <img src={user.profileImage || dp} alt="" className='w-full object-cover' />
        </div>
        <div>
          <div className='text-[18px] text-white font-semibold'>{user.userName}</div>
          <div className='text-[15px] text-gray-400 font-semibold'>{user.name}</div>
        </div>
      </div>

      <button
        onClick={handleFollow}
        className='px-[10px] w-[100px] py-[5px] h-[40px] bg-white text-black font-semibold rounded-2xl hover:bg-gray-200 cursor-pointer'
      >
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  )
}

export default OtherUser