import React from "react";
import Blur from "../Blur";

function UserProfile ({closeProfile}) {
    return(
        <>
            <Blur/>
            <div className=' flex justify-center items-center h-[100vh] w-[100vw] absolute top-0'>
                <div className='result-card justify-start items-center h-[35rem] w-[27rem] bg-white flex flex-col relative rounded-[30px]'>
                    <div className="mt-12 text-3xl font-bold">
                        Profile
                    </div>
                    <div className="mt-12 text-base font-semibold font-bold">
                        <input type="text" placeholder='Name'className='outline-none border-b-2 border-slate-400' />
                    </div>
                    <div className="mt-10 text-base font-semibold font-bold">
                        <input type="text" placeholder='Age'className='outline-none border-b-2 border-slate-400' />
                    </div>
                    <div className="mt-10 text-base font-semibold font-bold">
                        <input type="text" placeholder='Phone Number'className='outline-none border-b-2 border-slate-400' />
                    </div>
                    <div className="mt-10 text-base font-semibold font-bold">
                        <input type="text" placeholder='Email'className='outline-none border-b-2 border-slate-400' />
                    </div>
                    <div className="mt-10 text-base font-semibold font-bold">
                        <input type="text" placeholder='Location'className='outline-none border-b-2 border-slate-400' />
                    </div>
                    <div className='flex w-full mt-10 justify-center'>
                        <div onClick={() => closeProfile(false)} className="cancel  flex justify-center items-center rounded-[8px] cursor-pointer border-2 border-black w-[5rem] mr-8 p-2 hover:bg-red-400">
                            Cancle
                        </div>
                        <div className="save flex justify-center items-center rounded-[8px] cursor-pointer border-2 text-white border-black w-[5rem] ml-8 p-2 bg-[#533258]">
                            Save
                        </div>
                    </div>
                </div>
            </div>
      </>
    )
}

export default UserProfile;