"use client";
import React, { useState } from 'react'
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '../../Icons';
import { useSelector } from 'react-redux';
import { themes } from '../../styles/colorPallet/themes';
const Blocked = () => {
  const currentTheme = useSelector(state => state.themes.currentTheme)

  const [blocked] = useState([
    { id: 1, name: "User1", userImg: "" },
    { id: 2, name: "User2", userImg: "" },
    { id: 3, name: "User3", userImg: "" },
    { id: 4, name: "User4", userImg: "" },
    { id: 5, name: "User5", userImg: "" },
    { id: 6, name: "User6", userImg: "" },
    { id: 7, name: "User7", userImg: "" },
    { id: 8, name: "User8", userImg: "" },
    { id: 9, name: "User9", userImg: "" },
    { id: 10, name: "User10", userImg: "" },
    { id: 11, name: "User11", userImg: "" },
    { id: 12, name: "User12", userImg: "" },
    { id: 13, name: "User13", userImg: "" },
    { id: 14, name: "User14", userImg: "" },
    { id: 15, name: "User15", userImg: "" },
    { id: 16, name: "User16", userImg: "" },
    { id: 17, name: "User17", userImg: "" },
    { id: 18, name: "User18", userImg: "" },
    { id: 19, name: "User19", userImg: "" },
    { id: 20, name: "User20", userImg: "" },
    { id: 21, name: "User21", userImg: "" },
    { id: 22, name: "User22", userImg: "" },
  ])
  const [unBlock, setUnBlock] = useState(null);
  const [viewProfile, setViewProfile] = useState(null);
  return (
    <div className={`blockedContainer`}>
      <h2 className={`blocked`}>Removed From Networking</h2>
      <div className={`blockedContentHolder`}>
        {blocked.map(blocked => (
          <div key={blocked.id} className={`blockedCard`}>

            <div className={`imgContainer`}>
              <img src={blocked.userImg} className={`blockedUserImg`} />
            </div>

            <div className={`blockedUserInfo`}>
              <div className={`blockedUserName`}>
                <span className={`iconHolder`}>
                  <FontAwesomeIcon icon='user' className={`userIcon`} />
                </span>
                {blocked.name}
              </div>
              <div className={`blockBtnContainer`}>

                <button className={`unblockUserBtn`}
                  onClick={() => { setUnBlock(blocked.id); setViewProfile(null) }} title="Unblock user"
                >
                  <span className={`iconHolder`}>
                    <FontAwesomeIcon icon='user-xmark' className={`unblockIcon`} />
                  </span>
                  Give a chance
                </button>

                <button className={`blockedViewProfileBtn`} onClick={() => { setViewProfile(blocked.id); setUnBlock(null) }}>
                  <span className={`iconHolder`}>
                    <FontAwesomeIcon icon='eye' className={`viewBlockedUserIcon`} />
                  </span>
                  View Profile
                </button>

              </div>
              {unBlock === blocked.id && (<h2 className={`blockedRequestInfoWinow`}>User Unblocked</h2>)}
              {viewProfile === blocked.id && (<div className={`blockedViewProfile`}>Profile</div>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Blocked