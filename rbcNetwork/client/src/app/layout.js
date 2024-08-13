import React from 'react';
import { cookies } from 'next/headers';
import './globals.css';
import { Providers } from './redux/provider';
import RightBlock from './components/RightBlock';
import LeftBlock from './components/LeftBlock';
import Nav from './components/Nav';
import Footer from './components/Footer';

export const metadata = {title: 'RBC',description: 'App',}

export default function RootLayout({children}) {
  const cookieStore = cookies();
  const currentTheme = cookieStore.get('currentTheme')?.value || 'Light';
  const initialState = {themes: {currentTheme,},};
  return (
    <html lang="en">
    <body>
      <Providers initialState={initialState}>
      <div className={`container`}>
        <Nav/>
        <LeftBlock/>
        <RightBlock/>
        {children}
        <Footer/>
      </div>
      </Providers>
    </body>
    </html>
    )
  }