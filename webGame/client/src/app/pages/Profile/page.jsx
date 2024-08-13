'use client';
/* eslint-disable react/prop-types */
import React,{useState} from 'react'
import { FontAwesomeIcon } from '../../Icons';
import PropTypes from 'prop-types';
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
const aboutMe = [
  {id:1,location:"Education",name:'Education'},
  {id:2,location:"Work",name:'Work'},
  {id:3,location:"Location",name:'Location'},
  {id:4,location:"Life events",name:'Life events'},
  {id:5,location:"Work Role",name:'Work Role'},
]
const additionalInformation = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const PortfolioPersonalInfoCard = ({nameLabel,name,ageCheck,age})=>(
  <div className={`mt-1 h-[30px] leading-[30px]`}>
    <span className={`h-[30px] leading-[30px] w-[90px] inline-block bg-slate-950 text-slate-300 text-sm text-center border-t-[1px] border-r-[1px] border-slate-800`}>{nameLabel}</span>
    <span className={`h-[30px] leading-[30px] w-[170px] inline-block bg-slate-950 text-slate-300 relative text-sm text-center border-t-[1px] border-slate-800`}>{name}
      {ageCheck ? <label className={`text-slate-300 px-2 font-light`}>
        <b className={`text-sky-400 pr-1`}>(</b>{age}
        <b className={`text-sky-400 pl-1`}>)</b>
      </label>:null}
    </span>
  </div>
)
const Profile = () => {
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
    <div className={`bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-slate-300 col-span-12 py-[18px] relative`}>
      <div className={`w-[440px] bg-slate-800 mx-auto h-[790px] relative top-2 rounded-lg`}>
      <h2 className={`h-[30px] leading-[60px] text-lg w-[50%] font-sans font-semibold mx-auto text-center`}>Profile</h2>
      <div className={`flex flex-col relative top-7 h-[720px] w-[96%] mx-auto bg-slate-800 rounded-bl-lg rounded-br-lg`}>
        <div className={`flex flex-col relative w-[150px]`}>
          <img src={ 
            displayImg ? URL.createObjectURL(displayImg):''
          } alt="" className={`w-[150px] h-[200px] relative -top-2 left-0 border-collapse bg-slate-700 outline-none`}/>

          {uploadImgWindow && (
          <div className={`absolute bg-slate-700 w-[440px] -left-2 h-[440px] rounded-2xl z-10 shadow-[0_0_48px_12px_#000000]`}>
            <h2 className={`my-2 text-center h-[30px] leading-[30px]`}> Upload Image 
              <FontAwesomeIcon icon='close' className={`cursor-pointer absolute right-3 top-3 hover:text-rose-500 duration-300 hover:ease-in ease-out`} onClick={()=>{setUploadImgWindow(!uploadImgWindow)}}/>
            </h2>
            <div className={`w-[80px] ml-2 h-[30px] leading-[28px] shadow-[0_1px_3px_1px_#000000cc,0_1px_3px_1px_#111924_inset] rounded-lg bg-slate-800 block border-[1px] border-slate-500 text-center text-slate-400 text-sm hover:text-slate-300 duration-300 ease-in`}> Upload 
              <input type="file" onChange={(event) =>{setUploadImg(event.target.files[0])}} className={`relative -top-7 w-[70px] opacity-0 left-0 cursor-pointer`}/>
            </div>

            {uploadImg && ( <button className={`w-[60px] absolute top-[46px] left-[96px] h-[30px] leading-[28px] shadow-[0_1px_3px_1px_#000000cc,0_1px_6px_1px_#111924_inset] rounded-lg bg-slate-800 block border-[1px] border-slate-500 text-center text-slate-400 text-sm hover:text-slate-300 duration-300 ease-in`} onClick={()=>{setDisplayImg(uploadImg)}}>Save</button>)}
            {uploadImg && ( <button className={`w-[90px] absolute top-[46px] left-[165px] h-[30px] leading-[28px] shadow-[0_1px_3px_1px_#000000cc,0_1px_6px_1px_#111924_inset] rounded-lg bg-slate-800 block border-[1px] border-slate-500 text-center text-slate-400 text-sm hover:text-slate-300 duration-300 ease-in`} onClick={()=>{setUploadImg(null)}}>Remove</button>)}

            <div className={`w-[95%] mx-auto`}> <h2 className={`$my-2 text-center h-[30px] leading-[30px]`}>Upload image preview</h2>
              {uploadImg && ( <img src={URL.createObjectURL(uploadImg)} className={`bg-slate-800 h-[300px] w-full rounded-2xl text-center`}/>) }
            </div>
          </div>)}

          {changeImgWindow && ( 
            <div className={`absolute bg-slate-700 w-[440px] -left-2 h-[440px] rounded-2xl z-10 shadow-[0_0_48px_12px_#000000]`}> 
              <h2 className={`my-2 text-center h-[30px] leading-[30px]`}>Change Image <FontAwesomeIcon icon='close' className={`cursor-pointer absolute right-3 top-3 hover:text-rose-500 duration-300 hover:ease-in ease-out`} 
                onClick={()=>{setChangeImgWindow(!changeImgWindow)}}/>
            </h2>

              <div className={`w-[80px] ml-2 h-[30px] leading-[30px] shadow-[0_1px_3px_1px_#000000cc,0_1px_3px_1px_#111924_inset] rounded-lg bg-slate-800 block border-[1px] border-slate-500 text-center text-slate-400 text-sm hover:text-slate-300 duration-300 ease-in`}>Upload
                <input type="file" onChange={(event) =>{setUploadNewImg(event.target.files[0])}} className={`relative -top-7 w-[70px] opacity-0 cursor-pointer left-0`}/>
              </div>

              {uploadNewImg && ( <button className={`w-[110px] h-[30px] absolute top-[46px] left-[96px] leading-[30px] shadow-[0_1px_3px_1px_#000000cc,0_1px_3px_1px_#111924_inset] rounded-lg bg-slate-800 block border-[1px] border-slate-500 text-center text-slate-400 text-sm hover:text-slate-300 duration-300 ease-in`} onClick={()=>{setDisplayImg(uploadNewImg);setUploadNewImg(null)}}>Save Changes</button>)}

              {uploadNewImg && ( <button className={`w-[60px] absolute h-[30px] top-[46px] left-[214px] leading-[30px] shadow-[0_1px_3px_1px_#000000cc,0_1px_6px_1px_#111924_inset] rounded-lg bg-slate-800 block border-[1px] border-slate-500 text-center text-slate-400 text-sm hover:text-slate-300 duration-300 ease-in`} onClick={()=>{setUploadNewImg(null)}}>Remove</button>)}

              <div className={`w-[50%] ml-2`}>
                <h2 className={`my-2 text-center h-[30px] leading-[30px]`}>Current Image</h2> 
                {displayImg && ( <img src={URL.createObjectURL(displayImg)} alt="No img" className={`bg-slate-800 h-[300px] w-[95%] rounded-2xl text-center`}/>) }
              </div>

              <div className={`w-[50%] absolute -right-1 top-[78px]`}>
                <h2 className={`my-2 text-center h-[30px] leading-[30px]`}>Uploaded Image Preview</h2> 
                {uploadNewImg && ( <img src={URL.createObjectURL(uploadNewImg)} className={`bg-slate-800 h-[300px] w-[95%] rounded-2xl text-center`}/>) }
              </div>
          </div>)}
          {deleteImgWindow && (
            <div className={`w-[420px] h-[100px] absolute top-[220px] bg-slate-900 left-[1px] rounded-2xl z-10 shadow-[0_0_48px_12px_#000000] border-[1px] border-slate-600`}>
              <h2 className={deleteImg.H2}>{"Delete img confirmation"}
              <FontAwesomeIcon icon='close' className={`cursor-pointer absolute right-4 top-4 hover:text-rose-500 duration-300 hover:ease-in ease-out`} onClick={()=>{setDeleteImgWindow(!deleteImgWindow)}}/> </h2>
              <div className={`w-[220px] mx-auto relative top-1`}>
                <button className={`bg-gradient-to-b from-rose-600 to-rose-800 ml-2 border-rose-800 shadow-rose-500/60 hover:shadow-rose-950 w-[90px] h-[30px] text-slate-300 text-center rounded-lg border-[1px] shadow-[0_0_3px_1px] hover:shadow-[0_0_3px_1px_inset] duration-300 hover:ease-in ease-out`} onClick={()=>{setDisplayImg(null);setDeleteImgWindow(!deleteImgWindow)}}>Yes</button>
                <button className={`bg-gradient-to-b from-sky-600 to-sky-800 ml-4 border-sky-800 shadow-sky-500/60 hover:shadow-sky-950 w-[90px] h-[30px] text-slate-300 text-center rounded-lg border-[1px] shadow-[0_0_3px_1px] hover:shadow-[0_0_3px_1px_inset] duration-300 hover:ease-in ease-out`} onClick={()=>{setDeleteImgWindow(!deleteImgWindow)}}>No</button>
              </div>
            </div>
          )}
          <div className={`flex flex-row absolute w-[150px] h-[30px] bottom-[8px] right-0`}>
            <button className={`w-[50px] bg-slate-900 relative hover:bg-slate-950 hover:text-sky-500 duration-300 ease-in`} 
              onClick={()=>{setUploadImgWindow(!uploadImgWindow)}}><FontAwesomeIcon icon='upload' size='xs'/>
            </button>
            <button className={`w-[50px] bg-slate-900 relative hover:bg-slate-950 hover:text-amber-500 duration-300 ease-in`} 
              onClick={()=>{setChangeImgWindow(!changeImgWindow)}}><FontAwesomeIcon icon='rotate' size='xs'/>
            </button>
            <button className={`w-[50px] bg-slate-900 relative hover:bg-slate-950 hover:text-rose-500 duration-300 ease-in`} 
              onClick={()=>{setDeleteImgWindow(!deleteImgWindow)}}><FontAwesomeIcon icon='trash' size='xs'/>
            </button>
          </div>

        </div>

        <div className={`w-[270px] h-[170px] absolute -top-2 right-0`}>
          <h2 className={`border-b-[1px] border-slate-800 px-2 text-slate-400 bg-slate-950 text-center text-sm py-1`}>Personal Information</h2>  
          <div className={`w-[270px] h-[170px] bg-slate-950 border-r-[1px] border-slate-800 absolute left-0`}>
            <div className={`overflow-x-hidden overflow-y-scroll h-[165px] scrollbarWithNone px-1`}>
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

        <div className={`w-full h-[140px] relative -top-[7px]`}>
          <p className={`w-[100%] bg-slate-950 p-1 border-b-[1px] h-[29px] leading-[22px] border-slate-800 text-center text-xs text-slate-300/80 font-sans font-semibold`}>{"Only for you will be seen"}</p>
            <div className={`flex flex-row h-[70px] bg-slate-950 relative`}>
              <div className={`w-[50%] mx-auto relative text-amber-400`}>
                <label className={`block h-[25px] leading-[25px] text-sm bg-slate-950 w-[100%] border-b-[1px] border-slate-800 text-center relative`}>Everyone</label>
                <span className={`block h-[26px] w-[50px] leading-[25px] text-sm bg-slate-950 text-center absolute left-0 top-9 ${globalPublic ? `text-rose-500`:`text-amber-400`}`}> 
                  {globalPublic?'Private':'Public'}
                </span>
                <div className={`w-[50px] h-[30px] border-[2px] border-amber-400 rounded-2xl absolute right-2 top-[33px] cursor-pointer`} onClick={()=>setGlobalPublic(!globalPublic)}>
                  <button className={`w-[20px] h-[20px] relative -top-[5px] left-[3px] duration-300 rounded-full ${globalPublic ? `bg-rose-500 translate-x-[20px]`:`bg-amber-400`}`}></button>
                </div>
              </div>  

              <div className={`w-[50%] mx-auto relative text-emerald-400 border-x-[1px] border-slate-800`}>
                <label className={`block h-[25px] leading-[25px] text-sm bg-slate-950 w-[100%] border-b-[1px] border-slate-800 text-center relative`}>Friends</label>
                <span className={`block h-[26px] w-[50px] leading-[25px] text-sm bg-slate-950 text-center absolute left-0 top-9 ${friendsPublic? `text-rose-500`:`text-emerald-400`}`}>{friendsPublic?'Private':'Public'}</span>
                <div className={`w-[50px] h-[30px] border-[2px] border-emerald-400 rounded-2xl absolute right-2 top-[33px] cursor-pointer`} onClick={()=>setFriendsPublic(!friendsPublic)}>
                  <button className={`$w-[20px] h-[20px] relative -top-[5px] left-[3px] duration-300 rounded-full ${friendsPublic ? `bg-rose-500 translate-x-[20px]`:`bg-emerald-400`}`}></button>
                </div>
              </div>

              <div className={`w-[50%] mx-auto relative text-sky-400`}>
                <label className={`block h-[25px] leading-[25px] text-sm bg-slate-950 w-[100%] border-b-[1px] border-slate-800 text-center relative`}>Team</label>
                <span className={`block h-[26px] w-[50px] leading-[25px] text-sm bg-slate-950 text-center absolute left-0 top-9 ${teamPublic? `text-rose-500`:`text-sky-400`}`}>{teamPublic?'Private':'Public'}</span>
                <div className={`w-[50px] h-[30px] border-[2px] border-sky-400 rounded-2xl absolute right-2 top-[33px] cursor-pointer`} onClick={()=>setTeamPublic(!teamPublic)}>
                  <button className={`w-[20px] h-[20px] relative -top-[5px] left-[3px] duration-300 rounded-full ${teamPublic ? `bg-rose-500 translate-x-[20px]`:`bg-sky-400`}`}></button>
                </div>
              </div>
            </div>
          </div>

            <div className={`relative flex flex-row w-full h-[510px] bg-slate-800 text-slate-800 rounded-bl-lg rounded-br-lg -top-[19px]`}>

            <div className={`bg-slate-950 h-[250px] w-full relative border-r-[1px] border-slate-800`}>
              <h2 className={`border-b-[1px] border-slate-800 text-slate-400 text-center text-sm h-[30px] leading-[30px]`}>About me</h2>
              <div className={`overflow-x-hidden overflow-y-scroll h-[215px] scrollbarWithNone`}>{aboutMe.map((about)=>(
                <label key={about.id} className={`block relative h-[30px] leading-[30px] w-[98%] mx-auto mt-2 text-xs font-sans font-semibold`}>
                  <span className={`inline-block bg-slate-800 px-2 w-[20%] rounded-tl-[18px] rounded-bl-[18px] text-slate-300`}>{about.location}</span>
                  <span className={`inline-block bg-slate-800 w-[83%] absolute right-0 text-center rounded-[18px] shadow-[-2px_0_4px_1px] shadow-black/30 text-slate-400`}>{about.name}</span>
                  </label>
                ))}
                </div>
            </div>

            <div className={`bg-slate-950 h-[180px] rounded-bl-lg rounded-br-lg relative top-[2px]`}>

              <div className={`bg-slate-950 h-[180px] rounded-bl-lg rounded-br-lg relative top-[2px]`}>
                <h2 className={`border-b-[1px] border-slate-800 text-slate-400 text-center text-sm h-[30px] leading-[30px] relative`}>Experience</h2>
                <p className={`h-[130px] leading-[23px] w-[98%] inline-block bg-slate-950 text-slate-400 relative top-1 left-1 mr-[6px] px-2 text-sm rounded-lg overflow-x-hidden overflow-y-scroll scrollbarWithNone`}>{additionalInformation}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
</>)}

export default Profile