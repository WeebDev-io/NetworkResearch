"use client";
/* eslint-disable react/prop-types */
import { useState,useRef} from 'react'
import Link from 'next/link';
import {useSelector } from 'react-redux';
import { FontAwesomeIcon } from '../Icons';
import NewsCard from '../components/NewsCard';
import {emojies} from './emotes';
import Posts from '../components/Posts';

const reactionsStyle = [
  {bg:"bg-sky-600/90",icon:'thumbs-up'},
  {bg:"bg-rose-600/90",icon:'medal'},
  {bg:"bg-amber-600",icon:'star'},
  {bg:"bg-green-600/90",icon:'people-group'},
  {bg:"bg-yellow-600/90",icon:'lightbulb'},
  {bg:"bg-blue-600/90",icon:'handshake'},
]
const Home = () => {
  const currentTheme = useSelector(state =>{ return state.rootReducer.themes.currentTheme});
  const themes = useSelector(state => {return state.rootReducer.themes.themes});
  const [like,setLike] = useState(0);
  const [top,setTop] = useState(0);
  const [quality,setQuality] = useState(0);
  const [team,setTeam] = useState(0);
  const [smart,setSmart] = useState(0);
  const [deal,setDeal] = useState(0);
  const inputRef = useRef(null);
  const copyText = () => {
    navigator.clipboard.writeText(inputRef.current.value)
      .then(() => { setTextCopy(true);})
      .catch(err => {alert('Unable to copy to clipboard', err);});
  };
  const [newsState] = useState([
    {id:1,d:"2023.08.23",t:"18:30",img:"",type:"Financial news",title:"Dollars Price",web:"Source"},
    {id:2,d:"2023.08.24",t:"19:29",img:"",type:"Environment news",title:"New species found",web:"Source"},
    {id:3,d:"2023.08.25",t:"20:28",img:"",type:"Natural news",title:"Earthquake arrival",web:"Source"},
    {id:4,d:"2023.08.26",t:"21:27",img:"",type:"Political news",title:"President Election",web:"Source"},
    {id:5,d:"2023.08.27",t:"22:26",img:"",type:"Technology news",title:"AI upgrade",web:"Source"},
    {id:6,d:"2023.08.27",t:"22:26",img:"",type:"Health news",title:"New medicament testing",web:"Source"},
    {id:7,d:"2023.08.27",t:"22:26",img:"",type:"Sports news",title:"Club might be sold",web:"Source"},
    {id:8,d:"2023.08.27",t:"22:26",img:"",type:"International news",title:"Russia increased gas price",web:"Source"},
    {id:9,d:"2023.08.27",t:"22:26",img:"",type:"National news",title:"Products ban icomming",web:"Source"},
    {id:10,d:"2023.08.27",t:"22:26",img:"",type:"Local news",title:"Prepare for helloween!",web:"Source"},
    {id:11,d:"2023.08.27",t:"22:26",img:"",type:"Entertainment news",title:"Singers Tour",web:"Source"},
  ])
  const [posts] = useState([
    {id:1,img:"",text:"post 1",d:"2023.01.01",t:"08:30",author:"User1",
      usersShared:[
        {id:1,img:"",user:'user7',},
        {id:2,img:"",user:'user1',},
        {id:3,img:"",user:'user2',},
        {id:4,img:"",user:'user5',},
        {id:5,img:"",user:'user21',},
        {id:6,img:"",user:'user92',},
      ],
      userCommented:[
        {id:1,img:"",user:'user7',comment:"commented1"},
        {id:2,img:"",user:'user8',comment:"commented2"},
        {id:3,img:"",user:'user9',comment:"commented2"},
        {id:4,img:"",user:'user10',comment:"commented2"},
        {id:5,img:"",user:'user11',comment:"commented2"},
        {id:6,img:"",user:'user12',comment:"commented2"},
      ],
      userReacted:[
        {id:1,user:"user1",emojiUsed:"Like"},
        {id:2,user:"user2",emojiUsed:"Top"},
        {id:3,user:"user3",emojiUsed:'Quality'},
        {id:4,user:"user4",emojiUsed:'Team up'},
        {id:5,user:"user5",emojiUsed:'Smart'},
        {id:6,user:"user6",emojiUsed:'Deal'},
      ],
      usersRepliedReactions:[
        {id:1,img:"",user:'user7',repliedTo:'user7',reacted:'like'},
        {id:2,img:"",user:'user8',comment:"commented2"},
        {id:3,img:"",user:'user9',comment:"commented2"},
        {id:4,img:"",user:'user10',comment:"commented2"},
        {id:5,img:"",user:'user11',comment:"commented2"},
        {id:6,img:"",user:'user12',comment:"commented2"},
        ],
      usersReplied:[
        {id:1,img:"",user:'user7',repliedTo:"user7",postID:1,reply:"replied1"},
        {id:2,img:"",user:'user8',reply:"replied2"},
        {id:3,img:"",user:'user9',reply:"replied3"},
        {id:4,img:"",user:'user10',reply:"replied4"},
        {id:5,img:"",user:'user11',reply:"replied5"},
        {id:6,img:"",user:'user12',reply:"replied6"},
      ],
      like:[like],
      top:[top],
      quality:[quality],
      team:[team],
      smart:[smart],
      deal:[deal],
    },
    {id:2,img:"img",text:"post 2",d:"2023.02.01",t:"09:31",author:"User2",
      usersShared:[
        {id:1,img:"",user:'red',},
        {id:2,img:"",user:'blue',},
        {id:3,img:"",user:'green',},
        {id:4,img:"",user:'brown',},
        {id:5,img:"",user:'black',},
        {id:6,img:"",user:'white',},
      ],
    },
    {id:3,img:"img",text:"post 3",d:"2023.03.01",t:"10:32",author:"User3"},
    {id:4,img:"img",text:"post 4",d:"2023.04.01",t:"11:33",author:"User4"},
    {id:5,img:"",text:"post 5",d:"2023.05.01",t:"12:34",author:"User5"},
    {id:6,img:"img",text:"post 6",d:"2023.06.01",t:"13:35",author:"User6"},
    {id:7,img:"",text:"post 7",d:"2023.07.01",t:"14:36",author:"User6"},
    {id:8,img:"img",text:"post 8",d:"2023.08.01",t:"15:37",author:"User8"},
    {id:9,img:"img",text:"post 9",d:"2023.09.01",t:"16:38",author:"User10"},
    {id:10,img:"",text:"post 10",d:"2023.10.01",t:"17:39",author:"User22"},
  ])
  const [selectedNewsId,setSelectedNewsId] = useState(null);

  const [reactToPostId,setReactToPostId] = useState(null);

  const [postComment,setPostComment] = useState(null);
  const [whoCommented,setWhoCommented] = useState(null);
  const [whoLikedBtn,setWhoLikedBtn] = useState(null);
  const [postShare,setPostShare] = useState(null);
  
  const [whoShared,setWhoShared] = useState(null);
  const [textCopy,setTextCompied] = useState(null);

  const [replyReaction,setReplyReaction] = useState(null);
  const [replyMessage,setReplyMessage] = useState(null);
  const [emoteWindow,setEmoteWindow] = useState(null);
  const [postReply,setPostReply] = useState(null);

  const findSharedUsers = (postId) => {
    const post = posts.find(post => post.id === postId);
    if (post && post.usersShared) { return post.usersShared.map(userShared => userShared.user); } 
    else { return []; }
  };
  const findCommentedUsers = (postId) => {
    const post = posts.find(post => post.id === postId);
    if (post && post.userCommented) { return post.userCommented.map(userShared => userShared.user); } 
    else { return []; }
  };
  const findUsersEmojis = (postId) => {
    const post = posts.find(post => post.id === postId);
    if (post && post.userReacted) { return post.userReacted.map(userShared => userShared.user); } 
    else { return []; }
  };
  const likeCount = (postId) => { 
    const post = posts.find(post => post.id === postId); 
    if(post && post.like){return like == 0 ? 0:[like]}else{return [0];}
  }
  const topCount = (postId) => { 
    const post = posts.find(post => post.id === postId); 
    if(post && post.top){return top == 0 ? 0:[top]}else{return [0];}
  }
  const qualityCount = (postId) => { 
    const post = posts.find(post => post.id === postId); 
    if(post && post.quality){return quality == 0 ? 0:[quality]}else{return [0];}
  }
  const teamCount = (postId) => { 
    const post = posts.find(post => post.id === postId); 
    if(post && post.team){return team == 0 ? 0:[team]}else{return [0];}
  }
  const smartCount = (postId) => { 
    const post = posts.find(post => post.id === postId); 
    if(post && post.smart){return smart == 0 ? 0:[smart]}else{return [0];}
  }
  const dealCount = (postId) => { 
    const post = posts.find(post => post.id === postId); 
    if(post && post.deal){return deal == 0 ? 0:[deal]}else{return [0];}
  }
  const handleReaction = {'thumbs-up': setLike,'medal': setTop,'star': setQuality,'people-group': setTeam,'lightbulb': setSmart,'handshake': setDeal,}
return(<>
  {selectedNewsId && (
    <div className={`${themes[currentTheme].newsBG} ${themes[currentTheme].postsText} w-[420px] h-[500px] rounded-lg shadow-[0_0_2px_1px_#000000] absolute top-10 left-4 mx-auto text-left z-10`}>
      <h2 className={`h-[30px] leading-[30px] text-center relative top-1`}>
        <FontAwesomeIcon icon="close" className={`hover:text-rose-600 hover:ease-in ease-out duration-300 absolute right-3 top-2 cursor-pointer`} onClick={()=>{selectedNewsId ? setSelectedNewsId(null):'' }}/> 
        {newsState.find(news => news.id === selectedNewsId).type}
      </h2>
      
      <div className={`w-[95%] mx-auto my-1 h-[380px] shadow-[0_0_2px_1px_inset] rounded-lg text-sm relative`}>
        <img src={newsState.find(news => news.id === selectedNewsId).img} alt="No Image Found" 
        className={`text-center w-[100%] h-[100%]`}/>
        <div className={`w-[100%] h-[200px] shadow-[0_0_2px_1px_inset] rounded-lg px-3 py-2 text-sm absolute bottom-0 overflow-hidden`}> {newsState.find(news => news.id === selectedNewsId).title} </div>
      </div>

      <div className={`w-[50%] mx-auto my-1 h-[30px] leading-[30px] shadow-[0_0_2px_1px_inset,0_0_3px_1px] ${themes[currentTheme].newsBorder} ${themes[currentTheme].newsShadow} rounded-sm text-sm text-center relative border-[1px] ease-in duration-300 cursor-pointer`}>Open Source</div>
      <div className={`w-[95%] mx-auto my-2 h-[30px] shadow-[0_0_2px_1px_inset] rounded-lg text-sm relative`}>
        <span className={`inline-block w-[66px] bottom-1 absolute text-[10px] font-sans font-semibold right-0 text-right pr-2`}> {newsState.find(news => news.id === selectedNewsId).d}</span>
        <span className={`inline-block w-[66px] bottom-1 absolute text-[10px] font-sans font-semibold left-0 pl-2`}> {newsState.find(news => news.id === selectedNewsId).t}</span>
      </div>
    </div>
  )}
  {posts.map(post => (
    postComment === post.id &&
    <div key={post.id} className={`${themes[currentTheme].newsBG} absolute w-[440px] h-[800px] right-[1%] bg-gray-800 z-20 top-8 rounded-xl shadow-[0_0_36px_12px_#000] border-[1px] border-slate-600`}>
    <h2 className={`w-[95%] h-[50px] leading-[50px] text-slate-300 text-lg text-center mx-auto relative`}>Post Author {post.author}{"'"}s 
    <FontAwesomeIcon icon='xmark' className={`absolute right-2 top-4 cursor-pointer`} onClick={()=>{setPostComment(null)}}/> </h2>
    <div className={`w-[420px] h-[740px] overflow-x-hidden overflow-y-scroll`}>
    {/*information about post */}
    <div className={`w-[390px] h-[50px] mx-auto bg-gray-900/80 text-slate-300 relative rounded-lg shadow-[1px_1px_3px_1px] shadow-slate-950/80`}>
      <img className={`w-[40px] h-[40px] rounded-full bg-slate-800 absolute top-[6px] left-2`} alt="" src={post.img}/> 
      <div className={`relative flex flex-col top-2 left-[60px] w-[310px] h-[35px]`}>
        <label className={`text-sm text-slate-300`}>{post.author}</label>
        <label className={`font-sans text-[10px] font-semibold text-slate-300/80`}>{post.d} at {post.t}</label>    
      </div>
    </div>

      {/*post text or/and image */}
      <div className={`w-[390px] h-[400px] mx-auto bg-gray-900/80 my-3 text-slate-300 relative rounded-lg shadow-[0_0_3px_1px] shadow-slate-950/80`}> {post.img == "" ? <div className={`text-slate-300 pl-2 relative top-2 mx-auto w-[380px] h-[300px] bg-slate-800 rounded-lg`}>{post.text}</div>:
      <>
      {/*Post with Image*/}
      <div className={`text-slate-300 pl-2 relative top-2 mx-auto w-[380px] h-[60px] bg-slate-800 rounded-lg`}>{post.text} </div> 
        <div className={`text-slate-300 pl-2 relative top-2 mt-2 mx-auto w-[380px] h-[230px] bg-slate-800 rounded-lg`}>
        <img src={post.img} className={`w-full h-[230px] absolute top-0 left-0 rounded-lg`}/> 
          <div className={`absolute left-0 bottom-0 bg-black/40 w-full h-[100px] rounded-lg`}>
            <h3 className={`font-sans text-xs h-[30px] leading-[30px] py-[2px] px-2`}>Source</h3>
            <b className={`text-sm font-sans block h-[30px] leading-[30px] py-[2px] px-2`}>Header</b>
            <p className={`font-sans text-xs h-[40px] rounded-br-lg rounded-bl-lg py-[2px] px-2 overflow-hidden`}>Paragraph</p>
          </div>
        </div>
      </>}
        {/*react to post and add comment*/}
        <div className={`bg-slate-800 mx-auto h-[40px] w-[380px] relative top-[15px] rounded-lg`}>
          <div className={`flex flex-row relative`}>

            {reactionsStyle.map((button, index) => (
              <label key={index} className={`w-[20px] h-[20px] text-center leading-[20px] relative top-[10px] rounded-md cursor-pointer left-${index + 2} ${button.bg}`}>
                <FontAwesomeIcon icon={button.icon} className={`text-slate-200 text-sm`}/>
              </label>
            ))}
            <span className={`text-slate-400 relative left-10 text-sm top-[10px]`}> 
            { parseInt(likeCount(post.id)) + 
              parseInt(topCount(post.id)) + 
              parseInt(qualityCount(post.id)) + 
              parseInt(teamCount(post.id)) + 
              parseInt(smartCount(post.id)) + 
              parseInt(dealCount(post.id))}
            </span>

            <label className={`font-sans font-semibold text-xs absolute top-[11px] right-[90px]`}> 
              <span>{findCommentedUsers(post.id).length}</span> comments
            </label> 

            <label className={`font-sans font-semibold text-xs absolute top-[11px] right-[90px]`}> 
              <span>{findSharedUsers(post.id).length}</span> shares 
            </label>

          </div>
        </div>
        
        <div className={`mx-auto my-2 h-[32px] w-[380px] relative top-[15px] rounded-lg`}>
          <ul className={`flex flex-row relative top-[4px]`}>

            <li className={`w-[calc(96%/3)] h-[32px] leading-[32px] -top-1 ease-out hover:ease-in duration-200 text-center relative rounded-lg cursor-pointer hover:bg-slate-800 shadow-[0_0_5px_1px] shadow-black/50`} onClick={()=>{setReactToPostId(post.id)}}>
              <FontAwesomeIcon icon="thumbs-up" className={`absolute top-[10px] text-sm text-slate-400 left-6`}/> 
              <span className={`text-sm`}>Like</span>
            </li>

            <li className={`w-[calc(96%/3)] h-[32px] leading-[32px] -top-1 ease-out hover:ease-in duration-200 text-center relative rounded-lg cursor-pointer hover:bg-slate-800 shadow-[0_0_5px_1px] shadow-black/50 mx-2`} onClick={()=>{setPostReply(!postReply);setReplyMessage(null) }}>
            <FontAwesomeIcon icon="message" className={`text-sm left-2 top-[10px]`}/> 
              <span className={`text-sm`}>Comment</span>
            </li>

            <li className={`w-[calc(96%/3)] h-[32px] leading-[32px] -top-1 ease-out hover:ease-in duration-200 text-center relative rounded-lg cursor-pointer hover:bg-slate-800 shadow-[0_0_5px_1px] shadow-black/50`} onClick={()=>{setPostShare(post.id)}}>
              <FontAwesomeIcon icon="share" className={`text-sm left-2 top-[10px]`}/> 
              <span className={`text-sm`}>Share</span>
            </li>

            {postShare === post.id && (
              <div className={`bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 w-[380px] h-[100px] leading-[50px] absolute bottom-11 shadow-[0_0_3px_1px] shadow-black/80 rounded-lg text-slate-300 text-center`}>
              <h2 className={`relative h-[30px] leading-[30px] top-1`}> 
                <FontAwesomeIcon icon="close" className={`text-slate-200 hover:text-rose-500 duration-200 ease-in cursor-pointer absolute right-3 top-2`} onClick={()=>{setPostShare(null)}}/>Share Post</h2>
                <label className={`inline-block pl-3 bg-slate-900 shadow-[0_0_2px_1px_inset] w-[95%] text-left shadow-black/70 h-[30px] leading-[30px] rounded-lg relative text-slate-400 text-sm`}>Link 
                <span className={`inline-block pl-2 absolute bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 w-[87%] text-left shadow-[-1px_0_5px_1px] shadow-black/50 right-[2px] h-[26px] leading-[26px] top-[2px] rounded-tr-md rounded-br-md`}>...</span>
                  <FontAwesomeIcon icon="copy" className={`text-slate-400 hover:text-sky-500 duration-200 ease-in cursor-pointer absolute right-3 top-2`} 
                  onClick={()=>{textCopy ? '':setTextCompied(!textCopy)}} 
                  onMouseLeave={()=>{textCopy ? setTextCompied(!textCopy):''}} /> 
                    {textCopy && <span className={`absolute w-[90px] h-[20px] z-30 -top-7 right-2 text-md text-slate-300`}>Text copied</span> }
                </label>
              </div>
            )}

            {reactToPostId === post.id && (
              <div className={`bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 w-[200px] h-[30px] absolute bottom-[49px] left-[4px] shadow-[0_0_3px_1px] shadow-black/80 rounded-lg`}>
              {reactionsStyle.map((button, index) => (
                <label key={index} className={`inline-block w-[25px] h-[25px] text-center leading-[25px] relative top-[2px] rounded-lg cursor-pointer left-${index + 1} ${button.bg}`}>
                {button.icon && ( <FontAwesomeIcon icon={button.icon} className={`text-slate-300`} onClick={() => handleReaction[button.icon] (prevState => prevState + 1)}/>)}
                </label>
                ))}
              <label className={`inline-block w-[25px] h-[25px] text-center leading-[25px] relative top-[2px] rounded-lg cursor-pointer left-6 `}>
                <FontAwesomeIcon icon='close'className={`text-slate-300 hover:text-rose-500 duration-200 ease-out hover:ease-in`} onClick={()=>{setReactToPostId(null)}}/>
              </label>
              </div>
            )}
          </ul>
        </div>
      </div>
      {/*POST replies*/}
        <div className={`w-[95%] h-[220px] bg-slate-900/60 relative top-2 mx-auto rounded-lg overflow-x-hidden overflow-y-scroll shadow-[0_2px_3px_1px,0_-2px_3px_1px] shadow-slate-950/60 mb-5`}>
          {/*Replies to POST Reply*/}
          <div className={`w-[95%] h-[200px] bg-slate-800 mx-auto relative top-2 rounded-lg my-2`}>
            <img src="" className={`w-[30px] h-[30px] absolute bg-slate-500 top-2 left-2 rounded-full`}/>

            <div className={`w-[86%] bg-slate-700 absolute min-h-[60px] max-h-[175px] rounded-tr-xl rounded-tl-xl rounded-bl-xl top-2 right-2`}>
              <span className={`text-slate-300 px-2 relative top-1`}>Name</span>
              <p className={`text-slate-300 h-[120px] overflow-x-hidden overflow-y-scroll font-sans text-sm py-2 px-2`}>Text</p>

              <div className={`min-w-[170px] max-w-[200px] h-[20px] flex flex-row relative bg-slate-900 rounded-3xl shadow-[0_0_5px_1px] shadow-black/50 left-[110px] top-[12px]`}>
                {reactionsStyle.map((button, index) => (
                  <label key={index} className={`w-[20px] h-[20px] leading-[20px] block relative text-center rounded-lg left-${index} ${button.bg}`}>
                    <FontAwesomeIcon icon={button.icon} className={`text-slate-300text-sm`}/>
                  </label>
                ))}
                <span className={`w-[55px] h-[20px] leading-[20px] block absolute right-0 pl-1 rounded-lg bg-slate-700 text-xs text-slate-300`}>
                  {
                    parseInt(likeCount(post.id)) + 
                    parseInt(topCount(post.id)) +
                    parseInt(qualityCount(post.id)) + 
                    parseInt(teamCount(post.id)) + 
                    parseInt(smartCount(post.id)) + 
                    parseInt(dealCount(post.id))
                  }
                </span>
              </div>
            </div>

            <div className={`relative top-[176px] left-10 flex flex-row text-slate-300/80 text-sm`}>
              <div className={`mx-1 cursor-pointer hover:underline text-sm`} onClick={()=>{setReplyReaction(!replyReaction)}}>Like</div>
              <div className={`mx-1 cursor-pointer hover:underline text-sm`} 
              onClick={()=>{setReplyMessage(!replyMessage);setPostReply(null)}}>Reply</div>
              <span className={`mx-1 text-sm`}>1h</span>
            </div>
            {replyReaction && (
              <div className={`bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 w-[200px] h-[30px] absolute bottom-[49px] left-[4px] shadow-[0_0_3px_1px] shadow-black/80 rounded-lg`}>
              {reactionsStyle.map((button, index) => (
                <label key={index} className={`inline-block w-[25px] h-[25px] text-center leading-[25px] relative top-[2px] rounded-lg cursor-pointer left-${index + 1} ${button.bg}`}>
                {button.icon && ( <FontAwesomeIcon icon={button.icon} className={`text-slate-300`} 
                  onClick={() => handleReaction[button.icon](prevState => prevState + 1)}/>
                )}
                </label>
                ))}
              <label className={`inline-block w-[25px] h-[25px] text-center leading-[25px] relative top-[2px] rounded-lg cursor-pointer left-6`}>
                <FontAwesomeIcon icon='close' className={`text-slate-300hover:text-rose-500 duration-200 ease-out hover:ease-in`} onClick={()=>{setReplyReaction(null)}}/>
              </label>
              </div>
            )}
            </div>  
          </div>
          {replyMessage && (
            <div className={`absolute w-[95%] h-[320px] bg-slate-800 rounded-lg top-5 left-[2%] shadow-[0_0_5px_1px_#000000]`}>
              <FontAwesomeIcon icon="close" className={`text-slate-200 cursor-pointer duration-300 ease-out hover:text-rose-500 hover:ease-in absolute top-3 right-3`} onClick={()=>{setReplyMessage(!replyMessage)}}/>
              <img src="" className={`w-[50px] h-[50px] rounded-full relative top-3 left-3 bg-slate-700/70`}/>
              <div className={r`absolute top-3 left-[72px] w-[75%] h-[50px] flex flex-col`}>
                <label className={`text-slate-200`}>Name</label>
                <label className={`font-sans font-semibold text-[11px] text-slate-300`}>2023.09.24 at 10:24</label>
              </div>
              <div className={`w-[95%] h-[200px] mx-auto relative top-6 border-[1px] border-slate-600 rounded-lg`}>
                <textarea className={`outline-none bg-slate-800/60 w-[98%] h-[180px] overflow-x-hidden overflow-y-scroll text-slate-300 text-sm p-2 leading-tight resize-none font-normal`} placeholder="Your message"/>
              </div>

              <div className={`absolute w-[150px] h-[30px] leading-[30px] flex flex-row right-2 bottom-2`}>
                <div className={`inline-block absolute right-12 bg-gradient-to-b from-sky-500 via-sky-700 to-sky-900 w-[120px] h-[30px] leading-[30px] rounded-lg shadow-[0_0_2px_1px_#000000] text-sm text-slate-300 text-center hover:text-slate-200 duration-300 hover:ease-in ease-out cursor-pointer hover:bg-gradient-to-t hover:shadow-[0_0_2px_1px_#000000_inset]`}>Reply</div>
                <div className={`inline-block absolute right-2 bg-gradient-to-b from-amber-500 via-amber-700 to-amber-900 w-[30px] h-[30px] leading-[30px] rounded-full shadow-[0_0_2px_1px_#000000] text-sm text-slate-300 text-center hover:text-slate-200 duration-300 hover:ease-in ease-out cursor-pointer hover:bg-gradient-to-t hover:shadow-[0_0_2px_1px_#000000_inset]`} onClick={()=>{{setEmoteWindow(!emoteWindow)}}}><FontAwesomeIcon icon='face-smile-beam' className={`shadow-[0_0_25px_12px_inset] shadow-black/50 rounded-full relative top-[2px] text-2xl text-amber-600 border-none`}/></div>
              {emoteWindow && (
                <div className={`absolute w-[200px] h-[200px] rounded-lg bg-slate-800 top-11 -right-2 py-2 border-[1px] border-slate-500`}>
                  <div className={`w-full h-[98%] overflow-x-hidden overflow-y-scroll grid grid-flow-row auto-rows-max grid-cols-7 gap-1 justify-items-center`}>
                  {emojies.map(emote =>(<span key={emote.id} className={`block w-[25px] h-[25px] leading-[25px] text-center rounded-full cursor-pointer text-sm text-slate-300`}>{emote.emote}</span>))}
                  </div>
                </div>
              )}
              </div>

            </div>
          )}
          {postReply && (
            <div className={`absolute w-[95%] h-[320px] bg-slate-800 rounded-lg top-5 left-[2%] shadow-[0_0_5px_1px_#000000]`}>
              <FontAwesomeIcon icon="close" className={`text-slate-200 cursor-pointer duration-300 ease-out hover:text-rose-500 hover:ease-in absolute top-3 right-3`} onClick={()=>{setPostReply(!postReply)}}/>
              <img src="" className={`w-[50px] h-[50px] rounded-full relative top-3 left-3 bg-slate-700/70`}/>
              <div className={`absolute top-3 left-[72px] w-[75%] h-[50px] flex flex-col`}>
                <label className={`text-slate-200`}>Name</label>
                <label className={`font-sans font-semibold text-[11px] text-slate-300`}>2023.09.24 at 10:24</label>
              </div>
              <div className={`w-[95%] h-[200px] mx-auto relative top-6 border-[1px] border-slate-600 rounded-lg`}>
                <textarea className={`outline-none bg-slate-800/60 w-[98%] h-[180px] overflow-x-hidden overflow-y-scroll text-slate-300 text-sm p-2 leading-tight resize-none font-normal`} placeholder="Your message"/>
              </div>

              <div className={`absolute w-[150px] h-[30px] leading-[30px] flex flex-row right-2 bottom-2`}>
                <div className={`inline-block absolute right-12 bg-gradient-to-b from-sky-500 via-sky-700 to-sky-900 w-[120px] h-[30px] leading-[30px] rounded-lg shadow-[0_0_2px_1px_#000000] text-sm text-slate-300 text-center hover:text-slate-200 duration-300 hover:ease-in ease-out cursor-pointer hover:bg-gradient-to-t hover:shadow-[0_0_2px_1px_#000000_inset]`}>Comment</div>
                <div className={`inline-block absolute right-2 bg-gradient-to-b from-amber-500 via-amber-700 to-amber-900 w-[30px] h-[30px] leading-[30px] rounded-full shadow-[0_0_2px_1px_#000000] text-sm text-slate-300 text-center hover:text-slate-200 duration-300 hover:ease-in ease-out cursor-pointer hover:bg-gradient-to-t hover:shadow-[0_0_2px_1px_#000000_inset]`} onClick={()=>{{setEmoteWindow(!emoteWindow)}}}><FontAwesomeIcon icon='face-smile-beam' className={`shadow-[0_0_25px_12px_inset] shadow-black/50 rounded-full relative top-[2px] text-2xl text-amber-600 border-none`}/></div>
              {emoteWindow && (
                <div className={`absolute w-[200px] h-[200px] rounded-lg bg-slate-800 top-11 -right-2 py-2 border-[1px] border-slate-500`}>
                  <div className={`w-full h-[98%] overflow-x-hidden overflow-y-scroll grid grid-flow-row auto-rows-max grid-cols-7 gap-1 justify-items-center`}>
                  {emojies.map(emote =>(<span key={emote.id} className={`block w-[25px] h-[25px] leading-[25px] text-center rounded-full cursor-pointer text-sm text-slate-300`}>{emote.emote}</span>))}
                  </div>
                </div>
              )}
              </div>
            </div>
          )}
      </div>
    </div>
  ))}
  <div className={`${themes[currentTheme].newsBG} col-span-12 text-center py-2 -z-10`}>
    <h2 
      className={`h-[30px] leading-[30px] text-lg w-[50%] font-sans font-semibold mx-auto ${themes[currentTheme].newsText}`}
    > 
      World events
      <FontAwesomeIcon icon='caret-down' className={`text-md relative left-2`}/> 
    </h2>
    <div className={`h-[180px] relative grid grid-flow-row grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 py-2 eventsCustomScroll`}> 
      {newsState.map((item) => ( <NewsCard key={item.id} item={item} setSelectedNewsId={setSelectedNewsId} /> ))} 
    </div>
  </div>
{/*Posts Card and window*/}
  <div className={`${themes[currentTheme].postsBG} col-span-12 py-4 -z-10`}>
    <div className={`h-[550px] mx-auto w-full relative overflow-x-hidden overflow-y-scroll scrollbar-thin grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-3`}>
    <Posts/>
    </div>
  </div>
</>)}
export default Home