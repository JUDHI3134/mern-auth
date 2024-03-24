import React from 'react'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" id="username" placeholder='Username' className='bg-slate-100 p-3 rounded-lg' />
        <input type="email" id="email" placeholder='Email' className='bg-slate-100 p-3 rounded-lg' />
        <input type="password" id="password" placeholder='Password' className='bg-slate-100 p-3 rounded-lg' />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign Up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an Account?</p>
        <Link to="/sign-in"><span className='text-blue-500'>Sign In</span></Link>
      </div>
    </div>
  )
}

export default Signup
