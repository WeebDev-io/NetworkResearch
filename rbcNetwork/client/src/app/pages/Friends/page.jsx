'use client';
import { useState } from 'react'
import { FontAwesomeIcon } from '../../Icons';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { themes } from '../../styles/colorPallet/themes';
const Friends = () => {
  const currentTheme = useSelector(state => state.themes.currentTheme)
  const [friends] = useState([
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
  const [addFriend, setAddFriend] = useState(null);
  const [viewProfile, setViewProfile] = useState(null);
  return (
    <div className={`friendContainer`}>
      <h2 className={`friends`}>Networking Suggestions </h2>
      <div className={`friendsContentHolder`}>
        {friends.map(friend => (
          <div key={friend.id} className={`friendsCard`}>
            <div className={`imgContainer`}>
              <img src={friend.userImg} className={`friendsImg`} />
            </div>

            <div className={`networkingUserInfo`}>
              <div className={`networkingUserName`}>
                <span className={`iconHolder`}>
                  <FontAwesomeIcon icon='user' className={`userIcon`} />
                </span>
                {friend.name}
              </div>

              <div className={`buttonsContainer`}>
                <button className={`friendsSendRequestBtn`}
                  onClick={() => { setAddFriend(friend.id); setViewProfile(null) }}>
                  <span className={`iconHolder`}>
                    <FontAwesomeIcon icon='user-plus' className={`addFriendIcon`} />
                  </span>
                  Add To Network
                </button>

                <button className={`friendsViewProfileBtn`}
                  onClick={() => { setViewProfile(friend.id); setAddFriend(null) }}>
                  <span className={`iconHolder`}>
                    <FontAwesomeIcon icon='eye' className={`addFriendIcon`} />
                  </span>
                  View Profile
                </button>
              </div>

              {addFriend === friend.id && (<h2 className={`friendsRequestInfoWinow`}> Friend request sent </h2>)}
              {viewProfile === friend.id && (<div className={`friendsViewProfile`}>  Profile </div>)}
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
export default Friends