import React from 'react'
import './Result.css'
import Blur from '../Blur'
import RequestSend from '../requestSend/RequestSend'
function Result({closeResults}) {
  return (
    <>
        <Blur/>
        <div className=' flex justify-center items-center h-[100vh] w-[100vw] absolute top-0 z-20'>
            <div className='result-card justify-start items-center h-[35rem] w-[55rem] bg-white flex flex-col relative rounded-[30px]  border-2'>
                <i class="fi fi-rr-cross absolute right-7 top-6 cursor-pointer" onClick={() => closeResults(false)}></i>
                <div className='results flex flex-col'>
                    <form>
                        <input type="text" placeholder='type here the blood type / location' className='border mt-20
                        outline-none h-16 w-[600px] rounded-xl text-lg leading-6 pl-5
                        '/>
                    </form>
                    <div className='my-2 text-sm pl-3'>Results</div>
                    <div className='cursor-pointer border ml-3 my-2'>
                        <div className='font-semibold'>
                            <i class="fi fi-rs-angle-double-right text-sm mr-2"></i>
                            Location: Kakinada
                        </div>
                        <div className='text-[#897575]'>Show all the donors in kakinada </div>
                    </div>
                    <div className='cursor-pointer border ml-3 my-2'>
                        <div className='font-semibold'>
                            <i class="fi fi-rs-angle-double-right text-sm mr-2"></i>
                            O +ve
                        </div>
                        <div className='text-[#897575]'>Show all the donors of O+ve group</div>
                    </div>
                    <div className='cursor-pointer border ml-3 my-2'>
                        <div className='font-semibold'>
                            <i class="fi fi-rs-angle-double-right text-sm mr-2"></i>
                            O -ve
                        </div>
                        <div className='text-[#897575]'>Show all the donors of O+ve group</div>
                    </div>
                </div>
            </div>
        </div>
    </> 
  )
}

export default Result