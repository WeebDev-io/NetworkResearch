"use client";
import React, {useState} from 'react'
import Link from "next/link";
import { FontAwesomeIcon } from '../Icons';
import { useSelector } from 'react-redux';
const friends = [
  {id:1,name:"User1",userImg:"",},
  {id:2,name:"User2",userImg:""},
  {id:3,name:"User3",userImg:""},
  {id:4,name:"User4",userImg:""},
  {id:5,name:"User5",userImg:""},
  {id:6,name:"User6",userImg:""},
  {id:7,name:"User7",userImg:""},
  {id:8,name:"User8",userImg:""},
  {id:9,name:"User9",userImg:""},
  {id:10,name:"User10",userImg:""},
  {id:11,name:"User11",userImg:""},
  {id:12,name:"User12",userImg:""},
  {id:13,name:"User13",userImg:""},
  {id:14,name:"User14",userImg:""},
  {id:15,name:"User15",userImg:""},
  {id:16,name:"User16",userImg:""},
  {id:17,name:"User17",userImg:""},
  {id:18,name:"User18",userImg:""},
  {id:19,name:"User19",userImg:""},
  {id:20,name:"User20",userImg:""},
  {id:21,name:"User21",userImg:""},
  {id:22,name:"User22",userImg:""},
]
const RightBlock = () => {
  const [showFriendsMenu,setShowFriendsMenu] = useState(false);
  const [isShownFriendsMenu,setIsShownFriendsMenu] = useState(false);
  const currentTheme = useSelector(state => { return state.rootReducer.themes.currentTheme; })
  const themes = useSelector(state => { return state.rootReducer.themes.themes } );
  return (
  <div className={`flex flex-col absolute right-0 z-50 text-sm`}>
    <div className={`${showFriendsMenu ? `ease-in duration-100 -left-40`:`ease-out delay-[600ms] duration-100 left-0`} ${themes[currentTheme].bg} w-[160px] h-[800px] absolute top-[2px] rounded-tr-[3px] rounded-br-[6px]`}>
      <button className={`${isShownFriendsMenu ? `ease-in duration-100 right-4`:`ease-out duration-100 right-3`} 
        ${showFriendsMenu ? `ease-in duration-300`:`ease-out duration-300`} relative w-[12px] h-[12px] top-[3px] ${themes[currentTheme].GradientMiddle}`} onClick={()=>setShowFriendsMenu(!showFriendsMenu)}
        onMouseEnter={()=>{showFriendsMenu ? setIsShownFriendsMenu(isShownFriendsMenu): setIsShownFriendsMenu(!isShownFriendsMenu)}}
        onMouseLeave={()=>{showFriendsMenu ? setIsShownFriendsMenu(isShownFriendsMenu): setIsShownFriendsMenu(isShownFriendsMenu)}}>
        <FontAwesomeIcon icon='square-caret-right' className={`relative w-[20px] h-[20px] -left-1 -top-1 
        ${showFriendsMenu ? `ease-in duration-300`:`rotate-180 ease-out duration-300`}`}/>
      </button>
      <div className={`w-[148px] h-[800px] absolute mx-[6px] -my-[25px] text-center ${themes[currentTheme].text} scrollbar-x scrollbar-x-drag`}>
      {friends.map((friend) =>(
      <li key={friend.id} className={`mt-1 border-b-[1px] border-slate-400/40 h-[30px] leading-[25px] 
      ${showFriendsMenu ? `ease-in duration-[0.2s] opacity-1`:`ease-out duration-[0.2s] opacity-0`}`}>
        <Link key={friend.id} href={`/pages/Users/${friend.name}`} className={`w-full h-[32px] leading-[30px] inline-block`}> {friend.name} </Link>
      </li>
      ))}
      </div>
    </div>
  </div>
  )
}

export default RightBlock