'use client';
import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '../../Icons';
import PropTypes from 'prop-types';
import { LT, EN, RU, FR, GE, LV, PL, SP } from './imgs';
import { useSelector } from 'react-redux';
import { img1, img2, img3, img4, img5, img6 } from '../../../../public';
const ProfileSettings = () => {
  const currentTheme = useSelector(state => state.themes.currentTheme)

  //Settings Navigation
  const [settingsWindow, setSettingsWindow] = useState({
    personalInfo: true, privacyWindow: false, educationInfo: false, hobbiesInfo: false, experienceInfo: false, photosControl: false, quotes: false, webPrivacy: false, deleteAcc: false, changeDetails: false,
  })
  //Settings Styles
  const settingsNavStyle = ["navItem", "navText", "spanIconHolder", "mainIcon"];
  //Settings Array
  const settingsNav = [
    { id: 1, handler: 'personalInfo', spanText: 'Profile', icon: 'fa-user-circle', },
    { id: 2, handler: 'changeDetails', spanText: 'Change Details', icon: 'fa-pencil', },
    { id: 3, handler: 'privacyWindow', spanText: 'Privacy', icon: 'fa-user-secret', },
    { id: 4, handler: 'webPrivacy', spanText: 'Web Privacy', icon: 'fa-globe', },
    { id: 5, handler: 'photosControl', spanText: 'Photos', icon: 'fa-images', },
    { id: 6, handler: 'educationInfo', spanText: 'Education', icon: 'fa-graduation-cap', },
    { id: 7, handler: 'hobbiesInfo', spanText: 'Hobbies', icon: 'fa-gamepad', },
    { id: 8, handler: 'experienceInfo', spanText: 'Experience', icon: 'fa-star', },
    { id: 9, handler: 'quotes', spanText: 'Qoutes', icon: 'fa-quote-right', },
    { id: 10, handler: 'deleteAcc', spanText: 'Delete Account', icon: 'fa-trash', },
  ]
  //Settings onClick event function
  const handleSettingsWindow = (windowName) => {
    setSettingsWindow((prevSettings) => {
      const updatedSettings = {};
      Object.keys(prevSettings).forEach((key) => { updatedSettings[key] = key === windowName; });
      return updatedSettings;
    });
  };

  const [selectToChange, setSelectToChange] = useState({ changeEmail: false, changePassword: false, changeName: false });
  const selectToChangeHandler = (windowName) => {
    setSelectToChange(() => {
      const newState = { changeEmail: false, changePassword: false, changeName: false }
      newState[windowName] = true;
      return newState;
    })
  }
  //Personal info Window Array
  const options = [
    { type: 'Username', placeHolder: 'Username', handler: '', btnText: 'Change' },
    { type: 'Surname', placeHolder: 'Surname', handler: '', btnText: 'Change' },
    { type: 'DOB', placeHolder: 'Date of Birth', handler: '', btnText: 'Change' },
    { type: 'Age', placeHolder: 'Age', handler: '' },
    { type: 'FOS', placeHolder: 'Field of Sector', handler: '', btnText: 'Change' },
    { type: 'FOSR', placeHolder: 'Field of Sector role', handler: '', btnText: 'Change' },
  ]
  //Personal Privacy Window
  const [personalPrivacy, setPersonalPrivacy] = useState({
    personalInfo: { global: false, friends: false, team: false },
    image: { global: false, friends: false, team: false },
    aboutMe: { global: false, friends: false, team: false },
    experience: { global: false, friends: false, team: false },
    profile: { global: false, friends: false, team: false },
    skills: { global: false, friends: false, team: false },
    hobbies: { global: false, friends: false, team: false },
    extraInfo: { global: false, friends: false, team: false },
    portfolio: { global: false, friends: false, team: false }
  });
  const privacyHandler = (option, button) => {
    setPersonalPrivacy((prevState) => ({
      ...prevState, [option]: { ...prevState[option], [button]: !prevState[option][button] }
    }));
  }
  const privacySettings = [
    { Info: 'Personal Info', handler: 'personalInfo', toolTip: 'personalInfo', setter: personalPrivacy.personalInfo, },
    { Info: 'Image', handler: 'image', toolTip: 'image', setter: personalPrivacy.image, },
    { Info: 'About Me', handler: 'aboutMe', toolTip: 'aboutMe', setter: personalPrivacy.aboutMe, },
    { Info: 'Experience', handler: 'experience', toolTip: 'experience', setter: personalPrivacy.experience, },
    { Info: 'Profile', handler: 'profile', toolTip: 'profile', setter: personalPrivacy.profile, },
    { Info: 'Skills', handler: 'skills', toolTip: 'skills', setter: personalPrivacy.skills, },
    { Info: 'Hobbies', handler: 'hobbies', toolTip: 'hobbies', setter: personalPrivacy.hobbies, },
    { Info: 'Extra Info', handler: 'extraInfo', toolTip: 'extraInfo', setter: personalPrivacy.extraInfo, },
    { Info: 'Portfolio', handler: 'portfolio', toolTip: 'portfolio', setter: personalPrivacy.portfolio, },
  ]
  const [hoveredButton, setHoveredButton] = useState({});
  const handleMouseEnter = (option, button) => { setHoveredButton({ option, button }); };
  const handleMouseLeave = () => { setHoveredButton({}); };

  //Education, Hobbies , Experience Windows field adding
  const [expInputVal, setExpInputVal] = useState({ industry: "", role: "", exp: "", hobbyType: "", hobby: [], education: "", skill: [], qoute: [] });
  //Input max length
  const settingsCount = { industry: 200, role: 200, exp: 200, hobbyType: 200, hobby: 200, education: 200, skill: 200, qoute: 200 }
  //getting the inputs real-time inputs length
  const experience = useRef({ industry: 0, role: 0, exp: 0, hobbyType: 0, hobby: [], education: 0, skill: [], qoute: [] });
  //defaulting to 1 input of each below
  useEffect(() => {
    setExpInputVal((prev) => ({
      ...prev,
      hobby: prev.hobby.length === 0 ? [""] : prev.hobby,
      skill: prev.skill.length === 0 ? [""] : prev.skill,
      qoute: prev.qoute.length === 0 ? [""] : prev.qoute,
    }));
  }, []);
  //adding  hobby skill and qoute input fiels
  const addField = (type, fieldName) => {
    if (type === 'add') { setExpInputVal((prev) => ({ ...prev, [fieldName]: [...prev[fieldName], ""] })); }
    else if (type === 'remove') {
      if (expInputVal[fieldName].length > 1) {
        setExpInputVal((prev) => {
          const updatedField = [...prev[fieldName]];
          updatedField.pop();
          return { ...prev, [fieldName]: updatedField };
        });
      }
    }
  };
  //counting how much chars left to enter
  const expHandler = (event) => {
    const { name, value } = event.target;
    const [field, index] = name.split('-');
    const maxLength = settingsCount[field] || 200;

    if (value.length <= maxLength) {
      if (index !== undefined) {
        setExpInputVal((prev) => {
          const updatedField = [...prev[field]];
          updatedField[index] = value;
          return { ...prev, [field]: updatedField };
        });
      } else {
        setExpInputVal((prev) => ({ ...prev, [field]: value }))
      }
      experience.current[name] = value.length;
    }
  };
  //Prior Experience labels
  const [priorExp, setPriorExp] = useState({ industry: true, role: false, experience: false });
  const handlePriorExp = (windowName) => {
    setPriorExp(() => {
      const newState = { industry: false, role: false, experience: false };
      newState[windowName] = true;
      return newState;
    });
  }

  const [imgWindow, setImgWindow] = useState({ currInUse: false, allProfileImg: false, allPortfolioImg: false });
  const imgWindowsHandler = (windowName) => {
    setImgWindow((prev) => ({ ...prev, [windowName]: !prev[windowName] }))
  }
  const imgControl = [
    {
      mainImagesText: 'Currently in use Images',
      mainImages: [{ id: 1, img: img1 }, { id: 2, img: img2 },],

      profileText: 'Profile Photo Gallery',
      profile: [{ id: 1, img: 'img' }, { id: 2, img: 'img' }, { id: 2, img: 'img' },],

      portfolioText: 'Portofolio Photo Gallery',
      portfolio: [{ id: 1, img: 'img' }, { id: 2, img: 'img' },]
    }
  ]
  const ChangeDetailsRequirements = () => {
    return (
      <div className={`changeDetailsReqHolder`}>
        <div className={`changeDetailsReqContent`}>

          <div className={`changeDetailsReq`}>
            <legend>New Email Requirements</legend>
            <ul>
              <li>Empty</li>
              <li>Empty</li>
              <li>Empty</li>
              <li>Empty</li>
            </ul>
          </div>

          <div className={`changeDetailsReq`}>
            <legend className={`top`}>Password</legend>
            <ul>
              <li>Empty</li>
              <li>Empty</li>
              <li>Empty</li>
              <li>Empty</li>
            </ul>
          </div>

        </div>
      </div>
    )
  }
  return (
    <div className={`settingsContainer`}>
      <h2 className={`settingsHeader`}> Settings </h2>
      <div className={`settingsContent`}>
        <div className={`settingsNav`}>

          <ul className={`settingsNavList`}>
            {settingsNav.map(settings => (
              <li key={settings.id} className={`${settingsNavStyle[0]}`} onClick={() => { handleSettingsWindow(settings.handler) }}>
                <span className={`${settingsNavStyle[1]}`}>{settings.spanText}</span>
                <span className={`${settingsNavStyle[2]}`}>
                  <FontAwesomeIcon icon={settings.icon} className={`${settingsNavStyle[3]}`} />
                </span>
              </li>
            ))}
          </ul>

        </div>
        <div className={`settingsWindow`}>

          {settingsWindow.personalInfo && (
            <div className={`settingsWindowContent`}>
              <h3 className={`settingsWindowHeader`}>Personal Info</h3>
              <div className={`settingsWindowHolder`}>
                {options.map((info, index) => (
                  <label className={`settingsContent`} key={index}>
                    <span className={`settingsText`}>{info.type}:</span>
                    {info.type == 'Age' ?
                      <input placeholder={info.placeHolder} readOnly className='settingsInput ageInput' />
                      : <input placeholder={info.placeHolder} className={`settingsInput`} />
                    }
                    {info.type == 'Age' ? '' : <button onClick={info.handler}>{info.btnText}</button>}
                  </label>
                ))}
              </div>
            </div>
          )}

          {settingsWindow.privacyWindow && (
            <div className={`settingsPrivacyContent`}>
              <h3 className={`settingsPrivacyHeader`}>Personal Privacy</h3>

              <div className={`settingsPrivacyHolder`}>

                {privacySettings.map(privacy => (
                  <div key={privacy.Info} className={`settingsPrivacyContentHolder`}>
                    <span className={`settingsText`}> {privacy.Info} </span>
                    {['global', 'friends', 'team'].map((button) => (
                      <div className={`settingsBtnHolder`} onMouseEnter={() => handleMouseEnter(privacy.handler, button)}
                        onMouseLeave={handleMouseLeave}>

                        {hoveredButton.option === privacy.handler && hoveredButton.button === button && (
                          <span className='toolTip'> {button.charAt(0).toUpperCase() + button.slice(1)} </span>
                        )}
                        <div className={`settingsBtnSeperator`} onClick={() => { privacyHandler(privacy.handler, button) }}>
                          <span className={`settingsCircle ${privacy.setter[button] ? 'privacyTrue' : ''}`}> </span>
                        </div>
                      </div>
                    ))}

                  </div>
                ))}
              </div>

            </div>
          )}

          {settingsWindow.educationInfo && (
            <div className={`educationSettingsContent`}>
              <h3 className={`educationMainHeader`}>Education</h3>
              <div className={`educationMainWrapper`}>

                <div className={`educationFormWrapper`}>
                  <div className={`educationContent`}>

                    <div className={`educationScroller`}>

                      <div className={`educationInputHolder`}>
                        <input className={`educationInput`} placeholder="Education" type='text' name='education' value={expInputVal.education}
                          onChange={expHandler} maxLength={settingsCount.education} />
                        <span className={`educationTypeInputLength`}>{settingsCount.education - experience.current.education} </span>
                      </div>

                      {expInputVal.skill.map((skill, index) => (
                        <div key={index} className={`educationSkillInputHolder`}>
                          <input className={`educationSkillInput`} placeholder={`Skill ${index + 1}`} type="text"
                            name={`skill-${index}`} value={skill} onChange={expHandler} maxLength={settingsCount.skill}
                          />
                          <span className={`educationInputLength`}>{settingsCount.skill - skill.length}</span>
                        </div>
                      ))}

                    </div>

                    <div className={`addRemoveInputBtnHolder`}>
                      <p className={`skillInputHeader`}>Skill input</p>
                      <button className={`add`} onClick={() => { addField('add', 'skill') }}> Add </button>
                      <button className={`remove`} onClick={() => { addField('remove', 'skill') }}> Remove </button>
                    </div>
                    <button className={`addEductionWithSkillsBtn`}>Add Education & Skills</button>
                  </div>
                </div>

                <div className={`educationContainer`}>
                  <h4 className={`educationHeader`}>All Education</h4>
                  <div className={`educationContentWrapper`}>

                    <div className={`educationContent`}>
                      <div className={`educationContentContainer`}>
                        <h5 className={`educationTag`}>Education</h5>
                        <div className={`educationItemContainer`}>
                          <label className={`educationSkillTag`}>Skill</label>
                          <label className={`educationSkillTag`}>Skill</label>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          )}

          {settingsWindow.hobbiesInfo && (
            <div className={`hobbySettingsContent`}>
              <h3 className={`hobbyMainHeader`}>Hobbies</h3>
              <div className={`hobbyMainWrapper`}>

                <div className={`hobbyFormWrapper`}>
                  <div className={`hobbyContent`}>

                    <div className={`hobbyScroller`}>

                      <div className={`hobbyGroupInputHolder`}>
                        <input className={`hobbyGroupInput`} placeholder="Hobby Type" type="text" name="hobbyType" value={expInputVal.hobbyType}
                          onChange={expHandler} maxLength={settingsCount.hobbyType} />
                        <span className={`hobbyInputLength`}>{settingsCount.hobbyType - experience.current.hobby} </span>
                      </div>

                      {expInputVal.hobby.map((hobby, index) => (
                        <div key={index} className={`hobbyInputHolder`}>
                          <input className={`hobbyInputItem`} placeholder={`Hobby ${index + 1}`} type="text" name={`hobby-${index}`}
                            value={hobby} onChange={expHandler} maxLength={settingsCount.hobby} />

                          <span className={`hobbyInputLength`}>{settingsCount.hobby - hobby.length}</span>
                        </div>
                      ))}

                    </div>
                    <div className={`addRemoveInputBtnHolder`}>
                      <p className={`hobbiesInputHeader`}>Hobby input</p>
                      <button className={`add`} onClick={() => { addField('add', 'hobby') }}> Add </button>
                      <button className={`remove`} onClick={() => { addField('remove', 'hobby') }}> Remove </button>
                    </div>
                    <button className={`addHobbiesBtn`}>Add Hobbies</button>
                  </div>
                </div>

                <div className={`hobbyContainer`}>
                  <h4 className={`hobbyHeader`}>All Hobbies</h4>
                  <div className={`hobbyContentWrapper`}>

                    <div className={`hobbyContent`}>
                      <div className={`hobbyContentContainer`}>
                        <h5 className={`hobbyTag`}>Hobby Type</h5>
                        <div className={`hobbyItemContainer`}>
                          <label className={`hobbySkillTag`}>Hobby</label>
                          <label className={`hobbySkillTag`}>Hobby</label>
                          <label className={`hobbySkillTag`}>Hobby</label>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          )}

          {settingsWindow.experienceInfo && (
            <div className={`expSettingsContent`}>
              <h3 className={`expMainHeader`}>Experience</h3>
              <div className={`expMainWrapper`}>

                <div className={`expFormWrapper`}>
                  <div className={`expContent`}>

                    <div className={`industryInputHolder`}>
                      <input className={`expIndustryInput`} placeholder="Industry" name='industry' value={expInputVal.industry}
                        onChange={expHandler} maxLength={settingsCount.industry} />
                      <span className={`expIndustryCount`}> {settingsCount.industry - experience.current.industry} </span>
                    </div>

                    <div className={`roleInputHolder`}>
                      <input className={`expRoleInput`} placeholder="Role" name='role' value={expInputVal.role}
                        onChange={expHandler} maxLength={settingsCount.role} />
                      <span className={`expRoleCount`}> {settingsCount.role - experience.current.role} </span>
                    </div>

                    <div className={`expTextAreaHolder`}>
                      <textarea className={`expTextArea`} placeholder="Experience in role" name='exp' value={expInputVal.exp}
                        onChange={expHandler} maxLength={settingsCount.exp} />

                      <span className={`expExperienceCount`}> {settingsCount.exp - experience.current.exp} </span>
                    </div>

                    <button className={`addExpBtn`}>Add Experience</button>
                  </div>
                </div>

                <div className={`expContainer`}>
                  <h4 className={`expHeader`}>Prior Experience</h4>
                  <div className={`expOutputHolder`}>
                    <div className={`outputSection`}>
                      <div className={`outputCard`}>

                        <div className={`outputSectionBtn`}>
                          <label className={`expOutput`} onClick={() => { handlePriorExp('industry') }}>Industry</label>
                          <label className={`expOutput`} onClick={() => { handlePriorExp('role') }}>Role</label>
                          <label className={`expOutput`} onClick={() => { handlePriorExp('experience') }}>Experience</label>
                        </div>
                        {/*Not Scrollible*/}
                        {priorExp.industry && (
                          <div className={`expOutputWindow_1`}>
                            <label className={`expOutputLabel`}>
                              {experience.current.industry == 0 ? 'Empty Industry' : expInputVal.industry}
                            </label>
                            <label className={`expOutputLabel`}>
                              {experience.current.industry == 0 ? 'Empty Industry' : expInputVal.industry}
                            </label>
                          </div>
                        )}

                        {priorExp.role && (
                          <div className={`expOutputWindow_2`}>

                            <label className={`expOutputLabel`}>
                              {experience.current.role == 0 ? 'Empty Role' : expInputVal.role}
                            </label>

                            <label className={`expOutputLabel`}>
                              {experience.current.role == 0 ? 'Empty Role' : expInputVal.role}
                            </label>

                            <label className={`expOutputLabel`}>
                              {experience.current.role == 0 ? 'Empty Role' : expInputVal.role}
                            </label>

                          </div>
                        )}

                        {priorExp.experience && (
                          <div className={`expOutputWindow_3`}>
                            <label className={`expOutputLabel`}>
                              {experience.current.exp == 0 ? 'Empty Exp' : expInputVal.exp}
                            </label>
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {settingsWindow.photosControl && (
            <div className={`photoSettingsContent`}>
              <h3 className={`photoMainHeader`}>Img Control</h3>

              {imgControl.map((img, index) => (
                <div key={index} className={`photoSettingsHolder`}>
                  <h4 className={`photoSettingsHeader ${imgWindow.currInUse ? 'photoSettingsHeaderExtended' : ''}`} onClick={() => { imgWindowsHandler('currInUse') }}> {img.mainImagesText} </h4>
                  {imgWindow.currInUse && (
                    <div className={`photoSettingsContainer`}>

                      {img.mainImages.map(imgs => (
                        <div key={imgs.id} className={`photoSettingsCard`}>
                          <div className={`photoSettingsImgHolder`}>
                            {imgs.id == 1 && (<label className={`photoProfileTag`}>Profile</label>)}
                            {imgs.id == 2 && (<label className={`photoProfileTag`}>Portfolio</label>)}
                            <img src={imgs.img.src} className={`photoImgs`} />
                          </div>
                          <div className={`buttonsControlHolder`}>
                            <button className={`changeImg`}>Change</button>
                            <button className={`deleteImg`}>Delete</button>
                          </div>
                        </div>
                      ))}

                    </div>
                  )}
                </div>
              ))}

              {imgControl.map((img, index) => (
                <div key={index} className={`photoSettingsHolder`}>
                  <h4 className={`photoSettingsHeader ${imgWindow.allProfileImg ? 'photoSettingsHeaderExtended' : ''}`} onClick={() => { imgWindowsHandler('allProfileImg') }} >{img.profileText}</h4>
                  {imgWindow.allProfileImg && (
                    <div className={`photoSettingsContainer`}>

                      {img.profile.map(imgs => (
                        <div key={imgs.id} className={`photoSettingsCard`}>
                          <div className={`photoSettingsImgHolder`}>
                            <img src={imgs.img.src} alt="" className={`photoImgs`} />
                          </div>
                          <div className={`buttonsControlHolder`}>
                            <button className={`uploadImg`}>Upload</button>
                            <button className={`useImg`}>Use</button>
                            <button className={`deleteImg`}>Delete</button>
                          </div>
                        </div>
                      ))}

                    </div>
                  )}
                </div>
              ))}

              {imgControl.map((img, index) => (
                <div key={index} className={`photoSettingsHolder`}>
                  <h4 className={`photoSettingsHeader ${imgWindow.allPortfolioImg ? 'photoSettingsHeaderExtended' : ''}`} onClick={() => { imgWindowsHandler('allPortfolioImg') }} >{img.portfolioText}</h4>
                  {imgWindow.allPortfolioImg && (
                    <div key={index} className={`photoSettingsContainer`}>

                      {img.portfolio.map(imgs => (

                        <div key={imgs.id} className={`photoSettingsCard`}>
                          <div className={`photoSettingsImgHolder`}>
                            <img src={imgs.img.src} alt="" className={`photoImgs`} />
                          </div>
                          <div className={`buttonsControlHolder`}>
                            <button className={`uploadImg`}>Upload</button>
                            <button className={`useImg`}>Use</button>
                            <button className={`deleteImg`}>Delete</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

            </div>
          )}

          {settingsWindow.quotes && (
            <div className={`qoutesSettingsContent`}>
              <h3 className={`qoutesSettingsWindowHeader`}>Qoutes</h3>
              <div className={`qoutesMainWrapper`}>

                <div className={`qoutesFormWrapper`}>
                  <div className={`qoutesContent`}>
                    <div className={`qoutesScroller`}>

                      {expInputVal.qoute.map((qoute, index) => (
                        <div className={`qoutesInputHolder`}>
                          <input key={index} className={`qoutesInput`} placeholder={`Qoute ${index + 1}`} type="text" name={`qoute-${index}`} value={qoute} onChange={expHandler} maxLength={settingsCount.qoute} />
                          <span className={`qoutesInputLength`}>{settingsCount.qoute - qoute.length}</span>
                        </div>
                      ))}

                    </div>
                    <div className={`addRemoveInputBtnHolder`}>
                      <p className={`qoutesInputHeader`}>Qoutes inputs</p>
                      <button className={`add`} onClick={() => { addField('add', 'qoute') }}> Add </button>
                      <button className={`remove`} onClick={() => { addField('remove', 'qoute') }}> Remove </button>
                    </div>
                    <button className={`addQoutesBtn`}>Add Qoute</button>
                  </div>
                </div>


                <div className={`qoutesContainer`}>
                  <h4 className={`qoutesHeader`}>All Qoutes</h4>

                  <div className={`qoutesContentWrapper`}>
                    <div className={`qoutesOutputHolder`}>
                      <div className={`qoutesOutputWindow`}>

                        <div className={`qouteOutputSection`}>
                          <label className={`qouteOutputLabel`}>Qoute</label>
                          <q className={`qouteOutput`}>{experience.current.qoute == 0 ? 'Empty' : expInputVal.qoute}</q>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {settingsWindow.changeDetails && (
            <div className={`changeDetailsContent changeGap`}>
              <h3 className={`changeDetailsWindowHeader`}>Select To Change</h3>

              <div className={`changeDetailsContent`}>
                <h4 className={`changeDetailsWindowHeader changeDetailsWindowsHeaderBtn ${selectToChange.changeEmail ? '' : 'changeDetailsWindowHeaderClosed'}`} onClick={() => { selectToChangeHandler('changeEmail') }}>Change Email</h4>
                {selectToChange.changeEmail && (
                  <div className={`changeDetailsContentHolder`}>

                    <ChangeDetailsRequirements />

                    <div className={`changeDetailsInputHolder`}>
                      <label htmlFor='currentEmail' className={`changeDetailsInputName`}>Current Email</label>
                      <input className={`changeDetailsInput`} type="email" placeholder="Enter email..." readOnly />
                    </div>

                    <div className={`changeDetailsInputHolder`}>
                      <label htmlFor='newEmail' className={`changeDetailsInputName`}>New Email</label>
                      <div className={`changeDetailsInputContent`}>
                        <input className={`changeDetailsInput`} type="email" placeholder="New email..." />
                        <span className={`changeDetailsInputChars`}>200</span>
                      </div>
                    </div>

                    <div className={`changeDetailsInputHolder`}>
                      <label htmlFor='password' className={`changeDetailsInputName`}>Password</label>
                      <div className={`changeDetailsInputContent`}>
                        <input className={`changeDetailsInput`} type="password" placeholder="Enter password..." />
                        <span className={`changeDetailsInputChars`}>200</span>
                      </div>
                    </div>

                    <div className={`changeDetailsBtnHolder`}>
                      <button className={`changeDetailsEmailBtn`}> Change Email </button>
                    </div>

                  </div>
                )}
              </div>

              <div className={`changeDetailsContent`}>
                <h4 className={`changeDetailsWindowHeader changeDetailsWindowsHeaderBtn ${selectToChange.changePassword ? '' : 'changeDetailsWindowHeaderClosed'}`} onClick={() => { selectToChangeHandler('changePassword') }}>Change Password</h4>
                {selectToChange.changePassword && (
                  <div className={`changeDetailsContentHolder`}>

                    <ChangeDetailsRequirements />

                    <div className={`changeDetailsInputHolder`}>
                      <label htmlFor='currentPassword' className={`changeDetailsInputName`}>Current Password</label>
                      <div className={`changeDetailsInputContent`}>
                        <input className={`changeDetailsInput pass`} type="password" placeholder="Current password..." />
                        <span className={`changeDetailsInputChars`}>200</span>
                      </div>
                    </div>

                    <div className={`changeDetailsInputHolder`}>
                      <label htmlFor='newPassword' className={`changeDetailsInputName`}>New Password</label>
                      <div className={`changeDetailsInputContent`}>
                        <input className={`changeDetailsInput`} type="password" placeholder="New Password..." />
                        <span className={`changeDetailsInputChars`}>200</span>
                      </div>
                    </div>

                    <div className={`changeDetailsInputHolder`}>
                      <label htmlFor='repeatPassword' className={`changeDetailsInputName`}>Repeat Password</label>
                      <div className={`changeDetailsInputContent`}>
                        <input className={`changeDetailsInput`} type="password" placeholder="Repeat new Password..." />
                        <span className={`changeDetailsInputChars`}>200</span>
                      </div>
                    </div>

                    <div className={`changeDetailsInputHolder`}>
                      <label htmlFor='emailPassword' className={`changeDetailsInputName`}>Email</label>
                      <div className={`changeDetailsInputContent`}>
                        <input className={`changeDetailsInput`} type="email" placeholder="Email..." />
                        <span className={`changeDetailsInputChars`}>200</span>
                      </div>
                    </div>

                    <div className={`changeDetailsBtnHolder`}>
                      <button className={`changeDetailsEmailBtn`}> Change Password </button>
                    </div>
                  </div>
                )}
              </div>

              <div className={`changeDetailsContent`}>
                <h4 className={`changeDetailsWindowHeader changeDetailsWindowsHeaderBtn ${selectToChange.changeName ? '' : 'changeDetailsWindowHeaderClosed'}`} onClick={() => { selectToChangeHandler('changeName') }}>Change Name</h4>
                {selectToChange.changeName && (
                  <div className={`changeDetailsContentHolder`}>

                    <ChangeDetailsRequirements />

                    <div className={`changeDetailsInputHolder`}>
                      <label htmlFor='currentName' className={`changeDetailsInputName`}>Enter The name</label>
                      <input className={`changeDetailsInput`} type="text" placeholder="Enter name..." readOnly />
                    </div>

                    <div className={`changeDetailsInputHolder`}>
                      <label htmlFor='email' className={`changeDetailsInputName`}>Email</label>
                      <div className={`changeDetailsInputContent`}>
                        <input className={`changeDetailsInput`} type="email" placeholder="email..." />
                        <span className={`changeDetailsInputChars`}>200</span>
                      </div>
                    </div>

                    <div className={`changeDetailsInputHolder`}>
                      <label htmlFor='password' className={`changeDetailsInputName`}>Password</label>
                      <div className={`changeDetailsInputContent`}>
                        <input className={`changeDetailsInput`} type="password" placeholder="Enter password..." />
                        <span className={`changeDetailsInputChars`}>200</span>
                      </div>
                    </div>

                    <div className={`changeDetailsBtnHolder`}>
                      <button className={`changeDetailsEmailBtn`}> Change Name </button>
                    </div>

                  </div>
                )}
              </div>

            </div>
          )}

          {settingsWindow.webPrivacy && (
            <div className={`settingsPrivacyContent`}>
              <h3 className={`settingsPrivacyHeader`}>Web Privacy</h3>
              <div className={`settingsPrivacyHolder`}>
              </div>
            </div>
          )}

          {settingsWindow.deleteAcc && (
            <div className={`changeDetailsContent`}>
              <h2 className={`changeDetailsWindowHeader`}>Delete Account</h2>

              <div className={`changeDetailsContentHolder deleteAccount`}>

                <div className={`changeDetailsInputHolder`}>
                  <label htmlFor='name' className={`changeDetailsInputName`}>Name</label>
                  <div className={`changeDetailsInputContent`}>
                    <input className={`changeDetailsInput`} type="text" placeholder="Enter Name..." />
                    <span className={`changeDetailsInputChars`}>200</span>
                  </div>
                </div>

                <div className={`changeDetailsInputHolder`}>
                  <label htmlFor='email' className={`changeDetailsInputName`}>Email</label>
                  <div className={`changeDetailsInputContent`}>
                    <input className={`changeDetailsInput`} type="email" placeholder="Enter email..." />
                    <span className={`changeDetailsInputChars`}>200</span>
                  </div>
                </div>

                <div className={`changeDetailsInputHolder`}>
                  <label htmlFor='password' className={`changeDetailsInputName`}>Password</label>
                  <div className={`changeDetailsInputContent`}>
                    <input className={`changeDetailsInput`} type="password" placeholder="Enter password..." />
                    <span className={`changeDetailsInputChars`}>200</span>
                  </div>
                </div>

                <div className={`changeDetailsBtnHolder`}>
                  <button className={`changeDetailsEmailBtn`}> Delete Account </button>
                </div>

              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  )
}
export default ProfileSettings