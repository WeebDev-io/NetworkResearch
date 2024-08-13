'use client'
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../redux/slices/themesSlice';
import Link from 'next/link';
import Image from 'next/image';
import * as THREE from 'three';
import { useForm } from "react-hook-form";

const ResetPassword = () => {
  const currentTheme = useSelector(state => state.themes.currentTheme)

  const { register, handleSubmit, watch, formState: { errors }, } = useForm();
  const onSubmit = (data) => { console.log(data); };

  const { closeError, setCloseError } = useState(false);

  return (<>
    <div className={``}>
      <div className={``}>
        <div className={``}>

          <h1 className={``}>Reset Password</h1>
          <h2 className={``}>Please enter your email address</h2>

          <form className={``} onSubmit={handleSubmit(onSubmit)}>
            {errors.email && <p className={``}>{errors.email.message}</p>}
            <input type='email' name='email' placeholder='Email Address' className={``} {...register('email', { required: 'Email Required!' })} />
            <button type="submit" className={``}>Reset Password</button>
          </form>

          <div className={``}>
            <span className={``}>Loading</span>
            <span className={``}></span>
            <span className={``}></span>
            <span className={``}></span>
            <span className={``}></span>
            <span className={``}></span>
            <span className={``}></span>
            <span className={``}></span>
          </div>

          <div className={``}> <Link href="/pages/Login" className={``}>Cancel</Link>  </div>
        </div>
      </div>
    </div>

  </>);
}
export default ResetPassword;