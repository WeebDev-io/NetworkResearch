'use client'
/* eslint-disable react/prop-types */
import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../../redux/slices/themesSlice';
import Link  from 'next/link';
import Image from 'next/image';
import * as THREE from 'three';
import { useForm } from "react-hook-form";

const ResetPassword = () => {

  const currentTheme = useSelector(state =>{ return state.rootReducer.themes.currentTheme});
  const themes = useSelector(state => {return state.rootReducer.themes.themes});

  const { register, handleSubmit, watch, formState: { errors }, } = useForm();
  const onSubmit = (data) => { console.log(data); };
  
  const {closeError,setCloseError} = useState(false);

const handleThemeChange = (theme) => { dispatch(setTheme(theme)); };
return (<>
  <div className={`${themes[currentTheme].text} ${themes[currentTheme].bg} flex flex-col h-screen`}>
    <div className={`${themes[currentTheme].bg} mx-auto w-full h-[815px]`}>
      <div className={`${themes[currentTheme].ThemeNav} rounded-2xl mt-20 relative w-[440px] h-[210px] mx-auto`}>

      {currentTheme === 'Christmas' &&(<>
        <Image src='/public/../../../../../bells.png' width={120} height={120} className={`absolute -right-16 -top-[5px] z-10`}/>
        <Image src='/public/../../../../../bellsLeft.png' width={120} height={120}  className={`absolute -left-16 -top-[90px] z-10`}/>
        <div className={`w-[75%] absolute -top-[80px] left-[55px] z-10 flex flex-row`}>
        <Image src='/public/../../../../../christmasTreeDecorated.png' width={80} height={80} className={`absolute left-0`}/>
        <Image src='/public/../../../../../santaClause.png' width={80} height={80}  className={`absolute right-0 duration-1000 -translate-x-0 -z-10`}/>
        <Image src='/public/../../../../../chirstmasTreeWithGifts.png' width={80} height={80} className={`absolute right-0 z-10`}/>
        </div>
      </>)}
      {currentTheme === 'Halloween' &&( <>
        <Image src='/public/../../../../../Pumpkin.png' width={110} height={110} className={`pumpkin absolute left-0 top-[-90px] z-10`}/>
        <Image src='/public/../../../../../bats.png' width={180} height={120} className={`absolute right-[130px] top-[-120px] z-20`}/>
        <Image src='/public/../../../../../Pumpkin.png' width={110} height={110} className={`pumpkin absolute right-0 top-[-90px] z-10`}/>
      </>)}
      
        <h1 className={`${themes[currentTheme].bg} ${themes[currentTheme].border} ${themes[currentTheme].textDim} w-[98%] mx-auto h-[45px] leading-[45px] relative rounded-tl-2xl rounded-tr-2xl pl-3 text-xl border-b-[1px] top-1`}>Reset Password</h1>
        <h2 className={`${themes[currentTheme].bg} ${themes[currentTheme].textDim} h-[40px] leading-[40px] w-[98%] text-sm mx-auto pl-3`}>Please enter your email address</h2>

        <form className={`${themes[currentTheme].bg} w-[98%] mx-auto h-[70px] py-2 rounded-bl-xl`} onSubmit={handleSubmit(onSubmit)}>
          {errors.email && 
            <p className={`${themes[currentTheme].text} ${themes[currentTheme].ThemeNav} absolute top-[51px] left-2.5 h-[40px] leading-[40px] rounded-md w-[95%] text-center`}>{errors.email.message}</p>
          }
          <input type='email' name='email' placeholder='Email Address' className={`${themes[currentTheme].inputBG} ${themes[currentTheme].border} ${themes[currentTheme].text} ${themes[currentTheme].placeholderText} w-[97.5%] px-2 py-2 rounded-md outline-none ml-[5px] border-[1px]`}
          {...register('email',{required:'Email Required!'})}/>
          <button type="submit" className={`${themes[currentTheme].text} 
          ${themes[currentTheme].ResetPassword} ${themes[currentTheme].shadow} w-[140px] text-center h-[33px] leading-[30px] rounded-br-xl absolute right-[9px] bottom-[11px] z-10 shadow-[0_0_3px_1px]`}>Reset Password</button>
        </form>
        
        <div className={`absolute w-[186px] h-[42px] left-[4px] top-[162px] rounded-tl-2xl rounded-bl-2xl rounded-br-2xl flex flex-row px-2`}>
          <span className={`${themes[currentTheme].textDim} px-1 block relative top-[8px] text-md`}>Loading</span>
          <span className={`${themes[currentTheme].Circles} w-[6px] h-[6px] rounded-full block relative top-[18px] mx-1`}></span>
          <span className={`${themes[currentTheme].Circles} w-[6px] h-[6px] rounded-full block relative top-[18px] mx-1`}></span>
          <span className={`${themes[currentTheme].Circles} w-[6px] h-[6px] rounded-full block relative top-[18px] mx-1`}></span>
          <span className={`${themes[currentTheme].Circles} w-[6px] h-[6px] rounded-full block relative top-[18px] mx-1`}></span>
          <span className={`${themes[currentTheme].Circles} w-[6px] h-[6px] rounded-full block relative top-[18px] mx-1`}></span>
          <span className={`${themes[currentTheme].Circles} w-[6px] h-[6px] rounded-full block relative top-[18px] mx-1`}></span>
          <span className={`${themes[currentTheme].Circles} w-[6px] h-[6px] rounded-full block relative top-[18px] mx-1`}></span>
        </div>
        
        <div className={`${themes[currentTheme].bg} ${themes[currentTheme].border} flex flex-row w-[55.5%] h-[43px] ml-auto px-1 py-1 rounded-b-2xl border-[1px] relative right-[4px] top-[6px]`}>
          <Link href="/pages/Login" className={`${themes[currentTheme].Cancel} ${themes[currentTheme].text} ${themes[currentTheme].shadow} w-[90px] text-center h-[33px] leading-[30px] rounded-bl-xl absolute right-[148px] shadow-[0_0_3px_1px]`}>Cancel</Link>
        </div>
      </div>
    </div>
  </div>

  </>);
}
export default ResetPassword;