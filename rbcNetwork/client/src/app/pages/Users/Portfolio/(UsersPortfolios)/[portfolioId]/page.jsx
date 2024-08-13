'use client';
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '../../../../../Icons';
import { fb, gh, ig, lin, reddit, sc, so, tg, tumblr, tw, vb, tt, wa, yt, q, dc } from
  "../img";
import noBanner from '../banners/banner.png';
import noPhoto from '../photos/user.png';
import { userData } from '../../../../../localConstants/dataStorage';
import PropTypes from 'prop-types';
const MyPortfolio = ({ params }) => {
  const currSession = 'Larry';
  const calcAge = (birthDateString) => {
    const birthDate = new Date(birthDateString);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) { age--; }
    return age;
  }
  const togglePrivacy = (inputString) => {
    const hide = '*'.repeat(5);
    return hide;
  }
  const userInfoScheme = [
    { label: 'Name', data: params.portfolioId, age: false },
    { label: 'Surname', data: userData[1].userInfo.surname, age: false },
    { label: 'DOB', data: userData[1].userInfo.dob, age: true },
    { label: 'Industry', data: userData[1].userInfo.fos, age: false },
    { label: 'Role', data: userData[1].userInfo.fosr, age: false },
    { label: 'Email', data: userData[1].userInfo.email, age: false },
    { label: 'Gender', data: userData[1].userInfo.gender, age: false },
  ];
  const aboutMe = [
    { type: "Education", name: 'Education' },
    { type: "Location", name: 'Location' },
    { type: "Work", name: 'Work' },
    { type: "Work Role", name: 'Work Role' },
    { type: "Life events", name: 'Life events' },
  ]
  const skills = ["JavaScript", "PHP", "SQL", "MySQL", "React", "Vue", "MongoDB", "Next",]
  const hobbies = ["Skying", "Boxing", "Painting", "Writting", "Walking", "Reading",]
  const socialLinks = [
    { name: "Facebook", img: fb.src },
    { name: "Youtube", img: yt.src },
    { name: "Twitter", img: tw.src },
    { name: "WhatApp", img: wa.src },
    { name: "SnapChat", img: sc.src },
    { name: "Instagram", img: ig.src },
    { name: "Discord", img: dc.src },
    { name: "LinkedIn", img: lin.src },
    { name: "Tumblr", img: tumblr.src },
    { name: "TikTok", img: tt.src },
    { name: "Reddit", img: reddit.src },
    { name: "Telegram", img: tg.src },
    { name: "Quora", img: q.src },
    { name: "viber", img: vb.src },
    { name: "Github", img: gh.src },
    { name: "StackOverflow", img: so.src },
  ]
  const experienceInField = [
    { field: 'Industry Field', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { field: 'Industry Field', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { field: 'Industry Field', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
    { field: 'Industry Field', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
  ];
  const [imgWindow, setImgWindow] = useState({ upload: false, change: false, delete: false });
  const handleImgWindow = (option) => {
    setImgWindow(() => {
      const newState = { upload: false, change: false, delete: false };
      newState[option] = true;
      return newState;
    });
  }

  const [imgString, setImgStringBtn] = useState({ upload: null, display: null, uploadNew: null });
  const handleImgBtn = (option) => {
    setImgStringBtn(() => {
      const newState = { upload: null, display: null, uploadNew: null };
      newState[option] = null;
      return newState;
    });
  }

  const [selectWindow, setSelectWindow] = useState({ userInfo: true, posts: false });
  const handleSelectWindow = (option) => {
    setSelectWindow(() => {
      const newState = { userInfo: false, posts: false };
      newState[option] = true;
      return newState;
    });
  }
  const [profileInfo, setProfileInfo] = useState({ global: false, friends: false, team: false });
  const handleProfileInfo = (type) => { setProfileInfo((prev) => ({ ...prev, [type]: !prev[type] })) }

  return (
    <div className={`portfolioContainer`}>
      <h2 className={`portfolioHeader`}>{`${params.portfolioId}'s Portfolio`}</h2>
      {userData.map(data =>
        currSession == data.user && data.myNetwork.map(user => {
          const portfolioId = params.portfolioId;
          if (user.name == portfolioId) {
            return (
              <div key={params.portfolioId} className={`portfolioContentHolder`}>
                <div className={`portfolioContentBannerHolder`}>
                  <div className={`portfolioContentBanner`}>

                    <img src={noBanner.src} className={`banner`} />
                    <div className={`bannerControl`}>
                      <button className={`uploadBanner`} onClick={() => { handleImgWindow('upload') }}>
                        <FontAwesomeIcon icon='upload' size='xs' />
                      </button>
                      <button className={`changeBanner`} onClick={() => { handleImgWindow('change') }}>
                        <FontAwesomeIcon icon='rotate' size='xs' />
                      </button>
                      <button className={`deleteBanner`} onClick={() => { handleImgWindow('delete') }}>
                        <FontAwesomeIcon icon='trash' size='xs' />
                      </button>
                    </div>

                  </div>
                </div>

                <div className={`portfolioPhotoContainer`}>
                  <div className={`photoFrame`}>
                    <img src={imgString.upload ? URL.createObjectURL(imgString.upload) : `${noPhoto.src}`} alt="" className={`photo`} />
                  </div>

                  {imgWindow.upload && (
                    <div className={``}>
                      <h2 className={``}> Upload Image
                        <FontAwesomeIcon icon='close' className={``} onClick={() => { handleImgWindow('upload') }} />
                      </h2>
                      <div className={``}> Upload
                        <input type="file" onChange={(event) => { setUploadImg(event.target.files[0]) }} className={``} />
                      </div>

                      {imgWindow.upload && (<button className={``} onClick={() => { handleImgWindow('upload') }}>Save</button>)}
                      {imgWindow.upload && (<button className={``} onClick={() => { handleImgBtn('upload') }}>Remove</button>)}

                      <div className={``}>
                        <h2 className={``}>Upload image preview</h2>
                        {imgWindow.upload && (<img src={URL.createObjectURL(imgString.upload)} className={``} />)}
                      </div>
                    </div>
                  )}

                  {imgWindow.change && (
                    <div className={``}>
                      <h2 className={``}>Change Image
                        <FontAwesomeIcon icon='close' className={``} onClick={() => { setChangeImgWindow(!changeImgWindow) }} />
                      </h2>

                      <div className={``}>Upload
                        <input type="file" onChange={(event) => { setUploadNewImg(event.target.files[0]) }} className={``} />
                      </div>

                      {uploadNewImg && (<button className={``} onClick={() => { setDisplayImg(uploadNewImg); setUploadNewImg(null) }}>Save Changes</button>)}

                      {uploadNewImg && (<button className={``} onClick={() => { setUploadNewImg(null) }}>Remove</button>)}

                      <div className={``}>
                        <h2 className={``}>Current Image</h2>
                        {displayImg && (<img src={URL.createObjectURL(displayImg)} alt="No img" className={``} />)}
                      </div>

                      <div className={``}>
                        <h2 className={``}>Uploaded Image Preview</h2>
                        {uploadNewImg && (<img src={URL.createObjectURL(uploadNewImg)} className={``} />)}
                      </div>
                    </div>
                  )}

                  {imgWindow.delete && (
                    <div className={``}>
                      <h2 className={deleteImg.H2}>
                        Delete img confirmation
                        <FontAwesomeIcon icon='close' className={``} onClick={() => { setDeleteImgWindow(!deleteImgWindow) }} /> </h2>
                      <div className={``}>
                        <button className={``} onClick={() => { setDisplayImg(null); setDeleteImgWindow(!deleteImgWindow) }}>Yes</button>
                        <button className={``} onClick={() => { setDeleteImgWindow(!deleteImgWindow) }}>No</button>
                      </div>
                    </div>
                  )}

                  <div className={`photoControl`}>
                    <button className={`uploadPhoto`} onClick={() => { handleImgWindow('upload') }}>
                      <FontAwesomeIcon icon='upload' size='xs' />
                    </button>
                    <button className={`changePhoto`} onClick={() => { handleImgWindow('change') }}>
                      <FontAwesomeIcon icon='rotate' size='xs' />
                    </button>
                    <button className={`deletePhoto`} onClick={() => { handleImgWindow('delete') }}>
                      <FontAwesomeIcon icon='trash' size='xs' />
                    </button>
                  </div>

                </div>

                <div className={`portfolioContentInfo`}>
                  <div className={`portfolioContentContainer`}>

                    <div className={`showHideInfo`}>
                      <div className={`portfolioPortfolioButton`}>
                        <Link href={`/pages/Users/User/${params.portfolioId}`} className={`link`}>Profile</Link>
                      </div>
                      {selectWindow.userInfo == false && (
                        <button className={`hideBtn`} onClick={() => { handleSelectWindow('userInfo') }}>Show info </button>
                      )}
                      {selectWindow.posts == false && (
                        <button className={`hideBtn`} onClick={() => { handleSelectWindow('posts') }}> Show posts </button>
                      )}
                    </div>

                    {selectWindow.userInfo && (
                      <div className={`portfolioPersonalInfo`}>
                        <div className={`portfolioPersonalMainDetailsContainer`}>
                          <div className={`portfolioContentAboutMe`}>

                            {userInfoScheme.map((scheme, index) => (
                              <div key={index} className={`infoCard`}>
                                <span className={`infoTag`}>{scheme.label}</span>
                                <span className={`infoName`}>
                                  {profileInfo.global ? togglePrivacy(scheme.data)
                                    : profileInfo.team ? togglePrivacy(scheme.data)
                                      : profileInfo.friends ? togglePrivacy(scheme.data)
                                        : scheme.data
                                  }
                                  {scheme.label == 'DOB' && (
                                    <label className={`infoAge`}>Age
                                      <span className={`infoAgeNum`}>
                                        {profileInfo.global ? togglePrivacy(scheme.ageCalc) :
                                          profileInfo.team ? togglePrivacy(scheme.ageCalc) :
                                            profileInfo.friends ? togglePrivacy(scheme.ageCalc) :
                                              calcAge(scheme.data)
                                        }
                                      </span>
                                    </label>
                                  )}
                                </span>
                              </div>
                            ))}

                          </div>
                        </div>
                        {currSession == params.portfolioId && (
                          <div className={`portfolioPersonalPrivacyContainer`}>
                            <h5 className={`portfolioSectionHeader`}>{"Only for you will be seen"}</h5>
                            <div className={`portfolioPrivacyInfo`}>

                              <div className={`privacyBlock`}>
                                <label className={`privacyType`}>Everyone</label>

                                <span className={`privacyState`}> {profileInfo.global ? 'Private' : 'Public'} </span>

                                <div className={`privacyBtnContainer`} onClick={() => handleProfileInfo('global')}>
                                  <label className={`privacyBtnHolder`}>
                                    <span className={`privacyBtn ${profileInfo.global ? 'privacyInfoTrue' : ''}`}></span>
                                  </label>
                                </div>
                              </div>

                              <div className={`privacyBlock`}>
                                <label className={`privacyType`}>Friends</label>

                                <span className={`privacyState`}> {profileInfo.friends ? 'Private' : 'Public'} </span>

                                <div className={`privacyBtnContainer`} onClick={() => handleProfileInfo('friends')}>
                                  <label className={`privacyBtnHolder`}>
                                    <span className={`privacyBtn ${profileInfo.friends ? 'privacyInfoTrue' : ''}`}></span>
                                  </label>
                                </div>
                              </div>

                              <div className={`privacyBlock`}>
                                <label className={`privacyType`}>Team</label>

                                <span className={`privacyState`}> {profileInfo.team ? 'Private' : 'Public'} </span>

                                <div className={`privacyBtnContainer`} onClick={() => handleProfileInfo('team')}>
                                  <label className={`privacyBtnHolder`}>
                                    <span className={`privacyBtn ${profileInfo.team ? 'privacyInfoTrue' : ''}`}></span>
                                  </label>
                                </div>
                              </div>

                            </div>
                          </div>
                        )}

                        <div className={`portfolioPersonalInfoContainer`}>

                          <h4 className={`portfolioInfoSectionHeader`}>About me</h4>
                          <div className={`portfolioAboutInfo`}>
                            {aboutMe.map((about, index) => (
                              <div key={index} className={`portfolioInfoHolder`}>
                                <span className={`portfolioInfoTypeTag`}> {about.type}</span>
                                <span className={`portfolioInfoTypeValue`}> {about.name}</span>
                              </div>
                            ))}
                          </div>

                          <h4 className={`skillsHeader`}>Skills</h4>
                          <div className={`skillsWrapper`}>
                            <div className={`skillsContent`}>
                              {skills.map((skill, index) => (
                                <span key={index} className={`skillName`}>{skill}</span>
                              ))}
                            </div>
                          </div>

                          <h4 className={`hobbiesHeader`}>Hobbies</h4>
                          <div className={`hobbiesWrapper`}>
                            <div className={`hobbiesContent`}>
                              {hobbies.map((hobby, index) => (
                                <span key={index} className={`hobbieName`}>{hobby}</span>
                              ))}
                            </div>
                          </div>

                          <h4 className={`linksHeader`}>Links</h4>
                          <div className={`linksWrapper`}>
                            <div className={`linksContent`}>
                              {socialLinks.map((socialLink, index) => (
                                <div key={index} className={`linksImgHolder`}>
                                  <img src={socialLink.img} className={`linksImg`} />
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className={`portfolioExtraSection`}>
                            <h4 className={`portfolioExtraHeader`}>Experience</h4>
                            <div className={`portfolioExtraContentHolder`}>
                              {experienceInField.map((data, index) => (
                                <div key={index} className={`portfolioExtraCard`}>
                                  <label className={`portfolioExtraField`}>{data.field}</label>
                                  <div className={`portfolioExtraFieldDescHolder`}>
                                    <p className={`portfolioExtraFieldDesc`}>{data.desc}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>
                      </div>
                    )}

                    {selectWindow.posts && (
                      <div className={`profilePersonalPosts`}>
                        <div></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          } else { console.log('error') }

        })
      )}
    </div>
  )
}

export default MyPortfolio