'use client';
import { func } from 'prop-types';
import { useState } from 'react';
import { FontAwesomeIcon } from '../../Icons'; 
import { emojies } from '../emotes';
import { users,emoteButtons } from '../../localConstants/dataStorage'
import useModalState from '../../customHooks/useModalState';

const Chat = () => {
  const [activeChat,setActiveChat] = useState('global');
  const turnChat = (chatType) => { setActiveChat(chatType); }
  const chatData = {
    global: { label: 'Global Chat', name: 'Global Chat', onClick: () => turnChat('global') },
    team: { label: 'Team Chat', name: 'Team Chat', onClick: () => turnChat('team') },
    friends: { label: 'Friends Chat', name: 'Friends Chat', onClick: () => turnChat('friends') },
    group: { label: 'Group Chat', name: 'Group Chat', onClick: () => turnChat('group') }
  };

  const [modal,setModal] = useState({reply:false,emote:false,edit:false,delete:false})
  const toggleModal = (modalName) => {
    setModal(prevModal => ({...Object.keys(prevModal).reduce((acc, key) => {
        acc[key] = key === modalName ? !prevModal[key] : false;
        return acc;
      }, {})
    }));
  };
  const [message, setMessage] = useState([]);
  {/*const sendMessageGlobal = (userImg, msg, TimeSent, user) => { newMsg = [userImg, msg, TimeSent, user]; setSaveEditedMSG([...items, { id: items.length, value: newMsg }]); }*/}
  const handleMessages = (event) => {
    event.preventDefault();
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;

    const monthName = date.toLocaleString('en-US', { month: 'long' })
    const year = currentDate.getFullYYear();
    const shortMonthName = monthName.substring(0, 3);
    const formattedMonthName = shortMonthName.chartAt(0).toUpperCase() + shortMonthName.slice(1);

    const formattedDate = `${year} ${formattedMonthName}. ${day}`

    const userImg = event.target.elements.imageInput.files[0];
    const msg = event.target.elements.msg.value;
    const TimeSent = event.target.elements.TimeSent.value;
    const user = event.target.elements.user.value;
    addItem(userImg, msg, TimeSent, user);
    event.target.reset();
  }
  const [chooseUser,setChooseUser] = useState(null);

  const [userMenu,setUserMenu] = useState(false);
  const handleMenuOpen = (userId) => { 
    userMenu ? setUserMenu(!userMenu) : setUserMenu(!userMenu);
    setChooseUser(userId)
  }
  const UserListModal = ({isOpen,handleMenuClose}) => {
    const [isBlocked,setIsBlocked] = useState(false);
    const [isFriend,setIsFriend] = useState(false);
    const [viewProfile,setViewProfile] = useState(false);
    const [dmUser,setDmUser] = useState(false);
    const [emoteWindow,setEmoteWindow] = useState(false);

    const handleBlocking = () => { isBlocked ? setIsBlocked(!isBlocked): setIsBlocked(!isBlocked); setIsFriend(false); setViewProfile(false); setDmUser(false); }
    const handleFriendReq = () => { 
      if(isBlocked === true) { setIsFriend(false); }
      else if(isBlocked === false){ isFriend ? setIsFriend(!isFriend) :setIsFriend(!isFriend); }
    }
    const handleViewProfile = () => {
      if(isBlocked === true) { setViewProfile(false); }
      else if(isBlocked === false){ viewProfile ? setViewProfile(!viewProfile) : setViewProfile(!viewProfile); setDmUser(false) }
    }
    const handleDmUser = () => {
      if(isBlocked === true) { setDmUser(false); }
      else if(isBlocked === false){ dmUser ? setDmUser(!dmUser):setDmUser(!dmUser); setViewProfile(false); }
    }
    const handleEmoteWindow = () => {emoteWindow ? setEmoteWindow(!emoteWindow):setEmoteWindow(!emoteWindow)}

    const ModalHolder = ({handleFriendReq,isBlocked,isFriend,handleBlocking,handleViewProfile,viewProfile,dmUser,handleDmUser,user,img,date,time,handleEmoteWindow,emoteWindow,handleMenuClose}) => {
      return (
        <div className={`absolute top-1 left-16 bg-slate-900 w-[140px] z-30 h-[200px] rounded-md border-[1px] border-slate-500 shadow-[0_0_3px_1px] shadow-black/80 select-none`}>
        <h2 className={`relative pl-2 h-[40px] leading-[45px]`}> 
          {user}
          <FontAwesomeIcon icon="close" className={`absolute right-3 top-3 duration-300 hover:text-orange-400 cursor-pointer`} onClick={handleMenuClose}/>
        </h2>
        <ul>
          <li className={`text-sm h-[35px] leading-[35px] pl-2 first-of-type:mt-2 duration-300 border-l-[1px] ${isBlocked ? 'pointer-events border-rose-900 bg-rose-900 cursor-not-allowed' : 'cursor-pointer hover:bg-slate-300/10 hover:border-slate-300 border-slate-900'}`} onClick={handleFriendReq}> 
            {isBlocked ? 'You are blocked' : isFriend ? 'Request Sent' : 'Send Request'} 
          </li>

          <li className={`text-sm h-[35px] leading-[35px] pl-2 first-of-type:mt-2 duration-300 hover:bg-slate-300/10 border-l-[1px] border-slate-900 hover:border-slate-300 cursor-pointer`} onClick={handleBlocking}> 
            {isBlocked ? 'Unblock' : 'Block'} 
          </li>

          <li className={`text-sm h-[35px] leading-[35px] pl-2 first-of-type:mt-2 duration-300 border-l-[1px] ${isBlocked ? 'pointer-events border-rose-900 bg-rose-900 cursor-not-allowed' : 'cursor-pointer hover:bg-slate-300/10 hover:border-slate-300 border-slate-900'}`} onClick={handleViewProfile}> 
            {isBlocked ? 'You are blocked' : 'View Profile'} 
          </li>
                      
          <li className={`text-sm h-[35px] leading-[35px] pl-2 first-of-type:mt-2 duration-300 border-l-[1px] ${isBlocked ? 'pointer-events border-rose-900 bg-rose-900 cursor-not-allowed' : 'cursor-pointer hover:bg-slate-300/10 hover:border-slate-300 border-slate-900'}`} onClick={handleDmUser}>   
            {isBlocked ? 'You are Blocked' : 'Direct Message'} 
          </li>

          {viewProfile && ( <span className={`bg-sky-800 absolute -top-16 left-0 pl-2 text-sm inline-block w-[100%] h-[35px] leading-[35px]`}>Profile View</span>)}
          {dmUser && (
            <div className={`absolute w-[350px] h-[320px] bg-slate-800 rounded-lg top-[210px] -left-[5%] shadow-[0_0_5px_1px_#000000] z-10`}>
              <FontAwesomeIcon icon="close" className={`text-slate-200 cursor-pointer duration-300 ease-out hover:text-rose-500 hover:ease-in absolute top-3 right-3 z-10`} onClick={handleDmUser}/>
              <img src={img} className={`w-[50px] h-[50px] rounded-full relative top-3 left-3 bg-slate-700/70`} />
              <div className={`absolute top-3 left-[72px] w-[75%] h-[50px] flex flex-col`}>
                <label className={`text-slate-200`}>{user}</label>
                <label className={`font-sans font-semibold text-[11px] text-slate-300`}>{date} at {time}</label>
              </div>
              <div className={`w-[95%] h-[200px] mx-auto relative top-6 border-[1px] border-slate-600 rounded-lg`}>
                <textarea className={`outline-none bg-slate-800/60 w-[98%] h-[180px] overflow-x-hidden overflow-y-scroll text-slate-300 text-sm p-2 leading-tight resize-none font-normal`} placeholder="Your message" />
              </div>
              <div className={`absolute w-[150px] h-[30px] leading-[30px] flex flex-row right-2 bottom-2`}>
                <div className={`inline-block absolute right-12 bg-gradient-to-b from-sky-500 via-sky-700 to-sky-900 w-[120px] h-[30px] leading-[30px] rounded-lg shadow-[0_0_2px_1px_#000000] text-sm text-slate-300 text-center hover:text-slate-200 duration-300 hover:ease-in ease-out cursor-pointer hover:bg-gradient-to-t hover:shadow-[0_0_2px_1px_#000000_inset]`}>Send DM</div>
                <div className={`inline-block absolute right-2 bg-gradient-to-b from-amber-500 via-amber-700 to-amber-900 w-[30px] h-[30px] leading-[30px] rounded-full shadow-[0_0_2px_1px_#000000] text-sm text-slate-300 text-center hover:text-slate-200 duration-300 hover:ease-in ease-out cursor-pointer hover:bg-gradient-to-t hover:shadow-[0_0_2px_1px_#000000_inset]`} onClick={handleEmoteWindow}>
                  <FontAwesomeIcon icon='face-smile-beam' className={`shadow-[0_0_25px_12px_inset] shadow-black/50 rounded-full relative top-[2px] text-2xl text-amber-600 border-none`} />
                </div>
                {emoteWindow && (
                  <div className={`absolute w-[200px] h-[200px] rounded-lg bg-slate-800 top-10 -right-2 py-2 border-[1px] border-slate-500`}>
                    <div className={`w-full h-[98%] overflow-x-hidden overflow-y-scroll grid grid-flow-row auto-rows-max grid-cols-7 gap-1 justify-items-center`}>
                      {emojies.map(emote => (<span key={emote.id} className={`block w-[25px] h-[25px] leading-[25px] text-center rounded-full cursor-pointer text-sm text-slate-300`}>{emote.emote}</span>))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )} 
        </ul>
      </div>
      )
    }
    return ( 
      isOpen && chatData[activeChat].name == 'Global Chat' && (
        users.map( data => (
          data.globalUsers.map(user => (user.id == chooseUser && (
            <ModalHolder key={user.id} handleFriendReq={()=>{handleFriendReq()}} handleBlocking={()=>{handleBlocking()}} handleViewProfile={()=>{handleViewProfile()}} handleDmUser={()=>{handleDmUser()}} handleEmoteWindow={()=>{handleEmoteWindow()}}
            viewProfile={viewProfile} isBlocked={isBlocked} isFriend={isFriend} emoteWindow={emoteWindow} dmUser={dmUser} handleMenuClose={handleMenuClose}
              user={user.name}
              img={user.img}
              date={'2024.04.15'}
              time={'15:24'}
            />
          )))
        ))
      )
    )
  }
  const UserList = ({openMenu}) => {
    const UL = `w-[100%] bg-slate-900 text-center py-[17px] text-white select-none relative`;
    const LI = ({action,img,user}) =>{
      return (
        <li className={`w-[35px] sm:w-[95%] h-[35px] leading-[35px] mx-auto mb-1 flex flex-row cursor-pointer`} onClick={action}> 
          <img src={img} className={`w-[35px] h-[35px] rounded-full`}/> 
          <span className={`xs:hidden sm:inline-block overflow-x-hidden px-[6px] w-[60%] leading-[35px] text-sm`}>{user}</span> 
        </li>
      )
    }
    return (<>
      {chatData[activeChat].name == 'Global Chat' && (
        <ul className={UL}> { 
          users.map(data => ( 
            data.globalUsers.map(user => ( 
              <LI key={user.id} action={()=>{handleMenuOpen(user.id)}} img={user.img} user={user.name}/>  
            )) 
          ))} 
        </ul>
      )}
      {chatData[activeChat].name == 'Team Chat' && (
        <ul className={UL}> 
        { 
          users.map(data => ( 
            data.teamUsers.map(user => ( 
              <LI key={user.id} action={openMenu} img={user.img} user={user.name}/> 
            )) 
          ))
        } 
        </ul>
      )}
      {chatData[activeChat].name == 'Friends Chat' && (
        <ul className={UL}> 
        { 
          users.map(data => ( 
            data.friendsUsers.map(user => ( 
              <LI key={user.id} action={openMenu} img={user.img} user={user.name}/> 
            )) 
          ))
        } 
        </ul>
      )}
      {chatData[activeChat].name == 'Group Chat' && (
        <ul className={UL}> 
        { 
          users.map(data => ( 
            data.groupUsers.map(user => ( 
              <LI key={user.id} action={openMenu} img={user.img} user={user.name}/> 
            )) 
          ))
        } 
        </ul>
      )}
    </>)
  }

  const MessageBox = () => {
    return (
      <div className={`flex flex-row relative`}> 
        <img src='img' className={`w-[40px] h-[40px] bg-slate-400 rounded-full relative top-2 left-2`} />
        <span className={`font-sans text-[10px] font-semibold text-slate-300 absolute mt-[55px] ml-4`}>time</span>
        <span className={`text-sm text-slate-300 absolute mt-[70px] ml-3`}>name</span>
        <p className={`text-sm text-slate-400 inline-block h-[70px] w-[75%] md:w-[85%] xl:w-[90%] absolute mt-1 left-16 border-b-[1px] border-slate-300/20 px-1 py-[2px] overflow-x-hidden overflow-y-scroll scrollbarWithNone`}>chat</p>
        <div className={`w-[150px] h-[25px] leading-[25px] absolute right-[50px] top-[120px] rounded-lg`}></div>
        <ul className={`absolute top-[85px] h-[30px] leading-[30px] w-[160px] bg-slate-900 right-[30px] text-center rounded-lg shadow-[0_0_3px_1px] shadow-black`}>

          <li className={`inline-block w-[40px] h-[30px] leading-[30px] cursor-pointer duration-300 ease-out hover:ease-in hover:bg-slate-300/10 first-of-type:rounded-tl-lg last-of-type:rounded-br-lg last-of-type:rounded-tr-lg first-of-type:rounded-bl-lg`}> 
            <FontAwesomeIcon icon='reply' className={`text-sm hover:text-slate-200`} onClick={()=>{toggleModal('reply')}}/>
          </li>

          <li className={`inline-block w-[40px] h-[30px] leading-[30px] cursor-pointer duration-300 ease-out hover:ease-in hover:bg-slate-300/10 first-of-type:rounded-tl-lg last-of-type:rounded-br-lg last-of-type:rounded-tr-lg first-of-type:rounded-bl-lg`}> 
            <FontAwesomeIcon icon='face-grin-beam' className={`text-sm hover:text-yellow-600`} onClick={()=>{toggleModal('emote')}}/>
          </li>

          <li className={`inline-block w-[40px] h-[30px] leading-[30px] cursor-pointer duration-300 ease-out hover:ease-in hover:bg-slate-300/10 first-of-type:rounded-tl-lg last-of-type:rounded-br-lg last-of-type:rounded-tr-lg first-of-type:rounded-bl-lg`}> 
            <FontAwesomeIcon icon='pencil' className={`text-sm hover:text-sky-600`} onClick={()=>{toggleModal('edit')}}/>
          </li> 

          <li className={`inline-block w-[40px] h-[30px] leading-[30px] cursor-pointer duration-300 ease-out hover:ease-in hover:bg-slate-300/10 first-of-type:rounded-tl-lg last-of-type:rounded-br-lg last-of-type:rounded-tr-lg first-of-type:rounded-bl-lg`}> 
            <FontAwesomeIcon icon='trash' className={`text-sm hover:text-rose-600`} onClick={()=>{toggleModal('delete')}}/>
          </li>
        </ul>
      </div>
    )
  }

  const EmoteTypeAndCount = ({emoteType,amount}) => {
    return (
      <li className={`xs:flex xs:flex-col text-center xs:my-2 mx-[1px] xs:inline-block`}>
        <div className={`flex flex-row`}>
          <span className={`block w-[18px] h-[18px] leading-[16px] rounded-full relative left-1 top-0.5 bg-sky-600/90`}>
            <FontAwesomeIcon icon='thumbs-up' className={`text-[12px]`}/> 
          </span>
          <span className={`first-of-type:ml-1 right-1 ${emoteType < 9 ? 'rounded-lg text-xs':'text-[10px]'} inline-block w-[15px] h-[15px] leading-[13px] text-center text-slate-200 font-semibold font-sans z-40 bg-slate-800`}> {amount} </span> 
        </div>
      </li>
    )
  }
  
  const InputBox = ({emotesWindow}) => {
    return (
      <div className={`w-[100%] h-[130px] bg-slate-900 absolute bottom-0 border-t-[1px] border-slate-500/20 rounded-bl-lg rounded-br-lg py-2`}>  
        <textarea className={`w-[95%] relative left-[10px] bg-slate-950 outline-none resize-none text-md p-1 text-slate-400 h-[80px]`} placeholder='Your message'></textarea> 
        <div className={`w-[96%] relative`}>  
          <button className={`absolute -right-[0px] top-[6px] w-[80px] h-[25px] bg-slate-700 text-slate-300/80 rounded-md text-sm shadow-[0px_-1px_1px_2px_#000000cc_inset,0px_1px_1px_0_#ffffffe6_inset] hover:shadow-[0px_1px_1px_2px_#000000cc_inset,0px_-1px_1px_0_#ffffffe6_inset] duration-300 ease-in-out`} onClick={() => { handleMessages }}> Send <FontAwesomeIcon icon="paper-plane" className={`relative left-[10px]`} /> 
          </button>
          <button className={`absolute -right-[6px] -top-[26px] bg-slate-9050 w-[25px] h-[25px] text-slate-400 hover:text-amber-400 hover:ease-in ease-out duration-300`}> 
          <FontAwesomeIcon icon="face-laugh" onClick={() => { setMainReactWindow(!mainReactWindow) }} />  
          </button>
        </div>
        {emotesWindow && (
          <div className={`absolute w-[200px] h-[200px] rounded-lg bg-slate-800 bottom-11 -right-2 py-2 border-[1px] border-slate-500`}> 
            <div className={`w-full h-[98%] overflow-x-hidden overflow-y-scroll grid grid-flow-row auto-rows-max grid-cols-7 gap-1 justify-items-center`}> 
              {emojies.map(emote => ( <span key={emote.id} className={`block w-[25px] h-[25px] leading-[25px] text-center rounded-full cursor-pointer text-sm text-slate-300`}>{emote.emote}</span> ))} 
            </div>
          </div>
        )}
      </div>
  )
  }

  const EmoteModal = () => {
    const [emotions, setEmotion] = useState({like: 0,top: 0,best: 0,teamUP: 0,idea: 0,deal: 0 });
    const handleEmotion = (emotionKey) => { setEmotion(prevEmotions => ({...prevEmotions,[emotionKey]: prevEmotions[emotionKey] + 1})); };
    const sum = emotions.like + emotions.top + emotions.best + emotions.teamUP + emotions.idea + emotions.deal;
    return (
        <ul className={`${sum < 99 ? 'md:w-[240px]':'md:w-[340px]'} w-[55px] h-[25px] leading-[25px] absolute top-[75px] left-[57px] sm:flex flex-row inline-block xs:none`}> 
          {emotions.like !== null && (
            <li className={`xs:flex xs:flex-col text-center xs:my-2 mx-[1px] xs:inline-block`}>
              <div className={`flex flex-row`}>
                <span className={`block w-[18px] h-[18px] leading-[16px] rounded-full relative left-1 top-0.5 bg-sky-600/90`}>
                  <FontAwesomeIcon icon='thumbs-up' className={`text-[12px]`}/> 
                </span>
                <span className={`first-of-type:ml-1 right-1 ${emotions.like < 9 ? 'rounded-lg text-xs':'text-[10px]'} inline-block w-[15px] h-[15px] leading-[13px] text-center text-slate-200 font-semibold font-sans z-40 bg-slate-800`}> {emotions.like} </span> 
              </div>
            </li>
          )}
          {emotions.top !== null && ( 
            <li className={`xs:flex xs:flex-col text-center xs:my-2 mx-[1px] xs:inline-block`}>
              <div className={`flex flex-row`}>
                <span className={`block w-[18px] h-[18px] leading-[16px] rounded-full relative left-1 top-0.5 bg-rose-600/90`}>
                  <FontAwesomeIcon icon='medal' className={`text-[12px]`}/> 
                </span>
                <span className={`first-of-type:ml-1 right-1 ${emotions.top < 9 ? 'rounded-lg text-xs':'text-[10px]'} inline-block w-[15px] h-[15px] leading-[13px] text-center text-slate-200 font-semibold font-sans z-40 bg-slate-800`}> {emotions.top} </span> 
              </div>
            </li>     
          )}
          {emotions.best !== null && ( 
            <li className={`xs:flex xs:flex-col text-center xs:my-2 mx-[1px] xs:inline-block`}>
              <div className={`flex flex-row`}>
                <span className={`block w-[18px] h-[18px] leading-[16px] rounded-full relative left-1 top-0.5 bg-orange-600/90`}>
                  <FontAwesomeIcon icon='star' className={`text-[12px]`}/> 
                </span>
                <span className={`first-of-type:ml-1 right-1 ${emotions.best < 9 ? 'rounded-lg text-xs':'text-[10px]'} inline-block w-[15px] h-[15px] leading-[13px] text-center text-slate-200 font-semibold font-sans z-40 bg-slate-800`}> {emotions.best} </span> 
              </div>
            </li>
          )}
          {emotions.teamUP !== null && ( 
            <li className={`xs:flex xs:flex-col text-center xs:my-2 mx-[1px] xs:inline-block`}>
              <div className={`flex flex-row`}>
                <span className={`block w-[18px] h-[18px] leading-[16px] rounded-full relative left-1 top-0.5 bg-green-600/90`}>
                  <FontAwesomeIcon icon='people-group' className={`text-[12px]`}/> 
                </span>
                <span className={`first-of-type:ml-1 right-1 ${emotions.teamUP < 9 ? 'rounded-lg text-xs':'text-[10px]'} inline-block w-[15px] h-[15px] leading-[13px] text-center text-slate-200 font-semibold font-sans z-40 bg-slate-800`}> {emotions.teamUP} </span> 
              </div>
            </li>
          )}
          {emotions.idea !== null && ( 
            <li className={`xs:flex xs:flex-col text-center xs:my-2 mx-[1px] xs:inline-block`}>
              <div className={`flex flex-row`}>
                <span className={`block w-[18px] h-[18px] leading-[16px] rounded-full relative left-1 top-0.5 bg-yellow-600/90`}>
                  <FontAwesomeIcon icon='lightbulb' className={`text-[12px]`}/> 
                </span>
                <span className={`first-of-type:ml-1 right-1 ${emotions.idea < 9 ? 'rounded-lg text-xs':'text-[10px]'} inline-block w-[15px] h-[15px] leading-[13px] text-center text-slate-200 font-semibold font-sans z-40 bg-slate-800`}> {emotions.idea} </span> 
              </div>
            </li>    
          )}
          {emotions.deal !== null && ( 
            <li className={`xs:flex xs:flex-col text-center xs:my-2 mx-[1px] xs:inline-block`}>
              <div className={`flex flex-row`}>
                <span className={`block w-[18px] h-[18px] leading-[16px] rounded-full relative left-1 top-0.5 bg-blue-600/90`}>
                  <FontAwesomeIcon icon='handshake' className={`text-[12px]`}/> 
                </span>
                <span className={`first-of-type:ml-1 right-1 ${emotions.deal < 9 ? 'rounded-lg text-xs':'text-[10px]'} inline-block w-[15px] h-[15px] leading-[13px] text-center text-slate-200 font-semibold font-sans z-40 bg-slate-800`}> {emotions.deal} </span> 
              </div>
            </li>
          )}
          {modal.emote && ( 
            <ul className={`absolute top-[290%] right-[30px] w-[160px]`}>
              {emoteButtons.map((btn,index) => (
                <span key={index} className={`first-of-type:ml-2 relative top-[2px] mr-1 rounded-sm inline-block w-[20px] h-[20px] leading-[20px] text-center cursor-pointer ${btn.spanBG}`} onClick={()=>{handleEmotion(btn.action)}}> 
                  <FontAwesomeIcon icon={btn.icon} className={`text-[12px]`}/> 
                </span>
              ))}
            </ul>
          )}
          <label className={`absolute right-0 top-[2px] text-xs text-slate-300 bg-slate-800 block h-[20px] leading-[20px] text-center ${sum < 99 ? `rounded-full w-[20px]` :`w-[40px]`}`}>
            { sum < 1000 ? sum:sum < 10000 ? (num / 1000).toFixed(1) + 'k' :sum > 100000 ? (num / 1000).toFixed(0) + 'k' :''}
          </label>
        </ul>
    )
  }
  const DeleteModal = () => {
    return (
      <div className={`w-[300px] h-[130px] absolute top-[-120px] bg-slate-900 left-[-110px] rounded-2xl z-30 shadow-[0_0_48px_12px_#000000] border-[1px] border-slate-600`}>
        <h2 className={`my-2 text-center h-[50px] w-[80%] mx-auto leading-[20px] text-sm font-sans font-semibold text-slate-400`}> This message will be deleted completely. Are you want to Continue?
          <FontAwesomeIcon icon='close' className={`cursor-pointer absolute right-4 top-4 hover:text-rose-500 duration-300 hover:ease-in ease-out`}/> 
        </h2>
        <div className={`w-[220px] mx-auto relative top-4`}>
          <button className={`w-[90px] h-[30px] text-slate-300 text-center rounded-lg border-[1px] shadow-[0_0_3px_1px] hover:shadow-[0_0_3px_1px_inset] duration-300 hover:ease-in ease-out bg-gradient-to-b from-emerald-600 to-emerald-800 ml-2 border-emerald-800 shadow-emerald-500/60 hover:shadow-emerald-950`}>Yes</button>
          <button className={`w-[90px] h-[30px] text-slate-300 text-center rounded-lg border-[1px] shadow-[0_0_3px_1px] hover:shadow-[0_0_3px_1px_inset] duration-300 hover:ease-in ease-out bg-gradient-to-b from-red-600 to-red-800 ml-4 border-red-800 shadow-red-500/60 hover:shadow-red-950`}>No</button>
        </div>
      </div>
    )  
  }
  const EditModal = () => {
    const [saveWindow, setSaveWindow] = useState(false);
    const [cancelWindow, setCancelWindow] = useState(false);
    const [closeWindow, setCloseWindow] = useState(false);
    const saveWindowHandler = () => {setSaveWindow(!saveWindow)}
    const cancelWindowHandler = () => {setCancelWindow(!cancelWindow)}
    const closeWindowHandler = () => {setCancelWindow(!closeWindow)}

    return (
      <div className={`w-[250px] h-[240px] bg-slate-900 shadow-[0_0_5px_2px] shadow-black border-[1px] border-slate-600 rounded-lg absolute top-3 z-10 right-1`}>
        <textarea className={`resize-none bg-slate-800 text-slate-300 text-sm px-2 py-1 relative rounded-tl-lg rounded-tr-lg w-full h-[195px] outline-none overflow-y-scroll overflow-x-hidden`}>Message</textarea>

        <div className={`absolute w-[230px] mx-auto bottom-2 text-slate-200`}>
          <button 
            className={`w-[75px] h-[30px] text-sm relative left-[5px] bg-emerald-900 border-[1px] border-emerald-700 hover:border-green-700 rounded-bl-md hover:border-dashed hover:bg-emerald-900/80 duration-300 ease-in`}
            onClick={''}> Save </button>
          <button 
            className={`w-[75px] h-[30px] text-sm relative left-[10px] bg-sky-900 border-[1px] border-sky-700 hover:border-sky-700 hover:border-dashed hover:bg-sky-900/80 duration-300 ease-in`}
            onClick={''}> Cancel </button>
          <button 
            className={`w-[75px] h-[30px] text-sm relative left-[15px] bg-red-900 rounded-br-md border-[1px] border-red-700 hover:border-red-700 hover:border-dashed hover:bg-red-900/80 duration-300 ease-in`} 
            onClick={''}> Close </button>
        </div>

        {saveWindow && (
          <div className={`w-[300px] h-[130px] absolute top-[-120px] bg-slate-900 left-[-110px] rounded-2xl z-30 shadow-[0_0_48px_12px_#000000] border-[1px] border-slate-600`}>
            <h2 className={`my-2 text-center h-[50px] w-[80%] mx-auto leading-[20px] text-sm font-sans font-semibold text-slate-400`}>Save edited message 
              <FontAwesomeIcon 
                icon='close' 
                className={`cursor-pointer absolute right-4 top-4 hover:text-rose-500 duration-300 hover:ease-in ease-out`} 
                onClick={''}/> 
            </h2>
            <div className={`w-[220px] mx-auto relative top-4`}>
              <button 
                className={`w-[90px] h-[30px] text-slate-300 text-center rounded-lg border-[1px] shadow-[0_0_3px_1px] hover:shadow-[0_0_3px_1px_inset] duration-300 hover:ease-in ease-out bg-gradient-to-b from-emerald-600 to-emerald-800 ml-2 border-emerald-800 shadow-emerald-500/60 hover:shadow-emerald-950`} 
                onClick={''}> Yes </button>
              <button 
                className={`w-[90px] h-[30px] text-slate-300 text-center rounded-lg border-[1px] shadow-[0_0_3px_1px] hover:shadow-[0_0_3px_1px_inset] duration-300 hover:ease-in ease-out bg-gradient-to-b from-red-600 to-red-800 ml-4 border-red-800 shadow-red-500/60 hover:shadow-red-950`} 
                onClick={''}> No </button>
            </div>
          </div>
        )}
        {cancelWindow &&(
        <div className={`w-[300px] h-[130px] absolute top-[-120px] bg-slate-900 left-[-110px] rounded-2xl z-30 shadow-[0_0_48px_12px_#000000] border-[1px] border-slate-600`}>
          <h2 className={`my-2 text-center h-[50px] w-[80%] mx-auto leading-[20px] text-sm font-sans font-semibold text-slate-400`}>Are you sure? You will restore original message
            <FontAwesomeIcon 
              icon='close' 
              className={`cursor-pointer absolute right-4 top-4 hover:text-rose-500 duration-300 hover:ease-in ease-out`} 
              onClick={''}/> 
          </h2>
          <div className={`w-[220px] mx-auto relative top-4`}>
            <button 
              className={`w-[90px] h-[30px] text-slate-300 text-center rounded-lg border-[1px] shadow-[0_0_3px_1px] hover:shadow-[0_0_3px_1px_inset] duration-300 hover:ease-in ease-out bg-gradient-to-b from-emerald-600 to-emerald-800 ml-2 border-emerald-800 shadow-emerald-500/60 hover:shadow-emerald-950`} 
              onClick={''}>Yes</button>
            <button 
              className={`w-[90px] h-[30px] text-slate-300 text-center rounded-lg border-[1px] shadow-[0_0_3px_1px] hover:shadow-[0_0_3px_1px_inset] duration-300 hover:ease-in ease-out bg-gradient-to-b from-red-600 to-red-800 ml-4 border-red-800 shadow-red-500/60 hover:shadow-red-950`} 
              onClick={''}>No</button>
          </div>
        </div>
        )}
        {closeWindow &&(
        <div className={`w-[300px] h-[130px] absolute top-[-120px] bg-slate-900 left-[-110px] rounded-2xl z-30 shadow-[0_0_48px_12px_#000000] border-[1px] border-slate-600`}>
          <h2 className={`my-2 text-center h-[50px] w-[80%] mx-auto leading-[20px] text-sm font-sans font-semibold text-slate-400`}>Edit Window will be closed all information which was edited will be lost. Are you want to Continue?
            <FontAwesomeIcon 
              icon='close' 
              className={`cursor-pointer absolute right-4 top-4 hover:text-rose-500 duration-300 hover:ease-in ease-out`} 
              onClick={''}/> 
          </h2>
          <div className={`w-[220px] mx-auto relative top-4`}>
            <button 
              className={`w-[90px] h-[30px] text-slate-300 text-center rounded-lg border-[1px] shadow-[0_0_3px_1px] hover:shadow-[0_0_3px_1px_inset] duration-300 hover:ease-in ease-out bg-gradient-to-b from-emerald-600 to-emerald-800 ml-2 border-emerald-800 shadow-emerald-500/60 hover:shadow-emerald-950`} 
              onClick={''}>Yes</button>
            <button 
              className={`w-[90px] h-[30px] text-slate-300 text-center rounded-lg border-[1px] shadow-[0_0_3px_1px] hover:shadow-[0_0_3px_1px_inset] duration-300 hover:ease-in ease-out bg-gradient-to-b from-red-600 to-red-800 ml-4 border-red-800 shadow-red-500/60 hover:shadow-red-950`} 
              onClick={''}>No</button>
          </div>
        </div>
        )}
      </div>
    )
  }
  const ReplyModal = () => {
    const [emoteWindow,setEmoteWindow] = useState(false);
    return (
      <div className={`absolute w-[350px] h-[320px] bg-slate-800 rounded-lg shadow-[0_0_5px_1px_#000000] top-12 right-2 z-30`} >
        <span className={`absolute top-3 right-3 block w-[20px] h-[20px] leading-[22px] text-center rounded-full cursor-pointer z-10`}>
          <FontAwesomeIcon icon="close" className={`text-slate-200 duration-300 ease-out hover:text-rose-500 hover:ease-in`} onClick={()=>{toggleModal('reply')}}/>
        </span>
        <img src="" className={`w-[50px] h-[50px] rounded-full relative top-3 left-3 bg-slate-700/70`}/>

        <div className={`absolute top-3 w-[75%] h-[50px] flex flex-col`}>
          <label className={`text-slate-300 block absolute left-[64px] w-[250px] text-left px-2`}>name</label>
            <label className={`font-sans font-semibold text-[11px] text-slate-400/70 block w-[120px] text-left px-2 absolute h-[20px] leading-[20px] top-8 left-[64px]`}>
              2023.09.24 at 10:24
            </label>
        </div>

        <div className={`w-[95%] h-[200px] mx-auto relative top-6 border-[1px] border-slate-600 rounded-lg`}> 
          <textarea className={`outline-none bg-slate-800/60 w-[98%] h-[180px] overflow-x-hidden overflow-y-scroll text-slate-300 text-sm p-2 leading-tight resize-none font-normal`} placeholder="Your message"/>
        </div>

        <div className={`absolute w-[150px] h-[30px] leading-[30px] flex flex-row right-2 bottom-2`}>
          <button className={`inline-block absolute right-12 bg-gradient-to-b from-sky-500 via-sky-700 to-sky-900 w-[120px] h-[30px] leading-[30px] rounded-lg shadow-[0_0_2px_1px_#000000] text-sm text-slate-300 text-center hover:text-slate-200 duration-300 hover:ease-in ease-out cursor-pointer hover:bg-gradient-to-t hover:shadow-[0_0_2px_1px_#000000_inset]`}>Reply</button>

          <div className={`inline-block absolute right-2 bg-gradient-to-b from-amber-500 via-amber-700 to-amber-900 w-[30px] h-[30px] leading-[30px] rounded-full shadow-[0_0_2px_1px_#000000] text-sm text-slate-300 text-center hover:text-slate-200 duration-300 hover:ease-in ease-out cursor-pointer hover:bg-gradient-to-t hover:shadow-[0_0_2px_1px_#000000_inset]`}>
            <FontAwesomeIcon icon='face-smile-beam' className={`shadow-[0_0_25px_12px_inset] shadow-black/50 rounded-full relative top-[2px] text-2xl text-amber-600 border-none`} onClick={()=>{setEmoteWindow(!emoteWindow)}}/>
          </div>
          {emoteWindow && (
            <div className={`absolute w-[200px] h-[200px] rounded-lg bg-slate-800 top-10 -right-2 py-2 border-[1px] border-slate-500`}>
              <div className={`w-full h-[98%] overflow-x-hidden overflow-y-scroll grid grid-flow-row auto-rows-max grid-cols-7 gap-1 justify-items-center`}>
                {emojies.map(emote => ( 
                  <span key={emote.id} className={`block w-[25px] h-[25px] leading-[25px] text-center rounded-full cursor-pointer text-sm text-slate-300`}>
                    {emote.emote}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
  return (<>
    <div className={`bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-slate-300 col-span-12 py-[18px] relative `}>
      <div className={`w-[95%] bg-slate-800 sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[75%] h-[790px] mx-auto relative top-2 rounded-lg`}>
        <h2 className="h-[30px] leading-[60px] text-lg w-[50%] font-sans font-semibold mx-auto text-center">
          {chatData[activeChat].name}
        </h2>
        <div className="w-full h-[30px] leading-[25px] ml-[3%] top-[23px] relative z-10 text-slate-300 rounded-xl">
          {Object.values(chatData).map((option, index) => (
            <button key={index} onClick={option.onClick} className={`text-sm bg-gradient-to-t from-slate-900 to-slate-500 rounded-md h-[25px] leading-[25px] ${index !== 0 && 'mx-1'} w-[23%]`}> 
              {option.label} 
            </button>
          ))}
        </div>

        <div className={`w-[94%] mx-auto h-[700px] bg-slate-700/30 relative top-6 rounded-lg flex flex-row`}>
          <div className={`w-[15%] h-[700px] bg-slate-900 relative border-r-[1px] border-slate-500/20 rounded-tl-lg overflow-y-scroll scrollbarWithNone`}>
            <UserList/>
          </div>
          <UserListModal isOpen={userMenu} handleMenuClose={()=>{handleMenuOpen()}}/>


          <div className={`w-[85%] h-[100%] bg-slate-900 relative rounded-tr-lg`}>
            <div className={`w-[98%] h-[573px] relative top-1 left-1 bg-slate-900 overflow-x-hidden overflow-y-scroll`}>

              <label className={`font-sans text-xs font-semibold text-slate-300 inline-block w-[100%] px-3 select-none`}>2023 Sep. 25</label>
                <div className={`w-[95%] h-[100px] mx-auto mt-5 bg-slate-950 rounded-lg select-none`}>
                  <MessageBox/>
                  {modal.reply && (<ReplyModal/>)}
                  {modal.emote && (<EmoteModal/>)}
                  {modal.edit && (<EditModal/>)}
                  {modal.delete && (<DeleteModal/>)}                  
                </div>
            </div>
          {<InputBox />}
        </div>
      </div>
    </div>
  </div>
  </>)
}
export default Chat