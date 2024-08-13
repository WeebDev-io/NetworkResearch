'use client';
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '../../Icons';
import PropTypes from 'prop-types';
import noBanner from './banners/banner.png';
import noPhoto from './photos/user.png';
import { useSelector } from 'react-redux';
import { themes } from '../../styles/colorPallet/themes';

const currSession = 'Larry';
const currUser = 'Larry';
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
  { label: 'Name', data: 'Larry', age: false },
  { label: 'Surname', data: 'Dvarzeckas', age: false },
  { label: 'DOB', data: '1997.12.29', age: true },
  { label: 'Industry', data: 'Tech', age: false },
  { label: 'Role', data: 'Web Developer', age: false },
  { label: 'Email', data: 'ldvarzeckas@email.com', age: false },
  { label: 'Gender', data: 'Male', age: false },
];
const aboutMe = [
  { type: "Education", name: 'Education' },
  { type: "Location", name: 'Location' },
  { type: "Work", name: 'Work' },
  { type: "Work Role", name: 'Work Role' },
  { type: "Life events", name: 'Life events' },
]
const experienceInField = [
  { field: 'Industry Field', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
  { field: 'Industry Field', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
  { field: 'Industry Field', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
  { field: 'Industry Field', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
];
const Profile = () => {
  const currentTheme = useSelector(state => state.themes.currentTheme);

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
    <div className={`profileContainer`}>
      <h2 className={`profileHeader`}>Profile</h2>

      <div className={`profileContentHolder`}>

        <div className={`profileContentBannerHolder`}>
          <div className={`profileContentBanner`}>

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

        <div className={`profilePhotoContainer`}>
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

        <div className={`profileContentInfo`}>
          <div className={`profileContentContainer`}>

            <div className={`showHideInfo`}>
              <div className={`profilePortfolioButton`}>
                <Link href='MyPortfolio' className={`link`}>Portfolio</Link>
              </div>
              {selectWindow.userInfo == false && (
                <button className={`hideBtn`} onClick={() => { handleSelectWindow('userInfo') }}>Show info </button>
              )}
              {selectWindow.posts == false && (
                <button className={`hideBtn`} onClick={() => { handleSelectWindow('posts') }}> Show posts </button>
              )}
            </div>

            {selectWindow.userInfo && (
              <div className={`profilePersonalInfo`}>
                <div className={`profilePersonalMainDetailsContainer`}>
                  <div className={`profileContentScroll`}>
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
                {currSession == currUser && (
                  <div className={`profilePersonalPrivacyContainer`}>
                    <h5 className={`profileSectionHeader`}>{"Only for you will be seen"}</h5>
                    <div className={`profilePrivacyInfo`}>

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
                <div className={`profilePersonalInfoContainer`}>

                  <h4 className={`profileInfoSectionHeader`}>About me</h4>
                  <div className={`profileAboutInfo`}>
                    {aboutMe.map((about, index) => (
                      <div key={index} className={`profileInfoHolder`}>
                        <span className={`profileInfoTypeTag`}> {about.type}</span>
                        <span className={`profileInfoTypeValue`}> {about.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className={`profileExtraSection`}>
                    <h4 className={`profileExtraHeader`}>Experience</h4>
                    <div className={`profileExtraContentHolder`}>
                      {experienceInField.map((data, index) => (
                        <div key={index} className={`profileExtraCard`}>
                          <label className={`profileExtraField`}>{data.field}</label>
                          <div className={`profileExtraFieldDescHolder`}>
                            <p className={`profileExtraFieldDesc`}>{data.desc}</p>
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
    </div>
  )
}

export default Profile