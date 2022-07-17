import { useState } from 'react';
import './NavBar.css'
import Result from '../Result/Result';
import Login from '../login/Login';
import UserProfile from '../userProfile/UserProfile';
const NavBar = () => {
    const [openResult, setOpenResult] = useState(false)
    const [openLogin, setOpenLogin] = useState(false)
    const [openProfile, setOpenProfile] = useState(false)
    return ( 
        <>
            <div className="nav-bar lg:flex items-center justify-between px-[80px] h-28 z-20 hidden">
                <div className='logo cursor-pointer	text-3xl font-bold'>BloodLine</div>
                <div className='search w-[600px] h-[4.5em] rounded-[50px] flex items-center border-[1px] shadow-[0px_2px_100px_0.5px_rgba(0,0,0,0.1)] '>
                    <form className='flex w-full items-center justify-around h-full rounded-[50px] '>
                        <input type="text" onClick={()=> setOpenResult(true)} placeholder='blood type / location'className='h-full w-[450px] outline-none  text-lg leading-6 pl-[15px]' />
                        <button type='submit' className='bg-[#FF385C] text-white font-medium w-[3.1em] h-[3.1em] rounded-full shadow-[0px_2px_100px_0.5px_rgba(0,0,0,0.1)] flex items-center justify-center'><i class="fi fi-rs-search"></i></button>
                    </form>
                </div>
                <div className='nav-items flex '>
                    <div className='donate cursor-pointer mx-[15px]	 text-base hover:bg-[#EFEDED]  p-[15px] rounded-[50px]'>Donate</div>
                    <div className='request cursor-pointer	mx-[15px] text-base hover:bg-[#EFEDED] p-[15px] rounded-[50px]'>Request</div>
                    <div onClick={() => setOpenLogin(true)} className='avatar cursor-pointer mx-[15px] text-base hover:bg-[#EFEDED] p-[15px] hover:rounded-full'>
                        <i class="fi fi-ss-user"></i>
                    </div>
                </div>
            </div>
            <div className='mobile-screen-size lg:hidden flex'>
                <div className=' h-[4.5rem] w-full flex justify-center items-center'>
                    <form className='border-[2px] shadow-[0px_2px_100px_1px_rgba(0,0,0,0.2)] flex h-[3rem] w-[330px] rounded-full items-center'>
                        <div className='text-[#979797] ml-8 flex items-center mt-1'><i class="fi fi-rs-search"></i></div>
                        <input className='outline-none ml-5' type="text" onClick={()=> setOpenResult(true)} placeholder='blood type / location'/>
                    </form>
                </div>
                <div className='footer h-[4.5rem] absolute bottom-[-50px] bg-orange-500 w-full flex justify-around items-center'>
                    <div className='donate flex flex-col text-center mt-2'>
                        <i class="fa-solid fa-heart-pulse"></i>
                        Donate
                    </div>
                    <div className='donate flex flex-col  text-center mt-2'>
                    <i class="fa-regular fa-heart"></i>
                        Request
                    </div>
                    <div className='donate  flex flex-col text-center mt-2'>
                    <i class="fa-regular fa-user"></i>
                        Log in 
                    </div>
                </div>
            </div>
            {openResult && <Result closeResults={setOpenResult}/>}
            {openLogin &&  <Login closeLogin = {setOpenLogin}/> }
            {/* {openProfile && <UserProfile closeProfile={setOpenProfile}/>} */}
        </>
     );
}
 
export default NavBar;
