import React from 'react'
import Blur from '../Blur'
import './Welcome.css'
import welcome from './meditation-yoga.svg'
import 'animate.css';
import { motion } from "framer-motion"
function Welcome({closeWelcome}) {
  return (
      <>
        <Blur/>
        <motion.div initial={{opacity:0}} 
          animate={{opacity:1, transition:{
            duration:0.3
          }}} 
          className='flex justify-center items-center h-[100vh] w-[100vw] fixed top-0 z-30 animate__fadeInDown'>
            <motion.div 
              initial={{scale:0}} 
              animate={{scale:1,transition:{
                duration:0.3
              }}} 
              className="h-[28rem] w-[50rem] bg-white border-[1px]  rounded-[30px] relative flex justify-center animate__fadeInDown">
              <i class="fi fi-rr-cross absolute right-7 top-6 cursor-pointer"  onClick={() => closeWelcome(false)}></i>
              <motion.div 
                className="flex items-center">
                <motion.div 
                  className='m-[5]'>
                    <motion.div initial={{x:100}} animate={{x:0,transition:{
                      delay:0.3
                    }}}  className="font-bold text-[30px]">Hello</motion.div> <br/>
                    <motion.div initial={{x:100}} animate={{x:0,transition:{delay:0.3}}}>Welcome to <br/>
                      <motion.div initial={{x:100}} animate={{x:0,transition:{delay:0.3}}} className='text-[#FF385C] text-[70px] font-bold'>Blood Line</motion.div>
                    </motion.div>
                    <motion.div className="">
                        <motion.div initial={{x:100}} animate={{x:0,transition:{delay:0.3}}} className='text-[20px] font-semibold'>What we do ? </motion.div><br/>
                        <motion.div initial={{x:100}} animate={{x:0,transition:{delay:0.3}}} className="w-[60%] text-[12px]">We simply help you to find the nearest doners in your area.</motion.div>
                    </motion.div>
                </motion.div>
                <img className='w-[15rem] ml-10' src={welcome} alt="" />
              </motion.div>
            </motion.div>
        </motion.div>
      </>
  )
}

export default Welcome