import React, { useRef } from 'react'
function App() {
  const name= useRef(null)
const lname= useRef(null)
const email= useRef(null)
const pass= useRef(null)
const handle=(event)=>{
   event.preventDefault()
   console.log(name.current.value);
   console.log(lname.current.value);
   console.log(email.current.value);
   console.log(pass.current.value);
}
  return (
    <div className='bg-gray-300 flex justify-center'>
      
    <form  action="" onSubmit={handle} className='   flex flex-col bg-white h-200 w-150  '>
      <h1 className='flex justify-center font-bold text-4xl mb-2'>Form</h1>
      <h1 className='flex justify-start'>Enter Your Name</h1>
      <input ref={name} className='border-4  mb-4 w-full h-12' type="text" placeholder='Name'/>
      <h1 className='flex justify-start'>Enter Your LastName</h1>
      <input ref={lname} className='border-4 w-full mb-4 h-12' type="text" placeholder='Last Name'/>
      <h1 className='flex justify-start'>Enter Your E-mail</h1>
      <input ref={email} className='border-4 w-full mb-4 h-12' type="text" placeholder='E-mail'/>
      <h1 className='flex justify-start'>Enter Your Password</h1>
      <input ref={pass} className='border-4 w-full mb-4 h-12' type="password" placeholder='Password'/>
      <input  className='border-4 rounded ml-20 active:scale-80 w-20 bg-blue-500' type="submit"/>
    </form>
    </div>
  )
}

export default App