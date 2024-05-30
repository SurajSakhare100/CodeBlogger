import React, { useState } from 'react'

export default function Signup() {
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  function login(e){
    e.preventDefault();
    fetch('/api/signup',{
      method:'POST',
      body:JSON.stringify({username,email,password}),
      headers:{'Content-Type':'application/json'}
    }).then((res)=>{
      console.log(res)
    }).catch((e)=>{
      console.log(e.message)
    })
  }
  return (
    <div className='mt-10'>
      <h1 className='text-center text-4xl font-semibold'>Sign Up</h1>
      <form 
      
        className='w-1/2 m-auto'
        onSubmit={login}>
        <label htmlFor="username">username</label>
        <input 
        type="username"
        value={username}
        onChange={(e)=>{setUsername(e.currentTarget.value)}}
        className='w-full py-2 border rounded-lg my-2'
        />
        <label htmlFor="email">email</label>
        <input 
        type="email"
        value={email}
        onChange={(e)=>{setEmail(e.currentTarget.value)}}
        className='w-full py-2 border rounded-lg my-2'
        />
        <label htmlFor="password">password</label>
        <input 
        type="password"
        value={password}
        onChange={(e)=>{setPassword(e.currentTarget.value)}}
        className='w-full py-2 border rounded-lg my-2'
        />
        <button 
        className='w-full rounded-lg bg-black text-white py-2 hover:bg-slate-800 shadow-md'
        >Submit</button>
      </form>
    </div>
  )
}
