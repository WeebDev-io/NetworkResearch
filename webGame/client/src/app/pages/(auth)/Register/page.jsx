'use client'
/* eslint-disable react/prop-types */
import React, { useEffect,useState } from 'react';
import {useSelector } from 'react-redux';
import { setTheme } from '../../../redux/slices/themesSlice';
import Link from 'next/link';
import Image from 'next/image';
import * as THREE from 'three';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '../../../Icons';

const Register = () => {
  const currentTheme = useSelector(state =>{ return state.rootReducer.themes.currentTheme});
  const themes = useSelector(state => {return state.rootReducer.themes.themes});

  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch('password', '');
  const validateUsername = (value) => {
    const startsWithLetter = /^[A-Za-z]/.test(value);
    const containsSymbolOrNumber = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+|\d+/.test(value);
    const isNotSameAsOthers = ![watch('firstName'),watch('lastName'),watch('email'),password,].some((fieldValue) => fieldValue === value);

    if (!startsWithLetter) {return 'Username must start with a letter';}
    if (!containsSymbolOrNumber) {return 'Username must contain a symbol or a number';}
    if (!isNotSameAsOthers) {return 'Username cannot be the same as First Name, Last Name, Email, or Password';}

    return true;
  };
  const validatePassword = (value) => {
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);
    const hasNumber = /\d/.test(value);

    if (!hasUpperCase || !hasLowerCase || !hasSymbol || !hasNumber) {
      return 'Password must have upper and lower cases, symbols, and numbers';
    }

    return true;
  };
  const validateDateOfBirth = () => {
    const day = watch('day');
    const month = watch('month');
    const year = watch('year');

    if (!day || !month || !year) { return 'Please select a valid date of birth'; }
      const selectedDate = new Date(`${year}-${month}-${day}`);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - selectedDate.getFullYear();

    if (age < 16) { return 'You must be older than 16 years old';} return true;
  };

  const onSubmit = (data) => { console.log(data); };

  const [customGender,setCustomGender] = useState(false);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const YearList = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const years = [];
    for (let year = currentYear; year >= 1905; year--) { years.push(year); }
    return (<>
      <option value='' name="years" className={`${themes[currentTheme].bg}`}>Year</option>
        {Array.from({ length: new Date().getFullYear() - 1923 + 1 }, (_, index) => ( <option key={new Date().getFullYear() - index} value={new Date().getFullYear() - index} className={`${themes[currentTheme].bg}`}> {new Date().getFullYear() - index} </option>))}
    </>)
  }
  const handleThemeChange = (theme) => { dispatch(setTheme(theme)); };
  const [closeError,setCloseError] = useState(false);
  return (<>
  <div className={`snowflakes-container absolute top-0 left-0 right-0 bottom-0 pointer-events-none`}></div>
  <div className={`falling-leaf-container absolute top-0 left-0 right-0 bottom-0 pointer-events-none overflow-hidden`}></div>
  <div className={`blood-container absolute top-0 left-0 right-0 bottom-0 pointer-events-none`}></div>

  <div className={`${themes[currentTheme].text} flex flex-col h-screen`}>
    <div className={`${themes[currentTheme].bg} mx-auto w-full h-[803px]`}>
      <div className={`${themes[currentTheme].ThemeNav} rounded-3xl mt-2 relative w-[440px] h-[770px] mx-auto`}>

        {currentTheme === 'Christmas' &&(<>
        <Image src='/public/../../../../../bells.png' width={120} height={120} className={`absolute -right-16 -top-[5px] z-10`}/>
          <Image src='/public/../../../../../bellsLeft.png' width={120} height={120} className={`absolute -left-16 -top-[5px] z-10`}/>
          <div className={`w-[75%] absolute top-[30px] left-[55px] z-10 flex flex-row`}>
            <Image src='/public/../../../../../christmasTreeDecorated.png' width={75} height={75}className={`absolute left-0`}/>
            <Image src='/public/../../../../../santaClause.png' width={70} height={70} className={`absolute right-0 duration-1000 -translate-x-0 -z-10`}/>
            <Image src='/public/../../../../../chirstmasTreeWithGifts.png' width={75} height={75} className={`absolute right-0 z-10 `}/>
          </div>
        </>)}

        {currentTheme === 'Halloween' && (<>
          <Image src='/public/../../../../../Pumpkin.png' width={120} height={120} className={`pumpkin absolute left-0 top-[5px] z-10`}/>
          <Image src='/public/../../../../../bats.png' width={80} height={80} className={`absolute left-[20px] top-[70px] z-10`}/>
          <Image src='/public/../../../../../bats.png' width={80} height={80} className={`absolute right-[20px] top-[70px] z-20`}/>
          <Image src='/public/../../../../../Pumpkin.png' width={120} height={120} className={`pumpkin absolute right-0 top-[5px] z-10`}/>
        </>)}
          <h1 className={`${themes[currentTheme].LogoText} ${themes[currentTheme].bg} w-[98%] mx-auto h-[40px] leading-[40px] relative top-1 rounded-tl-3xl rounded-tr-3xl text-center text-4xl`}>Network 
            <span className={`${themes[currentTheme].LogoText2} inline-block`}>Hub</span> 
          </h1>
        <h2 className={`${themes[currentTheme].bg} ${themes[currentTheme].textDim} h-[40px] leading-[40px] w-[98%] text-md mx-auto text-center`}>Create a new account</h2>
        <p className={`${themes[currentTheme].bg} ${themes[currentTheme].textDim} ${themes[currentTheme].border} h-[30px] leading-[30px] w-[98%] mx-auto text-center border-b-[1px] text-sm`}>{"It's quick and easy."}</p>
          <form className={`${themes[currentTheme].bg} w-[98%] mx-auto h-[590px] py-2 rounded-bl-xl`} onSubmit={handleSubmit(onSubmit)}>

              {errors.lastname && <p className={`${themes[currentTheme].text} ${themes[currentTheme].ThemeNav} absolute top-[128px] left-[4px] h-[40px] leading-[40px] rounded-md w-[98%] pl-2 z-10 text-[13px] ${closeError ? 'translate-y-[-50px] duration-200 ease-in':'translate-y-[0] duration-200 ease-in'}`}>
                {errors.lastname.message}
                <FontAwesomeIcon icon="close" className={`${themes[currentTheme].errorClose} absolute top-[128px] left-[4px] h-[40px] leading-[40px] rounded-md w-[98%] pl-2 z-10 text-[13px] ${closeError ? 'opacity-0':'opacity-1'}`} 
                onClick={()=>{setCloseError(!closeError)}}/>
                </p>
              }
              {errors.firstname && <p className={`${themes[currentTheme].text} ${themes[currentTheme].ThemeNav} absolute top-[128px] left-[4px] h-[40px] leading-[40px] rounded-md w-[98%] pl-2 z-10 text-[13px] ${closeError ? 'translate-y-[-50px] duration-200 ease-in':'translate-y-[0] duration-200 ease-in'}`}>{errors.firstname.message}

                <FontAwesomeIcon icon="close" className={`${themes[currentTheme].errorClose} absolute right-2 top-3 cursor-pointer ${closeError ? 'opacity-0':'opacity-1'}`} 
                onClick={()=>{setCloseError(!closeError)}}/>
                </p>
              }
              {errors.email && <p className={`${themes[currentTheme].text} ${themes[currentTheme].ThemeNav} absolute top-[128px] left-[4px] h-[40px] leading-[40px] rounded-md w-[98%] pl-2 z-10 text-[13px] ${closeError ? 'translate-y-[-50px] duration-200 ease-in':'translate-y-[0] duration-200 ease-in'}`}> {errors.email.message}
                <FontAwesomeIcon icon="close" className={`${themes[currentTheme].errorClose} absolute right-2 top-3 cursor-pointer ${closeError ? 'opacity-0':'opacity-1'}`} o
                nClick={()=>{setCloseError(!closeError)}}/>
                </p>
              }
              {errors.username && <p className={`${themes[currentTheme].text} ${themes[currentTheme].ThemeNav} absolute top-[128px] left-[4px] h-[40px] leading-[40px] rounded-md w-[98%] pl-2 z-10 text-[13px] ${closeError ? 'translate-y-[-50px] duration-200 ease-in':'translate-y-[0] duration-200 ease-in'}`}>
                {errors.username.message}
                <FontAwesomeIcon icon="close" className={`${themes[currentTheme].errorClose} absolute right-2 top-3 cursor-pointer ${closeError ? 'opacity-0':'opacity-1'}`} o
                nClick={()=>{setCloseError(!closeError)}}/>
                </p>
              }
              {errors.password && <p className={`${themes[currentTheme].text} ${themes[currentTheme].ThemeNav} absolute top-[128px] left-[4px] h-[40px] leading-[40px] rounded-md w-[98%] pl-2 z-10 text-[13px] ${closeError ? 'translate-y-[-50px] duration-200 ease-in':'translate-y-[0] duration-200 ease-in'}`}> {errors.password.message}
                <FontAwesomeIcon icon="close" className={`${themes[currentTheme].errorClose} absolute right-2 top-3 cursor-pointer ${closeError ? 'opacity-0':'opacity-1'}`} 
                onClick={()=>{setCloseError(!closeError)}}/>
              </p>
              }
             {errors.cPassword && <p className={`${themes[currentTheme].text} ${themes[currentTheme].ThemeNav} absolute top-[128px] left-[4px] h-[40px] leading-[40px] rounded-md w-[98%] pl-2 z-10 text-[13px] ${closeError ? 'translate-y-[-50px] duration-200 ease-in':'translate-y-[0] duration-200 ease-in'}`}> {errors.cPassword.message}
                <FontAwesomeIcon icon="close" className={`${themes[currentTheme].errorClose} absolute right-2 top-3 cursor-pointer ${closeError ? 'opacity-0':'opacity-1'}`} 
                onClick={()=>{setCloseError(!closeError)}}/>
              </p>
              }
              {errors.day && <p className={`${themes[currentTheme].text} ${themes[currentTheme].ThemeNav} absolute top-[128px] left-[4px] h-[40px] leading-[40px] rounded-md w-[98%] pl-2 z-10 text-[13px] ${closeError ? 'translate-y-[-50px] duration-200 ease-in':'translate-y-[0] duration-200 ease-in'}`}> {errors.day.message}
                  <FontAwesomeIcon icon="close" className={`${themes[currentTheme].errorClose} absolute right-2 top-3 cursor-pointer ${closeError ? 'opacity-0':'opacity-1'}`} 
                  onClick={()=>{setCloseError(!closeError)}}/>
                </p>
              }
              {errors.month && <p className={`${themes[currentTheme].text} ${themes[currentTheme].ThemeNav} absolute top-[128px] left-[4px] h-[40px] leading-[40px] rounded-md w-[98%] pl-2 z-10 text-[13px] ${closeError ? 'translate-y-[-50px] duration-200 ease-in':'translate-y-[0] duration-200 ease-in'}`}> {errors.month.message}
                  <FontAwesomeIcon icon="close" className={`${themes[currentTheme].errorClose} absolute right-2 top-3 cursor-pointer ${closeError ? 'opacity-0':'opacity-1'}`} 
                  onClick={()=>{setCloseError(!closeError)}}/>
                </p>
              }
              {errors.years && <p className={`${themes[currentTheme].text} ${themes[currentTheme].ThemeNav} absolute top-[128px] left-[4px] h-[40px] leading-[40px] rounded-md w-[98%] pl-2 z-10 text-[13px] ${closeError ? 'translate-y-[-50px] duration-200 ease-in':'translate-y-[0] duration-200 ease-in'}`}> {errors.years.message}
                  <FontAwesomeIcon icon="close" className={`${themes[currentTheme].errorClose} absolute right-2 top-3 cursor-pointer ${closeError ? 'opacity-0':'opacity-1'}`} 
                  onClick={()=>{setCloseError(!closeError)}}/>
                </p>
              }
              {errors.gender && <p className={`${themes[currentTheme].text} ${themes[currentTheme].ThemeNav} absolute top-[128px] left-[4px] h-[40px] leading-[40px] rounded-md w-[98%] pl-2 z-10 text-[13px] ${closeError ? 'translate-y-[-50px] duration-200 ease-in':'translate-y-[0] duration-200 ease-in'}`}> {errors.gender.message}
                  <FontAwesomeIcon icon="close" className={`${themes[currentTheme].errorClose} absolute right-2 top-3 cursor-pointer ${closeError ? 'opacity-0':'opacity-1'}`} 
                  onClick={()=>{setCloseError(!closeError)}}/>
                </p>
              }
              {errors.pronoun && <p className={`${themes[currentTheme].text} ${themes[currentTheme].ThemeNav} absolute top-[128px] left-[4px] h-[40px] leading-[40px] rounded-md w-[98%] pl-2 z-10 text-[13px] ${closeError ? 'translate-y-[-50px] duration-200 ease-in':'translate-y-[0] duration-200 ease-in'}`}> {errors.pronoun.message}
                  <FontAwesomeIcon icon="close" className={`${themes[currentTheme].errorClose} absolute right-2 top-3 cursor-pointer ${closeError ? 'opacity-0':'opacity-1'}`} 
                  onClick={()=>{setCloseError(!closeError)}}/>
                </p>
              }

            <div className={`w-full mx-auto my-2`}>
              <input type='text' name='firstName' placeholder='First Name' 
                className={`w-[48%] px-2 py-2 rounded-md outline-none ml-[5px] border-[1px] ${themes[currentTheme].inputBG} ${themes[currentTheme].border} ${themes[currentTheme].text} ${themes[currentTheme].placeholderText}`} {...register('firstname',{required:'First Name Required'})}
              />
              <input type='text' name='lastName' placeholder='Last Name' 
                className={`w-[48%] px-2 py-2 rounded-md outline-none ml-[5px] border-[1px] ${themes[currentTheme].inputBG} ${themes[currentTheme].border} ${themes[currentTheme].text} ${themes[currentTheme].placeholderText}`} {...register('lastname',{required:'Last Name Required'})}/>
            </div>

            <input type='email' name='email' placeholder='Email Address' className={`w-[97.5%] px-2 py-2 mb-2 rounded-md outline-none ml-[5px] border-[1px] ${themes[currentTheme].inputBG} ${themes[currentTheme].border} ${themes[currentTheme].text} ${themes[currentTheme].placeholderText}`
            } {...register('email',{ required: 'Email Address is required', pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,message: 'Invalid email address',},})}/>

            <input type='text' name='username' placeholder='Username' className={`w-[97.5%] px-2 py-2 mb-2 rounded-md outline-none ml-[5px] border-[1px] ${themes[currentTheme].inputBG} ${themes[currentTheme].border} ${themes[currentTheme].text} ${themes[currentTheme].placeholderText}`
            } {...register('username',{ required:'Username Required',
              validate: validateUsername,
              minLength: 8,
              maxLength: 40,
            })}/>

            <div className={`w-full mx-auto my-2`}>
              <input type='password' name='password' placeholder='Password' className={`w-[48%] px-2 py-2 rounded-md outline-none ml-[5px] border-[1px] ${themes[currentTheme].inputBG} ${themes[currentTheme].border} ${themes[currentTheme].text} ${themes[currentTheme].placeholderText}`}
              {...register('password', {
                required: 'Password is required',
                validate: (value) => value === password || 'Passwords do not match',
                minLength: { value: 12, message: 'Password must be at least 12 characters long',},
                maxLength: { value: 20, message: 'Password cannot exceed 20 characters', },
              })}/>
              <input type='password' name='cPassword' placeholder='Confirm Password' className={`w-[48%] px-2 py-2 rounded-md outline-none ml-[5px] border-[1px] ${themes[currentTheme].inputBG} ${themes[currentTheme].border} ${themes[currentTheme].text} ${themes[currentTheme].placeholderText}`} 
              {...register('cPassword', { required: 'Password Confirmation Required',
              validate: (value) => value === password || 'Passwords do not match',})}/>
            </div>

            <div className={`flex flex-col mt-1`}>
              <span className={`${themes[currentTheme].textDim} inline-block h-[30px] leading-[30px] pl-3`}>{"Date of birth"}</span>
              <div className={`flex flex-row w-[97.5%] mx-auto`}>
                <select name='day' className={`${themes[currentTheme].inputBG} ${themes[currentTheme].border} ${themes[currentTheme].textDim} w-[100%] inline-block rounded-md mr-2 relative py-1 pl-2 border-[1px] my-2`}
                {...register('day',{required:'Please select Date of Birth - Day'})}
                > <option value='' className={`${themes[currentTheme].bg} ${themes[currentTheme].text} px-1`}>Day</option>
                {Array.from({length:31}, (_,index)=>(
                    <option key={index + 1} value={index + 1} className={`${themes[currentTheme].bg} ${themes[currentTheme].text} px-1`}>{index + 1}
                    </option>))}
                </select>
                <select name='month' className={`${themes[currentTheme].inputBG} ${themes[currentTheme].border} ${themes[currentTheme].textDim} w-[100%] inline-block rounded-md mr-2 relative py-1 pl-2 border-[1px] my-2`}
                {...register('month',{required:'Please select Date of Birth - Month'})}
                >
                  <option value='' className={`${themes[currentTheme].bg} ${themes[currentTheme].text} px-1`}>Month</option>
                  {months.map(month=>(<option key={month} className={`${themes[currentTheme].bg}`}>{month}</option>))}
                  </select>
                <select name='years' className={`${themes[currentTheme].inputBG} ${themes[currentTheme].border} ${themes[currentTheme].textDim} w-[100%] inline-block rounded-md mr-2 relative py-1 pl-2 border-[1px] my-2`}
                {...register('years',{required:'Please select Date of Birth - Years'})}
                > <YearList/> </select>
              </div>
            </div>

            <div>
              <div className={`flex flex-col`}> 
                <span className={`${themes[currentTheme].textDim} inline-block h-[30px] leading-[30px] pl-3 mb-1`}>Gender</span>
                <div className={`flex flex-row mx-auto w-[97.5%]`}>
                  <span className={`${themes[currentTheme].inputBG} ${themes[currentTheme].border} ${themes[currentTheme].textDim} w-[100%] inline-block rounded-md mx-0.5 relative py-1 pl-2 border-[1px]`}>
                    Female
                    <input type='radio' name='gender' value='female' className={`absolute right-2 top-[9px]`} onClick={()=>{setCustomGender(false)}} 
                    {...register('gender',{required:'Please select your gender - Female,Male or Custom Pronoun'})}/>
                  </span>
                  <span className={`${themes[currentTheme].inputBG} ${themes[currentTheme].border} ${themes[currentTheme].textDim} w-[100%] inline-block rounded-md mx-0.5 relative py-1 pl-2 border-[1px]`}>
                    Male
                    <input type='radio'name='gender' value='male' className={`absolute right-2 top-[9px]`} onClick={()=>{setCustomGender(false)}}
                    {...register('gender',{required:'Please select your gender - Female,Male or Custom Pronoun'})}
                    />
                  </span>
                  <span className={`${themes[currentTheme].inputBG} ${themes[currentTheme].border} ${themes[currentTheme].textDim} w-[100%] inline-block rounded-md mx-0.5 relative py-1 pl-2 border-[1px]`}>
                    Custom
                    <input type='radio' name='gender' value='custom' className={`absolute right-2 top-[9px]`} onClick={()=>{setCustomGender(!customGender)}}
                    {...register('gender',{required:'Please select your gender - Female,Male or Custom Pronoun'})}
                    />
                  </span>
                </div>

                {customGender && (
                  <>
                  <select name='pronoun' className={`${themes[currentTheme].inputBG} ${themes[currentTheme].border} ${themes[currentTheme].inputBG} ${themes[currentTheme].textDim} w-[97.5%] mx-auto rounded-md relative py-1 pl-2 border-[1px] my-2`} 
                    {...register('pronoun',{required:'Please select your Pronoun'})}>
                    <option value='' className={`${themes[currentTheme].bg}`}>Select your pronoun</option>
                    <option value='she' className={`${themes[currentTheme].bg}`}>{'She: "Wish her a happy birthday!"'}</option>
                    <option value='he' className={`${themes[currentTheme].bg}`}>{'He: "Wish him a happy birthday!"'}</option>
                    <option value='they' className={`${themes[currentTheme].bg}`}>{'They: "Wish them a happy birthday!"'}</option>
                  </select>
                  <input type="text" name="customGender" className={`${themes[currentTheme].inputBG} ${themes[currentTheme].border} ${themes[currentTheme].textDim} ${themes[currentTheme].placeholderText} w-[97.5%] px-2 py-2 mb-2 rounded-md outline-none ml-[5px] border-[1px]`} placeholder='Gender (optional)'/>
                  </>
                )}
              </div>
            <p className={`text-xs w-[97.5%] mx-auto mt-1 mb-2`}>People who use our services may have upoloaded your contact information to NetworkHub
              <span className={`${themes[currentTheme].textLinks} w-[97.5%] mx-auto pl-1 cursor-pointer`}>Learn more</span>.
            </p>
            <p className={`text-xs w-[97.5%] mx-auto`}>
                By clicking Sign Up, you agree to our 
              <span className={`${themes[currentTheme].textLinks} pl-1 cursor-pointer`}>Terms</span>.
                Learn how we collect, use and share your data in our
              <span className={`${themes[currentTheme].textLinks} pl-1 cursor-pointer`}>Privacy Policy</span> and how we use cookies and similar technology in our 
              <span className={`${themes[currentTheme].textLinks} pl-1 cursor-pointer`}>Cookies Policy</span>. You may receive SMS notifications from us and can opt out at any time.
            </p>
            </div>
            <button type='submit' className={`${themes[currentTheme].Cancel} w-[160px] h-[30px] leading-[30px] mx-auto bottom-[30px] left-[140px] rounded-md text-[14px] absolute z-10`}>Sign Up</button>
          </form>
        <div className={`flex flex-col w-[98%] h-[90px] mx-auto rounded-b-3xl relative`}>
          <Link href="/pages/Login" className={`${themes[currentTheme].textDim} w-[180px] text-center mx-auto h-[40px] leading-[40px] rounded-lg relative text-[14px] top-8`}>Already have an account?</Link>
        </div>
      </div>
    </div>
  </div>

  </>);
}
export default Register;