import React from 'react';
import { Fira_Sans } from 'next/font/google';
import './globals.css';
import './App.scss';
export const metadata = {title: 'RBC',description: 'App',}
import RightBlock from './components/RightBlock';
import LeftBlock from './components/LeftBlock';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Providers } from './redux/provider';

const FiraSans = Fira_Sans({ subsets: ['latin'],weight:['400'] });

export default function RootLayout({children}) {
  const login = false;
  return (
    <html lang="en">
    <body className={FiraSans.className}>
      <Providers >
      <div className={`relative w-full overflow-hidden`}>
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
