'use client'
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { setTheme } from '../../redux/slices/themesSlice';
import Link from 'next/link';
import Image from 'next/image';
import * as THREE from 'three';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '../../Icons';


const Register = () => {
  const currentTheme = 'Christmas';

  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch('password', '');
  const validateUsername = (value) => {
    const startsWithLetter = /^[A-Za-z]/.test(value);
    const containsSymbolOrNumber = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+|\d+/.test(value);
    const isNotSameAsOthers = ![watch('firstName'), watch('lastName'), watch('email'), password,].some((fieldValue) => fieldValue === value);

    if (!startsWithLetter) { return 'Username must start with a letter'; }
    if (!containsSymbolOrNumber) { return 'Username must contain a symbol or a number'; }
    if (!isNotSameAsOthers) { return 'Username cannot be the same as First Name, Last Name, Email, or Password'; }

    return true;
  };
  const validatePassword = (value) => {
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);
    const hasNumber = /\d/.test(value);

    if (!hasUpperCase || !hasLowerCase || !hasSymbol || !hasNumber) { return 'Password must have upper and lower cases, symbols, and numbers'; }

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

    if (age < 16) { return 'You must be older than 16 years old'; } return true;
  };

  const onSubmit = (data) => { console.log(data); };

  const [customGender, setCustomGender] = useState(false);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const YearList = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const years = [];
    for (let year = currentYear; year >= 1905; year--) { years.push(year); }
    return (<>
      <option value='' name="years" className={``}>Year</option>
      {Array.from({ length: new Date().getFullYear() - 1923 + 1 }, (_, index) => (
        <option
          key={new Date().getFullYear() - index}
          value={new Date().getFullYear() - index}
          className={``}> {new Date().getFullYear() - index}
        </option>))}
    </>)
  }
  const handleThemeChange = (theme) => { dispatch(setTheme(theme)); };
  const [closeError, setCloseError] = useState(false);
  return (<>
    <div className={``}></div>
    <div className={``}></div>
    <div className={``}></div>

    <div className={``}>
      <div className={``}>
        <div className={``}>

          {currentTheme === 'Christmas' && (<>
            <Image src='/public/../../../../../bells.png' width={120} height={120} className={``} />
            <Image src='/public/../../../../../bellsLeft.png' width={120} height={120} className={``} />
            <div className={``}>
              <Image src='/public/../../../../../christmasTreeDecorated.png' width={75} height={75} className={``} />
              <Image src='/public/../../../../../santaClause.png' width={70} height={70} className={``} />
              <Image src='/public/../../../../../chirstmasTreeWithGifts.png' width={75} height={75} className={``} />
            </div>
          </>)}

          {currentTheme === 'Halloween' && (<>
            <Image src='/public/../../../../../Pumpkin.png' width={120} height={120} className={``} />
            <Image src='/public/../../../../../bats.png' width={80} height={80} className={``} />
            <Image src='/public/../../../../../bats.png' width={80} height={80} className={``} />
            <Image src='/public/../../../../../Pumpkin.png' width={120} height={120} className={``} />
          </>)}
          <h1 className={``}>Network <span className={``}>Hub</span> </h1>
          <h2 className={``}>Create a new account</h2>
          <p className={``}>{"It's quick and easy."}</p>
          <form className={``} onSubmit={handleSubmit(onSubmit)}>

            {errors.lastname && (<p className={`${closeError ? '' : ''}`}> {errors.lastname.message}
              <FontAwesomeIcon icon="close" className={`${closeError ? '' : ''}`} onClick={() => { setCloseError(!closeError) }} />
            </p>)}
            {errors.firstname && (<p className={`${closeError ? '' : ''}`}> {errors.firstname.message}
              <FontAwesomeIcon icon="close" className={`${closeError ? '' : ''}`} onClick={() => { setCloseError(!closeError) }} />
            </p>)}
            {errors.email && (<p className={`${closeError ? '' : ''}`}> {errors.email.message}
              <FontAwesomeIcon icon="close" className={`${closeError ? '' : ''}`} onClick={() => { setCloseError(!closeError) }} />
            </p>)}
            {errors.username && (<p className={`${closeError ? '' : ''}`}> {errors.username.message}
              <FontAwesomeIcon icon="close" className={`${closeError ? '' : ''}`} onClick={() => { setCloseError(!closeError) }} />
            </p>)}
            {errors.password && (<p className={`${closeError ? '' : ''}`}> {errors.password.message}
              <FontAwesomeIcon icon="close" className={`${closeError ? '' : ''}`} onClick={() => { setCloseError(!closeError) }} />
            </p>)}
            {errors.cPassword && (<p className={` ${closeError ? '' : ''}`}> {errors.cPassword.message}
              <FontAwesomeIcon icon="close" className={`${closeError ? '' : ''}`} onClick={() => { setCloseError(!closeError) }} />
            </p>)}
            {errors.day && (<p className={`${closeError ? '' : ''}`}> {errors.day.message}
              <FontAwesomeIcon icon="close" className={`${closeError ? '' : ''}`} onClick={() => { setCloseError(!closeError) }} />
            </p>)}
            {errors.month && (<p className={`${closeError ? '' : ''}`}> {errors.month.message}
              <FontAwesomeIcon icon="close" className={`${closeError ? '' : ''}`} onClick={() => { setCloseError(!closeError) }} />
            </p>)}
            {errors.years && (<p className={`${closeError ? '' : ''}`}> {errors.years.message}
              <FontAwesomeIcon icon="close" className={`${closeError ? '' : ''}`} onClick={() => { setCloseError(!closeError) }} />
            </p>)}
            {errors.gender && (<p className={`${closeError ? '' : ''}`}> {errors.gender.message}
              <FontAwesomeIcon icon="close" className={`${closeError ? '' : ''}`} onClick={() => { setCloseError(!closeError) }} />
            </p>)}
            {errors.pronoun && (<p className={`${closeError ? '' : ''}`}> {errors.pronoun.message}
              <FontAwesomeIcon icon="close" className={`${closeError ? '' : ''}`} onClick={() => { setCloseError(!closeError) }} />
            </p>)}

            <div className={``}>
              <input type='text' name='firstName' placeholder='First Name' className={``} {...register('firstname', { required: 'First Name Required' })} />
              <input type='text' name='lastName' placeholder='Last Name' className={``} {...register('lastname', { required: 'Last Name Required' })} />
            </div>

            <input type='email' name='email' placeholder='Email Address' className={``}
              {...register('email', { required: 'Email Address is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address', }, })} />

            <input type='text' name='username' placeholder='Username' className={``}
              {...register('username', { required: 'Username Required', validate: validateUsername, minLength: 8, maxLength: 40, })} />

            <div className={``}>
              <input type='password' name='password' placeholder='Password' className={``}
                {...register('password', {
                  required: 'Password is required',
                  validate: (value) => value === password || 'Passwords do not match',
                  minLength: { value: 12, message: 'Password must be at least 12 characters long', },
                  maxLength: { value: 20, message: 'Password cannot exceed 20 characters', },
                })} />

              <input type='password' name='cPassword' placeholder='Confirm Password' className={``}
                {...register('cPassword', {
                  required: 'Password Confirmation Required', validate: (value) => value === password || 'Passwords do not match',
                })} />
            </div>

            <div className={``}>
              <span className={``}>{"Date of birth"}</span>
              <div className={``}>
                <select name='day' className={``} {...register('day', { required: 'Please select Date of Birth - Day' })}>
                  <option value='' className={`1`}>Day</option>
                  {Array.from({ length: 31 }, (_, index) => (
                    <option key={index + 1} value={index + 1} className={``}> {index + 1} </option>
                  ))}
                </select>
                <select name='month' className={``} {...register('month', { required: 'Please select Date of Birth - Month' })}>
                  <option value='' className={``}>Month</option>
                  {months.map(month => (
                    <option key={month} className={``}>{month}</option>
                  ))}
                </select>
                <select name='years' className={``} {...register('years', { required: 'Please select Date of Birth - Years' })}> <YearList /> </select>
              </div>
            </div>

            <div>
              <div className={``}>
                <span className={``}>Gender</span>
                <div className={``}>
                  <span className={`]`}> Female
                    <input type='radio' name='gender' value='female' className={``} onClick={() => { setCustomGender(!customGender) }}
                      {...register('gender', { required: 'Please select your gender - Female,Male or Other' })} />
                  </span>
                  <span className={``}> Male
                    <input type='radio' name='gender' value='male' className={`absolute right-2 top-[9px]`} onClick={() => { setCustomGender(!customGender) }}
                      {...register('gender', { required: 'Please select your gender - Female,Male or Other' })}
                    />
                  </span>
                  <span className={``}> Other
                    <input type='radio' name='gender' value='custom' className={`absolute right-2 top-[9px]`} onClick={() => { setCustomGender(!customGender) }}
                      {...register('gender', { required: 'Please select your gender - Female,Male or Other' })}
                    />
                  </span>
                </div>

                {customGender && (
                  <div>
                    <select name='pronoun' className={``} {...register('pronoun', { required: 'Please select your Pronoun' })}>
                      <option value='' className={``}>Select your pronoun</option>
                      <option value='she' className={``}>{'She: "Wish her a happy birthday!"'}</option>
                      <option value='he' className={``}>{'He: "Wish him a happy birthday!"'}</option>
                      <option value='they' className={``}>{'They: "Wish them a happy birthday!"'}</option>
                    </select>
                    <input type="text" name="customGender" className={``} placeholder='Gender (optional)' />
                  </div>
                )}
              </div>
              <p className={``}>People who use our services may have upoloaded your contact information to NetworkHub
                <span className={``}>Learn more</span>.
              </p>
              <p className={``}>
                By clicking Sign Up, you agree to our
                <span className={``}>Terms</span>.
                Learn how we collect, use and share your data in our
                <span className={``}>Privacy Policy</span> and how we use cookies and similar technology in our
                <span className={``}>Cookies Policy</span>. You may receive SMS notifications from us and can opt out at any time.
              </p>
            </div>
            <button type='submit' className={``}>Sign Up</button>
          </form>
          <div className={``}>
            <Link href="/pages/Login" className={``}>Already have an account?</Link>
          </div>
        </div>
      </div>
    </div>

  </>);
}
export default Register;