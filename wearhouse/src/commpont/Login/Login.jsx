import React from 'react'
import imglogin from '../../assets/undraw_learning_sketching_nd4f.svg'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
  

     <div className='container-login '>
      <div className="login ">

      <form  className="max-w-sm md:w-1/2 w-3/4  px-4 mx-auto">
      <h2 className='text-center text-[#df4adf] text-[35px] '><i className="px-1 fa-solid fa-right-to-bracket"></i>Sign in</h2>
  <div className="flex mt-2">
    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
      </svg>
    </span>
    <input type="text" id="userName"    className="rounded-none rounded-e-lg bg-gray-50 border border-[#df4adf] text-gray-900 focus:ring-blue-500 focus:border-[#df4adf] block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#df4adf]" placeholder="user name .." />
  </div>
  <div className="flex mt-2">
    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />      </svg>
    </span>
    <input type="email" id="email"   className="rounded-none rounded-e-lg bg-gray-50 border border-[#df4adf] text-gray-900 focus:ring-[#df4adf] focus:border-[#df4adf] block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#df4adf] dark:focus:border-[#df4adf]" placeholder="email .." />
  </div>
  <div className="flex mt-2">
    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
      </svg>
    </span>
    <input type="password" id="password"  className="rounded-none rounded-e-lg bg-gray-50 border border-[#df4adf] text-gray-900 focus:ring-[#df4adf] focus:border-[#df4adf] block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-[#df4adf] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#df4adf]" placeholder="password.." />
  </div>
  <Link to={'../home'}>
  <button type='submit' className='block mx-auto w-[150px] h-[50px] mt-3 bg-[#df4adf] text-white button'> login</button>

  </Link>
  <h1 className=' mt-1 text-center font-semibold '> <Link  className='text-blue-900 underline'>Forgot password?</Link></h1>
    <h1 className='block md:hidden mt-1 text-center font-semibold '> don't have an account?<Link to={'../register'} className='text-blue-900 underline'>sign up</Link></h1>

      </form>
        
        <div className='hidden about w-1/2 bg-[#df4adf]  rounded-r-[15px] text-center pt-3 md:flex justify-items-center items-center'>
        <div className='mt-3'>
        <h2 className='text-white text-[30px]'> New to Brand? </h2>
        <p className='text-white text-[16px]'>Don't have an account? sign up now to join us!</p>
        <Link to={'../register'}>
        <button type='button' className='block mx-auto w-[150px] h-[50px] mt-3 bg-[#df4adf] text-white button'> Sign up</button>      
        </Link>

        <img src={imglogin} className='w-1/2 mx-auto pt-4 '/>

        </div>
         
        </div>

      </div>

     </div>
    </>
   
  )
}
