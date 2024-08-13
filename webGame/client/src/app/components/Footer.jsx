"use client";
import React from 'react'
import { useSelector } from 'react-redux';
const Footer = () => {
  const currentTheme = useSelector(state =>{ return state.rootReducer.themes.currentTheme});
  const themes = useSelector(state => {return state.rootReducer.themes.themes});
  return (
  <div className={`text-left text-xs relative bottom-0 w-full`}>
    <p className={`${themes[currentTheme].GradientMiddle} ${themes[currentTheme].text} px-3 h-[60px] leading-[60px]`}>RBC 2023 - {new Date().getFullYear()}</p>
  </div>
  )
}

export default Footer