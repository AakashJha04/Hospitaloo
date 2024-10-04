import React, { useState } from 'react'
import profile_pic from '../assets/assets_frontend/profile_pic.png'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name:"Aakash",
    image:profile_pic,
    email:'aakash@gmail.com',
    phone:'+91-9999999993',
    address:{
      line1:'innvevvev',
      line2:'je v eqfjk j eq kovekv '
    },
    gender:'Male',
    dob:'2000-01-20'
  })

  const [isEdit, setisEdit] = useState(false);

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
    <img className='w-36 rounded' src={userData.image}/>
    
    {
    isEdit
    ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' onChange={e=>setUserData(prev => ({...prev, name:e.target.value}))} value={userData.name} type='text'/>
    : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
    }
    
    <hr className='bg-zinc-400 h-[1px] border-none'/>
    <div>
      <p className='text-neutral-500 underline mt-3'>CONTACT INFO.</p>
      <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
        <p className='font-medium'>Email id:</p>
        <p className='text-blue-500'>{userData.email}</p>
        <p className='font-medium'>Phone:</p>
        {
        isEdit
        ? <input className='bg-gray-100 max-w-52' value={userData.phone} onChange={e=>setUserData(prev => ({...prev, phone:e.target.value}))} type='text'/>
        : <p className='text-blue-400'>{userData.phone}</p>
        }
        <p className='font-medium'>Address:</p>
        {
        isEdit
        ? <p className='bg-gray-50'>
          <input className='bg-gray-50' onChange={(e)=>setUserData(prev => ({...prev, address:{...prev.address, line1:e.target.value}}))} value={userData.address.line1} type='text'/>
          <br/>
          <input className='text-gray-50' onChange={(e)=>setUserData(prev => ({...prev, address:{...prev.address, line2:e.target.value}}))} value={userData.address.line2} type='text'/>
          <br/>
        </p>
        : <p>
        {userData.address.line1}
        <br/>
        {userData.address.line2}
        </p>
        }
      </div>
    </div>

    <div>
      <p className='text-neutral-500 underline mt-3'>BASIC INFO.</p>
      <div className='grid grid-cols-[1fr_3fr] gap-y-2 mt-3 text-neutral-700'>
        <p className='font-medium'>Gender</p>
        {
        isEdit
        ? <select className='max-w-20 bg-gray-100' onChange={(e)=>setUserData(prev => ({...prev, gender:e.target.value}))} value={userData.gender}>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>
        : <p className='text-gray-400'>{userData.gender}</p>
        }
        <p className='font-medium'>Birthday</p>
        {
          isEdit
          ?
          <input className='max-w-28 bg-gray-100' onChange={(e)=>setUserData(prev => ({...prev, dob:e.target.value}))} type='date'/>
          :
          <p className='text-gray-400 '>
            {userData.dob}
          </p>
        }
      </div>
    </div>

    <div className='mt-10'>
      {
        isEdit
        ?
        <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>setisEdit(false)}>Save information</button>
        :
        <button className='border border-primary px-8 py-2 rounded-full  hover:bg-primary hover:text-white transition-all' onClick={(()=>setisEdit(true))}>Edit</button>
      }
    </div>

    </div>
  )
}

export default MyProfile
