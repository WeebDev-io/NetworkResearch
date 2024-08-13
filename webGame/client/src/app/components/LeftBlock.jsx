"use client";
import { useState } from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '../Icons';
import { useSelector } from 'react-redux';
const webNav = [
  {id:1,name:"Global Chat",navIcon:<FontAwesomeIcon icon='globe' className={`absolute top-2 left-5`}/>},
  {id:2,name:"Friends",navIcon:<FontAwesomeIcon icon='users' className={`absolute top-2 left-5`}/>},
  {id:3,name:"Blocked",navIcon:<FontAwesomeIcon icon='ban' className={`absolute top-2 left-5`}/>},
  {id:4,name:"My Portfolio",navIcon:<FontAwesomeIcon icon='id-card' className={`absolute top-2 left-5`}/>},
  {id:5,name:"Updates",navIcon:<FontAwesomeIcon icon='arrow-rotate-right' className={`absolute top-2 left-5`}/>},
  {id:6,name:"Posts",navIcon:<FontAwesomeIcon icon='message' className={`absolute top-2 left-5`}/>},
  {id:7,name:"Services",navIcon:<FontAwesomeIcon icon='business-time' className={`absolute top-2 left-5`}/>},
  {id:8,name:"My Team",navIcon:<FontAwesomeIcon icon='fa-users-line' className={`absolute top-2 left-5`}/>},
  {id:9,name:"Settings",navIcon:<FontAwesomeIcon icon='cog' className={`absolute top-2 left-5`}/>},
  {id:10,name:"Feedback",navIcon:<FontAwesomeIcon icon='bullhorn' className={`absolute top-2 left-5`}/>},
]

const LeftBlock = () => {
  const [showMenu,setShowMenu] = useState(false);
  const [isShownMenu,setIsShownMenu] = useState(false);
  const currentTheme = useSelector(state => { return state.rootReducer.themes.currentTheme; })
  const themes = useSelector(state => { return state.rootReducer.themes.themes } );
  
  return (
    <div className={`flex flex-col absolute text-sm z-50`}>
      <div className={`${showMenu ? `ease-in duration-100 left-0`:`ease-out -left-40 duration-100 `} delay-[300ms] ${themes[currentTheme].bg} w-[160px] h-[800px] absolute top-[2px] rounded-tr-[3px] rounded-br-[6px]`}>

      <button className={`${isShownMenu ? `ease-in duration-100 left-[102%]`:`ease-out duration-100 left-[100%]`}  ${showMenu ? `ease-in duration-300`:`ease-out duration-300`} relative w-[12px] h-[12px] top-[3px] ${themes[currentTheme].GradientMiddle}`}
        onClick={()=>setShowMenu(!showMenu)}
        onMouseEnter={()=>{showMenu ? setIsShownMenu(isShownMenu): setIsShownMenu(!isShownMenu)}}
        onMouseLeave={()=>{showMenu ? setIsShownMenu(isShownMenu): setIsShownMenu(isShownMenu)}}>
        <FontAwesomeIcon icon='square-caret-right' className={`relative w-[20px] h-[20px] -left-1 -top-1 ${showMenu ? `rotate-180 ease-in duration-300`:`ease-out duration-300`}`}/>
      </button>
      <div className={`w-[148px] h-[800px] absolute mx-[6px] -my-[25px] text-center ${themes[currentTheme].text}`}>
      {webNav.map((link) =>(
        <li key={link.id} className={`${showMenu ? `ease-in duration-[0.2s] opacity-1`:`ease-out duration-[0.2s] opacity-0`} mt-1 border-b-[1px] border-slate-400/40 h-[30px] leading-[25px]`}
          onClick={()=>setShowMenu(!showMenu)}>
          <Link href={`/pages/${link.name.replace(/\s/g,'')}`} className={`w-full h-[32px] leading-[30px] inline-block relative text-left pl-14`}>{link.navIcon} {link.name}</Link>
        </li>
      ))}
      </div>
    </div>
  </div>
  )
}

export default LeftBlock