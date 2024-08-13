'use client';
/* eslint-disable react/prop-types */
import { useState} from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '../../Icons';
// import {logo} from "../images";
const homeMainWindow = {
  Container:`bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 grid grid-cols-12 col-span-12 row-span-12 pt-[2px] relative z-10`,
  Holder:`text-slate-300 col-span-12 text-center py-4`,
  Header:`h-[30px] leading-[35px] text-lg w-[50%] font-sans font-semibold mx-auto`,
  HeaderIcon:`text-md relative left-2 text-slate-300`,
  ContentHolder:`h-[180px] relative top-2 grid grid-flow-row grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 text-slate-300 gap-2 py-2 scrollbarNews-x`,
}
{/*posts styles*/}
const homePosts = {
  Container:`bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 col-span-12 py-4 -z-10`,
  WindowHeader:`w-[95%] mx-auto text-center text-slate-300 h-[40px] leading-[40px] text-xl`,
  Holder:`h-[758px] mx-auto w-full relative overflow-x-hidden overflow-y-scroll scrollbar-thin grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-3`,

  PostCardContainer:`bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 mx-auto h-[100%] w-[95%] sm:w-[80%] md:w-[95%] xl:w-[90%] rounded-2xl shadow-[0_0_3px_1px] shadow-black/60 relative top-2`,

  postWindow:`bg-gray-800 w-[95%] h-[95%] px-3 py-3 rounded-2xl shadow-[0_0_3px_1px_inset] shadow-black/20 mx-[10px] my-[10px]`,
  postHeaderWindow:`h-[60px] flex flex-row relative`,
  postHeaderUserImg:`bg-gray-700 rounded-full w-[60px] h-[60px]`,
  postUserInfo:`flex flex-col w-[75%] mx-2 px-1 my-2`,
  nameLabel:`text-slate-300 text-md`,
  dateTimeLabel:`text-slate-300 text-xs`,
  iconHolder:`aboslute absolute right-1`,

  postHeaderIconRight:`text-slate-300 hover:text-red-500 duration-200 hover:duration-200 cursor-pointer`,
  
  PostInfoContainer:`h-[200px] pt-1 w-[98%]`,
  PostInfoText:`overflow-x-hidden overflow-y-scroll h-[180px] select-none text-slate-300 py-2 pl-[9px]`,
  PostInfoTextWithImg:`overflow-x-hidden overflow-y-scroll h-[50px] select-none text-slate-300 py-2 pl-[9px]`,
  PostInfoHolder:`h-[160px] relative my-1`,
  
  Img:`w-[95%] mx-auto h-[100%]`,
  OnImgContainer:`bg-black/30 w-[95%] left-[9px] h-[55%] absolute bottom-0`,
  Header:`w-full px-2 text-gray-200 font-sans absolute bottom-[70px] top-1 text-sm`,
  Bold:`w-full px-2 text-gray-300 font-sans absolute bottom-[40px] top-6 text-md overflow-hidden`,
  Paragraph:`w-full px-2 text-gray-100 font-sans absolute bottom-[20px] top-12 text-sm overflow-hidden`,

  ListContainer:`absolute right-1 bottom-0`,

  ListShare:`inline-block w-[50px] h-[30px] leading-[30px] text-center relative bg-slate-800 mr-1 text-xs text-slate-300 -right-2 border-r-[1px] border-slate-700`,
  SpanShareNum:`mx-1`,
  ShareIcon:``,

  ListComment:`inline-block w-[50px] h-[30px] leading-[30px] text-center relative bg-slate-800 mr-1 text-xs text-slate-300 -right-1`,
  CommentIconNum:`mx-1`,
  CommentIcon:``,

  BtnControlHolder:`h-[35px] relative top-1 mb-1`,
  BtnControlList:`relative h-[35px] flex flex-col`,
  BtnList:`text-slate-400 rounded-md py-[3px] w-[30%] h-[30px] leading-[30px] relative top-[3px] w-[30%] inline-block bg-slate-800 mx-1 cursor-pointer ease-out duration-200 hover:ease-in hover:duration-200 hover:bg-slate-700/50 text-center`,
  Icon:`top-[-3px] right-2 text-sm relative`,
  Span:`font-sans font-semibold text-sm relative -top-1`
}
{/*Comments styles*/}
const postCommentsStyle = {
  Container:`bg-slate-800 absolute left-3 top-6 z-20 w-[95%] h-[800px] shadow-[0_0_20px_20px] shadow-black rounded-lg`,
  Header:`text-slate-300 text-center h-[30px] leading-[30px] relative top-2 w-[95%] mx-auto text-lg`,

  PostCardContainer:`bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 mx-auto h-[100%] w-[95%] sm:w-[80%] md:w-[95%] xl:w-[90%] rounded-2xl shadow-[0_0_3px_1px] shadow-black/60 relative top-2`,

  postWindow:`bg-gray-800 w-[95%] h-[95%] px-3 py-3 rounded-2xl shadow-[0_0_3px_1px] shadow-black/20 mx-[10px] my-[10px]`,
  postHeaderWindow:`h-[80px] flex flex-row relative left-3 top-5 bg-slate-900/60 w-[95%] rounded-lg shadow-[0_2px_3px_1px] shadow-slate-950/60`,
  postHeaderUserImg:`bg-gray-700 rounded-full w-[60px] h-[60px] relative top-2 left-2`,
  postUserInfo:`flex flex-col w-[75%] mx-2 px-1 relative top-4 left-3`,
  nameLabel:`text-slate-300 text-md`,
  dateTimeLabel:`text-slate-400 text-xs`,

  postHeaderIconRight:`text-slate-300 hover:text-red-500 duration-200 absolute right-2 top-[7px] hover:duration-200 cursor-pointer`,
  
  PostInfoContainer:`h-[120px] pt-1 w-[95%] mx-auto relative mt-5 top-3 bg-slate-900/60 rounded-lg shadow-[0_2px_3px_1px,0_-2px_3px_1px] shadow-slate-950/60`,
  PostInfoText:`overflow-x-hidden overflow-y-scroll h-[116px] select-none text-slate-300 py-2 pl-[9px]`,
  PostInfoTextWithImg:`overflow-x-hidden overflow-y-scroll h-[50px] select-none text-slate-300 py-2 pl-[9px]`,

  PostInfoHolder:`h-[160px] relative my-1`,
  //Post with img
  Img:`w-[95%] mx-auto h-[100%]`,
  OnImgContainer:`bg-black/30 w-[95%] left-[9px] h-[55%] absolute bottom-0`,
  HeaderImg:`w-full px-2 text-gray-200 font-sans absolute bottom-[70px] top-1 text-sm`,
  Bold:`w-full px-2 text-gray-300 font-sans absolute bottom-[40px] top-6 text-md overflow-hidden`,
  Paragraph:`w-full px-2 text-gray-100 font-sans absolute bottom-[20px] top-12 text-sm overflow-hidden`,

  ListContainer:`absolute right-1 bottom-0`,

  ListShare:`inline-block w-[50px] h-[30px] leading-[30px] text-center relative bg-slate-800 mr-1 text-xs text-slate-300 -right-2 border-r-[1px] border-slate-700`,
  SpanShareNum:`mx-1`,
  ShareIcon:``,

  ListComment:`inline-block w-[50px] h-[30px] leading-[30px] text-center relative bg-slate-800 mr-1 text-xs text-slate-300 -right-1`,
  CommentIconNum:`mx-1`,
  CommentIcon:``,

  BtnControlHolder:`h-[35px] relative top-1 mb-1 border-b-[1px] border-slate-700 w-[95%] mx-auto`,
  BtnControlList:`relative h-[35px] flex flex-col`,
  BtnList:`text-slate-400 rounded-md py-[3px] w-[30%] h-[30px] leading-[30px] relative top-[-1px] w-[30%] inline-block bg-slate-800 mx-1 cursor-pointer ease-out duration-200 hover:ease-in hover:duration-200 hover:bg-slate-700/50 text-center`,
  Icon:`top-[-3px] right-2 text-sm relative`,
  Span:`font-sans font-semibold text-sm relative -top-1`
}
const reactionsUIPostComment = {
  Container:`h-[70px] relative border-b border-slate-700 w-[95%] mx-auto`,
  Content:`w-[200px] h-[30px] leading-[30px] relative top-8 rounded-md border-slate-700 bg-slate-900/60 shadow-[0_0_3px_1px] shadow-black/80`,
  label:`inline-block w-[20px] h-[20px] text-center leading-[20px] rounded-md relative mr-[2px]`,
  Icon:`text-slate-200 text-sm`,
  ReactionCount:`text-xs relative inline-block left-8 bottom-[1px] text-slate-300 w-[30px] h-[20px] leading-[20px]`,
}
const postShareStylePostComments = {
  Container:`bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 w-[380px] h-[100px] leading-[50px] absolute bottom-20 left-5 shadow-[0_0_3px_1px] shadow-black/80 rounded-lg text-slate-300 text-center`,
  h2:`relative h-[30px] leading-[30px] top-1`,
  IconClose:`text-slate-200 hover:text-rose-500 duration-200 ease-in cursor-pointer absolute right-3 top-2`,
  Label:`inline-block pl-3 bg-slate-900 shadow-[0_0_2px_1px_inset] w-[95%] text-left shadow-black/70 h-[30px] leading-[30px] rounded-lg relative text-slate-400 text-sm`,
  Span:`inline-block pl-2 absolute bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900  w-[87%] text-left shadow-[-1px_0_5px_1px] shadow-black/50 right-[2px] h-[26px] leading-[26px] top-[2px] rounded-tr-md rounded-br-md`,
  IconCopy:`text-slate-400 hover:text-sky-500 duration-200 ease-in cursor-pointer absolute right-3 top-2`,
  SpanTextCopied:`absolute w-[90px] h-[20px] z-30 -top-7 right-2 text-md text-slate-300`,
}
{/*emotes holder in post UI*/}
const reactionsUI = {
  Container:`h-[70px] relative border-b border-slate-700`,
  Content:`w-[200px] h-[30px] leading-[30px] relative top-8 left-0 rounded-md border-slate-700 bg-slate-900 shadow-[0_0_3px_1px] shadow-black/80`,
  label:`inline-block w-[20px] h-[20px] text-center leading-[20px] rounded-md relative mr-[2px]`,
  Icon:`text-slate-200 text-sm`,
  ReactionCount:`text-xs relative inline-block left-8 bottom-[1px] text-slate-300 w-[30px] h-[20px] leading-[20px]`,
}
const reactions = [
  {bg:"bg-sky-600/90",icon:'thumbs-up'},
  {bg:"bg-rose-600/90",icon:'medal'},
  {bg:"bg-amber-600",icon:'star'},
  {bg:"bg-green-600/90",icon:'people-group'},
  {bg:"bg-yellow-600/90",icon:'lightbulb'},
  {bg:"bg-blue-600/90",icon:'handshake'},
]
const reactionsBtn = [
  {bg:"bg-sky-600/90",icon:'thumbs-up'},
  {bg:"bg-rose-600/90",icon:'medal'},
  {bg:"bg-amber-600",icon:'star'},
  {bg:"bg-green-600/90",icon:'people-group'},
  {bg:"bg-yellow-600/90",icon:'lightbulb'},
  {bg:"bg-blue-600/90",icon:'handshake'},
  {bg:"",icon:"close"},
]
{/*Interactive Windows*/}
const whoMainStyle = {
  Container:`w-[130px] h-[200px] bg-slate-900/90 shadow-[0_0_3px_1px] shadow-black/80 ease-in duration-300 rounded-lg overflow-hidden`,
  li:`w-[95%] mt-1 px-2 text-slate-400 text-sm`,
}
const whoSharedStyle= {Container:`absolute top-7 left-3 z-10 ${whoMainStyle.Container}`,li:`${whoMainStyle.li}`,}
const whoCommentedStyle = {Container:`absolute top-7 left-3 z-10 ${whoMainStyle.Container}`,li:`${whoMainStyle.li}`,}
const whoLikedStyle = {Container:`absolute top-9 left-[155px] z-10 ${whoMainStyle.Container}`, li:`${whoMainStyle.li}`,}
const postReactStyle = {
  Container:`bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 w-[240px] h-[40px] absolute bottom-11 left-0 shadow-[0_0_3px_1px] shadow-black/80 rounded-2xl`,
  Label:`inline-block w-[30px] h-[30px] text-center leading-[30px] relative top-1 rounded-full cursor-pointer `,
  Icon:`text-slate-200`
}
const postShareStyle = {
  Container:`bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 w-[380px] h-[100px] leading-[50px] absolute bottom-0 right-0 shadow-[0_0_3px_1px] shadow-black/80 rounded-lg text-slate-300 text-center z-10`,
  h2:`relative h-[30px] leading-[30px] top-1`,
  IconClose:`text-slate-200 hover:text-rose-500 duration-200 ease-in cursor-pointer absolute right-3 top-2`,
  Label:`inline-block pl-3 bg-slate-900 shadow-[0_0_2px_1px_inset] w-[95%] text-left shadow-black/70 h-[30px] leading-[30px] rounded-lg relative text-slate-400 text-sm`,
  Span:`inline-block pl-2 absolute bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900  w-[87%] text-left shadow-[-1px_0_5px_1px] shadow-black/50 right-[2px] h-[26px] leading-[26px] top-[2px] rounded-tr-md rounded-br-md`,
  IconCopy:`text-slate-400 hover:text-sky-500 duration-200 ease-in cursor-pointer absolute right-3 top-2`,
  SpanTextCopied:`absolute w-[90px] h-[20px] z-30 -top-7 right-2 text-md text-slate-300`,
}

