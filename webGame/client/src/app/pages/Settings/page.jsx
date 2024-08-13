'use client';
import {useState,useRef} from 'react'
import { FontAwesomeIcon } from '../../Icons';
// import PropTypes from 'prop-types';
import {style,themeBox,lang} from './SettingsStyles';
import {LT,EN,RU,FR,GE,LV,PL,SP} from './imgs';
const Settings = () => {
  const [darkTheme,setDarkTheme] = useState(true);
  const [lightTheme,setLightTheme] = useState(false);
  const [christmasTheme,setChristmasTheme] = useState(false);
  const [helloweenTheme,setHelloweenTheme] = useState(false);
  const [easterTheme,setEasterTheme] = useState(false);
  const [winterTheme,setWinterTheme] = useState(false);
  const [springTheme,setSpringTheme] = useState(false);
  const [summerTheme,setSummerTheme] = useState(false);
  const [autumnTheme,setAutumnTheme] = useState(false);

  const handleDark = ()=>{setDarkTheme(true);setLightTheme(false);setChristmasTheme(false);setHelloweenTheme(false);setEasterTheme(false);setWinterTheme(false);setSpringTheme(false);setSummerTheme(false);setAutumnTheme(false);
  }
  const handleLight = ()=>{setLightTheme(!lightTheme);setDarkTheme(false);setChristmasTheme(false);setHelloweenTheme(false);setEasterTheme(false);setWinterTheme(false);setSpringTheme(false);setSummerTheme(false);setAutumnTheme(false);
  }
  const handleChristmas = ()=>{setDarkTheme(false);setLightTheme(false);setChristmasTheme(!christmasTheme);setHelloweenTheme(false);setEasterTheme(false);setWinterTheme(false);setSpringTheme(false);setSummerTheme(false);setAutumnTheme(false);
  }
  const handleHalloween = ()=>{setDarkTheme(false);setLightTheme(false);setChristmasTheme(false);setHelloweenTheme(!helloweenTheme);setEasterTheme(false);setWinterTheme(false);setSpringTheme(false);setSummerTheme(false);setAutumnTheme(false);
  }
  const handleEaster = ()=>{setDarkTheme(false);setLightTheme(false);setChristmasTheme(false);setHelloweenTheme(false);setEasterTheme(!easterTheme);setWinterTheme(false);setSpringTheme(false);setSummerTheme(false);setAutumnTheme(false);
  }
  const handleWinter = ()=>{setDarkTheme(false);setLightTheme(false);setChristmasTheme(false);setHelloweenTheme(false);setEasterTheme(false);setWinterTheme(!winterTheme);setSpringTheme(false);setSummerTheme(false);setAutumnTheme(false);
  }
  const handleSpring = ()=>{setDarkTheme(false);setLightTheme(false);setChristmasTheme(false);setHelloweenTheme(false);setEasterTheme(false);setWinterTheme(false);setSpringTheme(!springTheme);setSummerTheme(false);setAutumnTheme(false);
  }
  const handleSummer = ()=>{setDarkTheme(false);setLightTheme(false);setChristmasTheme(false);setHelloweenTheme(false);setEasterTheme(false);setWinterTheme(false);setSpringTheme(false);setSummerTheme(!summerTheme);setAutumnTheme(false);
  }
  const handleAutumn = ()=>{setDarkTheme(false);setLightTheme(false);setChristmasTheme(false);setHelloweenTheme(false);setEasterTheme(false);setWinterTheme(false);setSpringTheme(false);setSummerTheme(false);setAutumnTheme(!autumnTheme);
  }
const themeBtns = [
  {Theme:'Dark',
    ContainerBG:`bg-slate-950/80`,
    SpanBG:`from-slate-800 to-slate-700 text-slate-300`,
    ThemeActive:`text-slate-300`,ThemeInactive:`text-slate-600`,
    ButtonContainer:`from-slate-700 to-slate-800`,
    ButtonActive:`translate-x-[22px] from-slate-600 to-slate-400`, ButtonInactive:`translate-x-0 from-slate-700 to-slate-500`,
    icon:'moon', handler:handleDark,setter:darkTheme,
  },
  {Theme:'Light',
    ContainerBG:`bg-gradient-to-r from-gray-300 to-white/60`,
    SpanBG:`from-gray-400/70 to-gray-400/30 text-black`,
    ThemeActive:`text-gray-700`,ThemeInactive:`text-gray-700/30`,
    ButtonContainer:`from-gray-400/70 to-gray-400/30`,
    ButtonActive:`translate-x-[22px] from-gray-400 to-gray-100`,ButtonInactive:`translate-x-0 from-gray-600 to-gray-200`,
    icon:'sun',handler:handleLight,setter:lightTheme,
  },
  {Theme:'Christmas',
    ContainerBG:`bg-gradient-to-r from-red-900/70 to-red-700/70`,
    SpanBG:`from-red-400/40 to-red-300/20 text-white`,
    ThemeActive:`text-red-400/90`,ThemeInactive:`text-red-300/20`,
    ButtonContainer:`from-red-400/40 to-red-300/20`,
    ButtonActive:`translate-x-[22px] from-red-500/40 to-red-300/40`,ButtonInactive:`translate-x-0 from-red-900 to-red-400`,
    icon:'candy-cane',handler:handleChristmas,setter:christmasTheme
  },
  {Theme:'Halloween',
    ContainerBG:`bg-gradient-to-r from-zinc-950 to-zinc-800`, 
    SpanBG:`from-orange-600/70 to-amber-500/70 text-black`,
    ThemeActive:`text-zinc-950`,ThemeInactive:`text-zinc-950/20`,
    ButtonContainer:`from-orange-600/70 to-amber-400/70`,
    ButtonActive:`translate-x-[22px] from-orange-600 to-amber-500`,ButtonInactive:`translate-x-0 from-orange-800 to-amber-400`,
    icon:'skull',handler:handleHalloween,setter:helloweenTheme
  },
  {Theme:'Easter',
    ContainerBG:`bg-gradient-to-r from-emerald-800/70 to-emerald-600/70`,SpanBG:`from-emerald-600/40 to-emerald-400/40 text-white`,
    ThemeActive:`text-lime-500`,ThemeInactive:`text-emerald-800/40`,
    ButtonContainer:`from-emerald-600/40 to-emerald-400/40`,
    ButtonActive:`translate-x-[22px] from-emerald-700 to-green-400`,ButtonInactive:`translate-x-0 from-emerald-900 to-emerald-400`,
    icon:'egg',handler:handleEaster,setter:easterTheme
  },
  {Theme:'Winter',
    ContainerBG:`bg-gradient-to-r from-blue-900/70 to-blue-700/70`,
    SpanBG:`from-sky-600/40 to-sky-400/40 text-white/9`,
    ThemeActive:`text-sky-300`,ThemeInactive:`text-sky-800/60 `,
    ButtonContainer:`from-sky-600/40 to-sky-400/40`,
    ButtonActive:`translate-x-[22px] from-sky-700 to-sky-400`,ButtonInactive:`translate-x-0 from-sky-900 to-sky-400`,
    icon:'snowflake',handler:handleWinter,setter:winterTheme
  },
  {Theme:'Spring',
    ContainerBG:`bg-gradient-to-r from-green-900/70 to-lime-700/70`,SpanBG:`from-green-800/60 to-lime-600/30 text-white/90`,
    ThemeActive:` text-lime-400`,ThemeInactive:`text-lime-700 `,
    ButtonContainer:`from-lime-600/40 to-lime-400/40`,
    ButtonActive:`translate-x-[22px] from-lime-700 to-lime-300`,ButtonInactive:`translate-x-0 from-lime-900 to-lime-400 `,
    icon:'dove',handler:handleSpring,setter:springTheme
  },
  {Theme:'Summer',
    ContainerBG:`bg-gradient-to-r from-emerald-900 to-cyan-900`,
    SpanBG:`from-emerald-600/70 to-cyan-600/70 text-white`,
    ThemeActive:`text-white/90`,ThemeInactive:`text-cyan-300/70 `,
    ButtonContainer:`from-emerald-500/20 to-cyan-500/20`,
    ButtonActive:`translate-x-[22px] from-teal-500 to-cyan-500`,ButtonInactive:`translate-x-0 from-teal-900 to-cyan-500 `,
    icon:'umbrella-beach',handler:handleSummer,setter:summerTheme
  },
  {Theme:'Autumn',
    ContainerBG:`bg-gradient-to-r from-orange-950/90 to-amber-800/70`,SpanBG:`from-orange-300/30 to-amber-300/30 text-white/90`,
    ThemeActive:`text-orange-950`,ThemeInactive:`text-amber-900/60 `,
    ButtonContainer:`from-orange-300/30 to-amber-300/30`,
    ButtonActive:`translate-x-[22px] from-orange-700 to-amber-400`,ButtonInactive:`translate-x-0 from-orange-800 to-amber-500`,
    icon:'leaf',handler:handleAutumn,setter:autumnTheme
  },
]

  const [showEmailWindow,setShowEmailWindow] = useState(true);
  const handleEmailWindow = () =>{if(showEmailWindow === false){setShowEmailWindow(!showEmailWindow);setShowPasswordWindow(false);setShowNameWindow(false);setShowPrivacyWindow(false);setShowThemeWindow(false);setShowLangWindow(false);setShowDeleteAccWindow(false);}}

  const [showPasswordWindow,setShowPasswordWindow] = useState(false);
  const handlePasswordWindow = () =>{if(showPasswordWindow === false){setShowEmailWindow(false);setShowPasswordWindow(!showPasswordWindow);setShowNameWindow(false);setShowPrivacyWindow(false);setShowThemeWindow(false);setShowLangWindow(false);setShowDeleteAccWindow(false);}}

  const [showNameWindow,setShowNameWindow] = useState(false);
  const handleNameWindow = () =>{if(showNameWindow === false){setShowEmailWindow(false);setShowPasswordWindow(false);setShowNameWindow(!showNameWindow);setShowPrivacyWindow(false);setShowThemeWindow(false);setShowLangWindow(false);setShowDeleteAccWindow(false);}}

  const [showPrivacyWindow,setShowPrivacyWindow] = useState(false);
  const handlePrivacyWindow = () =>{if(showPrivacyWindow === false){setShowEmailWindow(false);setShowPasswordWindow(false);setShowNameWindow(false);setShowPrivacyWindow(!showPrivacyWindow);setShowThemeWindow(false);setShowLangWindow(false);setShowDeleteAccWindow(false);}}

  const [showThemeWindow,setShowThemeWindow] = useState(false);
  const handleThemeWindow = () =>{if(showThemeWindow === false){setShowEmailWindow(false);setShowPasswordWindow(false);setShowNameWindow(false);setShowPrivacyWindow(false);setShowThemeWindow(!showThemeWindow);setShowLangWindow(false);setShowDeleteAccWindow(false);}}

  const [showLangWindow,setShowLangWindow] = useState(false);
  const handleLangWindow = () =>{if(showLangWindow === false){setShowEmailWindow(false);setShowPasswordWindow(false);setShowNameWindow(false);setShowPrivacyWindow(false);setShowThemeWindow(false);setShowLangWindow(!showLangWindow);setShowDeleteAccWindow(false);}}

  const [showDeleteAccWindow,setShowDeleteAccWindow] = useState(false);
  const handleDeleteAccWindow = () =>{if(showDeleteAccWindow === false){setShowEmailWindow(false);setShowPasswordWindow(false);setShowNameWindow(false);setShowPrivacyWindow(false);setShowThemeWindow(false);setShowLangWindow(false);setShowDeleteAccWindow(!showDeleteAccWindow);}}

  const [en,setEN] = useState(true);
  const [lt,setLT] = useState(false);
  const [ru,setRU] = useState(false);
  const [fr,setFR] = useState(false);
  const [ge,setGE] = useState(false);
  const [lv,setLV] = useState(false);
  const [pl,setPL] = useState(false);
  const [sp,setSP] = useState(false);

  const handleEN = ()=>{setEN(true);setLT(false);setRU(false);setFR(false);setGE(false);setLV(false);setPL(false);setSP(false);}
  const handleLT = ()=>{setLT(!lt);setEN(false);setRU(false);setFR(false);setGE(false);setLV(false);setPL(false);setSP(false);}
  const handleRU = ()=>{setRU(!ru);setLT(false);setEN(false);setFR(false);setGE(false);setLV(false);setPL(false);setSP(false);}
  const handleFR = ()=>{setFR(!fr);setLT(false);setEN(false);setRU(false);setGE(false);setLV(false);setPL(false);setSP(false);}
  const handleGE = ()=>{setGE(!ge);setLT(false);setEN(false);setRU(false);setFR(false);setLV(false);setPL(false);setSP(false);}
  const handleLV = ()=>{setLV(!lv);setLT(false);setEN(false);setRU(false);setFR(false);setGE(false);setPL(false);setSP(false);}
  const handlePL = ()=>{setPL(!pl);setLT(false);setEN(false);setRU(false);setFR(false);setGE(false);setLV(false);setSP(false);}
  const handleSP = ()=>{setSP(!sp);setLT(false);setEN(false);setRU(false);setFR(false);setGE(false);setLV(false);setPL(false);}
  const langs = [
    {shorthand:'EN',img:EN,language:'English',handler:handleEN,setter:en},
    {shorthand:'RU',img:RU,language:'Pусский',handler:handleRU,setter:ru},
    {shorthand:'LT',img:LT,language:'Lietuviu',handler:handleLT,setter:lt},
    {shorthand:'FR',img:FR,language:'français',handler:handleFR,setter:fr},
    {shorthand:'DE',img:GE,language:'Deutsch',handler:handleGE,setter:ge},
    {shorthand:'LV',img:LV,language:'latviešu',handler:handleLV,setter:lv},
    {shorthand:'PL',img:PL,language:'język polski',handler:handlePL,setter:pl},
    {shorthand:'SP',img:SP,language:'español',handler:handleSP,setter:sp},
  ]
  return (<>
      <div className={style.Container}>
      <div className={style.Content}>
        <h2 className={style.Header}>
        {en ? 'Settings': lt ? 'Nustatymai': ru ? 'Hастройки': 'Settings'
      }</h2>
        <div className={style.ContentContainer}>
          <div className={style.SettingsNav.Container}>
            <ul className={style.SettingsNav.ListHolder}>

              <li className={style.SettingsNav.List} onClick={handleEmailWindow}>
                <FontAwesomeIcon icon="fa-envelope" className={`${style.SettingsNav.Icon1} ${showEmailWindow ? 'text-slate-300':'text-slate-500'}`}/>
                <FontAwesomeIcon icon="gear" className={style.SettingsNav.Icon2}/>
                <span className={style.SettingsNav.Span}> Change Email</span>
              </li>
              <li className={style.SettingsNav.List} onClick={handlePasswordWindow}>
                <FontAwesomeIcon icon="fa-lock" className={`${style.SettingsNav.Icon1} ${showPasswordWindow ? 'text-slate-300':'text-slate-500'}`}/>
                <FontAwesomeIcon icon="gear" className={style.SettingsNav.Icon2}/>
                <span className={style.SettingsNav.Span}>Change Password</span>
              </li>
              <li className={style.SettingsNav.List} onClick={handleNameWindow}>
                <FontAwesomeIcon icon="fa-user-pen" className={`${style.SettingsNav.Icon1} ${showNameWindow ? 'text-slate-300':'text-slate-500'}`}/>
                <FontAwesomeIcon icon="gear" className={style.SettingsNav.Icon2}/>
                <span className={style.SettingsNav.Span}>Change Name</span>
              </li>
              <li className={style.SettingsNav.List} onClick={handlePrivacyWindow}>
                <FontAwesomeIcon icon="fa-user-secret" className={`${style.SettingsNav.Icon1} ${showPrivacyWindow ? 'text-slate-300':'text-slate-500'}`}/>
                <FontAwesomeIcon icon="gear" className={style.SettingsNav.Icon2}/>
                <span className={style.SettingsNav.Span}>Change Privacy</span>
              </li>
              <li className={style.SettingsNav.List} onClick={handleThemeWindow}>
                <FontAwesomeIcon icon="fa-table-columns" className={`${style.SettingsNav.Icon1} ${showThemeWindow ? 'text-slate-300':'text-slate-500'}`}/>
                <FontAwesomeIcon icon="gear" className={style.SettingsNav.Icon2}/>
                <span className={style.SettingsNav.Span}>Change Theme</span>
              </li>
              <li className={style.SettingsNav.List} onClick={handleLangWindow}>
                <FontAwesomeIcon icon="fa-globe" className={`${style.SettingsNav.Icon1} ${showLangWindow ? 'text-slate-300':'text-slate-500'}`}/>
                <FontAwesomeIcon icon="gear" className={style.SettingsNav.Icon2}/>
                <span className={style.SettingsNav.Span}>Change Language</span>
              </li>
              <li className={style.SettingsNav.List} onClick={handleDeleteAccWindow}>
                <FontAwesomeIcon icon="fa-trash" className={`${style.SettingsNav.Icon1} ${showDeleteAccWindow ? 'text-slate-300':'text-slate-500'}`}/>
                <FontAwesomeIcon icon="gear" className={style.SettingsNav.Icon2}/>
                <span className={style.SettingsNav.Span}>Delete Account</span>
              </li>
              
            </ul>
          </div>
          <div className={style.SettingsWindow.Container}>
            {showEmailWindow && <>
              <h2 className={style.SettingsWindow.Header}>Change Email</h2>
              <div className={style.SettingsWindow.ContentWindow}>
                <div className={style.SettingsWindow.Content}>
                  <div className={style.SettingsWindow.InputHolder}>
                    <label className={style.SettingsWindow.InputInfo}>Current Email</label>
                    <input className={style.SettingsWindow.Input} type="email" placeholder="Enter email..."/>
                  </div>
                  <div className={style.SettingsWindow.InputHolder}>
                    <label className={style.SettingsWindow.InputInfo}>New Email</label>
                    <input className={style.SettingsWindow.Input} type="email" placeholder="New email..."/>
                  </div>
                  <div className={style.SettingsWindow.InputHolder}>
                    <label className={style.SettingsWindow.InputInfo}>Repeat Email</label>
                    <input className={style.SettingsWindow.Input} type="email" placeholder="Repeat email..."/>
                  </div>
                  <div className={style.SettingsWindow.InputHolder}>
                    <label className={style.SettingsWindow.InputInfo}>Enter Email Code</label>
                    <input className={style.SettingsWindow.Input} type="text" placeholder="Enter Code..."/>
                  </div>
                  <div className={style.SettingsWindow.InputHolder}>
                    <label className={style.SettingsWindow.InputInfo}>Password</label>
                    <input className={style.SettingsWindow.Input} type="password" placeholder="Enter your password..."/>
                  </div>
                  <div className={style.SettingsWindow.Btn}>Change Email</div>
                </div>
              </div>
            </>
            }
            {showPasswordWindow && <>
              <h2 className={style.SettingsWindow.Header}>Change Password</h2>
              <div className={style.SettingsWindow.ContentWindow}>
                <div className={style.SettingsWindow.Content}>
                  <div className={style.SettingsWindow.InputHolder}>
                    <label className={style.SettingsWindow.InputInfo}>Current Password</label>
                    <input className={style.SettingsWindow.Input} type="password" placeholder="Enter email..."/>
                  </div>
                  <div className={style.SettingsWindow.InputHolder}>
                    <label className={style.SettingsWindow.InputInfo}>New Password</label>
                    <input className={style.SettingsWindow.Input} type="password" placeholder="New email..."/>
                  </div>
                  <div className={style.SettingsWindow.InputHolder}>
                    <label className={style.SettingsWindow.InputInfo}>Repeat Password</label>
                    <input className={style.SettingsWindow.Input} type="password" placeholder="Repeat email..."/>
                  </div>
                  <div className={style.SettingsWindow.InputHolder}>
                    <label className={style.SettingsWindow.InputInfo}>Email</label>
                    <input className={style.SettingsWindow.Input} type="email" placeholder="Email..."/>
                  </div>
                  <div className={style.SettingsWindow.InputHolder}>
                    <label className={style.SettingsWindow.InputInfo}>Enter Email Code</label>
                    <input className={style.SettingsWindow.Input} type="text" placeholder="Enter Code..."/>
                  </div>
                    <div className={style.SettingsWindow.Btn}>Change Password</div>
                </div>
              </div>
            </>
            }
            {showNameWindow && <>
              <h2 className={style.SettingsWindow.Header}>Change Name</h2>
              <div className={style.SettingsWindow.ContentWindow}>
                <div className={style.SettingsWindow.Content}>
                  <div className={style.SettingsWindow.InputHolder}>
                    <label className={style.SettingsWindow.InputInfo}>Email</label>
                    <input className={style.SettingsWindow.Input} type="email" placeholder="Enter email..."/>
                  </div>
                  <div className={style.SettingsWindow.InputHolder}>
                    <label className={style.SettingsWindow.InputInfo}>Enter The name</label>
                    <input className={style.SettingsWindow.Input} type="text" placeholder="Enter name..."/>
                  </div>
                  <div className={style.SettingsWindow.InputHolder}>
                    <label className={style.SettingsWindow.InputInfo}>Password</label>
                    <input className={style.SettingsWindow.Input} type="password" placeholder="Enter Password..."/>
                  </div>
                  <div className={style.SettingsWindow.InputHolder}>
                    <label className={style.SettingsWindow.InputInfo}>Enter Email Code</label>
                    <input className={style.SettingsWindow.Input} type="text" placeholder="Enter Code..."/>
                  </div>
                    <div className={style.SettingsWindow.Btn}>Change Name</div>
                </div>
              </div>
            </>
            }
            {showPrivacyWindow && <>
              <h2 className={style.SettingsWindow.Header}>Change Privacy</h2>
              <div className={style.SettingsWindow.ContentWindow}>
                <div className={style.SettingsWindow.Content}>
                </div>
              </div>
            </>
            }
            {showThemeWindow && <>
              <h2 className={style.SettingsWindow.Header}>Change Theme</h2>
              <div className={style.SettingsWindow.ContentWindow}>
                <div className={style.SettingsWindow.ChooseThemeContent}>
                  {themeBtns.map(theme => (
                    <div key={theme.Theme} className={`${themeBox.Container} ${theme.ContainerBG}`}>
                      <span className={`${themeBox.ThemeName} ${theme.SpanBG}`}> {theme.Theme} Theme 
                        <FontAwesomeIcon icon={theme.icon} className={`${themeBox.IconColor} 
                        ${theme.setter ? `${theme.ThemeActive}`:`${theme.ThemeInactive}`}`}/> 
                      </span>
                      <div className={`${themeBox.ThemeButtonContainer} ${theme.ButtonContainer}`} 
                      onClick={theme.handler}> 
                        <span className={`${themeBox.ThemeButton} ${theme.setter ? `${theme.ButtonActive}`:`${theme.ButtonInactive}`}`}>
                        </span> 
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
            }
            {showLangWindow && <>
            <h2 className={style.SettingsWindow.Header}>Change Language</h2>
            <div className={style.SettingsWindow.ContentWindow}>
              <div className={style.SettingsWindow.ChooseLangContent}>
              {langs.map(langList => (
                <div key={langList.shorthand} className={lang.Container}>
                  <div className={lang.ImgHolder}> <img src={langList.img} className={lang.Img}/>
                  </div>
                  <span className={lang.langName}>{langList.language}</span>
                  <div className={lang.LangButtonContainer} onClick={langList.handler}> 
                  <span className={`${lang.LangButton} ${langList.setter ? `translate-x-[22px]`:`translate-x-[0px]`}`}></span> </div>
                </div>
              ))}
              </div>
            </div>
            </>
            }
            {showDeleteAccWindow && <>
              <h2 className={style.SettingsWindow.Header}>Delete Account</h2>
              <div className={style.SettingsWindow.ContentWindow}>
                <div className={style.SettingsWindow.Content}>
                  <div className={style.SettingsWindow.InputHolder}>
                    <label className={style.SettingsWindow.InputInfo}>Current Email</label>
                    <input className={style.SettingsWindow.Input} type="email" placeholder="Enter email..."/>
                  </div>
                  <div className={style.SettingsWindow.InputHolder}>
                    <label className={style.SettingsWindow.InputInfo}>Current Password</label>
                    <input className={style.SettingsWindow.Input} type="password" placeholder="New email..."/>
                  </div>
                  <div className={style.SettingsWindow.InputHolder}>
                    <label className={style.SettingsWindow.InputInfo}>Enter Email Code</label>
                    <input className={style.SettingsWindow.Input} type="text" placeholder="Enter Code..."/>
                  </div>
                  <div className={style.SettingsWindow.InputHolder}>
                    <label className={style.SettingsWindow.InputInfo}>Password</label>
                    <input className={style.SettingsWindow.Input} type="password" placeholder="Enter your password..."/>
                  </div>
                    <div className={style.SettingsWindow.Btn}>Delete Account</div>
                </div>
              </div>
            </>
            }
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
export default Settings