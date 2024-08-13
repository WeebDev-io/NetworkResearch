"use client";
import React, { useState } from 'react'
import Link from "next/link";
import { FontAwesomeIcon } from '../Icons';
import { useSelector } from 'react-redux';
import { userData } from '../localConstants/dataStorage';
const currSession = 'Larry';
const RightBlock = () => {
  const [showFriendsMenu, setShowFriendsMenu] = useState(false);
  const currentTheme = useSelector(state => state.themes.currentTheme)
  const themes = useSelector(state => state.themes.themes);
  return (
    <div className={`rightBarContainer ${showFriendsMenu ? 'showMenuRight' : 'hideMenuRight'}`}>
      <div className={`rightBarContentHolder`}>
        <button className={`openNavBtn ${showFriendsMenu ? 'rotateRight' : 'hideMenuRight rotateBackRight'}`} onClick={() => { setShowFriendsMenu(!showFriendsMenu) }}>
          <FontAwesomeIcon icon='square-caret-right' className={`rightIcon`} />
        </button>
        <div className={`listHolder`}>
          {userData.map(user => (
            currSession == user.user && user.myNetwork.map(data => (
              <li key={data.id} className={`listItems`}>
                <Link href={`/pages/Users/User/${data.name}`} className={`link`}>
                  <img src={data.img.src} className={`img`} /> {data.name}
                </Link>
              </li>
            ))
          ))}
        </div>
      </div>
    </div>
  )
}

export default RightBlock