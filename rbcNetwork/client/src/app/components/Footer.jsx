"use client";
import React from 'react'
import { useSelector } from 'react-redux';
import { themes } from '../styles/colorPallet/themes';
const Footer = () => {
  const currentTheme = useSelector(state => state.themes.currentTheme)
  return (
    <div className={`footerContainer`} style={{ background: themes[currentTheme].footer, color: themes[currentTheme].text }}>
      <p className={`footerText`}>RBC {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer