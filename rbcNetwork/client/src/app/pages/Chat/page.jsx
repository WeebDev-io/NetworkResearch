'use client';
import { props } from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '../../Icons';
import { emojies } from '../emotes';
import { users, reactionsAction, messageData, userData } from '../../localConstants/dataStorage'
import { useSelector } from 'react-redux';
const currUserID = 1;
const Chat = () => {
  const currentTheme = useSelector(state => state.themes.currentTheme)

  const [activeChat, setActiveChat] = useState('global');
  const turnChat = (chatType) => { setActiveChat(chatType); }
  const chatData = {
    global: { name: 'Global Chat', onClick: () => turnChat('global') },
    team: { name: 'Team Chat', onClick: () => turnChat('team') },
    friends: { name: 'Friends Chat', onClick: () => turnChat('friends') },
    group: { name: 'Group Chat', onClick: () => turnChat('group') }
  };

  const [modal, setModal] = useState({ reply: false, emote: false, edit: false, delete: false })
  const toggleModal = (modalName) => {
    setModal(prevModal => ({
      ...Object.keys(prevModal).reduce((acc, key) => {
        acc[key] = key === modalName ? !prevModal[key] : false;
        return acc;
      }, {})
    }));
  };

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
  const [select, setSelect] = useState({ user: null, team: null, friend: null, group: null, msg: null })
  const handleSelect = (selectType, id) => { setSelect(prevState => ({ ...prevState, [selectType]: id })); }

  const [msgMenu, setMsgMenu] = useState({ reply: null, react: null, edit: null, delete: null });
  const handleMsgMenu = (selectType, id) => { setSelect(prevState => ({ ...prevState, [selectType]: id })); }

  const [chooseUser, setChooseUser] = useState(null);
  const [userMenu, setUserMenu] = useState(false);

  const handleMenuOpen = (userId) => { setUserMenu(!userMenu); setChooseUser(userId); }

  const [userMenuOpt, setUserMenuOpt] = useState({ blocked: false, friend: false, viewProfile: false, dmUser: false });
  const handleUserMenuOpt = (menuOptType) => {
    setSelect({ ...prevOpt, [menuOptType]: !prevOpt[menuOptType] })
  }
  const [emoteWindow, setEmoteWindow] = useState(false);
  const handleEmoteWindow = () => { emoteWindow ? setEmoteWindow(!emoteWindow) : setEmoteWindow(!emoteWindow) }

  const [emotions, setEmotion] = useState({ like: 0, top: 0, best: 0, teamUP: 0, idea: 0, deal: 0 });
  const handleEmotion = (emotionKey) => {
    setEmotion(prevEmotions => ({ ...prevEmotions, [emotionKey]: prevEmotions[emotionKey] + 1 }));
  };

  const sum = emotions.like + emotions.top + emotions.best + emotions.teamUP + emotions.idea + emotions.deal;

  const [subWindow, setSubWindow] = useState({ save: false, cancel: false, close: false })
  const handleSubWindows = (subWindows) => {
    setSubWindow(prevSubWindow => ({ ...prevSubWindow, [subWindows]: prevSubWindow[subWindows] }));
  }

  const [emotesWindow, setEmotesWindow] = useState({ chat: false, chatMenu: false, chatReply: false });
  const emotesWindowHandler = (emoteWindow) => {
    setEmotesWindow(prevWindow => ({ ...prevWindow, [emoteWindow]: !prevWindow[emoteWindow] }))
  }
  const [groupedMessages, setGroupedMessages] = useState({});
  const allMessages = messageData[0].globalMessages;

  useEffect(() => {
    const messagesByDate = {};
    // Sort messages by date and time
    const sortedMessages = [...allMessages].sort((a, b) => {
      const dateA = new Date(`${a.output[0].date.replace(/\./g, '-')}T${a.output[0].time}:00`);
      const dateB = new Date(`${b.output[0].date.replace(/\./g, '-')}T${b.output[0].time}:00`);
      return dateB - dateA;
    });

    sortedMessages.forEach(messageGroup => {
      messageGroup.output.forEach(message => {
        const { date } = message;
        if (!messagesByDate[date]) { messagesByDate[date] = []; }
        messagesByDate[date].push(message);
      });
    });
    setGroupedMessages(messagesByDate);
  }, [allMessages]);

  //emotes
  const [chatInput, setChatInput] = useState('');
  const chatEmoteRef = useRef([]);
  const handleEmoteClick = (index) => {
    const emoteRef = chatEmoteRef.current[index];
    if (emoteRef) {
      const emoteText = emoteRef.innerText;
      setChatInput(prevContent => prevContent + emoteText);
    }
  };

  return (
    <div className={`chatsContainer`}>
      <h2 className={`chatsHeader`}> {chatData[activeChat].name} </h2>
      <div className={`chatsSwitches`}>
        {Object.values(chatData).map((option, index) => (
          <button key={index} onClick={option.onClick} className={`chatsBtn`}> {option.name} </button>
        ))}
      </div>

      <div className={`chatsWrapper`}>
        <div className={`chatsNav`}>

          {chatData[activeChat].name == 'Global Chat' && (
            <ul className={`chatsNavHolder`}>
              {users.map(data => (
                data.globalUsers.map((user) => (
                  <li key={user.id} className={`chatsNavItem`}>
                    <img src={user.img.src} className={`chatsNavUserImg`} onClick={() => { setSelect('user', user.id) }} />
                    <span className={`chatsNavUserName`}>{user.name}</span>
                  </li>
                ))
              ))}
            </ul>
          )}
          {chatData[activeChat].name == 'Team Chat' && (
            <ul className={`chatsNavHolder`}>
              {userData.map(data => (currUserID == data.id &&
                data.myTeams.map(user => (<>
                  <li key={user.teamId} className={`chatsNavItem`}>
                    <img src={user.teamImg.src} className={`chatsNavUserImg`} />
                    <span className={`chatsNavUserName`}>{user.teamName}</span>
                    <div className={`openChatContainer`} onClick={() => { handleSelect('team', user.teamId) }}>
                      <FontAwesomeIcon icon="far fa-comment-dots" className={`chatIcon`} />
                    </div>
                  </li>

                  {user.members.map(teamData => (
                    <li key={teamData.id} className={`chatsTeamMember `}>
                      <img src={teamData.img.src} className={`chatsTeamMembersImg`} onClick={() => { handleMenuOpen(teamData.memberId); handleSelect('team', user.teamId) }} />
                      <span className={`chatsTeamMembersName`}> {teamData.name}</span>
                    </li>
                  ))}

                </>))
              ))}
            </ul>
          )}
          {chatData[activeChat].name == 'Friends Chat' && (
            <ul className={`chatsNavHolder`}>
              {userData.map(data => (data.id == currUserID && (
                data.myNetwork.map(user => (
                  <li key={user.id} className={`chatsNavItem`}>
                    <img src={user.img} className={`chatsNavUserImg`} onClick={() => { handleMenuOpen(user.id) }} />
                    <span className={`chatsNavUserName`}>{user.name}</span>
                    <div className={`openChatContainer`} onClick={() => { handleSelect('friend', user.id) }}>
                      <FontAwesomeIcon icon="far fa-comment-dots" className={`chatIcon`} />
                    </div>
                  </li>
                ))
              )))}
            </ul>
          )}
          {chatData[activeChat].name == 'Group Chat' && (
            <ul className={`chatsNavHolder`}>
              {userData.map(data => (currUserID == data.id &&
                data.myGroups.map(user => (<>
                  <li key={user.groupId} className={`chatsNavItem`}>
                    <img src={user.groupImg.src} className={`chatsNavUserImg`} />
                    <span className={`chatsNavUserName`}>{user.groupName}</span>
                    <div className={`openChatContainer`} onClick={() => { handleSelect('group', user.groupId) }}>
                      <FontAwesomeIcon icon="far fa-comment-dots" className={`chatIcon`} />
                    </div>
                  </li>

                  {user.members.map(groupData => (
                    <li className={`chatsTeamMember chatsGroupMember`}>
                      <img src={groupData.img.src} className={`chatsTeamMembersImg`} onClick={() => { handleMenuOpen(groupData.memberId); handleSelect('group', user.groupId) }} />
                      <span className={`chatsTeamMembersName`}> {groupData.name}</span>
                    </li>
                  ))}

                </>))
              ))}
            </ul>
          )}

        </div>
        {/*Modal usermenu */}
        {userMenu && chatData[activeChat].name == 'Global Chat' && (
          users.map(data => (data.globalUsers.map(user => (user.id == select.user && (
            <div className={``} key={user.id}>
              <h2 className={``}>
                {user.name}
                <FontAwesomeIcon icon="close" className={``} onClick={() => { handleMenuOpen() }} />
              </h2>
              <ul>
                <li className={`${userMenuOpt.blocked ? '' : ''}`} onClick={() => { handleFriendReq() }}>
                  {userMenuOpt.blocked ? 'You are blocked' : userMenuOpt.friend ? 'Request Sent' : 'Send Request'}
                </li>

                <li className={``} onClick={() => { handleBlocking() }}> {userMenuOpt.blocked ? 'Unblock' : 'Block'} </li>

                <li className={`${userMenuOpt.blocked ? '' : ''}`} onClick={() => { handleViewProfile() }}> {userMenuOpt.blocked ? 'You are blocked' : 'View Profile'} </li>

                <li className={`${userMenuOpt.blocked ? '' : ''}`} onClick={() => { handleDmUser() }}>
                  {userMenuOpt.blocked ? 'You are Blocked' : 'Direct Message'}
                </li>

                {userMenuOpt.viewProfile && (<span className={``}>Profile View</span>)}
                {userMenuOpt.dmUser && (
                  <div className={``}>
                    <FontAwesomeIcon icon="close" className={``} onClick={() => { handleDmUser() }} />
                    <img src={user.img} className={``} />
                    <div className={``}>
                      <label className={``}>{user.name}</label>
                      <label className={``}> 2024.04.15 at 15:24</label>
                    </div>
                    <div className={``}>
                      <textarea className={``} placeholder="Your message" />
                    </div>
                    <div className={``}>
                      <div className={``}>Send DM</div>
                      <div className={``} onClick={() => { handleEmoteWindow() }}>
                        <FontAwesomeIcon icon='face-smile-beam' className={``} />
                      </div>
                      {emoteWindow && (
                        <div className={``}>
                          <div className={``}>
                            {emojies.map(emote => (
                              <span key={emote.id} className={``}>{emote.emote}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </ul>
            </div>
          )))
          ))

        )}
        {userMenu && chatData[activeChat].name == 'Team Chat' && (
          userData.map(data => (data.id == currUserID && (
            data.myTeams.map(member => (member.teamId == select.team && (
              member.members.map(user => (user.memberId == select.group && (
                <div key={user.id} className={``}>
                  <h2 className={``}>
                    {user.name}
                    <FontAwesomeIcon icon="close" className={``} onClick={() => { handleMenuOpen() }} />
                  </h2>
                  <ul>
                    <li className={`${isBlocked ? '' : ''}`} onClick={() => { handleFriendReq() }}>
                      {isBlocked ? 'You are blocked' : isFriend ? 'Request Sent' : 'Send Request'}
                    </li>

                    <li className={``} onClick={() => { handleBlocking() }}> {isBlocked ? 'Unblock' : 'Block'} </li>

                    <li className={`${isBlocked ? '' : ''}`} onClick={() => { handleViewProfile() }}> {isBlocked ? 'You are blocked' : 'View Profile'} </li>

                    <li className={`${isBlocked ? '' : ''}`} onClick={() => { handleDmUser() }}> {isBlocked ? 'You are Blocked' : 'Direct Message'} </li>

                    {viewProfile && (<span className={``}>Profile View</span>)}
                    {dmUser && (
                      <div className={``}>
                        <FontAwesomeIcon icon="close" className={``} onClick={() => { handleDmUser() }} />
                        <img src={user.img} className={``} />
                        <div className={``}>
                          <label className={``}>{user.name}</label>
                          <label className={``}> 2024.04.15 at 15:24</label>
                        </div>
                        <div className={``}>
                          <textarea className={``} placeholder="Your message" />
                        </div>
                        <div className={``}>
                          <div className={``}>Send DM</div>
                          <div className={``} onClick={() => { handleEmoteWindow() }}>
                            <FontAwesomeIcon icon='face-smile-beam' className={``} />
                          </div>
                          {emoteWindow && (
                            <div className={``}>
                              <div className={``}>
                                {emojies.map(emote => (
                                  <span key={emote.id} className={``}>{emote.emote}</span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </ul>
                </div>
              )))
            ))
            )
          )))
        )}
        {userMenu && chatData[activeChat].name == 'Friends Chat' && (
          userData.map(user => user.id == currUserID && (user.myNetwork.map(data => (
            select.user == data.id && (
              <div className={``} key={data.id}>
                <h2 className={``}>
                  {data.name}
                  <FontAwesomeIcon icon="close" className={``} onClick={() => { handleMenuOpen(data.id) }} />
                </h2>
                <ul>
                  <li className={`${userMenuOpt.blocked ? '' : ''}`} onClick={() => { handleFriendReq() }}>
                    {userMenuOpt.blocked ? 'You are blocked' : userMenuOpt.friend ? 'Request Sent' : 'Send Request'}
                  </li>

                  <li className={``} onClick={() => { handleBlocking() }}> {userMenuOpt.blocked ? 'Unblock' : 'Block'} </li>

                  <li className={`${userMenuOpt.blocked ? '' : ''}`} onClick={() => { handleViewProfile() }}> {userMenuOpt.blocked ? 'You are blocked' : 'View Profile'} </li>

                  <li className={`${userMenuOpt.blocked ? '' : ''}`} onClick={() => { handleDmUser() }}> {userMenuOpt.blocked ? 'You are Blocked' : 'Direct Message'} </li>

                  {userMenuOpt.viewProfile && (<span className={``}>Profile View</span>)}
                  {userMenuOpt.dmUser && (
                    <div className={``}>
                      <FontAwesomeIcon icon="close" className={``} onClick={() => { handleDmUser() }} />
                      <img src={user.img} className={``} />
                      <div className={``}>
                        <label className={``}>{user.name}</label>
                        <label className={``}> 2024.04.15 at 15:24</label>
                      </div>
                      <div className={``}>
                        <textarea className={``} placeholder="Your message" />
                      </div>
                      <div className={``}>
                        <div className={``}>Send DM</div>
                        <div className={``} onClick={() => { handleEmoteWindow() }}>
                          <FontAwesomeIcon icon='face-smile-beam' className={``} />
                        </div>
                        {emoteWindow && (
                          <div className={``}>
                            <div className={``}>
                              {emojies.map(emote => (
                                <span key={emote.id} className={``}>{emote.emote}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </ul>
              </div>
            )))
          ))
        )}
        {userMenu && chatData[activeChat].name == 'Group Chat' && (
          userData.map(data => (data.id == currUserID && (
            data.myGroups.map(member => (member.groupId == select.group && (
              member.members.map(user => (user.memberId == select.user && (
                <div key={user.id} className={``}>
                  <h2 className={``}>
                    {user.name}
                    <FontAwesomeIcon icon="close" className={``} onClick={() => { handleMenuOpen() }} />
                  </h2>
                  <ul>
                    <li className={`${isBlocked ? '' : ''}`} onClick={() => { handleFriendReq() }}>
                      {isBlocked ? 'You are blocked' : isFriend ? 'Request Sent' : 'Send Request'}
                    </li>

                    <li className={``} onClick={() => { handleBlocking() }}> {isBlocked ? 'Unblock' : 'Block'} </li>

                    <li className={`${isBlocked ? '' : ''}`} onClick={() => { handleViewProfile() }}> {isBlocked ? 'You are blocked' : 'View Profile'} </li>

                    <li className={`${isBlocked ? '' : ''}`} onClick={() => { handleDmUser() }}> {isBlocked ? 'You are Blocked' : 'Direct Message'} </li>

                    {viewProfile && (<span className={``}>Profile View</span>)}
                    {dmUser && (
                      <div className={``}>
                        <FontAwesomeIcon icon="close" className={``} onClick={() => { handleDmUser() }} />
                        <img src={user.img} className={``} />
                        <div className={``}>
                          <label className={``}>{user.name}</label>
                          <label className={``}> 2024.04.15 at 15:24</label>
                        </div>
                        <div className={``}>
                          <textarea className={``} placeholder="Your message" />
                        </div>
                        <div className={``}>
                          <div className={``}>Send DM</div>
                          <div className={``} onClick={() => { handleEmoteWindow() }}>
                            <FontAwesomeIcon icon='face-smile-beam' className={``} />
                          </div>
                          {emoteWindow && (
                            <div className={``}>
                              <div className={``}>
                                {emojies.map(emote => (
                                  <span key={emote.id} className={``}>{emote.emote}</span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </ul>
                </div>
              )))
            ))
            )
          )))
        )}
        <div className={`chatsFlex`}>

          <div className={`chatsContent`}>

            {Object.keys(groupedMessages).map(date => (<>
              {chatData[activeChat].name == 'Global Chat' && (
                groupedMessages[date].length > 0 ? (
                  groupedMessages[date].map(message => (<>
                    <label className={`chatsDateSeperator`}>{date}</label>
                    <div key={message.msgID} className={`chatsCard`}>

                      <div className={`chatsCardBox`}>
                        <div className={`chatsMessageTop`}>
                          <img src={message.img} className={`chatsCardPhoto`} />
                          <span className={`chatsCardTime`}>{message.time}</span>
                          <span className={`chatsCardName`} title={message.name}>{message.name}</span>
                        </div>

                        <p className={`chatsCardMessage`}>{message.message}</p>

                        <div className={`chatsCardReactionsContainer`}></div>

                        {chatData[activeChat].name == 'Global Chat' && (
                          <ul className={`chatsNavHolder`}>

                            <li className={`chatsCardItem`}>
                              <div className={`reactionIconHolder`} onClick={() => { toggleModal('reply'); handleMsgMenu(message.id) }}>
                                <FontAwesomeIcon icon='reply' className={`chatsIconReply`} />
                              </div>
                            </li>

                            <li className={`chatsCardItem`}>
                              <div className={`reactionIconHolder`} onClick={() => { toggleModal('emote'); handleMsgMenu(message.id) }}>
                                <FontAwesomeIcon icon='far fa-smile' className={`chatsIconEmote`} />
                              </div>
                            </li>

                            <li className={`chatsCardItem`}>
                              <div className={`reactionIconHolder`} onClick={() => { toggleModal('edit'); handleMsgMenu(message.id) }}>
                                <FontAwesomeIcon icon='pencil' className={`chatsIconEdit`} />
                              </div>
                            </li>

                            <li className={`chatsCardItem`}>
                              <div className={`reactionIconHolder`} onClick={() => { toggleModal('delete'); handleMsgMenu(message.id) }}>
                                <FontAwesomeIcon icon='trash' className={`chatsIconDelete`} />
                              </div>
                            </li>
                          </ul>
                        )}
                      </div>

                      {modal.edit && (message.msgID == chooseMsg && (
                        <div className={``}>
                          <textarea className={``}>Message</textarea>

                          <div className={``}>
                            <button className={``} onClick={() => { handleSubWindows('save') }}> Save </button>
                            <button className={``} onClick={() => { handleSubWindows('cancel') }}> Cancel </button>
                            <button className={``} onClick={() => { handleSubWindows('close') }}> Close </button>
                          </div>

                          {subWindow.save && (
                            <div className={``}>
                              <h2 className={``}>
                                Save edited message
                                <FontAwesomeIcon icon='close' className={``} onClick={() => { }} />
                              </h2>
                              <div className={``}>
                                <button className={``} onClick={() => { }}> Yes </button>
                                <button className={``} onClick={() => { }}> No </button>
                              </div>
                            </div>
                          )}
                          {subWindow.cancel && (
                            <div className={``}>
                              <h2 className={``}>
                                Are you sure? You will restore original message
                                <FontAwesomeIcon icon='close' className={``} onClick={() => { }} />
                              </h2>
                              <div className={``}>
                                <button className={``} onClick={() => { }}>Yes</button>
                                <button className={``} onClick={() => { }}>No</button>
                              </div>
                            </div>
                          )}
                          {subWindow.close && (
                            <div className={``}>
                              <h2 className={``}>
                                Edit Window will be closed all information which was edited will be lost. Are you want to Continue?
                                <FontAwesomeIcon icon='close' className={``} onClick={() => { }} />
                              </h2>
                              <div className={``}>
                                <button className={``} onClick={() => { }}>Yes</button>
                                <button className={``} onClick={() => { }}>No</button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                      {modal.emote && (message.msgID == chooseMsg && (
                        <ul className={`${sum < 99 ? '' : ''}`}>
                          {emotions.like !== null && (
                            <li className={``}>
                              <span className={``}> <FontAwesomeIcon icon='thumbs-up' className={``} /> </span>
                              <span className={`${emotions.like < 9 ? '' : ''}`}> {emotions.like} </span>
                            </li>
                          )}
                          {emotions.top !== null && (
                            <li className={``}>
                              <span className={``}> <FontAwesomeIcon icon='medal' className={``} /> </span>
                              <span className={`${emotions.top < 9 ? '' : ''}`}> {emotions.top} </span>
                            </li>
                          )}
                          {emotions.best !== null && (
                            <li className={``}>
                              <span className={``}> <FontAwesomeIcon icon='star' className={``} /> </span>
                              <span className={`${emotions.best < 9 ? '' : ''}`}> {emotions.best} </span>
                            </li>
                          )}
                          {emotions.teamUP !== null && (
                            <li className={``}>
                              <span className={``}> <FontAwesomeIcon icon='people-group' className={``} /> </span>
                              <span className={`${emotions.teamUP < 9 ? '' : ''}`}> {emotions.teamUP} </span>
                            </li>
                          )}
                          {emotions.idea !== null && (
                            <li className={``}>
                              <span className={``}> <FontAwesomeIcon icon='lightbulb' className={``} /> </span>
                              <span className={`${emotions.idea < 9 ? '' : ''}`}> {emotions.idea} </span>
                            </li>
                          )}
                          {emotions.deal !== null && (
                            <li className={``}>
                              <span className={``}> <FontAwesomeIcon icon='handshake' className={``} /> </span>
                              <span className={`${emotions.deal < 9 ? '' : ''}`}> {emotions.deal} </span>
                            </li>
                          )}
                          {modal.emote && (
                            <ul className={``}>
                              {reactionsAction.map((btn, index) => (
                                <span key={index} className={`${btn.spanBG}`} onClick={() => { handleEmotion(btn.action) }}>
                                  <FontAwesomeIcon icon={btn.icon} className={``} />
                                </span>
                              ))}
                            </ul>
                          )}
                          <label className={`${sum < 99 ? `` : ``}`}>
                            {sum < 1000 ? sum : sum < 10000 ? (num / 1000).toFixed(1) + 'k' : sum > 100000 ? (num / 1000).toFixed(0) + 'k' : ''}
                          </label>
                        </ul>
                      ))}
                      {modal.reply && (message.msgID == chooseMsg && (
                        messageData.map(data => (
                          data.globalMessages.map(msgData => (
                            msgData.output.map(msg => (chooseMsg == msg.id && (
                              <div key={msg.msgID} className={``} >
                                <span className={``}> <FontAwesomeIcon icon="close" className={``} onClick={() => { toggleModal('reply'); }} /> </span>
                                <img src={msg.img} className={``} />

                                <div className={``}>
                                  <label className={``}>{msg.name}</label>
                                  <label className={``}> {msg.date} at {msg.time} </label>
                                </div>
                                <div className={``}> <textarea className={``} placeholder="Your message" /> </div>

                                <div className={``}>
                                  <button className={``}>Reply</button>

                                  <div className={``}>
                                    <FontAwesomeIcon icon='face-smile-beam' className={``} onClick={() => { }} />
                                  </div>
                                  {emotesWindow.chatReply && (
                                    <div className={``}>
                                      <div className={``}> {emojies.map(emote => (<span key={emote.id} className={``}> {emote.emote} </span>))} </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )))
                          ))
                        ))
                      ))}
                      {modal.delete && (message.msgID == chooseMsg && (
                        <div className={``}>
                          <h2 className={``}> This message will be deleted completely. Are you want to Continue?
                            <FontAwesomeIcon icon='close' className={``} />
                          </h2>
                          <div className={``}> <button className={``}>Yes</button>  <button className={``}>No</button> </div>
                        </div>
                      ))}
                    </div>
                  </>)

                  )) : ''
              )}
            </>))}

            {chatData[activeChat].name == 'Team Chat' && userData.map(user =>
              user.id == currUserID && user.myTeams.map(team => team.teamId == select.team &&
                (team.messages.map(message => {
                  const member = team.members.find(member => member.memberId === message.senderId);

                  if (member) {
                    return (<>
                      <label className={`chatsDateSeperator`}> {message.date}</label>
                      <div key={`${message.msgId}`} className={`chatsCard`}>
                        <div className={`chatsCardBox`}>
                          <div className={`chatsMessageTop`}>
                            <img src={member.img} className={`chatsCardPhoto`} />
                            <span className={`chatsCardTime`}>{message.time}</span>
                            <span className={`chatsCardName`} title={member.name}>{member.name} </span>
                          </div>
                          <p className={`chatsCardMessage`}>{message.message}</p>
                          <div className={`chatsCardReactionsContainer`}></div>

                          {chatData[activeChat].name == 'Team Chat' && (
                            <ul className={`chatsNavHolder`}>

                              <li className={`chatsCardItem`}>
                                <div className={`reactionIconHolder`} onClick={() => { toggleModal('reply'); handleMsgMenu(message.msgId) }}>
                                  <FontAwesomeIcon icon='reply' className={`chatsIconReply`} />
                                </div>
                              </li>

                              <li className={`chatsCardItem`}>
                                <div className={`reactionIconHolder`} onClick={() => { toggleModal('emote'); handleMsgMenu(message.msgId) }}>
                                  <FontAwesomeIcon icon='far fa-smile' className={`chatsIconEmote`} />
                                </div>
                              </li>

                              <li className={`chatsCardItem`}>
                                <div className={`reactionIconHolder`} onClick={() => { toggleModal('edit'); handleMsgMenu(message.msgId) }}>
                                  <FontAwesomeIcon icon='pencil' className={`chatsIconEdit`} />
                                </div>
                              </li>

                              <li className={`chatsCardItem`}>
                                <div className={`reactionIconHolder`} onClick={() => { toggleModal('delete'); handleMsgMenu(message.msgId) }}>
                                  <FontAwesomeIcon icon='trash' className={`chatsIconDelete`} />
                                </div>
                              </li>
                            </ul>
                          )}
                        </div>
                        {modal.edit && (message.msgId == chooseMsg && (
                          <div className={``}>
                            <textarea className={``}>Message</textarea>

                            <div className={``}>
                              <button className={``} onClick={() => { handleSubWindows('save') }}> Save </button>
                              <button className={``} onClick={() => { handleSubWindows('cancel') }}> Cancel </button>
                              <button className={``} onClick={() => { handleSubWindows('close') }}> Close </button>
                            </div>


                            {subWindow.save && (
                              <div className={``}>
                                <h2 className={``}>
                                  Save edited message
                                  <FontAwesomeIcon icon='close' className={``} onClick={() => { }} />
                                </h2>
                                <div className={``}>
                                  <button className={``} onClick={() => { }}> Yes </button>
                                  <button className={``} onClick={() => { }}> No </button>
                                </div>
                              </div>
                            )}
                            {subWindow.cancel && (
                              <div className={``}>
                                <h2 className={``}>
                                  Are you sure? You will restore original message
                                  <FontAwesomeIcon icon='close' className={``} onClick={() => { }} />
                                </h2>
                                <div className={``}>
                                  <button className={``} onClick={() => { }}>Yes</button>
                                  <button className={``} onClick={() => { }}>No</button>
                                </div>
                              </div>
                            )}
                            {subWindow.close && (
                              <div className={``}>
                                <h2 className={``}>
                                  Edit Window will be closed all information which was edited will be lost. Are you want to Continue?
                                  <FontAwesomeIcon icon='close' className={``} onClick={() => { }} />
                                </h2>
                                <div className={``}>
                                  <button className={``} onClick={() => { }}>Yes</button>
                                  <button className={``} onClick={() => { }}>No</button>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                        {modal.emote && (message.msgId == chooseMsg && (
                          <ul className={`${sum < 99 ? '' : ''}`}>
                            {emotions.like !== null && (
                              <li className={``}>
                                <span className={``}> <FontAwesomeIcon icon='thumbs-up' className={``} /> </span>
                                <span className={`${emotions.like < 9 ? '' : ''}`}> {emotions.like} </span>
                              </li>
                            )}
                            {emotions.top !== null && (
                              <li className={``}>
                                <span className={``}> <FontAwesomeIcon icon='medal' className={``} /> </span>
                                <span className={`${emotions.top < 9 ? '' : ''}`}> {emotions.top} </span>
                              </li>
                            )}
                            {emotions.best !== null && (
                              <li className={``}>
                                <span className={``}> <FontAwesomeIcon icon='star' className={``} /> </span>
                                <span className={`${emotions.best < 9 ? '' : ''}`}> {emotions.best} </span>
                              </li>
                            )}
                            {emotions.teamUP !== null && (
                              <li className={``}>
                                <span className={``}> <FontAwesomeIcon icon='people-group' className={``} /> </span>
                                <span className={`${emotions.teamUP < 9 ? '' : ''}`}> {emotions.teamUP} </span>
                              </li>
                            )}
                            {emotions.idea !== null && (
                              <li className={``}>
                                <span className={``}> <FontAwesomeIcon icon='lightbulb' className={``} /> </span>
                                <span className={`${emotions.idea < 9 ? '' : ''}`}> {emotions.idea} </span>
                              </li>
                            )}
                            {emotions.deal !== null && (
                              <li className={``}>
                                <span className={``}> <FontAwesomeIcon icon='handshake' className={``} /> </span>
                                <span className={`${emotions.deal < 9 ? '' : ''}`}> {emotions.deal} </span>
                              </li>
                            )}
                            {modal.emote && (
                              <ul className={``}>
                                {reactionsAction.map((btn, index) => (
                                  <span key={index} className={`${btn.spanBG}`} onClick={() => { handleEmotion(btn.action) }}>
                                    <FontAwesomeIcon icon={btn.icon} className={``} />
                                  </span>
                                ))}
                              </ul>
                            )}
                            <label className={`${sum < 99 ? `` : ``}`}>
                              {sum < 1000 ? sum : sum < 10000 ? (num / 1000).toFixed(1) + 'k' : sum > 100000 ? (num / 1000).toFixed(0) + 'k' : ''}
                            </label>
                          </ul>
                        ))}
                        {modal.reply && (message.msgId == chooseMsg && (
                          messageData.map(data => (
                            data.globalMessages.map(msgData => (
                              msgData.output.map(msg => (chooseMsg == msg.id && (
                                <div key={msg.msgID} className={``} >
                                  <span className={``}> <FontAwesomeIcon icon="close" className={``} onClick={() => { toggleModal('reply'); }} /> </span>
                                  <img src={msg.img} className={``} />

                                  <div className={``}>
                                    <label className={``}>{msg.name}</label>
                                    <label className={``}> {msg.date} at {msg.time} </label>
                                  </div>
                                  <div className={``}> <textarea className={``} placeholder="Your message" /> </div>

                                  <div className={``}>
                                    <button className={``}>Reply</button>

                                    <div className={``}>
                                      <FontAwesomeIcon icon='face-smile-beam' className={``} onClick={() => { }} />
                                    </div>
                                    {emotesWindow.chatReply && (
                                      <div className={``}>
                                        <div className={``}> {emojies.map(emote => (<span key={emote.id} className={``}> {emote.emote} </span>))} </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )))
                            ))
                          ))
                        ))}
                        {modal.delete && (message.msgId == chooseMsg && (
                          <div className={``}>
                            <h2 className={``}> This message will be deleted completely. Are you want to Continue?
                              <FontAwesomeIcon icon='close' className={``} />
                            </h2>
                            <div className={``}> <button className={``}>Yes</button>  <button className={``}>No</button> </div>
                          </div>
                        ))}
                      </div>
                    </>)
                  }
                  return (
                    <p className={`noMessages`}>
                      <span className={`errorType`}>No Messages in</span>
                      <span className={`noMessageIn team`}>{team.teamName}</span>
                    </p>
                  );
                }))
              )
            )}

            {chatData[activeChat].name == 'Friends Chat' && userData.map(user => user.id == currUserID &&
              user.myNetwork.map(network => network.id == select.friend &&
                (network.messages.map(message => {
                  if (Object.keys(message).length > 0) {
                    return (<>
                      <label key={message.msgId} className={`chatsDateSeperator`}>{message.date}</label>

                      <div key={message.name} className={`chatsCard`}>
                        <div className={`chatsCardBox`}>
                          <div className={`chatsMessageTop`}>
                            <img src={network.img} className={`chatsCardPhoto`} />
                            <span className={`chatsCardTime`}>{message.time}</span>

                            <span className={`chatsCardName`}
                              title={`${message.senderId == network.id ?
                                `${network.name}` : ''}${message.senderId == currUserID ? user.user : ''}`
                              }>
                              {message.senderId == network.id ? network.name : ''}
                              {message.senderId == currUserID ? user.user : ''}
                            </span>
                          </div>
                          <p className={`chatsCardMessage`}>{message.message}</p>
                          <div className={`chatsCardReactionsContainer`}></div>
                          <ul className={`chatsNavHolder`}>

                            <li className={`chatsCardItem`}>
                              <div className={`reactionIconHolder`}
                                onClick={() => alert(testHandle(message.msgId))}>
                                <FontAwesomeIcon icon='reply' className={`chatsIconReply`} />
                              </div>
                            </li>

                            <li className={`chatsCardItem`}>
                              <div className={`reactionIconHolder`} onClick={() => { toggleModal('emote'); handleMsgMenu(message.id) }}>
                                <FontAwesomeIcon icon='far fa-smile' className={`chatsIconEmote`} />
                              </div>
                            </li>

                            <li className={`chatsCardItem`}>
                              <div className={`reactionIconHolder`} onClick={() => { toggleModal('edit'); handleMsgMenu(message.id) }}>
                                <FontAwesomeIcon icon='pencil' className={`chatsIconEdit`} />
                              </div>
                            </li>

                            <li className={`chatsCardItem`}>
                              <div className={`reactionIconHolder`} onClick={() => { toggleModal('delete'); handleMsgMenu(message.id) }}>
                                <FontAwesomeIcon icon='trash' className={`chatsIconDelete`} />
                              </div>
                            </li>
                          </ul>
                        </div>
                        {modal.edit && (message.msgId == chooseMsg && (
                          <div className={``}>
                            <textarea className={``}>Message</textarea>

                            <div className={``}>
                              <button className={``} onClick={() => { handleSubWindows('save') }}> Save </button>
                              <button className={``} onClick={() => { handleSubWindows('cancel') }}> Cancel </button>
                              <button className={``} onClick={() => { handleSubWindows('close') }}> Close </button>
                            </div>


                            {subWindow.save && (
                              <div className={``}>
                                <h2 className={``}>
                                  Save edited message
                                  <FontAwesomeIcon icon='close' className={``} onClick={() => { }} />
                                </h2>
                                <div className={``}>
                                  <button className={``} onClick={() => { }}> Yes </button>
                                  <button className={``} onClick={() => { }}> No </button>
                                </div>
                              </div>
                            )}
                            {subWindow.cancel && (
                              <div className={``}>
                                <h2 className={``}>
                                  Are you sure? You will restore original message
                                  <FontAwesomeIcon icon='close' className={``} onClick={() => { }} />
                                </h2>
                                <div className={``}>
                                  <button className={``} onClick={() => { }}>Yes</button>
                                  <button className={``} onClick={() => { }}>No</button>
                                </div>
                              </div>
                            )}
                            {subWindow.close && (
                              <div className={``}>
                                <h2 className={``}>
                                  Edit Window will be closed all information which was edited will be lost. Are you want to Continue?
                                  <FontAwesomeIcon icon='close' className={``} onClick={() => { }} />
                                </h2>
                                <div className={``}>
                                  <button className={``} onClick={() => { }}>Yes</button>
                                  <button className={``} onClick={() => { }}>No</button>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                        {modal.emote && (message.msgId == chooseMsg && (
                          <ul className={`${sum < 99 ? '' : ''}`}>
                            {emotions.like !== null && (
                              <li className={``}>
                                <span className={``}> <FontAwesomeIcon icon='thumbs-up' className={``} /> </span>
                                <span className={`${emotions.like < 9 ? '' : ''}`}> {emotions.like} </span>
                              </li>
                            )}
                            {emotions.top !== null && (
                              <li className={``}>
                                <span className={``}> <FontAwesomeIcon icon='medal' className={``} /> </span>
                                <span className={`${emotions.top < 9 ? '' : ''}`}> {emotions.top} </span>
                              </li>
                            )}
                            {emotions.best !== null && (
                              <li className={``}>
                                <span className={``}> <FontAwesomeIcon icon='star' className={``} /> </span>
                                <span className={`${emotions.best < 9 ? '' : ''}`}> {emotions.best} </span>
                              </li>
                            )}
                            {emotions.teamUP !== null && (
                              <li className={``}>
                                <span className={``}> <FontAwesomeIcon icon='people-group' className={``} /> </span>
                                <span className={`${emotions.teamUP < 9 ? '' : ''}`}> {emotions.teamUP} </span>
                              </li>
                            )}
                            {emotions.idea !== null && (
                              <li className={``}>
                                <span className={``}> <FontAwesomeIcon icon='lightbulb' className={``} /> </span>
                                <span className={`${emotions.idea < 9 ? '' : ''}`}> {emotions.idea} </span>
                              </li>
                            )}
                            {emotions.deal !== null && (
                              <li className={``}>
                                <span className={``}> <FontAwesomeIcon icon='handshake' className={``} /> </span>
                                <span className={`${emotions.deal < 9 ? '' : ''}`}> {emotions.deal} </span>
                              </li>
                            )}
                            {modal.emote && (
                              <ul className={``}>
                                {reactionsAction.map((btn, index) => (
                                  <span key={index} className={`${btn.spanBG}`} onClick={() => { handleEmotion(btn.action) }}>
                                    <FontAwesomeIcon icon={btn.icon} className={``} />
                                  </span>
                                ))}
                              </ul>
                            )}
                            <label className={`${sum < 99 ? `` : ``}`}>
                              {sum < 1000 ? sum : sum < 10000 ? (num / 1000).toFixed(1) + 'k' : sum > 100000 ? (num / 1000).toFixed(0) + 'k' : ''}
                            </label>
                          </ul>
                        ))}
                        {modal.reply && (message.msgId == chooseMsg && (
                          messageData.map(data => (
                            data.globalMessages.map(msgData => (
                              msgData.output.map(msg => (chooseMsg == msg.id && (
                                <div key={msg.msgID} className={``} >
                                  <span className={``}> <FontAwesomeIcon icon="close" className={``} onClick={() => { toggleModal('reply'); }} /> </span>
                                  <img src={msg.img} className={``} />

                                  <div className={``}>
                                    <label className={``}>{msg.name}</label>
                                    <label className={``}> {msg.date} at {msg.time} </label>
                                  </div>
                                  <div className={``}> <textarea className={``} placeholder="Your message" /> </div>

                                  <div className={``}>
                                    <button className={``}>Reply</button>

                                    <div className={``}>
                                      <FontAwesomeIcon icon='face-smile-beam' className={``} onClick={() => { }} />
                                    </div>
                                    {emotesWindow.chatReply && (
                                      <div className={``}>
                                        <div className={``}> {emojies.map(emote => (<span key={emote.id} className={``}> {emote.emote} </span>))} </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )))
                            ))
                          ))
                        ))}
                        {modal.delete && (message.msgId == chooseMsg && (
                          <div className={``}>
                            <h2 className={``}> This message will be deleted completely. Are you want to Continue?
                              <FontAwesomeIcon icon='close' className={``} />
                            </h2>
                            <div className={``}> <button className={``}>Yes</button>  <button className={``}>No</button> </div>
                          </div>
                        ))}
                      </div>
                    </>)
                  }
                  return (
                    <p className={`noMessages`}>
                      <span className={`errorType`}>No Messages between</span>
                      <span className={`noMessageIn friends`}>{user.user} & {network.name}</span>
                    </p>)
                })
                )))
            }

            {chatData[activeChat].name == 'Group Chat' && userData.map(user =>
              user.id == currUserID && user.myGroups.map(group =>
                group.groupId == select.group && (group.messages.map(message => {
                  const member = group.members.find(member => member.memberId === message.senderId);
                  if (member) {
                    return (<>
                      <label className={`chatsDateSeperator`}>{message.date}</label>
                      <div key={message.msgId} className={`chatsCard`}>
                        <div className={`chatsCardBox`}>
                          <div className={`chatsMessageTop`}>
                            <img src={member.img} className={`chatsCardPhoto`} />
                            <span className={`chatsCardTime`}>{message.time}</span>
                            <span className={`chatsCardName`} title={member.name}>{member.name}</span>
                          </div>
                          <p className={`chatsCardMessage`}>{message.message}</p>
                          <div className={`chatsCardReactionsContainer`}></div>
                          {chatData[activeChat].name == 'Group Chat' && (
                            <ul className={`chatsNavHolder`}>

                              <li className={`chatsCardItem`}>
                                <div className={`reactionIconHolder`} onClick={() => { toggleModal('reply'); handleMsgMenu(message.msgId) }}>
                                  <FontAwesomeIcon icon='reply' className={`chatsIconReply`} />
                                </div>
                              </li>

                              <li className={`chatsCardItem`}>
                                <div className={`reactionIconHolder`} onClick={() => { toggleModal('emote'); handleMsgMenu(message.msgId) }}>
                                  <FontAwesomeIcon icon='far fa-smile' className={`chatsIconEmote`} />
                                </div>
                              </li>

                              <li className={`chatsCardItem`}>
                                <div className={`reactionIconHolder`} onClick={() => { toggleModal('edit'); handleMsgMenu(message.msgId) }}>
                                  <FontAwesomeIcon icon='pencil' className={`chatsIconEdit`} />
                                </div>
                              </li>

                              <li className={`chatsCardItem`}>
                                <div className={`reactionIconHolder`} onClick={() => { toggleModal('delete'); handleMsgMenu(message.id) }}>
                                  <FontAwesomeIcon icon='trash' className={`chatsIconDelete`} />
                                </div>
                              </li>
                            </ul>
                          )}
                        </div>
                        {modal.edit && (message.msgID == chooseMsg && (
                          <div className={``}>
                            <textarea className={``}>Message</textarea>

                            <div className={``}>
                              <button className={``} onClick={() => { }}> Save </button>
                              <button className={``} onClick={() => { }}> Cancel </button>
                              <button className={``} onClick={() => { }}> Close </button>
                            </div>

                            {subWindow.save && (
                              <div className={``}>
                                <h2 className={``}>
                                  Save edited message
                                  <FontAwesomeIcon icon='close' className={``} onClick={() => { }} />
                                </h2>
                                <div className={``}>
                                  <button className={``} onClick={() => { }}> Yes </button>
                                  <button className={``} onClick={() => { }}> No </button>
                                </div>
                              </div>
                            )}
                            {subWindow.cancel && (
                              <div className={``}>
                                <h2 className={``}>
                                  Are you sure? You will restore original message
                                  <FontAwesomeIcon icon='close' className={``} onClick={() => { }} />
                                </h2>
                                <div className={``}>
                                  <button className={``} onClick={() => { }}>Yes</button>
                                  <button className={``} onClick={() => { }}>No</button>
                                </div>
                              </div>
                            )}
                            {subWindow.close && (
                              <div className={``}>
                                <h2 className={``}>
                                  Edit Window will be closed all information which was edited will be lost. Are you want to Continue?
                                  <FontAwesomeIcon icon='close' className={``} onClick={() => { }} />
                                </h2>
                                <div className={``}>
                                  <button className={``} onClick={() => { }}>Yes</button>
                                  <button className={``} onClick={() => { }}>No</button>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                        {modal.emote && (message.msgID == chooseMsg && (
                          <ul className={`${sum < 99 ? '' : ''}`}>
                            {emotions.like !== null && (
                              <li className={``}>
                                <span className={``}> <FontAwesomeIcon icon='thumbs-up' className={``} /> </span>
                                <span className={`${emotions.like < 9 ? '' : ''}`}> {emotions.like} </span>
                              </li>
                            )}
                            {emotions.top !== null && (
                              <li className={``}>
                                <span className={``}> <FontAwesomeIcon icon='medal' className={``} /> </span>
                                <span className={`${emotions.top < 9 ? '' : ''}`}> {emotions.top} </span>
                              </li>
                            )}
                            {emotions.best !== null && (
                              <li className={``}>
                                <span className={``}> <FontAwesomeIcon icon='star' className={``} /> </span>
                                <span className={`${emotions.best < 9 ? '' : ''}`}> {emotions.best} </span>
                              </li>
                            )}
                            {emotions.teamUP !== null && (
                              <li className={``}>
                                <span className={``}> <FontAwesomeIcon icon='people-group' className={``} /> </span>
                                <span className={`${emotions.teamUP < 9 ? '' : ''}`}> {emotions.teamUP} </span>
                              </li>
                            )}
                            {emotions.idea !== null && (
                              <li className={``}>
                                <span className={``}> <FontAwesomeIcon icon='lightbulb' className={``} /> </span>
                                <span className={`${emotions.idea < 9 ? '' : ''}`}> {emotions.idea} </span>
                              </li>
                            )}
                            {emotions.deal !== null && (
                              <li className={``}>
                                <span className={``}> <FontAwesomeIcon icon='handshake' className={``} /> </span>
                                <span className={`${emotions.deal < 9 ? '' : ''}`}> {emotions.deal} </span>
                              </li>
                            )}
                            {modal.emote && (
                              <ul className={``}>
                                {reactionsAction.map((btn, index) => (
                                  <span key={index} className={`${btn.spanBG}`} onClick={() => { handleEmotion(btn.action) }}>
                                    <FontAwesomeIcon icon={btn.icon} className={``} />
                                  </span>
                                ))}
                              </ul>
                            )}
                            <label className={`${sum < 99 ? `` : ``}`}>
                              {sum < 1000 ? sum : sum < 10000 ? (num / 1000).toFixed(1) + 'k' : sum > 100000 ? (num / 1000).toFixed(0) + 'k' : ''}
                            </label>
                          </ul>
                        ))}
                        {modal.reply && (message.msgID == chooseMsg && (
                          messageData.map(data => (
                            data.globalMessages.map(msgData => (
                              msgData.output.map(msg => (chooseMsg == msg.id && (
                                <div key={msg.msgID} className={``} >
                                  <span className={``}> <FontAwesomeIcon icon="close" className={``} onClick={() => { toggleModal('reply'); }} /> </span>
                                  <img src={msg.img} className={``} />

                                  <div className={``}>
                                    <label className={``}>{msg.name}</label>
                                    <label className={``}> {msg.date} at {msg.time} </label>
                                  </div>
                                  <div className={``}> <textarea className={``} placeholder="Your message" /> </div>

                                  <div className={``}>
                                    <button className={``}>Reply</button>

                                    <div className={``}>
                                      <FontAwesomeIcon icon='face-smile-beam' className={``} onClick={() => { }} />
                                    </div>
                                    {emotesWindow.chatReply && (
                                      <div className={``}>
                                        <div className={``}> {emojies.map(emote => (<span key={emote.id} className={``}> {emote.emote} </span>))} </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )))
                            ))
                          ))
                        ))}
                        {modal.delete && (message.msgID == chooseMsg && (
                          <div className={``}>
                            <h2 className={``}> This message will be deleted completely. Are you want to Continue?
                              <FontAwesomeIcon icon='close' className={``} />
                            </h2>
                            <div className={``}> <button className={``}>Yes</button>  <button className={``}>No</button> </div>
                          </div>
                        ))}
                      </div>
                    </>)
                  }
                  return (<p className={`noMessages`}>
                    <span className={`errorType`}>No Messages in</span>
                    <span className={`noMessageIn group`}>{group.groupName}</span>
                  </p>);
                }))
              )
            )}
          </div>
          {/*Input box */}
          <div className={`chatsInputHolder`}>
            <textarea className={`chatsInputArea`} placeholder='Type your message here...' value={chatInput}
              onChange={(e) => { setChatInput(e.target.value) }} />

            <div className={`chatsBtnContainer`}>
              <button className={`chatsSendBtn`} onClick={() => { handleMessages }}>
                Send <FontAwesomeIcon icon="paper-plane" className={`sendIcon`} />
              </button>
              <button className={`chatsEmoteBtn`} onClick={() => { emotesWindowHandler('chat') }}>
                Emotes <FontAwesomeIcon icon="face-laugh" className={`emoteIcon`} />
              </button>
            </div>

            {emotesWindow.chat && (
              <div className={`chatsEmoteContainer`}>
                <div className={`chatsEmoteContent`}> {
                  emojies.map(emote => (
                    <span key={emote.id} className={`chatsEmotes`} ref={el => chatEmoteRef.current[emote.id] = el}
                      onClick={() => { handleEmoteClick(emote.id); emotesWindowHandler('chat') }}>
                      {emote.emote}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div >
  )
}
export default Chat