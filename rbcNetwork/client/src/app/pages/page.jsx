"use client";
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { emojies } from '../pages/emotes';
import { newsCardItems, reactionsStyle, reactionsAction } from './../localConstants/dataStorage';
const Home = () => {
  const currentTheme = useSelector(state => state.themes.currentTheme)
  const themes = useSelector(state => state.themes.themes);
  const [emotions, setEmotions] = useState({ like: 0, top: 0, quality: 0, team: 0, smart: 0, deal: 0, });
  const [editedReply, setEditedReply] = useState(false);
  const inputRef = useRef(null);
  const user = "User1";
  const copyText = () => {
    navigator.clipboard.writeText(inputRef.current.value)
      .then(() => { setTextCopy(true); })
      .catch(err => { alert('Unable to copy to clipboard', err); });
  };
  const [newsState] = useState([
    { id: 1, d: "2023.08.23", t: "18:30", img: "", type: "Financial news", title: "Dollars Price", web: "Source" },
    { id: 2, d: "2023.08.24", t: "19:29", img: "", type: "Environment news", title: "New species found", web: "Source" },
    { id: 3, d: "2023.08.25", t: "20:28", img: "", type: "Natural news", title: "Earthquake arrival", web: "Source" },
    { id: 4, d: "2023.08.26", t: "21:27", img: "", type: "Political news", title: "President Election", web: "Source" },
    { id: 5, d: "2023.08.27", t: "22:26", img: "", type: "Technology news", title: "AI upgrade", web: "Source" },
    { id: 6, d: "2023.08.27", t: "22:26", img: "", type: "Health news", title: "New medicament testing", web: "Source" },
    { id: 7, d: "2023.08.27", t: "22:26", img: "", type: "Sports news", title: "Club might be sold", web: "Source" },
    { id: 8, d: "2023.08.27", t: "22:26", img: "", type: "International news", title: "Russia increased gas price", web: "Source" },
    { id: 9, d: "2023.08.27", t: "22:26", img: "", type: "National news", title: "Products ban icomming", web: "Source" },
    { id: 10, d: "2023.08.27", t: "22:26", img: "", type: "Local news", title: "Prepare for helloween!", web: "Source" },
    { id: 11, d: "2023.08.27", t: "22:26", img: "", type: "Entertainment news", title: "Singers Tour", web: "Source" },
  ])
  const [posts] = useState([
    {
      id: 1, img: "", text: "post 1", d: "2023.01.01", t: "08:30", author: "User1",
      usersShared: [
        { id: 1, img: "", user: 'user7', },
        { id: 2, img: "", user: 'user1', },
        { id: 3, img: "", user: 'user2', },
        { id: 4, img: "", user: 'user5', },
        { id: 5, img: "", user: 'user21', },
        { id: 6, img: "", user: 'user92', },
      ],
      userCommented: [
        { id: 1, img: "", user: 'user7', comment: "commented1" },
        { id: 2, img: "", user: 'user8', comment: "commented2" },
        { id: 3, img: "", user: 'user9', comment: "commented2" },
        { id: 4, img: "", user: 'user10', comment: "commented2" },
        { id: 5, img: "", user: 'user11', comment: "commented2" },
        { id: 6, img: "", user: 'user12', comment: "commented2" },
      ],
      userReacted: [
        { id: 1, user: "user1", emojiUsed: "Like" },
        { id: 2, user: "user2", emojiUsed: "Top" },
        { id: 3, user: "user3", emojiUsed: 'Quality' },
        { id: 4, user: "user4", emojiUsed: 'Team up' },
        { id: 5, user: "user5", emojiUsed: 'Smart' },
        { id: 6, user: "user6", emojiUsed: 'Deal' },
      ],
      usersRepliedReactions: [
        { id: 1, img: "", user: 'user7', repliedTo: 'user7', reacted: 'like' },
        { id: 2, img: "", user: 'user8', comment: "commented2" },
        { id: 3, img: "", user: 'user9', comment: "commented2" },
        { id: 4, img: "", user: 'user10', comment: "commented2" },
        { id: 5, img: "", user: 'user11', comment: "commented2" },
        { id: 6, img: "", user: 'user12', comment: "commented2" },
      ],
      usersReplied: [
        { id: 1, img: "", user: 'user7', repliedTo: "user7", postID: 1, reply: "replied1" },
        { id: 2, img: "", user: 'user8', reply: "replied2" },
        { id: 3, img: "", user: 'user9', reply: "replied3" },
        { id: 4, img: "", user: 'user10', reply: "replied4" },
        { id: 5, img: "", user: 'user11', reply: "replied5" },
        { id: 6, img: "", user: 'user12', reply: "replied6" },
      ],
      like: [],
      top: [],
      quality: [],
      team: [],
      smart: [],
      deal: [],
    },
    {
      id: 2, img: "img", text: "post 2", d: "2023.02.01", t: "09:31", author: "User2",
      usersShared: [
        { id: 1, img: "", user: 'red', },
        { id: 2, img: "", user: 'blue', },
        { id: 3, img: "", user: 'green', },
        { id: 4, img: "", user: 'brown', },
        { id: 5, img: "", user: 'black', },
        { id: 6, img: "", user: 'white', },
      ],
      like: [],
      top: [],
      quality: [],
      team: [],
      smart: [],
      deal: [],
    },
    { id: 3, img: "img", text: "post 3", d: "2023.03.01", t: "10:32", author: "User3" },
    { id: 4, img: "img", text: "post 4", d: "2023.04.01", t: "11:33", author: "User4" },
    { id: 5, img: "", text: "post 5", d: "2023.05.01", t: "12:34", author: "User5" },
    { id: 6, img: "img", text: "post 6", d: "2023.06.01", t: "13:35", author: "User6" },
    { id: 7, img: "", text: "post 7", d: "2023.07.01", t: "14:36", author: "User6" },
    { id: 8, img: "img", text: "post 8", d: "2023.08.01", t: "15:37", author: "User8" },
    { id: 9, img: "img", text: "post 9", d: "2023.09.01", t: "16:38", author: "User10" },
    { id: 10, img: "", text: "post 10", d: "2023.10.01", t: "17:39", author: "User22" },
  ])
  const [selectedNewsId, setSelectedNewsId] = useState(null);

  const [postActions, setPostActions] = useState({ commented: 0, liked: 0, shared: 0 });
  const handlePostActionsBtns = (postBtnKey, id) => {
    setPostActions(prevSelector => ({ ...prevSelector, [postBtnKey]: id }))
  }
  const handleCounting = () => { }

  const [whoCommented, setWhoCommented] = useState(null);
  const [whoLikedBtn, setWhoLikedBtn] = useState(null);
  const [whoShared, setWhoShared] = useState(null);

  const [postComment, setPostComment] = useState(null);
  const [postShare, setPostShare] = useState(null);
  const [postReactions, setPostReactions] = useState(null);

  const [replyReaction, setReplyReaction] = useState(null);
  const [replyMessage, setReplyMessage] = useState(null);

  const [postReply, setPostReply] = useState(null);
  const [textCopy, setTextCompied] = useState(null);

  const [emoteWindow, setEmoteWindow] = useState(null);

  //Stage first Debugging 

  //end of debugging field.

  const findUsersAction = (postId, type) => {
    const post = posts.find(post => post.id === postId);
    if (!post) return [];

    const userArray = post[type];
    return userArray ? userArray.map(userAction => userAction.user) : [];
  };

  const handleEmotion = (emotionKey) => {
    setEmotions(prevEmotions => ({ ...prevEmotions, [emotionKey]: prevEmotions[emotionKey] + 1 }));
  };

  const handleEmotionClick = (postId, emotionKey) => {
    const postInfo = processPostData(postId);
    if (postInfo && postInfo.emojiCounts[emotionKey]) handleEmotion(emotionKey);
  };

  const NewsCard = ({ news, newsText, headerClass, newsBubbleclass }) => (
    news === newsText && (
      <div className={`${headerClass}`}> {news}
        <div className={`${newsBubbleclass}`}></div>
      </div>
    )
  )
  return (<>
    {selectedNewsId && (
      <div className={`newsModalContainer`}>
        <h2 className={`newsModalHeader`}>
          <FontAwesomeIcon icon="xmark" className={`newsModalIconClose`}
            onClick={() => { selectedNewsId ? setSelectedNewsId(null) : '' }}
          />
          {newsState.find(news => news.id === selectedNewsId).type}
        </h2>

        <div className={`newsModalImgTextHolder`}>
          <img src={newsState.find(news => news.id === selectedNewsId).img} className={`newsModalImg`} />
          <div className={`newsModalText`}>
            {newsState.find(news => news.id === selectedNewsId).title}
          </div>
        </div>

        <div className={`newsModalOpenLinkBtnHolder`}>
          <button className={`newsModalOpenLinkBtn`}> Open Source</button>
        </div>
        <div className={`newsModalDateTimeHolder`}>
          <div className={`newsModalDate`}> {newsState.find(news => news.id === selectedNewsId).d} </div>
          <div className={`newsModalTime`}> {newsState.find(news => news.id === selectedNewsId).t} </div>
        </div>
      </div>
    )}
    {posts.map(post => (postComment === post.id &&
      <div key={post.id} className={`postsCardContainerCommentBtn_Modal`}>

        <h2 className={`postCommentHeader`}>Post Author {post.author}{"'"}s
          <span className={`iconHolder`} onClick={() => { setPostComment(null) }} >
            <FontAwesomeIcon icon='xmark' className={`closeIconPostCommentModal`} />
          </span>
        </h2>

        <div className={`postCommentPostWindow`}>
          {/*information about post */}
          <div className={`postCommentPostHeader`}>
            <img className={`img`} alt="" src={post.img} />
            <div className={`author`}>
              <label className={`name`}>{post.author}</label>
              <label className={`when`}>{post.d} at {post.t}</label>
            </div>
          </div>

          {/*post text or/and image */}
          <div className={`postCommentPostTextWindow`}>
            {post.img == "" ?
              <p className={`postText`}>{post.text}</p> :
              <>
                {/*Post with Image*/}
                <div className={`postWithImg`}>
                  <img src={post.img} className={`postCommentCardContentImg`} />
                  <div className={`postCommentCardContent`}>
                    <h3 className={`postCommentCardContentSource`}>Source</h3>
                    <b className={`postCommentCardContentHeader`}>Header</b>
                    <p className={`postCommentCardContentParagraph`}>Paragraph</p>
                  </div>
                </div>
                <div className={`postWithImgText`}>{post.text} </div>
              </>
            }
          </div>
          {/*react to post and add comment*/}
          <div className={`postCardNav`}>

            <div className={`postCardEmotesNav`}>

              {reactionsStyle.map((button, index) => (
                <label key={index} className={`postCardEmotes`}>
                  {button.icon}
                </label>
              ))}

              <span className={`postCardCommentTotal`}>
                {findUsersAction(post.id, 'userReacted').length}
              </span>

              <ul className={`postShareComment`}>
                <li className={`navShare`}>
                  <span className={`shareSpan`}>
                    {findUsersAction(post.id, 'usersShared').length}
                    <FontAwesomeIcon icon='share' className={`shareIcon`} />
                  </span>
                </li>

                <li className={`navComment`}>
                  <span className={`commentSpan`}>
                    {findUsersAction(post.id, 'userCommented').length}
                    <FontAwesomeIcon icon='comment' className={`commentIcon`} />
                  </span>
                </li>
              </ul>

            </div>

            <div className={`postCardBtnsHolder`}>

              <div className={`postCardLikeBtn`} onClick={() => { setPostReactions(post.id) }}>
                <span className={`iconHolder`}>
                  <FontAwesomeIcon icon="thumbs-up" className={`likeIcon`} />
                </span>
                <span className={`likeText`}>Like</span>
              </div>

              <div className={`postCardCommentBtn`} onClick={() => { setPostReply(!postReply); setReplyMessage(null) }}>
                <span className={`iconHolder`}>
                  <FontAwesomeIcon icon="message" className={`commentIcon`} />
                </span>
                <span className={`commentText`}>Comment</span>
              </div>

              <div className={`postCardShareBtn`} onClick={() => { setPostShare(post.id) }}>
                <span className={`iconHolder`}>
                  <FontAwesomeIcon icon="share" className={`shareIcon`} />
                </span>
                <span className={`shareText`}>Share</span>
              </div>

              {postShare === post.id && (
                <div className={``}>
                  <h2 className={``}>
                    <FontAwesomeIcon icon="close" className={``} onClick={() => { setPostShare(null) }} />Share Post</h2>
                  <label className={``}>Link <span className={``}>...</span>
                    <FontAwesomeIcon icon="copy" className={``} onClick={() => { textCopy ? '' : setTextCompied(!textCopy) }}
                      onMouseLeave={() => { textCopy ? setTextCompied(!textCopy) : '' }} />
                    {textCopy && <span className={``}>Text copied</span>}
                  </label>
                </div>
              )}

              {postReactions === post.id && (
                <div className={``}>
                  {reactionsStyle.map((button, index) => (
                    <label key={index} className={``}>
                      {button.icon && (<FontAwesomeIcon icon={button.icon} className={``} onClick={() => handleReaction[button.icon](prevState => prevState + 1)} />)}
                    </label>
                  ))}
                  <label className={``}>
                    <FontAwesomeIcon icon='close' className={``} onClick={() => { setPostReactions(null) }} />
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
        {/*POST replies*/}
        <div className={`postReplyContainer`}>
          <div className={`postReplyWindow`}>

            <div className={`postReplyContent`}>
              <div className={`postReplyPostInfo`}>
                <img src="" className={`img`} />
                <div className={`postUserInfo`}>
                  <span className={`name`}>Name</span>
                  <p className={`text`}>Text</p>
                </div>
              </div>

              <div className={``}>
                {reactionsStyle.map((button, index) => (
                  <label key={index} className={``}>
                    <FontAwesomeIcon icon={button.icon} className={``} />
                  </label>
                ))}
                <span className={``}>
                  {/*Emote Count*/}
                </span>
              </div>

              <div className={`buttonContainer`}>
                <span className={`whenReply`}>1h</span>
                <div className={`replieBtnContainer`}>
                  <button className={`reactToReplyBtn`}
                    onClick={() => { setReplyReaction(!replyReaction) }}>Like</button>
                  <button className={`replyToReplyBtn`}
                    onClick={() => { setReplyMessage(!replyMessage); setPostReply(null) }}>Reply</button>
                </div>
                {editedReply && (<p>Edited</p>)}
                <div className={`replyReactionsContainer`}>
                  <span className={`replyReactionsCount`}>1000k</span>
                  <div className={`reactionHolder`}>
                    <span className={`replyReactions`}></span>
                  </div>
                </div>
              </div>

            </div>
            <div className={`postReplyOfRepliesContent`}></div>
            <div className={`postReplyOfRepliesContent`}></div>
            <div className={`postReplyOfRepliesContent`}></div>
            <div className={`postReplyOfRepliesContent`}></div>
            <div className={`postReplyOfRepliesContent`}></div>
            <div className={`postReplyContent`}>
              <div className={`postReplyPostInfo`}>
                <img src="" className={`img`} />
                <div className={`postUserInfo`}>
                  <span className={`name`}>Name</span>
                  <p className={`text`}>Text</p>
                </div>
              </div>

              <div className={``}>
                {reactionsStyle.map((button, index) => (
                  <label key={index} className={``}>
                    <FontAwesomeIcon icon={button.icon} className={``} />
                  </label>
                ))}
                <span className={``}>
                  {/*Emote Count*/}
                </span>
              </div>

              <div className={`buttonContainer`}>
                <span className={`whenReply`}>1h</span>
                <div className={`replieBtnContainer`}>
                  <button className={`reactToReplyBtn`}
                    onClick={() => { setReplyReaction(!replyReaction) }}>Like</button>
                  <button className={`replyToReplyBtn`}
                    onClick={() => { setReplyMessage(!replyMessage); setPostReply(null) }}>Reply</button>
                </div>
                {editedReply && (<p>Edited</p>)}
                <div className={`replyReactionsContainer`}>
                  <span className={`replyReactionsCount`}>1000k</span>
                  <div className={`reactionHolder`}>
                    <span className={`replyReactions`}></span>
                  </div>
                </div>
              </div>

            </div>

            {replyReaction && (<div className={`reactionsContainer`}>
              {reactionsStyle.map((button, index) => (
                <label key={index} className={``}>
                  {button.icon && (<FontAwesomeIcon icon={button.icon} className={``}
                    onClick={() => handleEmotion[button.icon](prevState => prevState + 1)} />
                  )}
                </label>
              ))}
              <label className={``}>
                <FontAwesomeIcon icon='close' className={``} onClick={() => { setReplyReaction(null) }} />
              </label>
            </div>
            )}
            {replyMessage && (<div className={`postCommentReplyModal`}>
              <FontAwesomeIcon icon="close" className={``} onClick={() => { setReplyMessage(!replyMessage) }} />
              <img src="" className={``} />
              <div className={``}>
                <label className={``}>Name</label>
                <label className={``}>2023.09.24 at 10:24</label>
              </div>
              <div className={``}> <textarea className={``} placeholder="Your message" /> </div>

              <div className={``}>
                <div className={``}>Reply</div>
                <div className={``} onClick={() => { { setEmoteWindow(!emoteWindow) } }}>
                  <FontAwesomeIcon icon='face-smile-beam' className={``} />
                </div>
                {emoteWindow && (
                  <div className={``}>
                    <div className={``}>
                      {emojies.map(emote => (<span key={emote.id} className={``}>{emote.emote}</span>))}
                    </div>
                  </div>
                )}
              </div>

            </div>
            )}
            {postReply && (<div className={`postCommentReplyCardSection`}>
              <FontAwesomeIcon icon="close" className={``} onClick={() => { setPostReply(!postReply) }} />
              <img src="" className={``} />
              <div className={``}>
                <label className={``}>Name</label>
                <label className={``}>2023.09.24 at 10:24</label>
              </div>
              <div className={``}>
                <textarea className={``} placeholder="Your message" />
              </div>

              <div className={``}>
                <div className={``}>Comment</div>
                <div className={``} onClick={() => { { setEmoteWindow(!emoteWindow) } }}>
                  <FontAwesomeIcon icon='face-smile-beam' className={``} />
                </div>
                {emoteWindow && (
                  <div className={``}>
                    <div className={``}>
                      {emojies.map(emote => (<span key={emote.id} className={``}>{emote.emote}</span>))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    ))}

    {
      <div className={`newsContainer`}>
        <h2 className={`newsPageHeader`}> World events </h2>
        <div className={`newsHolder`}>
          {newsState.map(item => (
            <div key={item.id} className={`newsCard`}>
              {newsCardItems.map((newsHeader, index) => (
                <NewsCard key={index} news={item.type} newsText={`${newsHeader.text} news`}
                  headerClass={`newsCardHeader ${newsHeader.headerStyle}`}
                  newsBubbleclass={`newsBubbleColor ${newsHeader.bubbleStyle}`}
                />
              ))}

              <div className={`newsTitle`}> {item.title} </div>
              <div className={`newsBtnHolder`}>
                <button className={`newsButton`} onClick={() => { setSelectedNewsId(item.id); }}>
                  View more
                </button>
              </div>

              <div className={`newsTimeDateContainer`}>
                <div className={`newsDate`}>{item.d}</div>
                <div className={`newsTime`}>{item.t}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    }

    {/*Posts Card and window*/}
    <div className={`postsContainer`}>
      <h2 className={`postsPageHeader`}> Posts </h2>
      <div className={`postsHolder`}>
        <div className={`postWindow`}>
          {/*Posts Card and window*/}
          <div className={`postsCardContainer`}>
            {posts.map(post => (
              <div key={post.id} className={`postCard`}>
                <div className={`postCardContentWindow`}>
                  <div className={`postCardHeader`}>
                    <img className={`img`} src="" alt="" />
                    <div className={`author`}>
                      <label className={`name`}>{post.author}</label>
                      <label className={`when`}>{post.d} at {post.t}</label>
                    </div>
                    {post.author == user ?
                      <div className={`iconsContainer`}>
                        <FontAwesomeIcon icon='xmark' className={`removeDelete`} />
                      </div>
                      :
                      <div className={`iconsContainerRect`}>
                        <FontAwesomeIcon icon='trash' className={`removeDeleteRect`} />
                      </div>
                    }

                  </div>

                  <div className={`postCardWindow`}>
                    {post.img == "" ?
                      <div className={`postText`}>{post.text}</div> :
                      <>
                        <div className={`postWithImg`}>
                          <img src={`${post.img}`} alt="" className={`postImg`} />
                          <div className={`postOnImgHolder`}>
                            <h3 className={`postImgSource`}>Source</h3>
                            <b className={`postImgHeader`}>Header</b>
                            <p className={`postImgText`}>Paragraph</p>
                          </div>
                        </div>
                        <div className={`postWithImgText`}>{post.text} </div>
                      </>}
                  </div>

                  <div className={`postCardNav`}>
                    <div className={`postCardEmotesNav`}>
                      {reactionsStyle.map(react => (
                        <label key={react.id} className={`postCardEmotes`}>
                          {react.icon}
                        </label>
                      ))}

                      <span className={`postCardEmoteCountNumber`}
                        onMouseEnter={() => { setWhoLikedBtn(post.id) }}
                        onMouseLeave={() => { setWhoLikedBtn(null) }}>
                        {/*Count*/}
                        {findUsersAction(post.id, 'userReacted').length}
                      </span>

                      {whoLikedBtn === post.id &&
                        <div className={`postCardWhoReacted_Modal`}>
                          {posts.map(post => (
                            whoLikedBtn === post.id ? findUsersAction(post.id, 'userReacted').map((user, index) => (
                              <li key={index} className={`postCardUserlist`}>
                                {user}
                              </li>
                            )) : ''))}
                        </div>
                      }

                    </div>
                    <ul className={`navCardShareComment`}>

                      <li className={`navCardShare`}
                        onMouseEnter={() => { setWhoShared(post.id) }}
                        onMouseLeave={() => { setWhoShared(!whoShared) }}>
                        <span className={`shareSpan`}>{findUsersAction(post.id, 'usersShared').length}</span>
                        <FontAwesomeIcon icon='share' className={`shareIcon`} />
                      </li>

                      {whoShared === post.id && (
                        <div className={`postCardWhoShared_Modal`}>
                          {posts.map(post => (whoShared === post.id ?
                            findUsersAction(post.id, 'usersShared').map((user, index) => (
                              <li key={index} className={`postCardUserlist`}>{user}</li>
                            )) : ''
                          ))}
                        </div>
                      )}

                      <li className={`navCardComment`}
                        onMouseEnter={() => { setWhoCommented(post.id) }}
                        onMouseLeave={() => { setWhoCommented(!whoCommented) }}>
                        <span className={`commentSpan`}>
                          {findUsersAction(post.id, 'userCommented').length}
                        </span>
                        <FontAwesomeIcon icon='comment' className={`commentIcon`} />
                      </li>

                      {whoCommented === post.id && (
                        <div className={`postCardWhoCommented_Modal`}>
                          {posts.map(post => (
                            whoCommented === post.id ?
                              findUsersAction(post.id, 'userCommented').map((user, index) => (
                                <li key={index} className={`postCardUserlist`}>{user}</li>)) : ''
                          ))}
                        </div>
                      )}

                    </ul>
                  </div>

                  <div className={`postCardBtnsHolder`}>

                    <li className={`postCardLikeBtn`} onClick={() => { setPostReactions(post.id) }}>
                      <span className={`iconHolder`}>
                        <FontAwesomeIcon icon="thumbs-up" className={`likeIcon`} />
                      </span>
                      <span className={`likeText`}>Like</span>
                    </li>

                    {postReactions === post.id && (
                      <div className={`postCardReactionHolder_Modal`}>
                        {reactionsAction.map((button, index) => (
                          <label key={index} className={`postCardReactionWindow`}>
                            <FontAwesomeIcon icon={button.icon} className={`postCardReactionIcon`}
                              onClick={() => {
                                button.icon == 'close' ? setPostReactions(null)
                                  : handleEmotionClick(post.id, button.emote);
                              }}
                            />
                          </label>
                        ))}
                      </div>
                    )}

                    <li className={`postCardCommentBtn`} onClick={() => { setPostComment(post.id) }}>
                      <span className={`iconHolder`}>
                        <FontAwesomeIcon icon="message" className={`commentIcon`} />
                      </span>
                      <span className={`commentText`}>Comment</span>
                    </li>

                    {postShare === post.id &&
                      <div className={`postCardShareHolder_Modal`}>
                        <h2 className={`postCardShare_ModalHeader`}>
                          <FontAwesomeIcon icon="close" className={`postCardShareCloseIcon_Modal`} onClick={() => { setPostShare(null) }} />Share Post
                        </h2>
                        <label className={`postCardLink_Modal`}>Link
                          <span className={`postCardLinkText_Modal`}>...</span>
                          <FontAwesomeIcon icon="copy" className={`postCardLinkIcon_Modal`}
                            onClick={() => { textCopy ? '' : setTextCompied(!textCopy) }}
                            onMouseLeave={() => { textCopy ? setTextCompied(!textCopy) : '' }}
                          />
                          {textCopy && <span className={`postCardLinkTextCopied_Modal`}>Text copied</span>}
                        </label>
                      </div>}

                    <li className={`postCardShareBtn`} onClick={() => { setPostShare(post.id) }}>
                      <span className={`iconHolder`}>
                        <FontAwesomeIcon icon="share" className={`shareIcon`} />
                      </span>
                      <span className={`shareText`}>Share</span>
                    </li>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>)
}
export default Home