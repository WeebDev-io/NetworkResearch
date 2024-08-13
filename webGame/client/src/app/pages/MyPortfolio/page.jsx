'use client';
/* eslint-disable react/prop-types */
import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '../../Icons';
import {dc,fb,gh,ig,lin,reddit,sc,so,tg,tumblr,tw,vb,tt,wa,yt,q} from "./img";
import PropTypes from 'prop-types';
const styles = {
  Container:`bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-slate-300 col-span-12 py-[18px] relative`,
  Holder:`w-[440px] bg-slate-800 mx-auto h-[790px] relative top-2 rounded-lg`,
  Header:`h-[30px] leading-[60px] text-lg w-[50%] font-sans font-semibold mx-auto text-center`,
  ContentHolder:`flex flex-col relative top-7 h-[720px] w-[96%] mx-auto bg-slate-800 rounded-bl-lg rounded-br-lg`,
  Content:`flex flex-col relative w-[150px]`,
  Img:`w-[150px] bg-slate-700 h-[200px] relative -top-2 left-0 border-collapse`,
  imgControlButtons:{
    controlContainer:`flex flex-row absolute w-[150px] h-[30px] bottom-2 right-0`,
    upload:`w-[50px] bg-slate-900 relative hover:bg-slate-950 hover:text-sky-500 duration-300 ease-in`,
    change:`w-[50px] bg-slate-900 relative hover:bg-slate-950 hover:text-amber-500 duration-300 ease-in`,
    delete:`w-[50px] bg-slate-900 relative hover:bg-slate-950 hover:text-rose-500 duration-300 ease-in`,
  },
  personalInfo:{
    Container:`w-[270px] h-[170px] absolute -top-2 right-0`,
    Header:`border-b-[1px] border-slate-800 px-2 text-slate-400 bg-slate-950 text-center text-sm py-1`,
    Holder:`w-[270px] h-[170px] bg-slate-950 border-r-[1px] border-slate-800 absolute left-0`,
    Content:`overflow-x-hidden overflow-y-scroll h-[165px] scrollbarWithNone px-1`
  },
  privacyButtonMonitor:{
    Container:`w-full h-[140px] relative -top-[7px]`,
    Paragraph:`w-[100%] bg-slate-950 p-1 border-b-[1px] h-[29px] leading-[22px] border-slate-800 text-center text-xs text-slate-300/80 font-sans font-semibold`,
    ContentHolder:`flex flex-row h-[70px] bg-slate-950 relative`,
  },
  everyoneSH:{
    Content:`w-[50%] mx-auto relative text-amber-400`,
    Label:`block h-[25px] leading-[25px] text-sm bg-slate-950 w-[100%] border-b-[1px] border-slate-800 text-center relative`,
    Span:`block h-[26px] w-[50px] leading-[25px] text-sm bg-slate-950 text-center absolute left-0 top-9`,
    SpanT:`text-rose-500`,
    SpanF:`text-amber-400`,
    BtnHolder:`w-[50px] h-[30px] border-[2px] border-amber-400 rounded-2xl absolute right-2 top-[33px] cursor-pointer`,
    Btn:`w-[20px] h-[20px] relative -top-[5px] left-[3px] duration-300 rounded-full`,
    BtnT:`bg-rose-500 translate-x-[20px]`,
    BtnF:`bg-amber-400`,
  },
  friendSH:{
    Content:`w-[50%] mx-auto relative text-emerald-400 border-x-[1px] border-slate-800`,
    Label:`block h-[25px] leading-[25px] text-sm bg-slate-950 w-[100%] border-b-[1px] border-slate-800 text-center relative`,
    Span:`block h-[26px] w-[50px] leading-[25px] text-sm bg-slate-950 text-center absolute left-0 top-9`,
    SpanT:`text-rose-500`,
    SpanF:`text-emerald-400`,
    BtnHolder:`w-[50px] h-[30px] border-[2px] border-emerald-400 rounded-2xl absolute right-2 top-[33px] cursor-pointer`,
    Btn:`w-[20px] h-[20px] relative -top-[5px] left-[3px] duration-300 rounded-full`,
    BtnT:`bg-rose-500 translate-x-[20px]`,
    BtnF:`bg-emerald-400`,
  },
  teamSH:{
    Content:`w-[50%] mx-auto relative text-sky-400`,
    Label:`block h-[25px] leading-[25px] text-sm bg-slate-950 w-[100%] border-b-[1px] border-slate-800 text-center relative`,
    Span:`block h-[26px] w-[50px] leading-[25px] text-sm bg-slate-950 text-center absolute left-0 top-9`,
    SpanT:`text-rose-500`,
    SpanF:`text-sky-400`,
    BntHolder:`w-[50px] h-[30px] border-[2px] border-sky-400 rounded-2xl absolute right-2 top-[33px] cursor-pointer`,
    Btn:`w-[20px] h-[20px] relative -top-[5px] left-[3px] duration-300 rounded-full`,
    BtnT:`bg-rose-500 translate-x-[20px]`,
    BtnF:`bg-sky-400`,
  },
  skillHobbiesLinkContainer:`relative flex flex-row w-full h-[510px] bg-slate-800 text-slate-800 rounded-bl-lg rounded-br-lg -top-[19px]`,
  skills:{
    Container:`bg-slate-950 h-[150px] w-[215px] relative border-r-[1px] border-slate-800`,
    Header:`border-b-[1px] border-slate-800 text-slate-400 text-center text-sm h-[30px] leading-[30px]`,
    Content:`overflow-x-hidden overflow-y-scroll h-[100px] scrollbarWithNone`,
    Span:`h-[25px] leading-[23px] w-auto inline-block bg-slate-700 text-slate-200 relative top-1 left-1 mr-[6px] px-2 text-sm rounded-lg mb-[6px]`,
  },
  portfolioLinksStyles:{
    container:`flex flex-col absolute -bottom-[22px] w-full`,
    holder:`bg-slate-950 h-[100px]`,
    h2:`border-y-[1px] border-slate-800 text-slate-400 text-center text-sm h-[30px] leading-[30px]`,
    holderScroll:`overflow-x-hidden overflow-y-scroll h-[60px] scrollbarWithNone`,
    link:`h-[45px] leading-[45px] w-[45px] inline-block relative left-7 top-3 mx-2 mb-3 rounded-full mb-[6px] text-center text-3xl bg-white nth`,
    Img:`w-[100%] h-[100%] rounded-full absolute`,
  },
  additionalInfoStyle:{
    container:`bg-slate-950 h-[180px] rounded-bl-lg rounded-br-lg relative top-[2px]`,
    h2:`border-b-[1px] border-slate-800 text-slate-400 text-center text-sm h-[30px] leading-[30px] relative`,
    p:`h-[130px] leading-[23px] w-[98%] inline-block bg-slate-950 text-slate-400 relative top-1 left-1 mr-[6px] px-2 text-sm rounded-lg overflow-x-hidden overflow-y-scroll scrollbarWithNone`,
  },
}
const profileCard = {
  Holder:`mt-1 h-[30px] leading-[30px]`,
  Span:`h-[30px] leading-[30px] w-[90px] inline-block bg-slate-950 text-slate-300 text-sm text-center border-t-[1px] border-r-[1px] border-slate-800`,
  Span2:`h-[30px] leading-[30px] w-[170px] inline-block bg-slate-950 text-slate-300 relative text-sm text-center border-t-[1px] border-slate-800`,
  Label:`text-slate-300 px-2 font-light`,
  BoldR:`text-sky-400 pr-1`,
  BoldL:`text-sky-400 pl-1`,
}
const uploadImgStyle = {
  Container:`absolute bg-slate-700 w-[440px] -left-2 h-[440px] rounded-2xl z-10 shadow-[0_0_48px_12px_#000000]`,
  h2:`my-2 text-center h-[30px] leading-[30px]`,
  IconClose:`cursor-pointer absolute right-3 top-3 hover:text-rose-500 duration-300 hover:ease-in ease-out`,
  InputHolderBtn:`w-[80px] ml-2 h-[30px] leading-[28px] shadow-[0_1px_3px_1px_#000000cc,0_1px_3px_1px_#111924_inset] rounded-lg bg-slate-800 block border-[1px] border-slate-500 text-center text-slate-400 text-sm hover:text-slate-300 duration-300 ease-in`,
  Input:`relative -top-7 w-[70px] opacity-0 left-0 cursor-pointer`,
  ImgSavedBtn:`w-[60px] absolute top-[46px] left-[96px] h-[30px] leading-[28px] shadow-[0_1px_3px_1px_#000000cc,0_1px_6px_1px_#111924_inset] rounded-lg bg-slate-800 block border-[1px] border-slate-500 text-center text-slate-400 text-sm hover:text-slate-300 duration-300 ease-in`,
  ImgCanceledBtn:`w-[90px] absolute top-[46px] left-[165px] h-[30px] leading-[28px] shadow-[0_1px_3px_1px_#000000cc,0_1px_6px_1px_#111924_inset] rounded-lg bg-slate-800 block border-[1px] border-slate-500 text-center text-slate-400 text-sm hover:text-slate-300 duration-300 ease-in`,
  ImgPreviewHolder:`w-[95%] mx-auto`,
  ImgPreviewHeading:`my-2 text-center h-[30px] leading-[30px]`,
  IconImgIconPreview:`bg-slate-800 h-[300px] w-full rounded-2xl text-center`,
}
const changeImgStyle = {
  Container:`absolute bg-slate-700 w-[430px] -left-1 h-[440px] rounded-2xl z-10 shadow-[0_0_48px_12px_#000000]`,
  H2:`my-2 text-center h-[30px] leading-[30px]`,
  IconClose:`cursor-pointer absolute right-3 top-3`,
  UploadImgBtn:`w-[80px] ml-2 h-[30px] leading-[30px] shadow-[0_1px_3px_1px_#000000cc,0_1px_3px_1px_#111924_inset] rounded-lg bg-slate-800 block border-[1px] border-slate-500 text-center text-slate-400 text-sm hover:text-slate-300 duration-300 ease-in`,
  Input:`relative -top-7 w-[70px] opacity-0 cursor-pointer left-0`,

  SaveBtn:`w-[110px] h-[30px] absolute top-[46px] left-[96px] leading-[30px] shadow-[0_1px_3px_1px_#000000cc,0_1px_3px_1px_#111924_inset] rounded-lg bg-slate-800 block border-[1px] border-slate-500 text-center text-slate-400 text-sm hover:text-slate-300 duration-300 ease-in`,
  CancelChange:`w-[60px] absolute h-[30px] top-[46px] left-[214px] leading-[30px] shadow-[0_1px_3px_1px_#000000cc,0_1px_6px_1px_#111924_inset] rounded-lg bg-slate-800 block border-[1px] border-slate-500 text-center text-slate-400 text-sm hover:text-slate-300 duration-300 ease-in`,

  CurrImgContainer:`w-[50%] ml-2`,
  CurrImgH2:`my-2 text-center h-[30px] leading-[30px]`,
  CurrImg:`bg-slate-800 h-[300px] w-[95%] rounded-2xl text-center`,

  ToChangeImgContainer:`w-[50%] absolute -right-1 top-[78px]`,
  ToChangeImgH2:`my-2 text-center h-[30px] leading-[30px]`,
  ToChangeImg:`bg-slate-800 h-[300px] w-[95%] rounded-2xl text-center`,
}
const deleteImg = {
  Container:`w-[420px] h-[100px] absolute top-[220px] bg-slate-900 left-[1px] rounded-2xl z-10 shadow-[0_0_48px_12px_#000000] border-[1px] border-slate-600`,
  H2:`my-2 text-center h-[30px] leading-[30px] text-sm font-sans font-semibold text-slate-400`,
  IconClose:`cursor-pointer absolute right-4 top-4 hover:text-rose-500 duration-300 hover:ease-in ease-out`,
  BtnHolder:`w-[220px] mx-auto relative top-1`,
  Btn:`w-[90px] h-[30px] text-slate-300 text-center rounded-lg border-[1px] shadow-[0_0_3px_1px] hover:shadow-[0_0_3px_1px_inset] duration-300 hover:ease-in ease-out`,
  BtnYes:`bg-gradient-to-b from-rose-600 to-rose-800 ml-2 border-rose-800 shadow-rose-500/60 hover:shadow-rose-950`,
  BtnNo:`bg-gradient-to-b from-sky-600 to-sky-800 ml-4 border-sky-800 shadow-sky-500/60 hover:shadow-sky-950`,

}
const skills = [
  {id:1,name:"JavaScript"},
  {id:2,name:"PHP"},
  {id:3,name:"SQL"},
  {id:4,name:"MySQL"},
  {id:5,name:"React"},
  {id:6,name:"React"},
  {id:7,name:"React"},
  {id:8,name:"React"},
]
const hobbies = [
  {id:1,name:"Skying"},
  {id:2,name:"Boxing"},
  {id:3,name:"Painting"},
  {id:4,name:"Writting"},
  {id:5,name:"Walking"},
  {id:6,name:"Walking"},
]
const socialLinks = [
  {id:1,name:"Facebook",icon:<span className={`${styles.portfolioLinksStyles.link}`}>
    <img src={fb} className={styles.portfolioLinksStyles.Img}/></span>},
  {id:2,name:"YT",icon:<span className={`${styles.portfolioLinksStyles.link}`}>
    <img src={yt} className={`${styles.portfolioLinksStyles.Img}`}/></span>},
  {id:3,name:"Twitter",icon:<span className={`${styles.portfolioLinksStyles.link}`}>
    <img src={tw} className={styles.portfolioLinksStyles.Img}/></span>},
  {id:4,name:"WhatApp",icon:<span className={`${styles.portfolioLinksStyles.link}`}>
    <img src={wa} className={styles.portfolioLinksStyles.Img}/></span>},
  {id:5,name:"SnapChat",icon:<span className={`${styles.portfolioLinksStyles.link}`}>
    <img src={sc} className={styles.portfolioLinksStyles.Img}/></span>},
  {id:6,name:"Instagram",icon:<span className={`${styles.portfolioLinksStyles.link}`}>
    <img src={ig} className={styles.portfolioLinksStyles.Img}/></span>},
  {id:7,name:"Discord",icon:<span className={`${styles.portfolioLinksStyles.link}`}>
    <img src={dc} className={styles.portfolioLinksStyles.Img}/></span>},
  {id:8,name:"LinkedIn",icon:<span className={`${styles.portfolioLinksStyles.link}`}>
    <img src={lin} className={styles.portfolioLinksStyles.Img}/></span>},
  {id:9,name:"Tumblr",icon:<span className={`${styles.portfolioLinksStyles.link}`}>
    <img src={tumblr} className={styles.portfolioLinksStyles.Img}/></span>},
  {id:10,name:"TikTok",icon:<span className={`${styles.portfolioLinksStyles.link}`}>
    <img src={tt} className={styles.portfolioLinksStyles.Img}/></span>},
  {id:11,name:"Reddit",icon:<span className={`${styles.portfolioLinksStyles.link}`}>
    <img src={reddit} className={styles.portfolioLinksStyles.Img}/></span>},
  {id:12,name:"Telegram",icon:<span className={`${styles.portfolioLinksStyles.link}`}>
    <img src={tg} className={styles.portfolioLinksStyles.Img}/></span>},
  {id:13,name:"Quora",icon:<span className={`${styles.portfolioLinksStyles.link}`}>
    <img src={q} className={styles.portfolioLinksStyles.Img}/></span>},
  {id:14,name:"viber",icon:<span className={`${styles.portfolioLinksStyles.link}`}>
    <img src={vb} className={styles.portfolioLinksStyles.Img}/></span>},
  {id:15,name:"Github",icon:<span className={`${styles.portfolioLinksStyles.link}`}>
    <img src={gh} className={styles.portfolioLinksStyles.Img}/></span>},
  {id:16,name:"StackOverflow",icon:<span className={`${styles.portfolioLinksStyles.link}`}>
    <img src={so} className={styles.portfolioLinksStyles.Img}/></span>},
]
const additionalInformation = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const PortfolioPersonalInfoCard = ({nameLabel,name,ageCheck,age})=>(
  <div className={profileCard.Holder}>
    <span className={profileCard.Span}>{nameLabel}</span>
    <span className={profileCard.Span2}>{name}
      {ageCheck ? <label className={profileCard.Label}>
        <b className={profileCard.BoldR}>(</b>{age}
        <b className={profileCard.BoldL}>)</b>
      </label>:""}
    </span>
  </div>
)
const personalInfo = {
  name:'username',
  surname:'surname',
  DOB:'1996.05.16',
  Age:'25',
  FOS:'Tech',
  FOSR:'Web dev.',
  Email:'email@email.com',
}
function togglePrivacy(inputString) {
  const stringLength = inputString.length;
  const hide = '*'.repeat(stringLength);
  return hide;
}
const MyPortfolio = () => {
  const [globalPublic,setGlobalPublic] = useState(false);
  const [friendsPublic,setFriendsPublic] = useState(false);
  const [teamPublic,setTeamPublic] = useState(false);

  const [uploadImgWindow,setUploadImgWindow] = useState(false);
  const [changeImgWindow,setChangeImgWindow] = useState(false);
  const [deleteImgWindow,setDeleteImgWindow] = useState(false);

  const [uploadImg,setUploadImg] = useState(null);
  const [displayImg,setDisplayImg] = useState(null);
  
  const [uploadNewImg,setUploadNewImg] = useState(null);
  return (<>
    <div className={`${styles.Container}`}>
      <div className={`${styles.Holder}`}>
      <h2 className={`${styles.Header}`}>Portfolio</h2>
      <div className={`${styles.ContentHolder}`}>
        <div className={`${styles.Content}`}>
          <img src={ displayImg ? URL.createObjectURL(displayImg):''} alt="" className={`${styles.Img}`}/>

          {uploadImgWindow && (
          <div className={uploadImgStyle.Container}>
            <h2 className={uploadImgStyle.h2}> Upload Image 
              <FontAwesomeIcon icon='close' className={uploadImgStyle.IconClose} onClick={()=>{setUploadImgWindow(!uploadImgWindow)}}/>
            </h2>
            <div className={uploadImgStyle.InputHolderBtn}> Upload 
              <input type="file" onChange={(event) =>{setUploadImg(event.target.files[0])}} className={uploadImgStyle.Input}/>
            </div>

            {uploadImg && ( <button className={`${uploadImgStyle.ImgSavedBtn}`} onClick={()=>{setDisplayImg(uploadImg)}}>Save</button>)}
            {uploadImg && ( <button className={`${uploadImgStyle.ImgCanceledBtn}`} onClick={()=>{setUploadImg(null)}}>Remove</button>)}

            <div className={`${uploadImgStyle.ImgPreviewHolder}`}> <h2 className={`${uploadImgStyle.ImgPreviewHeading}`}>Upload image preview</h2>
              {uploadImg && ( <img src={URL.createObjectURL(uploadImg)} className={`${uploadImgStyle.IconImgIconPreview}`}/>) }
            </div>
          </div>)}

          {changeImgWindow && ( 
            <div className={changeImgStyle.Container}> 
              <h2 className={changeImgStyle.H2}>Change Image <FontAwesomeIcon icon='close' className={changeImgStyle.IconClose} 
                onClick={()=>{setChangeImgWindow(!changeImgWindow)}}/>
            </h2>
            <div className={changeImgStyle.UploadImgBtn}>Upload
              <input type="file" onChange={(event) =>{setUploadNewImg(event.target.files[0])}} className={changeImgStyle.Input}/>
             </div>

            {uploadNewImg && ( <button className={changeImgStyle.SaveBtn} onClick={()=>{setDisplayImg(uploadNewImg);setUploadNewImg(null)}}>Save Changes</button>)}

            {uploadNewImg && ( <button className={changeImgStyle.CancelChange} onClick={()=>{setUploadNewImg(null)}}>Remove</button>)}

            <div className={changeImgStyle.CurrImgContainer}>
              <h2 className={changeImgStyle.CurrImgH2}>Current Image</h2> 
              {displayImg && ( <img src={URL.createObjectURL(displayImg)} alt="No img" className={changeImgStyle.CurrImg}/>) }
            </div>

            <div className={changeImgStyle.ToChangeImgContainer}>
              <h2 className={changeImgStyle.ToChangeImgH2}>Uploaded Image Preview</h2> 
              {uploadNewImg && ( <img src={URL.createObjectURL(uploadNewImg)} className={changeImgStyle.ToChangeImg}/>) }
            </div>
          </div>)}

          {deleteImgWindow && (
            <div className={deleteImg.Container}>
              <h2 className={deleteImg.H2}>{"Delete img confirmation"}
              <FontAwesomeIcon icon='close' className={deleteImg.IconClose} onClick={()=>{setDeleteImgWindow(!deleteImgWindow)}}/> </h2>
              <div className={deleteImg.BtnHolder}>
                <button className={`${deleteImg.BtnYes} ${deleteImg.Btn}`} onClick={()=>{setDisplayImg(null);setDeleteImgWindow(!deleteImgWindow)}}>Yes</button>
                <button className={`${deleteImg.BtnNo} ${deleteImg.Btn}`} onClick={()=>{setDeleteImgWindow(!deleteImgWindow)}}>No</button>
              </div>
            </div>
          )}
          <div className={`${styles.imgControlButtons.controlContainer}`}>
            <button className={`${styles.imgControlButtons.upload}`} 
              onClick={()=>{setUploadImgWindow(!uploadImgWindow)}}><FontAwesomeIcon icon='upload' size='xs'/>
            </button>
            <button className={`${styles.imgControlButtons.change}`} 
              onClick={()=>{setChangeImgWindow(!changeImgWindow)}}><FontAwesomeIcon icon='rotate' size='xs'/>
            </button>
            <button className={`${styles.imgControlButtons.delete}`} 
              onClick={()=>{setDeleteImgWindow(!deleteImgWindow)}}><FontAwesomeIcon icon='trash' size='xs'/>
            </button>
          </div>

        </div>

            <div className={`${styles.personalInfo.Container}`}>
              <h2 className={`${styles.personalInfo.Header}`}>Personal Information</h2>  

              <div className={`${styles.personalInfo.Holder}`}>
                <div className={`${styles.personalInfo.Content}`}>
                  <PortfolioPersonalInfoCard nameLabel="Name" name={
                    globalPublic ? togglePrivacy(personalInfo.name):
                    friendsPublic ? togglePrivacy(personalInfo.name):
                    teamPublic ? togglePrivacy(personalInfo.name):personalInfo.name} ageCheck={false}/>

                  <PortfolioPersonalInfoCard nameLabel="Surname" name={
                    globalPublic ? togglePrivacy(personalInfo.surname):
                    friendsPublic ? togglePrivacy(personalInfo.surname):
                    teamPublic ? togglePrivacy(personalInfo.surname):personalInfo.surname} ageCheck={false}/>

                  <PortfolioPersonalInfoCard nameLabel="DOB" name={
                    globalPublic ? togglePrivacy(personalInfo.DOB):
                    friendsPublic ? togglePrivacy(personalInfo.DOB):
                    teamPublic ? togglePrivacy(personalInfo.DOB):personalInfo.DOB} 

                    age={globalPublic ? togglePrivacy(personalInfo.Age):
                    friendsPublic ? togglePrivacy(personalInfo.Age):
                    teamPublic ? togglePrivacy(personalInfo.Age):personalInfo.Age} ageCheck={true}/>

                  <PortfolioPersonalInfoCard nameLabel="FOS" name={
                    globalPublic ? togglePrivacy(personalInfo.FOS):
                    friendsPublic ? togglePrivacy(personalInfo.FOS):
                    teamPublic ? togglePrivacy(personalInfo.FOS):personalInfo.FOS} ageCheck={false}/>

                  <PortfolioPersonalInfoCard nameLabel="FOSR" name={
                    globalPublic ? togglePrivacy(personalInfo.FOSR):
                    friendsPublic ? togglePrivacy(personalInfo.FOSR):
                    teamPublic ? togglePrivacy(personalInfo.FOSR):personalInfo.FOSR} ageCheck={false}/>

                  <PortfolioPersonalInfoCard nameLabel="Email" name={
                    globalPublic ? togglePrivacy(personalInfo.Email):
                    friendsPublic ? togglePrivacy(personalInfo.Email):
                    teamPublic ? togglePrivacy(personalInfo.Email):personalInfo.Email} ageCheck={false}/>

                </div>
              </div>
            </div>

            <div className={`${styles.privacyButtonMonitor.Container}`}>
              <p className={`${styles.privacyButtonMonitor.Paragraph}`}>{"Only for you will be seen"}</p>
              <div className={`${styles.privacyButtonMonitor.ContentHolder}`}>

                <div className={`${styles.everyoneSH.Content}`}>
                  <label className={`${styles.everyoneSH.Label}`}>Everyone</label>
                  <span className={`${styles.everyoneSH.Span} ${globalPublic ? `${styles.everyoneSH.SpanT}`:`${styles.everyoneSH.SpanF}`}`}>
                    {globalPublic?'Private':'Public'}
                  </span>
                  <div className={`${styles.everyoneSH.BtnHolder}`} onClick={()=>setGlobalPublic(!globalPublic)}>
                    <button className={`${styles.everyoneSH.Btn} ${globalPublic ? `${styles.everyoneSH.BtnT}`:`${styles.everyoneSH.BtnF}`}`}></button>
                  </div>
                </div>  

                <div className={`${styles.friendSH.Content}`}>
                  <label className={`${styles.friendSH.Label}`}>Friends</label>
                  <span className={`${styles.friendSH.Span} ${friendsPublic? `${styles.friendSH.SpanT}`:`${styles.friendSH.SpanF}`}`}>{friendsPublic?'Private':'Public'}</span>
                  <div className={`${styles.friendSH.BtnHolder}`} onClick={()=>setFriendsPublic(!friendsPublic)}>
                   <button className={`${styles.friendSH.Btn} ${friendsPublic ? `${styles.friendSH.BtnT}`:`${styles.friendSH.BtnF}`}`}></button>
                  </div>
                </div>

                <div className={`${styles.teamSH.Content}`}>
                  <label className={`${styles.teamSH.Label}`}>Team</label>
                  <span className={`${styles.teamSH.Span} ${teamPublic? `${styles.teamSH.SpanT}`:`${styles.teamSH.SpanF}`}`}>{teamPublic?'Private':'Public'}</span>
                  <div className={`${styles.teamSH.BntHolder}`} onClick={()=>setTeamPublic(!teamPublic)}>
                    <button className={`${styles.teamSH.Btn} ${teamPublic ? `${styles.teamSH.BtnT}`:`${styles.teamSH.BtnF}`}`}></button>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.skillHobbiesLinkContainer}`}>

              <div className={`${styles.skills.Container}`}>
                <h2 className={`${styles.skills.Header}`}>Skills</h2>
                <div className={`${styles.skills.Content}`}>{skills.map((skill)=>(<span key={skill.id} className={`${styles.skills.Span}`}>{skill.name}</span>))}</div>
              </div>

               <div className={`${styles.skills.Container}`}>
                <h2 className={`${styles.skills.Header}`}>Hobbies</h2>
                <div className={`${styles.skills.Content}`}>{hobbies.map((hobby) =>(<span key={hobby.id} className={`${styles.skills.Span}`}>{hobby.name}</span>))}</div>
              </div>

              <div className={`${styles.portfolioLinksStyles.container}`}>
                <div className={`${styles.portfolioLinksStyles.holder}`}>
                  <h2 className={`${styles.portfolioLinksStyles.h2}`}>Links</h2>
                  <div className={`${styles.portfolioLinksStyles.holderScroll}`}>{socialLinks.map((socialLink) => (socialLink.icon))}</div>
                </div>

                <div className={`${styles.additionalInfoStyle.container}`}>
                  <h2 className={`${styles.additionalInfoStyle.h2}`}>Addition Information</h2>
                  <p className={`${styles.additionalInfoStyle.p}`}>{additionalInformation}</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
  </>)
}

export default MyPortfolio