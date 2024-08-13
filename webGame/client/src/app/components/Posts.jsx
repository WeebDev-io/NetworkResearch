"use client";
/* eslint-disable react/prop-types */
import { useState,useRef} from 'react'
import Link from 'next/link';
import {useSelector } from 'react-redux';
import { FontAwesomeIcon } from '../Icons';
import NewsCard from '../components/NewsCard';
import {emojies} from '../pages/emotes';
const reactionsStyle = [
  {bg:"bg-sky-600/90",icon:'thumbs-up'},
  {bg:"bg-rose-600/90",icon:'medal'},
  {bg:"bg-amber-600",icon:'star'},
  {bg:"bg-green-600/90",icon:'people-group'},
  {bg:"bg-yellow-600/90",icon:'lightbulb'},
  {bg:"bg-blue-600/90",icon:'handshake'},
]
const Posts = () => {
  const user = "User1";
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
  return ( posts.map(post => ( 
    <div key={post.id} className={`mx-auto h-[100%] w-[95%] sm:w-[80%] md:w-[95%] xl:w-[90%] rounded-2xl shadow-[0_0_3px_1px] relative top-2`}>
      <div className={`w-[95%] h-[95%] px-3 py-3 rounded-2xl shadow-[0_0_3px_1px_inset] mx-[10px] my-[10px]`}>
      {/*information about post */}
      <div className={`h-[60px] flex flex-row relative`}>
        <img className={`rounded-full w-[60px] h-[60px]`} alt=""/> 
          <div className={`flex flex-col w-[75%] mx-2 px-1 my-2`}>
            <label className={`text-md ${themes[currentTheme].postsText}`}>{post.author}</label>
            <label className={`text-xs ${themes[currentTheme].postsText}`}>{post.d} at {post.t}</label>    
          </div>
          <label className={`aboslute absolute right-1`}>
          {post.author == user ? 
            <FontAwesomeIcon icon='trash-can' className={`hover:text-red-500 duration-200 hover:duration-200 cursor-pointer ${themes[currentTheme].postsText}`}/>:
            <FontAwesomeIcon icon='xmark' className={`hover:text-red-500 duration-200 hover:duration-200 cursor-pointer ${themes[currentTheme].postsText}`}/>}
        </label>
      </div>
      {/*post text or/and image */}
      <div className={`h-[200px] pt-1 w-[98%]`}>
        {post.img == "" ? <div className={`overflow-x-hidden overflow-y-scroll h-[180px] select-none py-2 pl-[9px] ${themes[currentTheme].postsText}`}>{post.text}</div>:
        <>
          <div className={`overflow-x-hidden overflow-y-scroll h-[50px] select-none py-2 pl-[9px] ${themes[currentTheme].postsText}`}>{post.text} </div> 
            <div className={`h-[160px] relative my-1`}>
              <img src={post.img} className={`w-[95%] mx-auto h-[100%]`}/> 
              <div className={`w-[95%] left-[9px] h-[55%] absolute bottom-0`}>
                <h3 className={`w-full px-2 font-sans absolute bottom-[70px] top-1 text-sm ${themes[currentTheme].postsText}`}>Source</h3>
                <b className={`w-full px-2 font-sans absolute bottom-[40px] top-6 text-md overflow-hidden ${themes[currentTheme].postsText}`}>Header</b>
                <p className={`w-full px-2 font-sans absolute bottom-[20px] top-12 text-sm overflow-hidden ${themes[currentTheme].postsText}`}>Paragraph</p>
              </div>
            </div>
        </>}
      </div>
      {/*react to post and add comment*/}
      <div className={`h-[70px] relative border-b`}>
        <div className={`w-[200px] h-[30px] leading-[30px] relative top-8 left-0 rounded-md shadow-[0_0_3px_1px]`}>
          {reactionsStyle.map((react,index) => ( 
            <label key={index} className={`inline-block w-[20px] h-[20px] text-center leading-[20px] rounded-md relative mr-[1px] left-${index + 1} last-of-type:left-6 ${themes[currentTheme].postsText} ${react.bg}`}> 
            <FontAwesomeIcon icon={react.icon} className={`text-sm`}/> 
            </label> 
          ))}
            <span className={`text-xs relative inline-block left-8 bottom-[1px] w-[30px] h-[20px] leading-[20px] ${themes[currentTheme].postsText}`} onMouseEnter={()=>{setWhoLikedBtn(post.id)}} onMouseLeave={()=>{setWhoLikedBtn(!whoLikedBtn)}}>

              {parseInt(likeCount(post.id))+parseInt(topCount(post.id))+parseInt(qualityCount(post.id))+parseInt(teamCount(post.id))+parseInt(smartCount(post.id))+parseInt(dealCount(post.id))}
            </span>
            {whoLikedBtn === post.id && 
              <div className={`absolute top-9 left-[155px] z-10 w-[130px] h-[200px] shadow-[0_0_3px_1px] ease-in duration-300 rounded-lg overflow-hidden ${themes[currentTheme].postsBG}`}>
                {posts.map(post => ( whoLikedBtn === post.id ? findUsersEmojis(post.id).map((user,index) => ( 
                  <li key={index} className={`w-[95%] mt-1 px-2 ${themes[currentTheme].postsText} text-sm`}>{user}</li>)):'')
                )}
              </div>}
          </div>
          <ul className={`absolute right-1 bottom-0`}>
            <li className={`inline-block w-[50px] h-[30px] leading-[30px] text-center relative mr-1 text-xs -right-2 border-r-[1px] ${themes[currentTheme].postsText}`} 
              onMouseEnter={()=>{setWhoShared(post.id)}} 
              onMouseLeave={()=>{setWhoShared(!whoShared)}}>
              <span className={`mx-1`}>{findSharedUsers(post.id).length}</span>
            <FontAwesomeIcon icon='share' className={``}/>
            </li>
            {whoShared === post.id && ( 
              <div className={`absolute top-7 left-3 z-10 w-[130px] h-[200px] shadow-[0_0_3px_1px] shadow-black ease-in duration-300 rounded-lg overflow-hidden ${themes[currentTheme].postsText} ${themes[currentTheme].postsBG}`}> 
              {posts.map(post => ( 
                whoShared === post.id ? findSharedUsers(post.id).map((user,index) => ( 
                <li key={index} className={`w-[95%] mt-1 px-2 text-sm`}>{user}</li>)):'' ))}
              </div> 
            )}
            <li className={`inline-block w-[50px] h-[30px] leading-[30px] text-center relative mr-1 text-xs text-slate-300 -right-1`} 
              onMouseEnter={()=>{setWhoCommented(post.id)}} 
              onMouseLeave={()=>{setWhoCommented(!whoCommented)}}> 
              <span className={`mx-1`}> {findCommentedUsers(post.id).length}</span> 
              <FontAwesomeIcon icon='comment' className={``}/>
            </li> 
            {whoCommented === post.id && (
              <div className={`absolute top-7 left-3 z-10 w-[130px] h-[200px] shadow-[0_0_3px_1px] shadow-black ease-in duration-300 rounded-lg overflow-hidden ${themes[currentTheme].postsText} ${themes[currentTheme].postsBG}`}> {posts.map(post => ( whoCommented === post.id ?
                findCommentedUsers(post.id).map((user,index) => ( <li key={index} className={`w-[95%] mt-1 px-2 text-sm`}>{user}</li> )):''))}
                </div>)}
              </ul>

            </div>
            {/*react to post and add comment*/}
            <div className={`h-[35px] relative top-1 mb-1`}>
              <ul>
                <li className={`text-slate-400 rounded-md py-[3px] w-[30%] h-[30px] leading-[30px] relative top-[3px] inline-block bg-slate-800 mx-1 cursor-pointer ease-out duration-200 hover:ease-in hover:duration-200 hover:bg-slate-700/50 text-center`} onClick={()=>{setReactToPostId(post.id)}}>
                  <FontAwesomeIcon icon="thumbs-up" className={`top-[-3px] right-2 text-sm relative`}/> 
                  <span className={`font-sans font-semibold text-sm relative -top-1`}>Like</span>
                </li>
                {reactToPostId === post.id && (
                  <div className={`bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 w-[240px] h-[40px] absolute bottom-11 left-0 shadow-[0_0_3px_1px] shadow-black/80 rounded-2xl`}>
                  {reactionsStyle.map((button, index) => (
                    <label key={index} className={`inline-block w-[30px] h-[30px] text-center leading-[30px] relative bottom-[6px] rounded-lg cursor-pointer left-${index + 1} ${button.bg}`}>
                      {button.icon && ( 
                        <FontAwesomeIcon icon={button.icon} className={`text-slate-300`} onClick={() => handleReaction[button.icon] (prevState => prevState + 1)}/>
                      )}
                    </label>
                  ))}
                    <label className={`inline-block w-[30px] h-[30px] text-center leading-[30px] relative bottom-[6px] rounded-lg cursor-pointer left-7`}>
                      <FontAwesomeIcon 
                        icon='close' 
                        className={`text-slate-300 cursor-pointer absolute right-2 top-[17px] hover:text-rose-500 duration-200 ease-out hover:ease-in`} 
                        onClick={()=>{setReactToPostId(null)}}/>
                    </label>
                  </div>
                )}
                <li className={`text-slate-400 rounded-md py-[3px] w-[30%] h-[30px] leading-[30px] relative top-[3px] inline-block bg-slate-800 mx-1 cursor-pointer ease-out duration-200 hover:ease-in hover:duration-200 hover:bg-slate-700/50 text-center`} onClick={()=>{setPostComment(post.id)}}>
                  <FontAwesomeIcon icon="message" className={`top-[-3px] right-2 text-sm relative`}/> 
                  <span className={`${`font-sans font-semibold text-sm relative -top-1`}`}>Comment</span>
                </li>

                {postShare === post.id && (
                  <div className={`bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 w-[380px] h-[80px] leading-[50px] absolute bottom-0 right-0 shadow-[0_0_3px_1px] shadow-black/80 rounded-lg text-slate-300 text-center z-10`}>
                  <h2 className={`relative h-[30px] leading-[30px] top-1`}> 
                    <FontAwesomeIcon icon="close" className={`text-slate-200 hover:text-rose-500 duration-200 ease-in cursor-pointer absolute right-3 top-2`} 
                      onClick={()=>{setPostShare(null)}}/>Share Post</h2>
                    <label className={`inline-block pl-2 absolute bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 w-[95%] text-left shadow-[-1px_0_5px_1px] shadow-black/50 right-2 h-[30px] leading-[30px] top-10 rounded-tr-md rounded-br-md`}>Link 
                    <input 
                      className={`inline-block pl-2 absolute bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900  w-[87%] text-left shadow-[-1px_0_5px_1px] shadow-black/50 right-[2px] h-[26px] leading-[26px] top-[2px] rounded-tr-md rounded-br-md outline-none`} 
                      ref={inputRef} 
                      value='...'
                      placeholder='...'
                      readOnly
                    />
                    <FontAwesomeIcon 
                      icon="copy" 
                      className={`text-slate-400 hover:text-sky-500 duration-200 ease-in cursor-pointer absolute right-3 top-2 copy-button`} 
                      onClick={()=>{textCopy ? '':setTextCompied(!textCopy);copyText()}} 
                      onMouseLeave={()=>{textCopy ? setTextCompied(!textCopy):''}} />
                      {textCopy && 
                        <span className={`absolute w-[90px] h-[20px] z-30 -top-7 right-2 text-sm text-slate-300`}>Text copied</span> }
                    </label>
                  </div>
                )}
                <li className={`text-slate-400 rounded-md py-[3px] w-[30%] h-[30px] leading-[30px] relative top-[3px] inline-block bg-slate-800 mx-1 cursor-pointer ease-out duration-200 hover:ease-in hover:duration-200 hover:bg-slate-700/50 text-center`} 
                  onClick={()=>{setPostShare(post.id)}}>
                  <FontAwesomeIcon icon="share" className={`top-[-3px] right-2 text-sm relative`}/> 
                  <span className={`font-sans font-semibold text-sm relative -top-1`}>Share</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
  )))
}
export default Posts;