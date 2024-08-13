'use client';
/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { getCookie } from "cookies-next";
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../redux/slices/themesSlice';
import { FontAwesomeIcon } from '../Icons';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import axios from 'axios';
import { searchData, userData } from '../localConstants/dataStorage';
import { LT, EN, RU, FR, GE, LV, PL, SP } from '../pages/ProfileSettings/imgs';
const lang = [LT, EN, RU, FR, GE, LV, PL, SP];
import { themes } from '../styles/colorPallet/themes';
const allThemes = ['Dark', 'Light', 'Christmas', 'Halloween', 'Easter', 'Winter', 'Spring', 'Summer', 'Autumn'];
const currSession = 'Larry';

const Nav = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(state => state.themes.currentTheme);

  useEffect(() => {
    const cookieTheme = getCookie('currentTheme') || 'Light';
    if (currentTheme !== cookieTheme) { dispatch(setTheme(cookieTheme)); }
  }, [currentTheme, dispatch]);
  const handleThemeChange = (theme) => { dispatch(setTheme(theme)); };

  //Navigation
  const [navBtn, setNavBtn] = useState({ mobile: false, search: false, desktop: false, colorPallet: false, langMenu: false, createBtn: false, notification: false });
  const navBtnHandler = (btnType) => {
    setNavBtn((prevState) => {
      const newState = { mobile: false, search: false, desktop: false, colorPallet: false, langMenu: false, createBtn: false, notification: false };
      newState[btnType] = !prevState[btnType];
      return newState;
    });
  };
  //sub Navigation
  const [navSubBtn, setNavSubBtn] = useState({
    mobile: { myTeams: false, myGroups: false, myChats: false, myFriends: false },
    desktop: { myTeams: false, myGroups: false, myChats: false, myFriends: false },
    create: { teamChat: false, friendsChat: false, privateChat: false, post: false }
  })
  const handleNavSubBtn = (segment, subSegment) => {
    setNavSubBtn((prevState) => {
      const resetSegment = Object.keys(prevState[segment]).reduce((acc, key) => { acc[key] = false; return acc; }, {});
      resetSegment[subSegment] = !prevState[segment][subSegment];
      return { ...prevState, [segment]: resetSegment, };
    });
  };

  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get('/api/test');
        setMessage(response.data.msg);
      } catch (error) { console.error('Error fetching message:', error); }
    };
    fetchMessage();
  }, []);


  //Inputs and input with filter
  const inputRefs = useRef({});
  const setInputRef = (name, element) => { inputRefs.current[name] = element; };
  const getInputValue = (name) => { return inputRefs.current[name] ? inputRefs.current[name].value : ''; }
  {/*Inputs */ }
  const [inputValue, setInputValue] = useState('');
  const searchFilter = (e) => { setInputValue(e.target.value); }
  const inputRef = useRef();
  const filterData = searchData.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()));

  const [teamChatInputValue, setTeamChatInputValue] = useState('');
  const teamChatInputHandler = (e) => { setTeamChatInputValue(e.target.value); }
  const teamChatInputRef = useRef();

  const [friendsChatInputValue, setFriendsChatInputValue] = useState('');
  const friendsChatInputHandler = (e) => { setFriendsChatInputValue(e.target.value); }
  const friendsChatInputRef = useRef();

  const [privateChatInputValue, setPrivateChatInputValue] = useState('');
  const privateChatInputHandler = (e) => { setPrivateChatInputValue(e.target.value); }
  const privateChatInputRef = useRef();

  const [postInputValue, setPostInputValue] = useState('');
  const postInputHandler = (e) => { setPostInputValue(e.target.value); }
  const postInputRef = useRef();

  const [postImgPreview, setPostImgPreview] = useState(false);
  const [uploadPostImg, setUploadPostImg] = useState(null);

  const handlePostCreateImgPreview = () => {
    if (postImgPreview === false) { setPostImgPreview(!postImgPreview) }
  }
  const handlePostCreateImgPreviewClose = () => {
    if (postImgPreview === true) { setPostImgPreview(!postImgPreview) }
  }
  const mobileNav = [
    { onClick: () => { handleNavSubBtn('mobile', 'myTeams') }, icon: 'users', text: 'My Teams' },
    { onClick: () => { handleNavSubBtn('mobile', 'myGroups') }, icon: 'people-group', text: 'My Groups' },
    { onClick: () => { handleNavSubBtn('mobile', 'myChats') }, icon: 'comment-dots', text: 'My Chats' },
    { onClick: () => { handleNavSubBtn('mobile', 'myFriends') }, icon: 'user', text: 'My Network' },
  ]
  const desktopNav = [
    { onClick: () => { handleNavSubBtn('desktop', 'myTeams') }, icon: 'users', text: 'My Teams' },
    { onClick: () => { handleNavSubBtn('desktop', 'myGroups') }, icon: 'people-group', text: 'My Groups' },
    { onClick: () => { handleNavSubBtn('desktop', 'myChats') }, icon: 'comment-dots', text: 'My Chats' },
    { onClick: () => { handleNavSubBtn('desktop', 'myFriends') }, icon: 'user', text: 'My Network' },
  ]
  const createOpts = [
    { onClick: () => { handleNavSubBtn('create', 'teamChat') }, icon: 'users', text: 'Team' },
    { onClick: () => { handleNavSubBtn('create', 'friendsChat') }, icon: 'comment-dots', text: 'Friends' },
    { onClick: () => { handleNavSubBtn('create', 'privateChat') }, icon: 'comments', text: 'Private' },
    { onClick: () => { handleNavSubBtn('create', 'post') }, icon: 'comment', text: 'Post' },
  ]
  const topMidNav = [
    { page: ' ', icon: 'house', iconStyle: 'homeIcon' },
    { page: 'Chat', icon: 'comments', iconStyle: 'chatIcon' },
    { page: 'Posts', icon: 'comment-alt', iconStyle: 'postsIcon' },
    { page: 'News', icon: 'newspaper', iconStyle: 'newsIcon' },
    { page: 'Updates', icon: 'folder', iconStyle: 'updatesIcon' },
  ]
  const myChatsShortNavBtns = [
    { id: 1, btnTitle: 'User Connection Status', icon: 'wifi' },
    { id: 2, btnTitle: 'View Profile', icon: 'eye' },
    { id: 3, btnTitle: 'Open Messages', icon: 'comment' },
    { id: 4, btnTitle: 'Delete Chat', icon: 'trash' },
    { id: 5, btnTitle: 'Block User', icon: 'ban' },
  ]
  const myChatsExtraCard = [
    { id: 1, tag: 'Status', name: 'Friends' },
  ]
  return (
    <div className={`navContainer`}>
      {/*Top Left*/}
      <div className={`navTopLeft`} style={{ background: themes[currentTheme].bg }}>

        <Link href={`/`} className={`logo`} style={{ boxShadow: themes[currentTheme].shadow, color: themes[currentTheme].text }}>
          <FontAwesomeIcon icon='hand-fist' className={`logoIcon`} style={{ color: themes[currentTheme].text }} />
        </Link>

        <div className={`searchBtn`} style={{ boxShadow: themes[currentTheme].shadow }} onClick={() => { navBtnHandler('search') }}>
          <FontAwesomeIcon icon='search' className={`searchBtnIcon`} style={{ color: themes[currentTheme].icon }} title={`Search`} />
        </div>

        <div className={`mobileMenu`} style={{ boxShadow: themes[currentTheme].shadow, background: themes[currentTheme].iconHolder }}>
          <FontAwesomeIcon icon='bars' className={`mobileMenuIcon`} style={{ color: themes[currentTheme].icon }} onClick={() => { navBtnHandler('mobile') }} title={`Menu`} />
          {navBtn.mobile && (
            <div className={`mobileMenuContainer`} style={{ background: themes[currentTheme].bg }}>
              <ul className={`mobileMenuList`} style={{ color: themes[currentTheme].text }}>

                {mobileNav.map((navItem, index) => (
                  <li key={index} className={`mobileMenuItem`} style={{ color: themes[currentTheme.gradientLeft] }} onClick={navItem.onClick}>
                    <span className={`navItemText`}>{navItem.text}</span>
                    <span className={`iconHolder`} style={{ background: themes[currentTheme].gradientRight }}>
                      <FontAwesomeIcon icon={navItem.icon} className={`icon`} />
                    </span>
                  </li>
                ))}
              </ul>

              {navSubBtn.mobile.myTeams && (
                <div className={`subTeamContainer`} style={{ background: themes[currentTheme].bg }}>
                  <h4 className={`teamHeader`}>My Current Teams </h4>
                  <div className={`teamContentHolder`}>
                    {userData.map((data) => (data.user == currSession && (data.myTeams.map(team => (
                      <div key={team.teamId} className={`teamContent`}>
                        <div className={`teamRow`}>
                          <div className={`imgHolder`}>
                            <img src={team.teamImg.src} className={`teamImg`} />
                          </div>
                          <div className={`teamInfoHolder`}>
                            <span className={`teamName`}>{team.teamName}</span>
                            <button className={`teamBtn`}>Leave
                              <FontAwesomeIcon icon='door-open' className={`leaveTeamIcon`} />
                            </button>
                          </div>
                        </div>
                        <div className={`teamMembersContainer`}>

                          <div className={`teamMembersHolder`}>
                            <div className={`teamMembersContentHolder`}>
                              {team.members.map(member => (
                                <div key={member.memberId} className={`teamMembersCard`}>
                                  <div className={`teamMembersImgHolder`}>
                                    <img src={member.img.src} className={`teamMembersImg`} />
                                  </div>
                                  <div className={`teamMembersPerms`}>
                                    <label className={`teamMembersRole`}>{member.role}</label>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )))
                    ))}
                  </div>
                </div>
              )}
              {navSubBtn.mobile.myGroups && (
                <div className={`subGroupContainer`} style={{ background: themes[currentTheme].bg }}>
                  <h4 className={`groupHeader`}>My Current Groups </h4>
                  <div className={`groupContentHolder`}>
                    {userData.map((data) => (data.user == currSession && (data.myGroups.map(group => (
                      <div key={group.groupId} className={`groupContent`}>
                        <div className={`groupRow`}>
                          <div className={`imgHolder`}>
                            <img src={group.groupImg.src} className={`groupImg`} />
                          </div>
                          <div className={`groupInfoHolder`}>
                            <span className={`groupName`}>{group.groupName}</span>
                            <button className={`groupBtn`}>Leave
                              <FontAwesomeIcon icon='door-open' className={`leaveGroupIcon`} />
                            </button>
                          </div>
                        </div>
                        <div className={`groupMembersContainer`}>

                          <div className={`groupMembersHolder`}>
                            <div className={`groupMembersContentHolder`}>
                              {group.members.map(member => (
                                <div key={member.memberId} className={`groupMembersCard`}>
                                  <div className={`groupMembersImgHolder`}>
                                    <img src={member.img.src} className={`groupMembersImg`} />
                                  </div>
                                  <div className={`groupMembersPerms`}>
                                    <label className={`groupMembersRole`}>{member.role}</label>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>
                      </div>
                    )))
                    ))}
                  </div>

                </div>
              )}
              {navSubBtn.mobile.myChats && (
                <div className={`subMyChatsContainer`} style={{ background: themes[currentTheme].bg }}>
                  <h4 className={`myChatsHeader`}>My Chats </h4>
                  <div className={`myChatsContentHolder`}>
                    {userData.map((data) => (data.user == currSession && (data.myNetwork.map(friend => (
                      <div key={friend.id} className={`myChatsContent`}>
                        <div className={`myChatsRow`}>
                          <div className={`imgHolder`}>
                            <img src={friend.img.src} className={`friendImg`} />
                          </div>
                          <div className={`myChatsInfoHolder`}>
                            <span className={`myChatsUser`}>{friend.name}</span>
                            <div className={`flexColBtns`}>
                              {myChatsShortNavBtns.map(nav => (
                                <button key={nav.id} className={`menuOpt-${nav.id} ${friend.online ? 'online' : 'offline'}`} title={nav.btnTitle}>
                                  <FontAwesomeIcon icon={nav.icon} className={`icon-${nav.id}`} />
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className={`myChatsContainer`}>
                          <div className={`myChatsExtraContent`}>
                            {myChatsExtraCard.map(data => (
                              <div key={data.id} className={`myChatsExtraCard`}>
                                <label className={`tag`}>{data.tag}</label>
                                <span className={`name`}>{data.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )))
                    ))}
                  </div>
                </div>
              )}
              {navSubBtn.mobile.myFriends && (
                <div className={`subNetworkContainer`} style={{ background: themes[currentTheme].bg }}>
                  <h4 className={`networkHeader`}>My Network </h4>
                  <div className={`networkContentHolder`}>
                    {userData.map((data) => (data.user == currSession && (data.myNetwork.map(friend => (
                      <div key={friend.id} className={`networkContent`}>
                        <div className={`networkRow`}>
                          <div className={`imgHolder`}>
                            <img src={friend.img.src} className={`friendImg`} />
                          </div>
                          <div className={`networkInfoHolder`}>
                            <span className={`friendName`}>{friend.name}</span>
                            <button className={`networkBtn`}>Block
                              <FontAwesomeIcon icon='ban' className={`blockUserIcon`} />
                            </button>
                          </div>
                        </div>
                        <div className={`networkContainer`}>
                          <div className={`networkPostsContent`}>
                            {friend.posts.map(post => (
                              <div key={post.id} className={`networkExtraCard`}>
                                <div className={`networkBaseCol`}>
                                  <label className={`networkPostDate`}>{post.date}</label>
                                  <label className={`networkPostTime`}>{post.time}</label>
                                </div>
                                <div className={`networkPostContent`}>
                                  {console.log(post.message)}
                                  <p className={`networkPostShort`}>{post.message}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )))
                    ))}
                  </div>

                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/*Top mid*/}
      <nav className={`navTopMid`} style={{ background: themes[currentTheme].navMid }}>
        <ul className={`listHolder`} style={{ boxShadow: themes[currentTheme].shadow }}>
          {topMidNav.map((items, index) => (
            <Link key={index} href={`/pages${items.page == ' ' ? '' : `/${items.page}`}`} className={`home`} style={{ boxShadow: themes[currentTheme].shadow, color: themes[currentTheme].icon }} title={`${items.page == ' ' ? 'Home' : items.page}`}>
              <FontAwesomeIcon icon={items.icon} className={items.iconStyle} />
            </Link>
          ))}

          <div className={`desktopMenu`} style={{ boxShadow: themes[currentTheme].shadow }}>
            <FontAwesomeIcon icon='bars' className={`desktopMenuIcon`} style={{ color: themes[currentTheme].icon }} onClick={() => { navBtnHandler('desktop'); }} title={`Menu`} />
            {navBtn.desktop && (
              <div className={`desktopMenuContainer`} style={{ background: themes[currentTheme].bg }}>
                <ul className={`desktopMenuList`} style={{ color: themes[currentTheme].text }}>
                  {desktopNav.map((navItem, index) => (
                    <li key={index} className={`desktopMenuItem`} style={{ background: themes[currentTheme].gradientLeft }}
                      onClick={navItem.onClick}>
                      <span className={`navItemText`}>{navItem.text}</span>
                      <span className={`iconHolder`} style={{ background: themes[currentTheme].gradientRight }}>
                        <FontAwesomeIcon icon={navItem.icon} className={`icon`} />
                      </span>
                    </li>
                  ))}
                </ul>

                {navSubBtn.desktop.myTeams && (
                  <div className={`subTeamContainer`} style={{ background: themes[currentTheme].bg }}>
                    <h4 className={`teamHeader`}>My Current Teams </h4>
                    <div className={`teamContentHolder`}>
                      {userData.map((data) => (data.user == currSession && (data.myTeams.map(team => (
                        <div key={team.teamId} className={`teamContent`}>
                          <div className={`teamRow`}>
                            <div className={`imgHolder`}>
                              <img src={team.teamImg.src} className={`teamImg`} />
                            </div>
                            <div className={`teamInfoHolder`}>
                              <span className={`teamName`}>{team.teamName}</span>
                              <button className={`teamBtn`}>Leave
                                <FontAwesomeIcon icon='door-open' className={`leaveTeamIcon`} />
                              </button>
                            </div>
                          </div>
                          <div className={`teamMembersContainer`}>

                            <div className={`teamMembersHolder`}>
                              <div className={`teamMembersContentHolder`}>
                                {team.members.map(member => (
                                  <div key={member.memberId} className={`teamMembersCard`}>
                                    <div className={`teamMembersImgHolder`}>
                                      <img src={member.img.src} className={`teamMembersImg`} />
                                    </div>
                                    <div className={`teamMembersPerms`}>
                                      <label className={`teamMembersRole`}>{member.role}</label>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )))
                      ))}
                    </div>
                  </div>
                )}
                {navSubBtn.desktop.myGroups && (
                  <div className={`subGroupContainer`} style={{ background: themes[currentTheme].bg }}>
                    <h4 className={`groupHeader`}>My Current Groups </h4>
                    <div className={`groupContentHolder`}>
                      {userData.map((data) => (data.user == currSession && (data.myGroups.map(group => (
                        <div key={group.groupId} className={`groupContent`}>
                          <div className={`groupRow`}>
                            <div className={`imgHolder`}>
                              <img src={group.groupImg.src} className={`groupImg`} />
                            </div>
                            <div className={`groupInfoHolder`}>
                              <span className={`groupName`}>{group.groupName}</span>
                              <button className={`groupBtn`}>Leave
                                <FontAwesomeIcon icon='door-open' className={`leaveGroupIcon`} />
                              </button>
                            </div>
                          </div>
                          <div className={`groupMembersContainer`}>

                            <div className={`groupMembersHolder`}>
                              <div className={`groupMembersContentHolder`}>
                                {group.members.map(member => (
                                  <div key={member.memberId} className={`groupMembersCard`}>
                                    <div className={`groupMembersImgHolder`}>
                                      <img src={member.img.src} className={`groupMembersImg`} />
                                    </div>
                                    <div className={`groupMembersPerms`}>
                                      <label className={`groupMembersRole`}>{member.role}</label>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                          </div>
                        </div>
                      )))
                      ))}
                    </div>

                  </div>
                )}
                {navSubBtn.desktop.myChats && (
                  <div className={`subMyChatsContainer`} style={{ background: themes[currentTheme].bg }}>
                    <h4 className={`myChatsHeader`}>My Chats </h4>
                    <div className={`myChatsContentHolder`}>
                      {userData.map((data) => (data.user == currSession && (data.myNetwork.map(friend => (
                        <div key={friend.id} className={`myChatsContent`}>
                          <div className={`myChatsRow`}>
                            <div className={`imgHolder`}>
                              <img src={friend.img.src} className={`friendImg`} />
                            </div>
                            <div className={`myChatsInfoHolder`}>
                              <span className={`myChatsUser`}>{friend.name}</span>
                              <div className={`flexColBtns`}>
                                {myChatsShortNavBtns.map(nav => (
                                  <button key={nav.id} className={`menuOpt-${nav.id} ${friend.online ? 'online' : 'offline'}`} title={nav.btnTitle}>
                                    <FontAwesomeIcon icon={nav.icon} className={`icon-${nav.id}`} />
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className={`myChatsContainer`}>
                            <div className={`myChatsExtraContent`}>
                              {myChatsExtraCard.map(data => (
                                <div key={data.id} className={`myChatsExtraCard`}>
                                  <label className={`tag`}>{data.tag}</label>
                                  <span className={`name`}>{data.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )))
                      ))}
                    </div>
                  </div>
                )}
                {navSubBtn.desktop.myFriends && (
                  <div className={`subNetworkContainer`} style={{ background: themes[currentTheme].bg }}>
                    <h4 className={`networkHeader`}>My Network </h4>
                    <div className={`networkContentHolder`}>
                      {userData.map((data) => (data.user == currSession && (data.myNetwork.map(friend => (
                        <div key={friend.id} className={`networkContent`}>
                          <div className={`networkRow`}>
                            <div className={`imgHolder`}>
                              <img src={friend.img.src} className={`friendImg`} />
                            </div>
                            <div className={`networkInfoHolder`}>
                              <span className={`friendName`}>{friend.name}</span>
                              <button className={`networkBtn`}>Block
                                <FontAwesomeIcon icon='ban' className={`blockUserIcon`} />
                              </button>
                            </div>
                          </div>
                          <div className={`networkContainer`}>
                            <div className={`networkPostsContent`}>
                              {friend.posts.map(post => (
                                <div key={post.id} className={`networkExtraCard`}>
                                  <div className={`networkBaseCol`}>
                                    <label className={`networkPostDate`}>{post.date}</label>
                                    <label className={`networkPostTime`}>{post.time}</label>
                                  </div>
                                  <div className={`networkPostContent`}>
                                    {console.log(post.message)}
                                    <p className={`networkPostShort`}>{post.message}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )))
                      ))}
                    </div>

                  </div>
                )}
              </div>
            )}
          </div>

        </ul>
      </nav>
      {/*Top right */}
      <div className={`navTopRight`} style={{ background: themes[currentTheme].navRight }}>
        <div className={`themeContainerBtns`}>

          <div className={`themeSelectorBtn`} style={{ boxShadow: themes[currentTheme].shadow, color: themes[currentTheme].icon }} onClick={() => { navBtnHandler('colorPallet') }} title={`Themes`}>
            <FontAwesomeIcon icon='palette' className={`themeIcon`} />
          </div>

          {navBtn.colorPallet && (
            <div className={`themeSwitchBtnContainer`} style={{ background: themes[currentTheme].colorPallet }}>
              {allThemes.map((c, index) => (
                <button key={index} className={`themeSwitchBtn`} onClick={() => handleThemeChange(c)}></button>
              ))}
            </div>
          )}

        </div>
        <div className={`langContainerBtns`}>

          <div className={`langSelectorBtn`} style={{ boxShadow: themes[currentTheme].shadow, color: themes[currentTheme].icon }}
            onClick={() => { navBtnHandler('langMenu') }} title={`Languages`}>
            <FontAwesomeIcon icon='flag' className={`langIcon`} />
          </div>

          {navBtn.langMenu && (
            <div className={`langSwitchBtnContainer`} style={{ background: themes[currentTheme].langMenu }}>
              {lang.map((img, index) => (
                <button key={index} className={`langSwitchBtn`} onClick={() => { }}>
                  <img src={img.src} className={`langImg`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={`createOptionsBtns`}>

          <div className={`createOptionsBtn`} style={{ boxShadow: themes[currentTheme].shadow, color: themes[currentTheme].icon }}
            onClick={() => { navBtnHandler('createBtn') }} title={`Create`}>
            <FontAwesomeIcon icon='plus' className={`createIcon`} />
          </div>

          {navBtn.createBtn && (<>
            <div className={`createContainer`} style={{ background: themes[currentTheme].createNavBtn }}>
              <ul className={`createMenuList`}>
                {createOpts.map((create, index) => (
                  <li key={index} className={`createMenuItem`} style={{ background: themes[currentTheme].gradientLeft }} onClick={create.onClick}>
                    <span className={`iconHolder iconHolder-${index}`}>
                      <FontAwesomeIcon icon={create.icon} className={`icon-${index}`} />
                    </span>
                    <span className={`navItemText`}>
                      {create.text !== 'Post' ? `Create ${create.text} Chat` : `${create.text}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {navSubBtn.create.teamChat && (
              <div className={`createSubContainer`}>
                <h2 className={``}>TeamChat</h2>
                <label>
                  <span className={``}> Name</span>
                  <input type="text" className={``} placeholder="Enter the name..." ref={teamChatInputRef} onChange={teamChatInputHandler} value={teamChatInputValue} />
                </label>

                <label className={``}>Availability
                  <span className={``}>Availabile</span>
                </label>
                <button className={``}> Create Team Chat</button>
              </div>
            )}
            {navSubBtn.create.friendsChat && (
              <div className={`createSubContainer`}>
                <h2 className={``}>Friends Chat
                </h2>
                <label>
                  <span className={``}>Name</span>
                  <input type="text" className={``} placeholder="Enter the name..." ref={friendsChatInputRef} onChange={friendsChatInputHandler} value={friendsChatInputValue} />
                </label>
                <label className={``}>Availability <span className={``}>Availabile</span>
                </label>
                <button className={``}> Create Friends Chat</button>
              </div>
            )}
            {navSubBtn.create.privateChat && (
              <div className={`createSubContainer`}>
                <h2 className={``}>Private Chat</h2>
                <label>
                  <span className={``}>Name</span>
                  <input type="text" className={``} placeholder="Enter the name..." ref={privateChatInputRef} onChange={privateChatInputHandler}
                    value={privateChatInputValue} />
                </label>
                <label className={``}>Note
                  <span className={``}>Temprory chat after closed messages are deleted</span>
                </label>
                <button className={``}> Create Private Chat</button>
              </div>
            )}
            {navSubBtn.create.post && (
              <div className={`createSubContainer`}>
                <h2 className={``}>Post </h2>
                <label>
                  <span className={``}>Message</span>
                  <input type="text" className={``} placeholder="Enter your message.." ref={postInputRef} onChange={postInputHandler} value={postInputValue} />
                </label>
                <label className={``}>Post Img</label>

                <span className={``}>
                  <span className={``}> Upload <input type='file' className={``} onChange={(event) => { setUploadPostImg(event.target.files[0]) }} /> </span>
                  <button onClick={handlePostCreateImgPreview} className={``}>Preview IMG</button>
                  {postImgPreview &&
                    <div className={``}>
                      <h2 className={``}>Preview <FontAwesomeIcon icon='close' onClick={handlePostCreateImgPreviewClose} className={styles3.IconClose} /></h2>
                      <img className={``} src={uploadPostImg === null ? "" : URL.createObjectURL(uploadPostImg)} />
                    </div>}
                </span>

                <button className={``}> Post</button>
              </div>
            )}
          </>)}
        </div>

        <div className={`notificationShowBtn`} style={{ boxShadow: themes[currentTheme].shadow, color: themes[currentTheme].icon }}
          onClick={() => { navBtnHandler('notification') }} title={`Notifications`}>
          <FontAwesomeIcon icon='far fa-bell' className={`notifyIcon`} />

          {navBtn.notification && (
            <div className={`notifyContainer`} style={{ background: themes[currentTheme].notification }}>
              <h2 className={``}>
                Notifications
                <FontAwesomeIcon icon='close' className={``} onClick={() => { navBtnHandler('notification') }} />
              </h2>
              <div className={``}>
                <div className={``}> <img src={""} alt="" className={``} /> <span className={``}><FontAwesomeIcon icon='circle-user' className={``} /></span> </div>
                <p className={``}>
                  <span className={``}> <b> Name </b> <u>Desc</u> <b>Group</b> </span>
                  <span className={``}> <u className={``}>2023.01.01</u> Posted at <i className={``}>18:50 </i></span>
                  <span className={``}></span>
                </p>
              </div>
            </div>
          )}
        </div>

        <Link href={`/pages/ProfileSettings`} className={`settingsBtn`} style={{ boxShadow: themes[currentTheme].shadow, color: themes[currentTheme].icon }} title={`Settings`}>
          <FontAwesomeIcon icon='cog' className={`settingsIcon`} />
        </Link>

        <Link href={`/pages/Profile`} className={`profileBtn`} style={{ boxShadow: themes[currentTheme].shadow, color: themes[currentTheme].icon }} title={`Profile`}>
          <FontAwesomeIcon icon='user-circle' className={`profileIcon`} />
        </Link>

      </div>

      {navBtn.search && (
        <div className={`searchContainer`}>

          <input type='text' placeholder='Search...' ref={inputRef} value={inputValue} onChange={searchFilter} />
          <span className={`searchIconHolder`}>
            <FontAwesomeIcon icon='close' className={`closeIcon`} onClick={() => { navBtnHandler('search') }} />
          </span>

          {inputValue.length < 1 ? '' :
            <div className={`searchContent`}>
              {filterData.map(item => (<label key={item.id} className={`searchItem`}> {item.name}</label>))}
            </div>
          }
        </div>
      )}
    </div>
  )
}
export default Nav