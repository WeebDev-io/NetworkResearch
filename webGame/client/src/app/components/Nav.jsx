'use client';
/* eslint-disable react/prop-types */
import React, { useState,useRef,useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/slices/themesSlice';
import { FontAwesomeIcon } from '../Icons';
import PropTypes from 'prop-types';
import * as THREE from 'three';
const Nav = () => {
  
  const dispatch = useDispatch();
  const currentTheme = useSelector(state => { return state.rootReducer.themes.currentTheme; })
  const themes = useSelector(state => { return state.rootReducer.themes.themes } );
  const handleThemeChange = (theme) => { dispatch(setTheme(theme)); };

  const userSearch = [{id:1,name:'asaassda'},{id:2,name:'adadada'},{id:3,name:'1131qq'},{id:4,name:'41414'}];
  
  const [search,setSearch] = useState(false);
  const [currTeams,setCurrTeams] = useState(false);
  const [teamChats,setTeamChats] = useState(false);
  const [myChats,setMyChats] = useState(false);
  const [tempChat,setTempChat] = useState(false);
  const handleCurrentTeams = () => {setCurrTeams(!currTeams);setMyChats(false)}
  const handleMyChats = () => {setMyChats(!myChats);setCurrTeams(false)}
  function handleSearch(){ if(search === false){ setSearch(!search);setCreateBtn(false);setNotificationBtn(false)} }
  function handleClose(){ if(search === true){ setSearch(!search);setInputValue('')} }
  const [createBtn,setCreateBtn] = useState(false);
  function handleCreate(){ if(createBtn === false){ setCreateBtn(!createBtn);setSearch(false);setNotificationBtn(false)} }
  function handleCreateClose(){ if(createBtn === true){ setCreateBtn(!createBtn)} }
  const [notificationsBtn,setNotificationBtn] = useState(false);
  function handleNotifications(){ if(notificationsBtn === false){ setNotificationBtn(!notificationsBtn); setCreateBtn(false);setSearch(false) } } 
  function handleNotificationsClose(){ if(notificationsBtn === true){ setNotificationBtn(!notificationsBtn) } }
  const [createTeamChat,setCreateTeamChat] = useState(false);
  const [createFriendChat,setCreateFriendChat] = useState(false);
  const [createPrivateChat,setCreatePrivateChat] = useState(false);
  const [createPostChat,setCreatePostChat] = useState(false);
  function handleCreateTeamChat(){
    if(createTeamChat === false){  setCreateTeamChat(!createTeamChat); setCreateFriendChat(false); setCreatePrivateChat(false); setCreatePostChat(false); }
  }
  function handleCreateFriendsChat(){
    if(createFriendChat === false){  setCreateFriendChat(!createFriendChat); setCreateTeamChat(false); setCreatePrivateChat(false); setCreatePostChat(false);}
  }
  function handleCreatePrivateChat(){
    if(createPrivateChat === false){  setCreatePrivateChat(!createPrivateChat); setCreateFriendChat(false); setCreateTeamChat(false); setCreatePostChat(false);}
  }
  function handleCreatePost(){
    if(createPostChat === false){ setCreatePostChat(!createPostChat); setCreatePrivateChat(false); setCreateFriendChat(false); setCreateTeamChat(false); }
  }
  function handleCreateTeamChatClose(){ if(createTeamChat === true){ setCreateTeamChat(!createTeamChat);teamChatInputValue('')} }
  function handleCreateFriendsChatClose(){if(createFriendChat === true){ setCreateFriendChat(!createFriendChat);friendsChatInputHandler(''); }
  }
  function handleCreatePrivateChatClose(){ if(createPrivateChat === true){ setCreatePrivateChat(!createPrivateChat);privateChatInputHandler('')}
  }
  function handleCreatePostClose(){if(createPostChat === true){ setCreatePostChat(!createPostChat);postInputHandler('')}}
  const [inputValue,setInputValue] = useState('');
  function searchFilter(e){ setInputValue(e.target.value); }
  const inputRef = useRef();
  const filterData = userSearch.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()));

  const [teamChatInputValue,setTeamChatInputValue] = useState('');
  function teamChatInputHandler(e){ setTeamChatInputValue(e.target.value);}
  const teamChatInputRef = useRef();

  const [friendsChatInputValue,setFriendsChatInputValue] = useState('');
  function friendsChatInputHandler(e){ setFriendsChatInputValue(e.target.value);}
  const friendsChatInputRef = useRef();

  const [privateChatInputValue,setPrivateChatInputValue] = useState('');
  function privateChatInputHandler(e){ setPrivateChatInputValue(e.target.value);}
  const privateChatInputRef = useRef();

  const [postInputValue,setPostInputValue] = useState('');
  function postInputHandler(e){ setPostInputValue(e.target.value);}
  const postInputRef = useRef();
  const [postImgPreview,setPostImgPreview] = useState(false);
  const [uploadPostImg,setUploadPostImg] = useState(null);
  function handlePostCreateImgPreview(){  if(postImgPreview === false){ setPostImgPreview(!postImgPreview) } }
  function handlePostCreateImgPreviewClose(){ if(postImgPreview === true){setPostImgPreview(!postImgPreview) } }
  const [shortNav,setShortNav] = useState(false);
  const [showPalette,setShowPalette] = useState(false);
  const login = false;
  return (
    <div className={`w-screen flex flex-row h-[65px]`}>

      <div className={`flex flex-row py-3 w-[50%] md:w-auto px-2 relative ${themes[currentTheme].text} ${themes[currentTheme].GradientLeft}`}>
        <Link href={`/`}> 
          <div className={`${themes[currentTheme].menuCircle} shadow-[0_0_2px_1px_#00000060] w-[40px] h-[40px] leading-[40px] text-center ml-1 rounded-full`}>
            <FontAwesomeIcon icon='hand-fist' className={`text-2xl relative top-1 duration-200 hover:ease-out ease-in ${themes[currentTheme].textDim} hover:${themes[currentTheme].text} `}/></div> 
        </Link>

        <div className={`${themes[currentTheme].menuCircle} shadow-[0_0_2px_1px_#00000060] w-[40px] h-[40px] leading-[40px] relative left-1 mr-3 lg:w-[250px] 2xl:max-w-[260px] lg:text-left lg:px-[10px] text-center mx-1 rounded-3xl`} onClick={handleSearch}>
          <FontAwesomeIcon icon='search' className={`cursor-pointer ${themes[currentTheme].textDim} hover:${themes[currentTheme].text} duration-200 hover:ease-out ease-in`}/> 
        </div>

        <div className={`${themes[currentTheme].menuCircle} shadow-[0_0_2px_1px_#00000060] w-[40px] h-[40px] leading-[40px] text-center xs:block md:hidden rounded-full`}>
          <FontAwesomeIcon icon='bars' className={`relative text-xl top-[2px] cursor-pointer ${themes[currentTheme].textDim} hover: ${themes[currentTheme].text} duration-200 hover:ease-out ease-in`} onClick={()=>{setShortNav(!shortNav)}}/>
          
        {shortNav && ( <div className={`absolute bg-gradient-to-r from-slate-700 to-slate-800 w-[140px] h-[185px] top-[60px] z-20 rounded-lg text-slate-300 border-[1px] border-slate-500 shadow-[0_0_2px_2px] shadow-black/40`}>
          <ul className={`w-[95%] h-[175px] relative top-1 mx-auto rounded-md`}>
            <li className={`h-[30px] leading-[30px] mb-1 relative top-1 w-[95%] mx-auto text-sm border-l-[1px] border-slate-600/0 bg-slate-900/0 cursor-pointer hover:bg-slate-900 hover:border-slate-200/50 hover:text-slate-200 duration-200 text-right pr-3`} onClick={handleCurrentTeams}>
            <FontAwesomeIcon icon='people-group' className='absolute left-1 top-2'/>Current Teams</li>
            <li className={`h-[30px] leading-[30px] mb-1 relative top-1 w-[95%] mx-auto text-sm border-l-[1px] border-slate-600/0 bg-slate-900/0 cursor-pointer hover:bg-slate-900 hover:border-slate-200/50 hover:text-slate-200 duration-200 text-right pr-3`}>
              <span className='absolute left-1 top-1'>
                <FontAwesomeIcon icon='message' className='text-xl text-slate-500'/>
                <FontAwesomeIcon icon='globe' className='relative text-slate-300 z-20 right-[6px] top-[2px] text-sm'/>
              </span>
            Global Chat</li>
            <li className={`h-[30px] leading-[30px] mb-1 relative top-1 w-[95%] mx-auto text-sm border-l-[1px] border-slate-600/0 bg-slate-900/0 cursor-pointer hover:bg-slate-900 hover:border-slate-200/50 hover:text-slate-200 duration-200 text-right pr-3`}>
              <span className='absolute left-1 top-1'>
                <FontAwesomeIcon icon='message' className='text-lg text-slate-500'/>
                <FontAwesomeIcon icon='people-group' className='relative text-slate-300 z-20 right-[6px] top-[2px] text-md'/>
              </span>
            Team Chat</li>
            <li className={`h-[30px] leading-[30px] mb-1 relative top-1 w-[95%] mx-auto text-sm border-l-[1px] border-slate-600/0 bg-slate-900/0 cursor-pointer hover:bg-slate-900 hover:border-slate-200/50 hover:text-slate-200 duration-200 text-right pr-3`} onClick={()=>{handleMyChats()}}>
              <span className='absolute left-1 top-1'>
                <FontAwesomeIcon icon='message' className='text-lg text-slate-500'/>
                <FontAwesomeIcon icon='user' className='relative text-slate-300 z-20 left-[-4px] text-[10px]'/>
              </span>
              My Chats
            </li>
            <li className={`h-[30px] leading-[30px] mb-1 relative top-1 w-[95%] mx-auto text-sm border-l-[1px] border-slate-600/0 bg-slate-900/0 cursor-pointer hover:bg-slate-900 hover:border-slate-200/50 hover:text-slate-200 duration-200 text-right pr-3`}>
              <span className='absolute left-1 top-1'>
                <FontAwesomeIcon icon='message' className='text-lg text-slate-500'/>
                <FontAwesomeIcon icon='exclamation' className='relative text-red-600 z-20 left-[3px] text-lg top-[-3px] rotate-[20deg]'/>
              </span>
              Temp Chats</li>
          </ul>
          {currTeams && ( <div className='w-[410px] sm:w-[610px] md:w-[750px] absolute h-[400px] bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-lg border-[1px] border-slate-500 top-[190px] -left-[88px] md:left-[-530px]'>
            <h2 className='h-[40px] leading-[40px]'>My Current Teams
              <FontAwesomeIcon icon='close' className='absolute right-2 top-3 cursor-pointer hover:text-red-600 duration-200' onClick={handleCurrentTeams}/>
            </h2>
            <div className="w-[98%] h-[350px] mx-auto overflow-y-scroll overflow-x-hidden grid grid-cols-1 grid-flow-row gap-2 auto-rows-max">
              {currentTeams.map((team) => ( <div key={team.id} className='w-[95%] ml-1 rounded-lg h-[30px] leading-[30px] shadow-[0_0_3px_1px] shadow-black/50'>
                  <span className='inline-block w-[70%] h-[30px] leading-[30px] bg-slate-600 rounded-tl-md rounded-bl-md'>{team.team}</span>
                  <span className='inline-block w-[30%] h-[30px] leading-[30px] bg-slate-700 text-sm cursor-pointer hover:bg-slate-900 duration-300 rounded-tr-md rounded-br-md'>Leave</span>
                </div>
              ))}
            </div>

          </div>
          )}
      {myChats && (
          <div className='w-[410px] sm:w-[610px] md:w-[750px] absolute h-[400px] bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-lg border-[1px] border-slate-500 top-[190px] -left-[88px] md:left-[-530px]'>
              <h2 className='h-[40px] leading-[40px]'>My Chats<FontAwesomeIcon icon='close' className='absolute right-2 top-3 cursor-pointer hover:text-red-600 duration-200'
              onClick={handleMyChats}/></h2>
              <div className="w-[98%] h-[350px] mx-auto overflow-y-scroll overflow-x-hidden grid grid-cols-4 grid-flow-row gap-1 auto-rows-max relative py-3">
              {chatsWithUsers.map((chats) => (
              <div key={chats.id} className=' mx-auto rounded-lg h-[120px] w-[98%] shadow-[0_0_3px_1px] shadow-black/50'>
              <img className='w-[60px] h-[60px] bg-red-200 mx-auto'/>
              <span className='block w-[100%] h-[30px] leading-[30px] bg-slate-600'>{chats.user}</span>

              <label className='relative w-[120px] block'>
                <span className='block w-[15px] h-[30px] leading-[30px] cursor-pointer relative text-sm top-2'>
                  <FontAwesomeIcon icon="eye" className='absolute left-[6px]'/>
                </span>
                <span className='block w-[15px] h-[30px] leading-[30px] cursor-pointer relative text-sm top-2'>
                  <FontAwesomeIcon icon="trash" className='absolute left-[30px]'/> 
                </span>
                <span className='block w-[15px] h-[30px] leading-[30px] cursor-pointer relative text-sm top-2'>
                  <FontAwesomeIcon icon="ban" className='absolute right-[30px]'/>
                </span>
                <span className='block w-[15px] h-[30px] leading-[30px] cursor-pointer relative text-sm top-2'>
                  <FontAwesomeIcon icon="close" className='absolute right-[6px]'/>
                </span>
              </label>

              </div>
              ))}
              </div>
          </div>
          )}
        </div>
        )}

        </div>
      </div>

      <nav className={`hidden md:flex md:flex-row w-full py-3 ${themes[currentTheme].GradientMiddle}`}>
        <ul className={`flex flex-row mx-auto`}>

          <Link href="/pages" className={`w-[40px] h-[40px] text-center leading-[40px] rounded-full mx-1 bg-gradient-to-t ${themes[currentTheme].menuCircle} shadow-[0_0_3px_1px_#000000]`}>
            <i className={`${themes[currentTheme].textDim} rounded-lg relative hover:${themes[currentTheme].text} duration-200 hover:ease-out ease-in`}>
              <FontAwesomeIcon icon='house' className="text-xl relative top-[2px] left-[1px]"/>
            </i>
          </Link>

          <Link href="/pages/GlobalChat" className={`w-[40px] h-[40px] text-center leading-[40px] rounded-full mx-1.5 ${themes[currentTheme].menuCircle} shadow-[0_0_3px_1px_#000000]`}>
            <i className={`${themes[currentTheme].textDim} rounded-lg relative hover:${themes[currentTheme].text} duration-200 hover:ease-out ease-in`}>
              <FontAwesomeIcon icon='comments' className="text-xl relative top-[2px] left-[1px]"/>
            </i>
          </Link>

          <Link href="/pages/Posts" className={`w-[40px] h-[40px] text-center leading-[40px] rounded-full mx-1.5 ${themes[currentTheme].menuCircle} shadow-[0_0_3px_1px_#000000]`}>
            <i className={`${themes[currentTheme].textDim} rounded-lg relative hover:${themes[currentTheme].text} duration-200 hover:ease-out ease-in`}>
              <FontAwesomeIcon icon='comment-alt' className="text-xl relative top-[2px] left-[1px]"/>
            </i>
          </Link>

          <Link href="/pages/News" className={`w-[40px] h-[40px] text-center leading-[40px] rounded-full mx-1.5 ${themes[currentTheme].menuCircle} shadow-[0_0_3px_1px_#000000]`}>
            <i className={`${themes[currentTheme].textDim} rounded-lg relative hover:${themes[currentTheme].text} duration-200 hover:ease-out ease-in`}>
              <FontAwesomeIcon icon='newspaper' className="text-xl relative top-[2px]"/>
            </i>
          </Link>

          <Link href="/pages/Updates" className={`w-[40px] h-[40px] text-center leading-[40px] rounded-full mx-1.5 ${themes[currentTheme].menuCircle} shadow-[0_0_3px_1px_#000000]`}>
            <i className={`${themes[currentTheme].textDim} rounded-lg relative hover:${themes[currentTheme].text} duration-200 hover:ease-out ease-in`}>
              <FontAwesomeIcon icon='folder' className="text-xl relative top-[2px]"/>
            </i>
          </Link>

          <li className={`w-[40px] h-[40px] text-center leading-[40px] rounded-full mx-1.5 ${themes[currentTheme].menuCircle} shadow-[0_0_3px_1px_#000000] cursor-pointer`}>
            <i className={`${themes[currentTheme].textDim} rounded-lg relative hover:${themes[currentTheme].text} duration-200 hover:ease-out ease-in`}>
              <FontAwesomeIcon icon='bars' className="text-xl relative top-[2px] left-[1px]" onClick={()=>{setShortNav(!shortNav)}}/>
            </i>
          {shortNav && ( <div className={`absolute bg-gradient-to-r from-slate-700 to-slate-800 w-[140px] h-[185px] top-[60px] z-20 rounded-lg text-slate-300 border-[1px] border-slate-500 shadow-[0_0_2px_2px] shadow-black/40`}>
          <ul className={`w-[95%] h-[175px] relative top-1 mx-auto rounded-md`}>
            <li className={`h-[30px] leading-[30px] mb-1 relative top-1 w-[95%] mx-auto text-sm border-l-[1px] border-slate-600/0 bg-slate-900/0 cursor-pointer hover:bg-slate-900 hover:border-slate-200/50 hover:text-slate-200 duration-200 text-right pr-3`} onClick={handleCurrentTeams}>
            <FontAwesomeIcon icon='people-group' className='absolute left-1 top-2'/>Current Teams</li>
            <li className={`h-[30px] leading-[30px] mb-1 relative top-1 w-[95%] mx-auto text-sm border-l-[1px] border-slate-600/0 bg-slate-900/0 cursor-pointer hover:bg-slate-900 hover:border-slate-200/50 hover:text-slate-200 duration-200 text-right pr-3`}>
              <span className='absolute left-1 top-1'>
                <FontAwesomeIcon icon='message' className='text-xl text-slate-500'/>
                <FontAwesomeIcon icon='globe' className='relative text-slate-300 z-20 right-[6px] top-[2px] text-sm'/>
              </span>
            Global Chat</li>
            <li className={`h-[30px] leading-[30px] mb-1 relative top-1 w-[95%] mx-auto text-sm border-l-[1px] border-slate-600/0 bg-slate-900/0 cursor-pointer hover:bg-slate-900 hover:border-slate-200/50 hover:text-slate-200 duration-200 text-right pr-3`}>
              <span className='absolute left-1 top-1'>
                <FontAwesomeIcon icon='message' className='text-lg text-slate-500'/>
                <FontAwesomeIcon icon='people-group' className='relative text-slate-300 z-20 right-[6px] top-[2px] text-md'/>
              </span>
            Team Chat</li>
            <li className={`h-[30px] leading-[30px] mb-1 relative top-1 w-[95%] mx-auto text-sm border-l-[1px] border-slate-600/0 bg-slate-900/0 cursor-pointer hover:bg-slate-900 hover:border-slate-200/50 hover:text-slate-200 duration-200 text-right pr-3`} onClick={handleMyChats}>
              <span className='absolute left-1 top-1'>
                <FontAwesomeIcon icon='message' className='text-lg text-slate-500'/>
                <FontAwesomeIcon icon='user' className='relative text-slate-300 z-20 left-[-4px] text-[10px]'/>
              </span>
              My Chats
            </li>
            <li className={`h-[30px] leading-[30px] mb-1 relative top-1 w-[95%] mx-auto text-sm border-l-[1px] border-slate-600/0 bg-slate-900/0 cursor-pointer hover:bg-slate-900 hover:border-slate-200/50 hover:text-slate-200 duration-200 text-right pr-3`}>
              <span className='absolute left-1 top-1'>
                <FontAwesomeIcon icon='message' className='text-lg text-slate-500'/>
                <FontAwesomeIcon icon='exclamation' className='relative text-red-600 z-20 left-[3px] text-lg top-[-3px] rotate-[20deg]'/>
              </span>
              Temp Chats</li>
          </ul>
          {currTeams && ( <div className='w-[410px] sm:w-[610px] md:w-[750px] absolute h-[400px] bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-lg border-[1px] border-slate-500 top-[190px] -left-[88px] md:left-[-530px]'>
            <h2 className='h-[40px] leading-[40px]'>My Current Teams
              <FontAwesomeIcon icon='close' className='absolute right-2 top-3 cursor-pointer hover:text-red-600 duration-200' onClick={handleCurrentTeams}/>
            </h2>
            <div className="w-[98%] h-[350px] mx-auto overflow-y-scroll overflow-x-hidden grid grid-cols-1 grid-flow-row gap-2 auto-rows-max">
              {currentTeams.map((team) => ( <div key={team.id} className='w-[95%] ml-1 rounded-lg h-[30px] leading-[30px] shadow-[0_0_3px_1px] shadow-black/50'>
                  <span className='inline-block w-[70%] h-[30px] leading-[30px] bg-slate-600 rounded-tl-md rounded-bl-md'>{team.team}</span>
                  <span className='inline-block w-[30%] h-[30px] leading-[30px] bg-slate-700 text-sm cursor-pointer hover:bg-slate-900 duration-300 rounded-tr-md rounded-br-md'>Leave</span>
                </div>
              ))}
            </div>

          </div>
          )}
      {myChats && (
          <div className='w-[410px] sm:w-[610px] md:w-[750px] absolute h-[400px] bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-lg border-[1px] border-slate-500 top-[190px] -left-[88px] md:left-[-530px]'>
              <h2 className='h-[40px] leading-[40px]'>My Chats<FontAwesomeIcon icon='close' className='absolute right-2 top-3 cursor-pointer hover:text-red-600 duration-200'
              onClick={handleMyChats}/></h2>
              <div className="w-[98%] h-[350px] mx-auto overflow-y-scroll overflow-x-hidden grid grid-cols-4 grid-flow-row gap-1 auto-rows-max relative py-3">
              {chatsWithUsers.map((chats) => (
              <div key={chats.id} className=' mx-auto rounded-lg h-[120px] w-[98%] shadow-[0_0_3px_1px] shadow-black/50'>
              <img className='w-[60px] h-[60px] bg-red-200 mx-auto'/>
              <span className='block w-[100%] h-[30px] leading-[30px] bg-slate-600'>{chats.user}</span>

              <label className='relative w-[120px] block'>
                <span className='block w-[15px] h-[30px] leading-[30px] cursor-pointer relative text-sm top-2'>
                  <FontAwesomeIcon icon="eye" className='absolute left-[6px]'/>
                </span>
                <span className='block w-[15px] h-[30px] leading-[30px] cursor-pointer relative text-sm top-2'>
                  <FontAwesomeIcon icon="trash" className='absolute left-[30px]'/> 
                </span>
                <span className='block w-[15px] h-[30px] leading-[30px] cursor-pointer relative text-sm top-2'>
                  <FontAwesomeIcon icon="ban" className='absolute right-[30px]'/>
                </span>
                <span className='block w-[15px] h-[30px] leading-[30px] cursor-pointer relative text-sm top-2'>
                  <FontAwesomeIcon icon="close" className='absolute right-[6px]'/>
                </span>
              </label>

              </div>
              ))}
              </div>

          </div>
          )}
        </div>
        )}
          </li>
        </ul>
      </nav>

      <div className={`flex flex-row w-[50%] md:w-auto relative ${themes[currentTheme].GradientRight}`}>
        <ul className={`flex mx-auto absolute right-0 md:relative py-3`}>
          <div className={`w-[42px] ${showPalette ? 'h-[336px] duration-200 ease-in':'h-[10px] duration-300 ease-out'} absolute -left-10`}>
            <li className={`w-[40px] h-[40px] text-center leading-[46px] -left-[7px] relative rounded-full ${themes[currentTheme].menuCircle} cursor-pointer shadow-[0_0_3px_1px_#000000] last-of-type:mr-2 first-of-type:mr-2 z-20`}>
              <i className={`${themes[currentTheme].textDim} rounded-lg relative hover:${themes[currentTheme].text} duration-200 hover:ease-out ease-in`}>
                <FontAwesomeIcon icon='palette' className="text-2xl relative top-[1px]" onClick={()=>{setShowPalette(!showPalette)}}/>
              </i>
            </li>
            {showPalette && (
              <div className={`${themes[currentTheme].ThemeNav} absolute rounded-3xl h-full w-full flex flex-col mx-auto left-[-7px] -top-[1.5px] shadow-[0_0_3px_2px_#00000060] z-10`}>
                <button className={`${themes.Dark.bg} w-[25px] h-[25px] mx-auto rounded-full relative border-[2px] border-white/20 top-[50px]`} onClick={() => handleThemeChange('Dark')}></button>
                <button className={`${themes.Light.bg} w-[25px] h-[25px] mx-auto rounded-full relative border-[2px] border-white/20 top-[56px]`} onClick={() => handleThemeChange('Light')}></button>
                <button className={`${themes.Christmas.bg} w-[25px] h-[25px] mx-auto rounded-full relative border-[2px] border-white/20 top-[62px]`} onClick={() => handleThemeChange('Christmas')}></button>
                <button className={`${themes.Halloween.bg} w-[25px] h-[25px] mx-auto rounded-full relative border-[2px] border-white/20 top-[68px]`} onClick={() => handleThemeChange('Halloween')}></button>
                <button className={`${themes.Easter.bg} w-[25px] h-[25px] mx-auto rounded-full relative border-[2px] border-white/20 top-[74px]`} onClick={() => handleThemeChange('Easter')}></button>
                <button className={`${themes.Winter.bg} w-[25px] h-[25px] mx-auto rounded-full relative border-[2px] border-white/20 top-[80px]`} onClick={() => handleThemeChange('Winter')}></button>
                <button className={`${themes.Spring.bg} w-[25px] h-[25px] mx-auto rounded-full relative border-[2px] border-white/20 top-[86px]`} onClick={() => handleThemeChange('Spring')}></button>
                <button className={`${themes.Summer.bg} w-[25px] h-[25px] mx-auto rounded-full relative border-[2px] border-white/20 top-[92px]`} onClick={() => handleThemeChange('Summer')}></button>
                <button className={`${themes.Autumn.bg} w-[25px] h-[25px] mx-auto rounded-full relative border-[2px] border-white/20 top-[98px]`} onClick={() => handleThemeChange('Autumn')}></button>
                </div>
            )}
          </div>
          <li className={`w-[40px] h-[40px] text-center leading-[46px] relative rounded-full ${themes[currentTheme].menuCircle} cursor-pointer shadow-[0_0_3px_1px_#000000] last-of-type:mr-2 first-of-type:mr-2`} onClick={handleCreate}> 
            <i className={`${themes[currentTheme].textDim} rounded-lg relative hover:${themes[currentTheme].text} duration-200 hover:ease-out ease-in`}>
              <FontAwesomeIcon icon='plus' className="text-2xl relative top-[1px]"/>
            </i>
          </li>
          <li className={`w-[40px] h-[40px] text-center leading-[46px] relative rounded-full ${themes[currentTheme].menuCircle} cursor-pointer shadow-[0_0_3px_1px_#000000] last-of-type:mr-2 first-of-type:mr-2`} onClick={handleNotifications}>
            <i className={`${themes[currentTheme].text} rounded-lg relative hover:${themes[currentTheme].textDim} duration-200 hover:ease-out ease-in`}>
              <FontAwesomeIcon icon='far fa-bell' className="text-2xl relative top-[1px]"/>
            </i>
          </li>
          <Link href={`/pages/ProfileSettings`} className={`w-[40px] h-[40px] text-center leading-[46px] relative rounded-full ${themes[currentTheme].menuCircle} cursor-pointer shadow-[0_0_3px_1px_#000000] last-of-type:mr-2 first-of-type:mr-2`}>
            <i className={`${themes[currentTheme].text} rounded-lg relative hover:${themes[currentTheme].textDim} duration-200 hover:ease-out ease-in`}>
              <FontAwesomeIcon icon='user-cog' className="text-xl relative -top-[2px] left-[2px]"/>
            </i>
          </Link>

          <Link href={`/pages/Profile`} className={`w-[40px] h-[40px] text-center leading-[46px] relative rounded-full ${themes[currentTheme].menuCircle} to-slate-600 cursor-pointer shadow-[0_0_3px_1px_#000000] last-of-type:mr-2 first-of-type:mr-2`}>
            <i className={`${themes[currentTheme].text} rounded-lg relative hover:${themes[currentTheme].textDim} duration-200 hover:ease-out ease-in`}>
              <FontAwesomeIcon icon='user-circle' className="text-2xl relative"/>
            </i>
          </Link>

        </ul>
      </div>

      {/*Buttons*/}
      {search && <div className={`absolute w-[250px] h-[50px] ${themes[currentTheme].bg} rounded-tl-2xl rounded-tr-2xl top-14 left-12 z-20 ${themes[currentTheme].text} flex flex-row`}>
        <input type='text' className={`w-[200px] h-[30px] outline-none relative top-[10px] left-2 ${themes[currentTheme].inputBG} px-2 text-sm border-b-slate-300 border-b-[1px] rounded-xl placeholder:${themes[currentTheme].text}`} placeholder='Search...' ref={inputRef} value={inputValue} onChange={searchFilter}/> 
        <FontAwesomeIcon icon='close' className={`relative left-[22px] top-[18px] cursor-pointer hover:text-red-500 duration-200`} onClick={handleClose}/>
        {inputValue.length < 1 ? <div className={`h-[40px] w-[250px] ${themes[currentTheme].bg} absolute top-[50px] rounded-bl-2xl rounded-br-2xl`}> 
          <p className={`text-sm pl-5 ${themes[currentTheme].text} leading-[30px]`}>Search result will be shown here</p></div>: 
          <div className={`min-h-[100px] max-h-[600px] w-[250px] ${themes[currentTheme].bg} absolute top-[50px] overflow-x-hidden scrollbarWithNone rounded-bl-2xl rounded-br-2xl`}>{filterData.map(item => ( <span key={item.id} className={`inline-block relative left-2 pl-3 overflow-x-hidden w-[230px] border-l-[1px] border-slate-600 ${themes[currentTheme].bg}/80 pb-1 font-sans`}> {item.name}</span> ))} </div>}
      </div>}

      {createBtn && <div className={`w-[150px] h-[190px] absolute top-14 right-10 bg-slate-900 z-20 rounded-2xl shadow-[0_0_5px_1px_#000000cc]`}>
      <h2 className={`h-[40px] relative leading-[40px] text-left pl-4 mb-2 text-md text-slate-300`}>Create 
        <FontAwesomeIcon icon='close' className={`absolute right-3 top-3 cursor-pointer hover:text-red-500 duration-200`} onClick={handleCreateClose}/>
      </h2>
        <ul className={`text-slate-300 text-left text-sm w-[140px] mx-[6px] inline-block relative`}>
        {createBtn ? (<>
          <li className={`w-full relative border-l-[1px] pl-9 border-slate-900 h-[30px] leading-[30px] hover:border-slate-400 cursor-pointer hover:bg-slate-800 duration-200 ease-in hover:ease-out`} onClick={handleCreateTeamChat}> 
          <FontAwesomeIcon icon="users-between-lines" className={`absolute left-2 top-2`}/> Team Chat 
          </li>
          <li className={`w-full relative border-l-[1px] pl-9 border-slate-900 h-[30px] leading-[30px] hover:border-slate-400 cursor-pointer hover:bg-slate-800 duration-200 ease-in hover:ease-out`} onClick={handleCreateFriendsChat}>
            <FontAwesomeIcon icon="users" className={`absolute left-2 top-2`}/>Friends Chat
          </li>
          <li className={`w-full relative border-l-[1px] pl-9 border-slate-900 h-[30px] leading-[30px] hover:border-slate-400 cursor-pointer hover:bg-slate-800 duration-200 ease-in hover:ease-out`} onClick={handleCreatePrivateChat}>
            <FontAwesomeIcon icon="comments" className={`absolute left-2 top-2`}/> Private Chat
          </li>
          <li className={`w-full relative border-l-[1px] pl-9 border-slate-900 h-[30px] leading-[30px] hover:border-slate-400 cursor-pointer hover:bg-slate-800 duration-200 ease-in hover:ease-out`} onClick={handleCreatePost}>
            <FontAwesomeIcon icon="comment" className={`absolute left-2 top-2`}/> Post
          </li>
        </>):""
        }
        </ul>
      </div>}

      {createTeamChat && <div className={`absolute bg-slate-900 w-[270px] h-[210px] top-32 right-[118px] z-30 rounded-xl shadow-[0_0_16px_8px_#000000]`}>
        <h2 className={`text-slate-300 text-center h-[40px] leading-[40px] text-md`}>
          <u className={`text-sky-300 no-underline`}>Team</u> 
          <u className={`text-sky-400 no-underline`}>Chat</u>
          <FontAwesomeIcon icon='close' className={`absolute left-2 top-2`} onClick={handleCreateTeamChatClose}/>
        </h2>
        <label> 
          <span className={`text-slate-500 inline-block w-[250px] mx-2 mb-2`}> Name</span> 
          <input type="text" className={`w-[250px] mx-2 outline-none px-2 text-slate-200 bg-slate-800 h-[30px] rounded-lg leading-[30] text-sm shadow-[0_0_2px_1px_#000]`} placeholder="Enter the name..." ref={teamChatInputRef} onChange={teamChatInputHandler} 
           value={teamChatInputValue}/> 
        </label>
        <label className={`text-slate-300 text-sm bg-slate-800 inline-block h-[30px] leading-[30px] mx-2 my-2 px-7 w-[250px] relative rounded-lg`}>Availability <span className={`text-slate-300 text-sm bg-sky-800 inline-block h-[30px] leading-[30px] px-2 right-0 w-[130px] absolute text-center rounded-tr-lg rounded-br-lg`}>Availabile</span> </label>
        <button className={`w-[250px] h-[30px] leading-[30px] absolute bg-sky-800 left-2 bottom-3 rounded-md shadow-[0_0_3px_1px_#000000] text-slate-300 text-sm hover:bg-slate-800 duration-300 ease-in hover:ease-out`}> Create TeamChat</button>
      </div>}

      {createFriendChat && <div className={`absolute bg-slate-900 w-[270px] h-[210px] top-32 right-[118px] z-30 rounded-xl shadow-[0_0_16px_8px_#000000]`}>
        <h2 className={`text-slate-300 text-center h-[40px] leading-[40px] text-md`}>
          <u className={`text-sky-300 no-underline`}>Friends</u> 
          <u className={`text-sky-400 no-underline`}>Chat</u>
          <FontAwesomeIcon icon='close' className={`absolute left-2 top-2`} onClick={handleCreateFriendsChatClose}/></h2>
        <label> 
          <span className={`text-slate-500 inline-block w-[250px] mx-2 mb-2`}>Name</span> 
          <input type="text" className={`w-[250px] mx-2 outline-none px-2 text-slate-200 bg-slate-800 h-[30px] rounded-lg leading-[30] text-sm shadow-[0_0_2px_1px_#000]`} placeholder="Enter the name..." ref={friendsChatInputRef} onChange={friendsChatInputHandler} 
          value={friendsChatInputValue}/> 
        </label>
        <label className={`text-slate-300 text-sm bg-slate-800 inline-block h-[30px] leading-[30px] mx-2 my-2 px-7 w-[250px] relative rounded-lg`}>Availability <span className={`text-slate-300 text-sm bg-sky-800 inline-block h-[30px] leading-[30px] px-2 right-0 w-[130px] absolute text-center rounded-tr-lg rounded-br-lg`}>Availabile</span> 
        </label>
        <button className={`w-[250px] h-[30px] leading-[30px] absolute bg-sky-800 left-2 bottom-3 rounded-md shadow-[0_0_3px_1px_#000000] text-slate-300 text-sm hover:bg-slate-800 duration-300 ease-in hover:ease-out`}> Create FriendsChat</button>
      </div>}

      {createPrivateChat && <div className={`absolute bg-slate-900 w-[270px] h-[210px] top-32 right-[118px] z-30 rounded-xl shadow-[0_0_16px_8px_#000000]`}>
        <h2 className={`"text-slate-300 text-center h-[40px] leading-[40px] text-md`}>
          <u className={`text-sky-300 no-underline`}>Private</u>
          <u className={`text-sky-400 no-underline`}>Chat</u>
          <FontAwesomeIcon icon='close' className={`absolute left-2 top-2`} onClick={handleCreatePrivateChatClose}/>
        </h2>
        <label> 
          <span className={`text-slate-500 inline-block w-[250px] mx-2 mb-2`}>Name</span> 
          <input type="text" className={`w-[250px] mx-2 outline-none px-2 text-slate-200 bg-slate-800 h-[30px] rounded-lg leading-[30] text-sm shadow-[0_0_2px_1px_#000]`} placeholder="Enter the name..." ref={privateChatInputRef} onChange={privateChatInputHandler} 
          value={privateChatInputValue}/> 
        </label>
        <label className={`inline-block w-[250px] h-[45px] leading-[45px] left-3 top-2 text-slate-300 px-2 text-sm bg-slate-950 relative`}>Note 
          <span className={`bg-slate-950 h-[45px] leading-[20px] inline-block absolute w-[205px] right-0 pl-2`}>Temprory chat after closed messages are deleted</span>
        </label>
        <button className={`w-[250px] h-[30px] leading-[30px] absolute bg-sky-800 left-2 bottom-3 rounded-md shadow-[0_0_3px_1px_#000000] text-slate-300 text-sm hover:bg-slate-800 duration-300 ease-in hover:ease-out`}> Create PrivateChat</button>
      </div>}

      {createPostChat && <div className={`absolute bg-slate-900 w-[270px] h-[210px] top-32 right-[118px] z-30 rounded-xl shadow-[0_0_16px_8px_#000000]`}>
        <h2 className={`text-slate-300 text-center h-[40px] leading-[40px] text-md`}>
          <u className={`text-sky-300 no-underline`}>Post</u> 
          <u className={`text-sky-400 no-underline`}>Create</u>
          <FontAwesomeIcon icon='close' className={`absolute left-2 top-2`} onClick={handleCreatePostClose}/>
        </h2>
        <label> 
          <span className={`$text-slate-500 inline-block w-[250px] mx-2 mb-2`}>Message</span> 
          <input type="text" className={`w-[250px] mx-2 outline-none px-2 text-slate-200 bg-slate-800 h-[30px] rounded-lg leading-[30] text-sm shadow-[0_0_2px_1px_#000]`} placeholder="Enter your message.." ref={postInputRef} onChange={postInputHandler} value={postInputValue}/> 
        </label>
        <label className={`text-slate-400 inline-block h-[30px] leading-[30px] top-5 ml-6 w-[60px] relative text-sm`}>Post Img</label>

        <span className={`text-slate-300 -top-2 text-sm inline-block h-[30px] leading-[30px] mx-2 px-7 w-[250px] relative rounded-lg text-center`}>
          <span className={`inline-block absolute left-[92px] bg-gradient-to-b from-sky-500 via-sky-700 to-sky-900 w-[60px] h-[30px] leading-[30px] -top-[3px] rounded-lg shadow-[0_0_2px_1px_#000000] text-sm text-slate-300 hover:text-slate-200 duration-200 hover:ease-in ease-out cursor-pointer hover:bg-gradient-to-t hover:shadow-[0_0_2px_1px_#000000_inset]`}> Upload
            <input type='file' className={`absolute left-0 -top-2 w-[60px] cursor-pointer opacity-0`} onChange={(event) =>{setUploadPostImg(event.target.files[0])}}/>
          </span>
          <button onClick={handlePostCreateImgPreview} className={`absolute right-0 w-[90px] h-[30px] leading-[30px] bg-gradient-to-b from-sky-500 via-sky-700 to-sky-900 rounded-lg shadow-[0_0_2px_1px_#000000] text-slate-300 text-sm hover:text-slate-200 duration-300 hover:ease-in ease-out -top-[3px] hover:bg-gradient-to-t hover:shadow-[0_0_2px_1px_#000000_inset]`}>Preview IMG</button>
        {postImgPreview &&
          <div className={`w-[250px] h-[250px] absolute bg-slate-800 -top-16 z-10 rounded-lg border-[1px] border-slate-400 shadow-[0_0_27px_9px_#000000]`}>
            <h2 className={`text-md relative`}>Preview <FontAwesomeIcon icon='close' onClick={handlePostCreateImgPreviewClose} className={styles3.IconClose}/></h2>
            <img className={`w-[90%] h-[80%] mx-auto border-collapse`} src={uploadPostImg === null ? "":URL.createObjectURL(uploadPostImg)}/>
          </div>}
        </span>

        <button className={`w-[250px] h-[30px] leading-[30px] absolute bg-sky-800 left-2 bottom-3 rounded-md shadow-[0_0_3px_1px_#000000] text-slate-300 text-sm hover:bg-slate-800 duration-300 ease-in hover:ease-out`}> Post</button>
      </div>}

      {notificationsBtn && <div className={`w-[300px] h-[500px] absolute top-14 right-5 bg-slate-900 z-20 rounded-2xl shadow-[0_0_5px_1px_#000000cc]`}>
        <h2 className={`h-[40px] relative leading-[40px] text-left pl-4 mb-2 text-md text-slate-300`}>Notifications 
          <FontAwesomeIcon icon='close' className={`absolute right-3 top-3 cursor-pointer hover:text-red-500 duration-200`} onClick={handleNotificationsClose}/>
          </h2>
        <div className={`w-[290px] relative my-2 mx-auto h-[90px] bg-slate-800 rounded-lg p-2`}>
          <div className={`relative h-[90px] w-[70px] right-2 -top-2`}>
            <img src={""} alt="" className={`h-[90px] w-[70px] rounded-xl`} />
            <span className={`absolute right-1 bottom-1 w-[20px] h-[20px] bg-gradient-to-b from-sky-500 via-sky-700 to-sky-900 rounded-full text-center block`}><FontAwesomeIcon icon='circle-user' className={`w-[14px] h-[12px] relative -top-1 text-slate-200`}/></span>
          </div>
          <p className={`absolute p-1 top-0 right-0 text-sm text-slate-300 w-[220px] h-[90px] rounded-tr-lg rounded-br-lg`}>
            <span className={`inline-block absolute w-[195px] h-[64px] overflow-hidden right-5`}><b>Name</b> <u>Desc</u> <b>Group</b></span>
            <span className={`absolute top-[68px] left-2 text-sm text-slate-400`}>
            <u className={`text-slate-500 text-xs px-1`}>2023.01.01</u> Posted at <i className={`text-slate-500 text-xs px-1`}>18:50 </i></span>
            <span className={`w-[10px] h-[10px] absolute bg-gradient-to-b from-sky-500 via-sky-700 to-sky-500 right-[5px] top-[38px] rounded-full shadow-[0_1px_4px_1px_#002cab,0_1px_4px_1px_#002cab_inset]`}></span>
          </p>
        </div>
      </div>}
    </div>
  )
}
export default Nav