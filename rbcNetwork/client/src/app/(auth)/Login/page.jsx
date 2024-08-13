'use client'
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '../../Icons';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { useForm } from "react-hook-form";
import { themes } from '../../styles/colorPallet/themes';
const Login = () => {
  const currentTheme = useSelector(state => state.themes.currentTheme)

  const onSubmit = (data) => {
    console.log(data);
  };

  const { register, handleSubmit, formState: { errors }, } = useForm();
  return (<>
    <div className={`loginContainer`} style={{ background: themes[currentTheme].bg }}>
      <div className={`loginHolder`}>
        <h2 className={`appName`}>Network <span className={`appNameSub`}>Hub</span> </h2>
        <h3 className={`loginHeader`}>Log in</h3>

        <form className={`loginForm`} onSubmit={handleSubmit(onSubmit)}>

          <input type='email' name='email' placeholder='Email Address' className={`emailInput`}
            {...register('email', { required: 'Email Required' })}
          />

          {errors.email && <p className={`errMessage`}> {errors.email.message}</p>}

          <input type='password' name='password' placeholder='Password' className={`passwordInput`}
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 12, message: 'Password must be at least 8 characters long', },
              maxLength: { value: 20, message: 'Password cannot exceed 20 characters', },
            })}
          />
          {errors.password && <p className={`errMessage`}> {errors.password.message}</p>}
          <button type='submit' className={`loginBtn`}>Log in</button>
        </form>

        <div className={`loginBottom`}>

          <div className={`linkBlockBtns`}>
            <Link href="/pages/ResetPassword" className={`forgotPasswordBtn`}>Forgot Password ?</Link>
            <span className={`seperator`}>or</span>
            <Link href="/pages/Register" className={`createAccountBtn`}>Create new account</Link>
          </div>

        </div>

      </div>
    </div>
  </>);
}
export default Login;