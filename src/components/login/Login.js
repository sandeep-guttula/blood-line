import React from 'react'
import Blur from '../Blur'

function Login({closeLogin}) {
  return (
      <>
        <Blur/>
        <div className='flex justify-center items-center h-[100vh] w-[100vw] absolute top-0 z-20'>
            <div className=' h-[24rem] w-[22rem] bg-white flex items-center flex-col relative rounded-[30px] border-4 '>
                <i class="fi fi-rr-cross absolute right-7 top-6 cursor-pointer" onClick={() => closeLogin(false)}></i>
                <div className='text-2xl font-bold px-14 mt-[3rem] w-[22rem]'>
                    Hi.. Welcome to <br/> BloodLine
                </div>
                <div className='px-14 mt-5'>
                    To get started please create an account by clicking the below button
                </div>
                <button className='cursor-pointer w-[17rem] mt-9 mb-3 border-[2px] p-1 border-black flex justify-center items-center rounded-[15px]'>
                    <img src="https://img.icons8.com/bubbles/100/undefined/google-logo.png" className='h-[50px] w-[50px]'/>
                    <div className='font-bold'>Continue with Google</div>
                </button>
                <div className='text-[8px] mt-4'>
                    By creating an account your accept to our <span className='text-blue-500 cursor-pointer'>privacy policy</span> 
                </div>
            </div>
        </div>
      </>
  )
}

export default Login