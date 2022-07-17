import React from 'react'
import Blur from '../Blur'
import { useState } from 'react';
import RequestSend from '../requestSend/RequestSend';
function Request() {
    const userData = [
        {
            id:0,
            bloodGroup: 'O+ve',
            gender: 'Male',
            age:22,
        },
    ]
    const [sendRequest, setSendRequest] = useState(false)
    const [userBioData, setUserBioData] = useState(userData)
    return (
    <>
        <Blur/>
        <div className=' flex justify-center items-center h-[100vh] w-[100vw] absolute top-0 z-20'>
            <div className=' h-[32rem] w-[28rem] bg-white flex items-center flex-col relative rounded-[30px] '>
                <i class="fi fi-rr-cross absolute right-7 top-6 cursor-pointer"></i>
                <div className='flex justify-center items-center text-2xl font-bold px-14 mt-[3rem] w-[22rem]'>
                    Request
                </div>
                <div className='px-14 mt-5'>
                    Send the request to the user
                </div>
                {
                    userBioData.map( currValue=> {
                        return(
                            <>
                                <div className='font-bold mt-6  h-[10rem]  flex flex-col justify-around'>
                                    <div>
                                        BloodGroup : <span className='font-normal'>{currValue.bloodGroup}</span>
                                    </div>
                                    <div>
                                        Age : <span className='font-normal'>{currValue.age}</span>              
                                    </div>
                                    <div>
                                        Gender : <span className='font-normal'>{currValue.gender}</span>
                                    </div>
                                </div>
                            </>
                        )
                    } )
                }
                <button onClick={() => setSendRequest(true)} className='cursor-pointer w-[17rem] bg-[#9D6262] mt-9 border-2 border-black flex justify-center items-center rounded-[15px]'>
                    <div className='font-bold p-3 text-white'>Send Request</div>
                </button>
                <div className='text-xs px-14 mt-7'>
                    Note : sending request will send your contact details to the donor and they’ll contact you back if they want to donate.
                </div>
            </div>
        </div>
        {sendRequest && <RequestSend close={setSendRequest} />}
    </>
  )
}

export default Request;