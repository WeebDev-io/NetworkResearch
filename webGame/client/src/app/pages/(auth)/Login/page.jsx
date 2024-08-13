'use client'
import React, {useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '../../../Icons';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { useForm } from "react-hook-form";

const Login = () => { 

  const currentTheme = useSelector(state => { return state.rootReducer.themes.currentTheme; })
  const themes = useSelector(state => { return state.rootReducer.themes.themes } );
  
  const onSubmit = (data) => { console.log(data); };
  const { register, handleSubmit, formState: { errors }, } = useForm();
  return (<>
    <div className={`${themes[currentTheme].bg} mx-auto w-full h-[815px]`}>
      <div className={`${themes[currentTheme].ThemeNav} rounded-3xl mt-2 relative w-[440px] h-[355px] mx-auto`}>
        {currentTheme === 'Christmas' &&(<>
        <Image src='/public/../../../../../bells.png' width={120} height={120} className={`absolute -right-16 -top-[20px] z-10`}/>
          <Image src='/public/../../../../../bellsLeft.png' width={120} height={120} className={`absolute -left-16 -top-[20px] z-10`}/>
          <div className={`w-[75%] absolute top-[10px] left-[55px] z-10 flex flex-row`}>
            <Image src='/public/../../../../../christmasTreeDecorated.png' width={70} height={70} className={`absolute left-0`}/>
            <Image src='/public/../../../../../santaClause.png' width={70} height={70} 
            className={`absolute right-0 duration-1000 -translate-x-0 -z-10`}/>
            <Image src='/public/../../../../../chirstmasTreeWithGifts.png' width={70} height={70} 
            className={`absolute right-0 z-10`}/>
          </div>
        </>)}
        {currentTheme === 'Halloween' &&(<>
          <Image src='/public/../../../../../Pumpkin.png' width={120} height={120} className={`pumpkin absolute left-0 -top-[20px] z-10`}/>
          <Image src='/public/../../../../../bats.png' width={180} height={120} className={`absolute left-[130px] top-[340px]`}/>
          <Image src='/public/../../../../../Pumpkin.png' width={120} height={120} className={`pumpkin absolute right-0 -top-[20px] z-10`}/>
        </>)}

          <h1 className={`${themes[currentTheme].LogoText} ${themes[currentTheme].bg} w-[98%] mx-auto h-[40px] leading-[40px] relative top-1 rounded-tl-3xl rounded-tr-3xl text-center text-4xl`}>Network<span className={`${themes[currentTheme].LogoText2} inline-block`}>Hub</span>
          </h1>
          <h2 className={`h-[40px] leading-[40px] w-[98%] text-md mx-auto text-center ${themes[currentTheme].textDim} ${themes[currentTheme].bg}`}>Log in to NetworkHub</h2>
          <form className={`${themes[currentTheme].bg} w-[98%] mx-auto h-[115px] py-2 rounded-bl-xl relative`} onSubmit={handleSubmit(onSubmit)}>

            <input type='email' name='email' placeholder='Email Address' className={`${themes[currentTheme].inputBG} ${themes[currentTheme].border} ${themes[currentTheme].text} ${themes[currentTheme].placeholderText} w-[97.5%] px-2 py-2 rounded-md outline-none ml-[5px] border-[1px] mb-3`}
            {...register('email',{required:'Email Required'})}
            />

            {errors.email && 
              <p className={`${themes[currentTheme].text} ${themes[currentTheme].ThemeNav} absolute -top-9 left-2.5 h-[40px] leading-[40px] rounded-md w-[95%] text-center`}>{errors.email.message}</p>
            }
            {errors.password && 
              <p className={`${themes[currentTheme].text} ${themes[currentTheme].ThemeNav} absolute -top-9 left-2.5 h-[40px] leading-[40px] rounded-md w-[95%] text-center`}>{errors.password.message}</p>
            }
            <input type='password' name='password' placeholder='Password' 
              className={`${themes[currentTheme].inputBG} ${themes[currentTheme].border} ${themes[currentTheme].text} ${themes[currentTheme].placeholderText} w-[97.5%] px-2 py-2 rounded-md outline-none ml-[5px] border-[1px] mb-3`}
              {...register('password', { required: 'Password is required',
                minLength: {value: 12 ,message: 'Password must be at least 8 characters long',},
                maxLength: {value: 20, message: 'Password cannot exceed 20 characters', },
              })}
            />
              <button type='submit' className={`${themes[currentTheme].Cancel} ${themes[currentTheme].text} w-[97%] h-[40px] left-[5px] bottom-[-50px] rounded-md font-semibold absolute`}>Log in</button>
              </form>
              
            <div className={`flex flex-col w-[98%] h-[155px] mx-auto px-1 rounded-b-3xl`}>
            <Link href="/pages/ResetPassword" className={`${themes[currentTheme].textDim} w-[180px] text-center mx-auto h-[40px] leading-[40px] mt-12`}>Forgotten account?</Link>
            <div className={`${themes[currentTheme].text} flex flex-row mx-auto w-full`}>
              <hr className={`${themes[currentTheme].border1} w-[calc(100%/1.5)]`}/>
              <span className={`${themes[currentTheme].textDim} block text-center text-xs h-[15px] leading-[15px] w-[30px] relative top-[-8px]`}>or</span>
              <hr className={`${themes[currentTheme].border1} w-[calc(100%/1.5)]`}/>
            </div>
           <Link href="/pages/Register" className={`${themes[currentTheme].CreateAccountButton} ${themes[currentTheme].text} w-[180px] text-center mx-auto h-[40px] leading-[40px] rounded-md`}>Create new account</Link>
          </div>
        </div>
    </div>
  </>);
}
export default Login;