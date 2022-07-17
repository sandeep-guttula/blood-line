import React from 'react'
import checkSolid from './check-solid.svg'
function RequestSend({close}) {
  return (
      <>
        <div className=' flex justify-center items-center h-[100vh] w-[100vw] absolute top-0 z-20'>
            <div className=' h-[32rem] w-[28rem] bg-white flex items-center flex-col relative rounded-[30px] '>
                <div className='flex justify-center items-center text-2xl font-bold px-14 mt-[3rem] w-[22rem]'>
                    Done
                </div>
                <div className='h-[70px] w-[70px] mt-10'>
                    <img src={checkSolid}/>
                </div>
                <div className='font-[3px] mt-12 w-[280px]'>
                    Your request has been sent to the donor and he’ll get back you soon.
                </div>
                <button onClick={() => close(false)} className='cursor-pointer  w-[17rem] bg-[#9D6262] mt-9 border-2 border-black flex justify-center items-center rounded-[15px]'>
                    <div className='font-bold p-3 text-white'>Close</div>
                </button>
                <div className='text-xs px-16 mb- mt-7'>
                    Note : sending request will send your contact details to the donor and they’ll contact you back if they want to donate.
                </div>
            </div>
        </div>
      </>
  )
}

export default RequestSend;