{/*Dummy User */}
const user = "User1";
{/*News Card */}
const Posts = () => {
  const [like,setLike] = useState(0);
  const [top,setTop] = useState(0);
  const [quality,setQuality] = useState(0);
  const [team,setTeam] = useState(0);
  const [smart,setSmart] = useState(0);
  const [deal,setDeal] = useState(0);
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
      like:[like],
      top:[top],
      quality:[quality],
      team:[team],
      smart:[smart],
      deal:[deal],
    },
    {id:2,img:"img",text:"post 2",d:"2023.02.01",t:"09:31",author:"User2",usersShared:[
        {id:1,img:"",user:'red',},
        {id:2,img:"",user:'blue',},
        {id:3,img:"",user:'green',},
        {id:4,img:"",user:'brown',},
        {id:5,img:"",user:'black',},
        {id:6,img:"",user:'white',},
      ],},
    {id:3,img:"img",text:"post 3",d:"2023.03.01",t:"10:32",author:"User3"},
    {id:4,img:"img",text:"post 4",d:"2023.04.01",t:"11:33",author:"User4"},
    {id:5,img:"",text:"post 5",d:"2023.05.01",t:"12:34",author:"User5"},
    {id:6,img:"img",text:"post 6",d:"2023.06.01",t:"13:35",author:"User6"},
    {id:7,img:"",text:"post 7",d:"2023.07.01",t:"14:36",author:"User6"},
    {id:8,img:"img",text:"post 8",d:"2023.08.01",t:"15:37",author:"User8"},
    {id:9,img:"img",text:"post 9",d:"2023.09.01",t:"16:38",author:"User10"},
    {id:10,img:"",text:"post 10",d:"2023.10.01",t:"17:39",author:"User22"},
  ])
  // Define state variables
  const [reactToPostId,setReactToPostId] = useState(null);
  const [postComment,setPostComment] = useState(null);
  const [postShare,setPostShare] = useState(null);
  const [whoCommented,setWhoCommented] = useState(null);
  const [whoLikedBtn,setWhoLikedBtn] = useState(null);
  const [whoShared,setWhoShared] = useState(null);

  const [textCopy,setTextCompied] = useState(null);
  // Define functions to handle emoji clicks
  // const [currPostShared,setCurrPostCountShared] = useState(null);
  const totalUsersShared = posts.reduce((total,post) => { if(post.usersShared){ return total + post.usersShared.length;}else{return total;}},0);
  const findSharedUsers = (postId) => {
    const post = posts.find(post => post.id === postId);
    if (post && post.usersShared) { return post.usersShared.map(userShared => userShared.user); } 
    else { return []; }
  };
  const totalUsersCommented = posts.reduce((total,post) => { if(post.userCommented){ return total + post.userCommented.length; }else{return total;}},0);
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
return(<>
<div className={homeMainWindow.Container}>
  {posts.map(post => (
    postComment === post.id &&
    <div key={post.id} className={postCommentsStyle.Container}>
    <h2 className={postCommentsStyle.Header}>Post Author {post.author}{"'"}s <FontAwesomeIcon icon='xmark' className={postCommentsStyle.postHeaderIconRight} onClick={()=>{setPostComment(null)}}/> </h2>
    {/*information about post */}
    <div className={postCommentsStyle.postHeaderWindow}>
      <img className={postCommentsStyle.postHeaderUserImg} alt=""/> 
      <div className={postCommentsStyle.postUserInfo}>
        <label className={postCommentsStyle.nameLabel}>{post.author}</label>
        <label className={postCommentsStyle.dateTimeLabel}>{post.d} at {post.t}</label>    
      </div>
    </div>

      {/*post text or/and image */}
      <div className={postCommentsStyle.PostInfoContainer}>
        {post.img == "" ? <div className={postCommentsStyle.PostInfoText}>{post.text}</div>:
        <>
        <div className={postCommentsStyle.PostInfoTextWithImg}>{post.text} </div> 
          <div className={postCommentsStyle.PostInfoHolder}>
            <img src={post.img} className={postCommentsStyle.Img}/> 
            <div className={postCommentsStyle.OnImgContainer}>
              <h3 className={postCommentsStyle.HeaderImg}>Source</h3>
              <b className={postCommentsStyle.Bold}>Header</b>
              <p className={postCommentsStyle.Paragraph}>Paragraph</p>
            </div>
          </div>
        </>}
      </div>
      {/*react to post and add comment*/}
      <div className={reactionsUIPostComment.Container}>
        <div className={reactionsUIPostComment.Content}>
          {/*all possible Reactions*/}
          {reactions.map((react,index) => ( 
            <label key={index} className={`${reactionsUIPostComment.label} left-${index + 1} ${react.bg}`}> 
              <FontAwesomeIcon icon={react.icon} className={reactionsUIPostComment.Icon}/> 
            </label> 
          ))}
          <span className={reactionsUIPostComment.ReactionCount}>{like}</span>
        </div>

        <ul className={postCommentsStyle.ListContainer}>
              
          <li className={postCommentsStyle.ListShare}>
            <span className={postCommentsStyle.SpanShareNum}>{totalUsersShared} </span>
            <FontAwesomeIcon icon='share' className={`${postCommentsStyle.ShareIcon}`}/>
          </li>

          <li className={postCommentsStyle.ListComment}>
            <span className={postCommentsStyle.CommentIconNum}> {totalUsersCommented} </span> 
            <FontAwesomeIcon icon='comment' className={`${postCommentsStyle.CommentIcon}`}/>
          </li> 
        </ul>
      </div>
      {/*react to post and add comment*/}
      <div className={`${postCommentsStyle.BtnControlHolder}`}>
        <ul>
          <li className={`${postCommentsStyle.BtnList}`} onClick={()=>{setReactToPostId(post.id)}}>
            <FontAwesomeIcon icon="thumbs-up" className={`${postCommentsStyle.Icon}`}/> 
            <span className={`${postCommentsStyle.Span}`}>Like</span>
          </li>
          {reactToPostId === post.id && (
          <div className={postReactStyle.Container}>
            {reactionsBtn.map((button, index) => (
              <label key={index} className={`${postReactStyle.Label} left-${index + 1} ${button.bg}`}>
              {button.icon == 'close' ? <FontAwesomeIcon icon={button.icon} className={`${postReactStyle.Icon} hover:text-rose-500 duration-200 ease-out hover:ease-in`} onClick={()=>{setReactToPostId(null)}}/>:
              <FontAwesomeIcon icon={button.icon} className={postReactStyle.Icon}/>}
              </label>
            ))}
          </div>
          )}
          <li className={`${postCommentsStyle.BtnList}`} onClick={()=>{setPostComment(post.id)}}>
            <FontAwesomeIcon icon="message" className={`${postCommentsStyle.Icon}`}/> 
            <span className={`${postCommentsStyle.Span}`}>Comment</span>
          </li>
          {postShare === post.id &&
            <div className={postShareStylePostComments.Container}>
            <h2 className={postShareStylePostComments.h2}> <FontAwesomeIcon icon="close" className={postShareStylePostComments.IconClose} onClick={()=>{setPostShare(null)}}/>Share Post</h2>
              <label className={postShareStylePostComments.Label}>Link <span className={postShareStyle.Span}>...</span>
                <FontAwesomeIcon icon="copy" className={postShareStylePostComments.IconCopy} onClick={()=>{textCopy ? '':setTextCompied(!textCopy)}} onMouseLeave={()=>{textCopy ? setTextCompied(!textCopy):''}} /> {textCopy && <span className={postShareStylePostComments.SpanTextCopied}>Text copied</span> }
              </label>
            </div>
          }
          <li className={`${postCommentsStyle.BtnList}`} onClick={()=>{setPostShare(post.id)}}>
            <FontAwesomeIcon icon="share" className={`${postCommentsStyle.Icon}`}/> 
            <span className={`${postCommentsStyle.Span}`}>Share</span>
          </li>
        </ul>
      </div>
      <div className="w-[95%] h-[420px] bg-slate-900/60 relative top-3 mx-auto rounded-lg shadow-[0_2px_3px_1px,0_-2px_3px_1px] shadow-slate-950/60">
        <div className="w-[95%] h-[400px] bg-slate-800 mx-auto relative top-2 overflow-x-hidden overflow-y-scroll">
          <div className="w-[95%] h-[70px] bg-slate-900/60 mx-auto mt-2 rounded-tr-xl rounded-tl-xl">
            <div className={`${postCommentsStyle.PostInfoHolder} relative`}> 
            <img className={`bg-gray-700 rounded-full w-[50px] h-[50px] relative top-2 left-2`} alt=""/> 
              <div className={`flex flex-col w-[75%] mx-2 px-1 absolute top-3 left-16`}>
                <label className={`text-slate-300 text-md`}>Who commented</label>
                <label className={`text-slate-400 text-xs`}>{post.d} at {post.t}</label>    
              </div>
              <div className='w-[100%] h-[60px] bg-slate-900/60 relative top-[20px] border-t-[2px] border-slate-900 text-slate-400 px-2 py-1 text-sm'>
                Comment
                {/*who reacted to the post*/}
                <label className="w-[20px] h-[20px] block rounded-full absolute bottom-[2px] right-[2px] bg-slate-800 z-10"></label>
              </div>
              <div className='relative -top-1'>
                <div className={reactionsUIPostComment.Container}>
                  <div className={reactionsUIPostComment.Content}>
                    {/*all possible Reactions*/}
                    {reactions.map((react,index) => ( 
                      <label key={index} className={`${reactionsUIPostComment.label} left-${index + 1} ${react.bg}`}> 
                        <FontAwesomeIcon icon={react.icon} className={reactionsUIPostComment.Icon}/> 
                      </label> 
                    ))}
                    <span className={reactionsUIPostComment.ReactionCount}>{like}</span>
                  </div>

                  <ul className={postCommentsStyle.ListContainer}>
                        
                    <li className={postCommentsStyle.ListShare}>
                      <span className={postCommentsStyle.SpanShareNum}>{totalUsersShared} </span>
                      <FontAwesomeIcon icon='share' className={`${postCommentsStyle.ShareIcon}`}/>
                    </li>

                    <li className={postCommentsStyle.ListComment}>
                      <span className={postCommentsStyle.CommentIconNum}> {totalUsersCommented} </span> 
                      <FontAwesomeIcon icon='comment' className={`${postCommentsStyle.CommentIcon}`}/>
                    </li> 
                  </ul>
                </div>
                <div className={`${postCommentsStyle.BtnControlHolder}`}>
                  <ul>
                    <li className={`${postCommentsStyle.BtnList}`} onClick={()=>{setReactToPostId(post.id)}}>
                      <FontAwesomeIcon icon="thumbs-up" className={`${postCommentsStyle.Icon}`}/> 
                      <span className={`${postCommentsStyle.Span}`}>Like</span>
                    </li>
                    {reactToPostId === post.id && (
                    <div className={postReactStyle.Container}>
                      {reactionsBtn.map((button, index) => (
                        <label key={index} className={`${postReactStyle.Label} left-${index + 1} ${button.bg}`}>
                        {button.icon == 'close' ? <FontAwesomeIcon icon={button.icon} className={`${postReactStyle.Icon} hover:text-rose-500 duration-200 ease-out hover:ease-in`} onClick={()=>{setReactToPostId(null)}}/>:
                        <FontAwesomeIcon icon={button.icon} className={postReactStyle.Icon}/>}
                        </label>
                      ))}
                    </div>
                    )}
                    <li className={`${postCommentsStyle.BtnList}`} onClick={()=>{setPostComment(post.id)}}>
                      <FontAwesomeIcon icon="message" className={`${postCommentsStyle.Icon}`}/> 
                      <span className={`${postCommentsStyle.Span}`}>Reply</span>
                    </li>
                    {postShare === post.id &&
                      <div className={postShareStylePostComments.Container}>
                      <h2 className={postShareStylePostComments.h2}> <FontAwesomeIcon icon="close" className={postShareStylePostComments.IconClose} onClick={()=>{setPostShare(null)}}/>Share Post</h2>
                        <label className={postShareStylePostComments.Label}>Link <span className={postShareStyle.Span}>...</span>
                          <FontAwesomeIcon icon="copy" className={postShareStylePostComments.IconCopy} onClick={()=>{textCopy ? '':setTextCompied(!textCopy)}} onMouseLeave={()=>{textCopy ? setTextCompied(!textCopy):''}} /> {textCopy && <span className={postShareStylePostComments.SpanTextCopied}>Text copied</span> }
                        </label>
                      </div>
                    }
                    <li className={`${postCommentsStyle.BtnList}`} onClick={()=>{setPostShare(post.id)}}>
                      <FontAwesomeIcon icon="share" className={`${postCommentsStyle.Icon}`}/> 
                      <span className={`${postCommentsStyle.Span}`}>Share</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}

{/*Posts Card and window*/}
<div className={homePosts.Container}>
  <h2 className={homePosts.WindowHeader}>Posts</h2>
  <div className={homePosts.Holder}>
    {posts.map(post => ( 
      <div key={post.id} className={homePosts.PostCardContainer}>
        <div className={homePosts.postWindow}>
          {/*information about post */}

          <div className={homePosts.postHeaderWindow}>
          <img className={homePosts.postHeaderUserImg} alt=""/> 
            <div className={homePosts.postUserInfo}>
              <label className={homePosts.nameLabel}>{post.author}</label>
              <label className={homePosts.dateTimeLabel}>{post.d} at {post.t}</label>    
            </div>
            <label className={homePosts.iconHolder}>
              {post.author == user ? <FontAwesomeIcon icon='trash-can' className={homePosts.postHeaderIconRight}/>:<FontAwesomeIcon icon='xmark' className={homePosts.postHeaderIconRight}/>}
            </label>
          </div>

          {/*post text or/and image */}
          <div className={homePosts.PostInfoContainer}>
            {post.img == "" ? <div className={homePosts.PostInfoText}>{post.text}</div>:
            <>
            <div className={homePosts.PostInfoTextWithImg}>{post.text} </div> 
              <div className={homePosts.PostInfoHolder}>
                <img src={post.img} className={homePosts.Img}/> 
                <div className={homePosts.OnImgContainer}>
                  <h3 className={homePosts.Header}>Source</h3>
                  <b className={homePosts.Bold}>Header</b>
                  <p className={homePosts.Paragraph}>Paragraph</p>
                </div>
            </div>
            </>}
          </div>
          {/*react to post and add comment*/}
          <div className={reactionsUI.Container}>

            <div className={reactionsUI.Content}>
              {/*all possible Reactions*/}
              {reactions.map((react,index) => ( 
                <label key={index} className={`${reactionsUI.label} left-${index + 1} ${react.bg}`}> 
                  <FontAwesomeIcon icon={react.icon} className={reactionsUI.Icon}/> 
                </label> 
              ))}
              <span className={reactionsUI.ReactionCount} onMouseEnter={()=>{setWhoLikedBtn(post.id)}} onMouseLeave={()=>{setWhoLikedBtn(!whoLikedBtn)}}>
                { 
                  parseInt(likeCount(post.id)) + 
                  parseInt(topCount(post.id)) + 
                  parseInt(qualityCount(post.id)) + 
                  parseInt(teamCount(post.id)) + 
                  parseInt(smartCount(post.id)) + 
                  parseInt(dealCount(post.id))
                }
              </span>
              {whoLikedBtn === post.id && 
                <div className={whoLikedStyle.Container}>
                  {posts.map(post => (whoLikedBtn === post.id ? findUsersEmojis(post.id).map((user,index) => ( <li key={index} className={whoLikedStyle.li}>{user}</li>)):''))}
                </div>}
            </div>

            <ul className={homePosts.ListContainer}>
            
              <li className={homePosts.ListShare} onMouseEnter={()=>{setWhoShared(post.id)}} onMouseLeave={()=>{setWhoShared(!whoShared)}}>
                <span className={homePosts.SpanShareNum}>{findSharedUsers(post.id).length}</span>
                <FontAwesomeIcon icon='share' className={`${homePosts.ShareIcon}`}/>
              </li>

              {whoShared === post.id && ( 
                <div className={whoSharedStyle.Container}> 
                {posts.map(post => ( whoShared === post.id ?
                  findSharedUsers(post.id).map((user,index) =>( <li key={index} className={whoSharedStyle.li}>{user}</li> )):'' ))}
                </div> 
              )}

              <li className={homePosts.ListComment} onMouseEnter={()=>{setWhoCommented(post.id)}} onMouseLeave={()=>{setWhoCommented(!whoCommented)}}>
                <span className={homePosts.CommentIconNum}> {findCommentedUsers(post.id).length}</span> 
               <FontAwesomeIcon icon='comment' className={`${homePosts.CommentIcon}`}/>
              </li> 

              {whoCommented === post.id && (
                <div className={whoCommentedStyle.Container}> 
                {posts.map(post => ( whoCommented === post.id ?
                  findCommentedUsers(post.id).map((user,index) => ( <li key={index} className={whoCommentedStyle.li}>{user}</li> )):''))}
              </div>)}

            </ul>

          </div>
          {/*react to post and add comment*/}
          <div className={`${homePosts.BtnControlHolder}`}>
            <ul>
              <li className={`${homePosts.BtnList}`} onClick={()=>{setReactToPostId(post.id)}}>
                <FontAwesomeIcon icon="thumbs-up" className={`${homePosts.Icon}`}/> 
                <span className={`${homePosts.Span}`}>Like</span>
              </li>
              {reactToPostId === post.id && (
                <div className={postReactStyle.Container}>
                  {reactionsBtn.map((button, index) => (
                  <label key={index} className={`${postReactStyle.Label} left-${index + 1} ${button.bg}`}>
                    {button.icon == 'close' ? <FontAwesomeIcon icon={button.icon} className={`${postReactStyle.Icon} hover:text-rose-500 duration-200 ease-out hover:ease-in`} onClick={()=>{setReactToPostId(null)}}/>
                      :button.icon == 'thumbs-up' ? <FontAwesomeIcon icon={button.icon} className={postReactStyle.Icon} onClick={()=>{setLike(prevLike => prevLike + 1)}}/>
                      :button.icon == 'medal' ? <FontAwesomeIcon icon={button.icon} className={postReactStyle.Icon} onClick={()=>{setTop(prevTop => prevTop + 1)}}/>
                      :button.icon == 'star' ? <FontAwesomeIcon icon={button.icon} className={postReactStyle.Icon} onClick={()=>{setQuality(prevquality => prevquality + 1)}}/>
                      :button.icon == 'people-group' ? <FontAwesomeIcon icon={button.icon} className={postReactStyle.Icon} onClick={()=>{setTeam(prevteam => prevteam + 1)}}/>
                      :button.icon == 'lightbulb' ? <FontAwesomeIcon icon={button.icon} className={postReactStyle.Icon} onClick={()=>{setSmart(prevsmart => prevsmart + 1)}}/>
                      :button.icon == 'handshake' ? <FontAwesomeIcon icon={button.icon} className={postReactStyle.Icon} onClick={()=>{setDeal(prevdeal => prevdeal + 1)}}/>:''
                    }
                  </label>
                ))}
              </div>
              )}
              <li className={`${homePosts.BtnList}`} onClick={()=>{setPostComment(post.id)}}>
                <FontAwesomeIcon icon="message" className={`${homePosts.Icon}`}/> 
                <span className={`${homePosts.Span}`}>Comment</span>
              </li>

              {postShare === post.id &&
                <div className={postShareStyle.Container}>
                <h2 className={postShareStyle.h2}> <FontAwesomeIcon icon="close" className={postShareStyle.IconClose} onClick={()=>{setPostShare(null)}}/>Share Post</h2>
                  <label className={postShareStyle.Label}>Link <span className={postShareStyle.Span}>...</span>
                    <FontAwesomeIcon icon="copy" className={postShareStyle.IconCopy} onClick={()=>{textCopy ? '':setTextCompied(!textCopy)}} onMouseLeave={()=>{textCopy ? setTextCompied(!textCopy):''}} />
                    {textCopy && <span className={postShareStyle.SpanTextCopied}>Text copied</span> }
                  </label>
                </div>
              }
              <li className={`${homePosts.BtnList}`} onClick={()=>{setPostShare(post.id)}}>
                <FontAwesomeIcon icon="share" className={`${homePosts.Icon}`}/> 
                <span className={`${homePosts.Span}`}>Share</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ))}
    </div>
  </div>
</div>  
</>)}
export default Posts