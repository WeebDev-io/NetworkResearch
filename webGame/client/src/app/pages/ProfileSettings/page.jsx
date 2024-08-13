'use client';
import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '../../Icons';
import PropTypes from 'prop-types';
const style = {
  Container:`bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-slate-300 col-span-12 py-[18px] relative`,
  Content:`w-[95%] sm:w-[85%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[75%] h-[790px] mx-auto relative top-2 rounded-lg`,
  Header:`h-[30px] leading-[60px] text-lg w-[50%] font-sans font-semibold mx-auto text-center`,
  ContentContainer:`flex flex-row relative top-7 h-[90%] bg-slate-950/90`,
  SettingsNav:{
    Container:`w-[15%] sm:w-[10%] lg:w-[20%] xl:w-[18%] 2xl:w-[15%]`,
    ListHolder:`bg-gradient-to-r from-slate-900 to-slate-800 h-full py-2`,
    List:`w-[40px] lg:w-[95%] h-[40px] leading-[40px] bg-gradient-to-t from-slate-900 via-slate-700 to-slate-500 mx-auto rounded-full shadow-[0_0_2px_1px] shadow-slate-900 border-[1px] border-slate-950 odd:mb-2 even:mb-2 cursor-pointer relative`,
    Icon1:`text-lg absolute top-[9px] hover:text-slate-200 duration-300 ease-out hover:ease-in`,
    Icon2:`text-sm text-slate-400/30 top-3 absolute right-2 hidden lg:block`,
    Span:`hidden lg:inline-block text-[13px] absolute left-[35px] -top-[2px] text-slate-300/80`
  },
  SettingsWindow:{
    Container:`bg-gradient-to-l from-slate-900 to-slate-800 w-[85%] sm:w-[90%] lg:w-[80%] xl:w-[82%] 2xl:w-[85%]`,
    Header:`h-[40px] leading-[40px] text-center`,
    ContentWindow:`w-[95%] h-[660px] mx-auto bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 rounded-lg shadow-[0_0_2px_1px_inset] shadow-slate-900`,
    Content:`bg-slate-950/60 w-[95%] mx-auto h-[644px] relative top-[8px] rounded-lg shadow-[0_0_3px_1px] shadow-black/70`,
    ChooseThemeContent:`bg-slate-800/50 w-[95%] mx-auto h-[644px] relative top-[8px] rounded-lg shadow-[0_0_3px_1px] shadow-black/70 lg:grid lg:grid-cols-2 2xl:grid-cols-3 lg:grid-flow-row lg:auto-rows-max lg:gap-2 overflow-x-hidden overlow-y-scroll`,
    InputHolder:`md:w-[50%] mx-auto relative top-5 flex flex-col`,
    InputInfo:`text-slate-500 mx-auto w-[250px] inline-block h-[30px] leading-[30px] relative text-sm`,
    Input:`w-[250px] mx-auto outline-none px-2 text-slate-500 bg-slate-800 h-[30px] rounded-lg leading-[30] text-sm shadow-[0_0_2px_1px] shadow-slate-900`,
    Btn:`w-[250px] h-[30px] relative top-10 mx-auto leading-[30px] bg-sky-800/50 rounded-md shadow-[0_0_3px_1px] shadow-black/50 text-slate-400 text-sm hover:bg-slate-800 duration-300 ease-in hover:ease-out text-center`,
  }
}
const hobbiesStyle = {
  InputsContainer:`w-[95%] mx-auto`,
  InputsHolder:`w-full flex flex-col relative h-[180px]`,
  Input:`h-[30px] bg-slate-800 border-[1px] border-slate-700 shadow-[0_0_8px_2px_inset] shadow-slate-950/40 mt-2 rounded-lg text-sm outline-none resize-none px-2 py-1`,
  Textarea:`h-[80px] bg-slate-800 border-[1px] border-slate-700 shadow-[0_0_8px_2px_inset] shadow-slate-950/40 mt-5 mb-2 rounded-lg text-sm outline-none resize-none px-2 py-1`,
  Button:`bg-slate-800 text-sm w-[120px] h-[30px] rounded-md absolute right-0 bottom-0 text-slate-400 hover:text-slate-300 duration-200 ease-in border-[1px] border-slate-700 shadow-[0_0_5px_2px] shadow-black/50`,
  hobbiesUI: {
    Container:`w-[95%] mx-auto`,
    H2:`w-[98%] h-[40px] leading-[40px] bg-slate-900/50 shadow-[0_0_2px_1px] shadow-black/50 mt-4 mx-auto text-md pl-3 rounded-tr-lg rounded-tl-lg border-b-[1px] border-slate-400/70`,
    HobbiesContainer:`w-[98%] h-[390px] py-2 bg-slate-900/60 shadow-[0_0_2px_1px] shadow-black/40 mx-auto text-md rounded-br-lg rounded-bl-lg overflow-x-hidden overflow-y-scroll`,
    HobbiesContent:`text-sm w-[98%] my-2 mx-2 inline-block bg-slate-950/30 py-1 px-1 rounded-xl`,
    Label:`block w-full bg-slate-800 h-[30px] leading-[30px] px-2 rounded-lg relative`,
    Span:`bg-slate-800 absolute inline-block w-[180px] h-[30px] leading-[30px] pl-2 rounded-lg right-0 shadow-[-1px_0_1px_1px] shadow-slate-950/60`,
    Icon:`absolute right-2 top-2 cursor-pointer z-10 hover:text-red-600 duration-200`,
  }
}
const QuotesStyles = {
  Container:`w-[95%] mx-auto`,
  Content:`w-full flex flex-col relative h-[180px]`,
  Textarea:`h-[120px] bg-slate-800 border-[1px] border-slate-700 shadow-[0_0_8px_2px_inset] shadow-slate-950/40 mt-5 mb-2 rounded-lg text-sm outline-none resize-none px-2 py-1`,
  Button:`bg-slate-800 text-sm w-[120px] h-[30px] rounded-md absolute right-0 bottom-0 text-slate-400 hover:text-slate-300 duration-200 ease-in border-[1px] border-slate-700 shadow-[0_0_5px_2px] shadow-black/50`,
  QuotesUI:{
    Container:`w-[95%] mx-auto`,
    H2:`w-[98%] h-[40px] leading-[40px] bg-slate-900/50 shadow-[0_0_2px_1px] shadow-black/50 mt-4 mx-auto text-md pl-3 rounded-tr-lg rounded-tl-lg border-b-[1px] border-slate-400/70`,
    Content:`w-[98%] h-[390px] py-2 bg-slate-900/60 shadow-[0_0_2px_1px] shadow-black/40 mx-auto text-md rounded-br-lg rounded-bl-lg overflow-x-hidden overflow-y-scroll`,
    Qoutes:`text-sm w-[98%] my-2 mx-2 inline-block bg-slate-950/30 py-2 px-2 rounded-lg`,
  }
}
const ImgControlCard = () => (
  <div className="relative w-[100%] mx-1 h-[120px]">
    <img src="" alt="" className="w-[100%] h-[100%] border-[1px] border-slate-600/40 rounded-md"/>
    <button className="absolute bottom-0 right-0 bg-slate-700/30 rounded-br-md rounded-bl-md w-full h-[30px] text-slate-500 hover:text-slate-300 duration-200 text-sm">Upload</button>
  </div>
)
const themeBox = {
  Container:`w-[300px] lg:w-[280px] h-[60px] mx-auto relative top-1 mb-2 px-2 rounded-lg select-none shadow-[0_0_2px_1px_#00000070] font-sans font-semibold`,
  ThemeName:`block w-[160px] h-[30px] leading-[30px] pl-2 relative top-[15px] text-xs rounded-lg shadow-[0_0_1px_1px] shadow-black/40 bg-gradient-to-r`,
  IconColor:`absolute right-2 top-[9px] duration-200`,
  ThemeButtonContainer:`w-[50px] h-[30px] absolute rounded-xl right-3 top-[15px] cursor-pointer shadow-[0_0_1px_1px] shadow-black/40 bg-gradient-to-r`,
  ThemeButton:`block absolute w-[20px] h-[20px] top-[5px] left-1 rounded-[9px] shadow-[0_1px_2px_1px] shadow-black/40 bg-gradient-to-t duration-200`,
}
const ProfileSettings = () => {
  const [darkTheme,setDarkTheme] = useState(false);
  const [lightTheme,setLightTheme] = useState(false);
  const [christmasTheme,setChristmasTheme] = useState(false);
  const [helloweenTheme,setHelloweenTheme] = useState(false);
  const [easterTheme,setEasterTheme] = useState(false);
  const [winterTheme,setWinterTheme] = useState(false);
  const [springTheme,setSpringTheme] = useState(false);
  const [summerTheme,setSummerTheme] = useState(false);
  const [autumnTheme,setAutumnTheme] = useState(false);

  const handleDark = ()=>{setDarkTheme(!darkTheme);}
  const handleLight = ()=>{setLightTheme(!lightTheme);}
  const handleChristmas = ()=>{setChristmasTheme(!christmasTheme);}
  const handleHalloween = ()=>{setHelloweenTheme(!helloweenTheme);}
  const handleEaster = ()=>{setEasterTheme(!easterTheme);}
  const handleWinter = ()=>{setWinterTheme(!winterTheme);}
  const handleSpring = ()=>{setSpringTheme(!springTheme);}
  const handleSummer = ()=>{setSummerTheme(!summerTheme);}
  const handleAutumn = ()=>{setAutumnTheme(!autumnTheme);}
  const privacySettings = [
    {Info:'Personal Info',
      ContainerBG:`bg-slate-950/80`,SpanBG:`from-slate-800 to-slate-700 text-slate-300`,
      ThemeActive:`text-slate-300`,ThemeInactive:`text-slate-600`,
      ButtonContainer:`from-slate-700 to-slate-800`,
      ButtonActive:`translate-x-[22px] from-slate-600 to-slate-400`, ButtonInactive:`translate-x-0 from-slate-700 to-slate-500`,
      icon:'cog', handler:handleDark,setter:darkTheme,
    },
    {Info:'Image',
      ContainerBG:`bg-slate-950/80`,SpanBG:`from-slate-800 to-slate-700 text-slate-300`,
      ThemeActive:`text-slate-300`,ThemeInactive:`text-slate-600`,
      ButtonContainer:`from-slate-700 to-slate-800`,
      ButtonActive:`translate-x-[22px] from-slate-600 to-slate-400`, ButtonInactive:`translate-x-0 from-slate-700 to-slate-500`,
      icon:'cog',handler:handleLight,setter:lightTheme,
    },
    {Info:'About Me',
      ContainerBG:`bg-slate-950/80`,SpanBG:`from-slate-800 to-slate-700 text-slate-300`,
      ThemeActive:`text-slate-300`,ThemeInactive:`text-slate-600`,
      ButtonContainer:`from-slate-700 to-slate-800`,
      ButtonActive:`translate-x-[22px] from-slate-600 to-slate-400`, ButtonInactive:`translate-x-0 from-slate-700 to-slate-500`,
      icon:'cog',handler:handleChristmas,setter:christmasTheme
    },
    {Info:'Experience',
      ContainerBG:`bg-slate-950/80`,SpanBG:`from-slate-800 to-slate-700 text-slate-300`,
      ThemeActive:`text-slate-300`,ThemeInactive:`text-slate-600`,
      ButtonContainer:`from-slate-700 to-slate-800`,
      ButtonActive:`translate-x-[22px] from-slate-600 to-slate-400`, ButtonInactive:`translate-x-0 from-slate-700 to-slate-500`,
      icon:'cog',handler:handleHalloween,setter:helloweenTheme
    },
    {Info:'Profile',
      ContainerBG:`bg-slate-950/80`,SpanBG:`from-slate-800 to-slate-700 text-slate-300`,
      ThemeActive:`text-slate-300`,ThemeInactive:`text-slate-600`,
      ButtonContainer:`from-slate-700 to-slate-800`,
      ButtonActive:`translate-x-[22px] from-slate-600 to-slate-400`, ButtonInactive:`translate-x-0 from-slate-700 to-slate-500`,
      icon:'cog',handler:handleEaster,setter:easterTheme
    },
    {Info:'Skills',
      ContainerBG:`bg-slate-950/80`,SpanBG:`from-slate-800 to-slate-700 text-slate-300`,
      ThemeActive:`text-slate-300`,ThemeInactive:`text-slate-600`,
      ButtonContainer:`from-slate-700 to-slate-800`,
      ButtonActive:`translate-x-[22px] from-slate-600 to-slate-400`, ButtonInactive:`translate-x-0 from-slate-700 to-slate-500`,
      icon:'cog',handler:handleWinter,setter:winterTheme
    },
    {Info:'Hobbies',
      ContainerBG:`bg-slate-950/80`,SpanBG:`from-slate-800 to-slate-700 text-slate-300`,
      ThemeActive:`text-slate-300`,ThemeInactive:`text-slate-600`,
      ButtonContainer:`from-slate-700 to-slate-800`,
      ButtonActive:`translate-x-[22px] from-slate-600 to-slate-400`, ButtonInactive:`translate-x-0 from-slate-700 to-slate-500`,
      icon:'cog',handler:handleSpring,setter:springTheme
    },
    {Info:'Additional Information',
      ContainerBG:`bg-slate-950/80`,SpanBG:`from-slate-800 to-slate-700 text-slate-300`,
      ThemeActive:`text-slate-300`,ThemeInactive:`text-slate-600`,
      ButtonContainer:`from-slate-700 to-slate-800`,
      ButtonActive:`translate-x-[22px] from-slate-600 to-slate-400`, ButtonInactive:`translate-x-0 from-slate-700 to-slate-500`,
      icon:'cog',handler:handleSummer,setter:summerTheme
    },
    {Info:'Portfolio',
      ContainerBG:`bg-slate-950/80`,SpanBG:`from-slate-800 to-slate-700 text-slate-300`,
      ThemeActive:`text-slate-300`,ThemeInactive:`text-slate-600`,
      ButtonContainer:`from-slate-700 to-slate-800`,
      ButtonActive:`translate-x-[22px] from-slate-600 to-slate-400`, ButtonInactive:`translate-x-0 from-slate-700 to-slate-500`,
      icon:'cog',handler:handleAutumn,setter:autumnTheme
    },
  ]
  const [showPersonalInfo,setShowPersonalInfo] = useState(true);
  const handlePersonalInfo = () =>{if(showPersonalInfo === false){setShowPersonalInfo(!showPersonalInfo);setShowPersonalPrivacy(false);setShowEducation(false);setShowHobbies(false);setShowExperience(false);setImgControl(false);setShowQuotes(false);}}

  const [showPersonalPrivacy,setShowPersonalPrivacy] = useState(false);
  const handlePersonalPrivacy = () =>{if(showPersonalPrivacy === false){setShowPersonalInfo(false);setShowPersonalPrivacy(!showPersonalPrivacy);setShowEducation(false);setShowHobbies(false);setShowExperience(false);setImgControl(false);setShowQuotes(false);}}

  const [showEducation,setShowEducation] = useState(false);
  const handleEducation = () =>{if(showEducation === false){setShowPersonalInfo(false);setShowPersonalPrivacy(false);setShowEducation(!showEducation);setShowHobbies(false);setShowExperience(false);setImgControl(false);setShowQuotes(false);}}

  const [showHobbies,setShowHobbies] = useState(false);
  const handleShowHobbies = () =>{if(showHobbies === false){setShowPersonalInfo(false);setShowPersonalPrivacy(false);setShowEducation(false);setShowHobbies(!showHobbies);setShowExperience(false);setImgControl(false);setShowQuotes(false);}}

  const [showExperience,setShowExperience] = useState(false);
  const handleExperience = () =>{if(showExperience === false){setShowPersonalInfo(false);setShowPersonalPrivacy(false);setShowEducation(false);setShowHobbies(false);setShowExperience(!showExperience);setImgControl(false);setShowQuotes(false);}}

  const [imgControl,setImgControl] = useState(false);
  const handleImgControl = () =>{if(imgControl === false){setShowPersonalInfo(false);setShowPersonalPrivacy(false);setShowEducation(false);setShowHobbies(false);setShowExperience(false);setImgControl(!imgControl);setShowQuotes(false);}}

  const [showQuotes,setShowQuotes] = useState(false);
  const handleQuotes = () =>{if(showQuotes === false){setShowPersonalInfo(false);setShowPersonalPrivacy(false);setShowEducation(false);setShowHobbies(false);setShowExperience(false);setImgControl(false);setShowQuotes(!showQuotes);}}
  return (<>
      <div className={style.Container}>
      <div className={style.Content}>
        <h2 className={style.Header}>Profile Settings</h2>
        <div className={style.ContentContainer}>
          <div className={style.SettingsNav.Container}>
            <ul className={style.SettingsNav.ListHolder}>

              <li className={style.SettingsNav.List} onClick={handlePersonalInfo}>
                <FontAwesomeIcon icon="fa-user-circle" className={`${style.SettingsNav.Icon1} left-[10px] ${showPersonalInfo ? 'text-slate-300':'text-slate-500'}`}/>
                <FontAwesomeIcon icon="gear" className={style.SettingsNav.Icon2}/>
                <span className={style.SettingsNav.Span}>Personal Info</span>
              </li>
              <li className={style.SettingsNav.List} onClick={handlePersonalPrivacy}>
                <FontAwesomeIcon icon="fa-user-secret" className={`${style.SettingsNav.Icon1} left-[11px] ${showPersonalPrivacy ? 'text-slate-300':'text-slate-500'}`}/>
                <FontAwesomeIcon icon="gear" className={style.SettingsNav.Icon2}/>
                <span className={style.SettingsNav.Span}>Personal Privacy</span>
              </li>
              <li className={style.SettingsNav.List} onClick={handleEducation}>
                <FontAwesomeIcon icon="fa-graduation-cap" className={`${style.SettingsNav.Icon1} left-[8px] ${showEducation ? 'text-slate-300':'text-slate-500'}`}/>
                <FontAwesomeIcon icon="gear" className={style.SettingsNav.Icon2}/>
                <span className={style.SettingsNav.Span}>Education</span>
              </li>
              <li className={style.SettingsNav.List} onClick={handleShowHobbies}>
                <FontAwesomeIcon icon="fa-gamepad" className={`${style.SettingsNav.Icon1} left-[8px] ${showHobbies ? 'text-slate-300':'text-slate-500'}`}/>
                <FontAwesomeIcon icon="gear" className={style.SettingsNav.Icon2}/>
                <span className={style.SettingsNav.Span}>Hobbies</span>
              </li>
              <li className={style.SettingsNav.List} onClick={handleExperience}>
                <FontAwesomeIcon icon="fa-star" className={`${style.SettingsNav.Icon1} left-[9px] ${showExperience ? 'text-slate-300':'text-slate-500'}`}/>
                <FontAwesomeIcon icon="gear" className={style.SettingsNav.Icon2}/>
                <span className={style.SettingsNav.Span}>Experience</span>
              </li>
              <li className={style.SettingsNav.List} onClick={handleImgControl}>
                <FontAwesomeIcon icon="fa-images" className={`${style.SettingsNav.Icon1} left-[9px] ${imgControl ? 'text-slate-300':'text-slate-500'}`}/>
                <FontAwesomeIcon icon="gear" className={style.SettingsNav.Icon2}/>
                <span className={style.SettingsNav.Span}>Img Control</span>
              </li>
              <li className={style.SettingsNav.List} onClick={handleQuotes}>
                <FontAwesomeIcon icon="fa-quote-right" className={`${style.SettingsNav.Icon1} left-[11px] ${showQuotes ? 'text-slate-300':'text-slate-500'}`}/>
                <FontAwesomeIcon icon="gear" className={style.SettingsNav.Icon2}/>
                <span className={style.SettingsNav.Span}>Qoutes</span>
              </li>
              
            </ul>
          </div>
          <div className={style.SettingsWindow.Container}>
            {showPersonalInfo && <>
              <h2 className={style.SettingsWindow.Header}>Personal Info</h2>
              <div className={style.SettingsWindow.ContentWindow}>
                <div className={style.SettingsWindow.Content}>
                  
                  <div className={hobbiesStyle.InputsContainer}>
                    <div className={hobbiesStyle.InputsHolder}>
                      <select className={hobbiesStyle.Input}>
                        <option>Select</option>
                        <option>Username</option>
                        <option>Surname</option>
                        <option>Date of Birth</option>
                        <option>Age</option>
                        <option>Field of Sector</option>
                        <option>Field of Sector Role</option>
                      </select>
                      <textarea className={hobbiesStyle.Textarea} placeholder="Selected Info Type"/>
                      <button className={hobbiesStyle.Button}>Add Info</button>
                    </div>
                  </div>

                  <label className="bg-slate-900 block h-[30px] leading-[30px] mx-auto w-[95%] relative top-2 mb-2 pl-2 border-[1px] border-slate-400 text-sm text-slate-400">Name
                    <span className="bg-slate-900 inline-block absolute right-0 w-[240px] h-[28px] px-2">Username
                      <FontAwesomeIcon icon='close' className="absolute right-2 top-2 cursor-pointer hover:text-red-600"/>
                    </span>
                  </label>

                  <label className="bg-slate-900 block h-[30px] leading-[30px] mx-auto w-[95%] relative top-2 mb-2 pl-2 border-[1px] border-slate-400 text-sm text-slate-400">Surname
                    <span className="bg-slate-900 inline-block absolute right-0 w-[240px] h-[28px] px-2">Surename
                      <FontAwesomeIcon icon='close' className="absolute right-2 top-2 cursor-pointer hover:text-red-600"/>
                    </span>
                  </label>

                  <label className="bg-slate-900 block h-[30px] leading-[30px] mx-auto w-[95%] relative top-2 mb-2 pl-2 border-[1px] border-slate-400 text-sm text-slate-400">DOB
                    <span className="bg-slate-900 inline-block absolute right-0 w-[240px] h-[28px] px-2">1998.01.05
                      <FontAwesomeIcon icon='close' className="absolute right-2 top-2 cursor-pointer hover:text-red-600"/>
                    </span>
                  </label>

                  <label className="bg-slate-900 block h-[30px] leading-[30px] mx-auto w-[95%] relative top-2 mb-2 pl-2 border-[1px] border-slate-400 text-sm text-slate-400">Age
                    <span className="bg-slate-900 inline-block absolute right-0 w-[240px] h-[28px] px-2">25
                      <FontAwesomeIcon icon='close' className="absolute right-2 top-2 cursor-pointer hover:text-red-600"/>
                    </span>
                  </label>
                  
                  <label className="bg-slate-900 block h-[30px] leading-[30px] mx-auto w-[95%] relative top-2 mb-2 pl-2 border-[1px] border-slate-400 text-sm text-slate-400">FOS
                    <span className="bg-slate-900 inline-block absolute right-0 w-[240px] h-[28px] px-2">Field Of sectors
                      <FontAwesomeIcon icon='close' className="absolute right-2 top-2 cursor-pointer hover:text-red-600"/>
                    </span>
                  </label>
                  
                  <label className="bg-slate-900 block h-[30px] leading-[30px] mx-auto w-[95%] relative top-2 mb-2 pl-2 border-[1px] border-slate-400 text-sm text-slate-400">FOSR
                    <span className="bg-slate-900 inline-block absolute right-0 w-[240px] h-[28px] px-2">Field of sector role
                      <FontAwesomeIcon icon='close' className="absolute right-2 top-2 cursor-pointer hover:text-red-600"/>
                    </span>
                  </label>

                </div>
              </div>
            </>
            }
            {showPersonalPrivacy && <>
              <h2 className={style.SettingsWindow.Header}>Personal Privacy</h2>
              <div className={style.SettingsWindow.ContentWindow}>
                <div className={style.SettingsWindow.Content}>
                  <div className={style.SettingsWindow.ChooseThemeContent}>
                  {privacySettings.map(privacy => (
                    <div key={privacy.Info} className={`${themeBox.Container} ${privacy.ContainerBG}`}>
                      <span className={`${themeBox.ThemeName} ${privacy.SpanBG}`}> {privacy.Info}
                        <FontAwesomeIcon icon={privacy.icon} className={`${themeBox.IconColor} 
                        ${privacy.setter ? `${privacy.ThemeActive}`:`${privacy.ThemeInactive}`}`}/> 
                      </span>
                      <div className={`${themeBox.ThemeButtonContainer} ${privacy.ButtonContainer}`} 
                        onClick={privacy.handler}> 
                        <span className={`${themeBox.ThemeButton} ${privacy.setter ? `${privacy.ButtonActive}`:`${privacy.ButtonInactive}`}`}>
                        </span> 
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </>
            }
            {showEducation && <>
              <h2 className={style.SettingsWindow.Header}>Education</h2>
              <div className={style.SettingsWindow.ContentWindow}>
                <div className={style.SettingsWindow.Content}>

                  <div className="w-[95%] mx-auto">
                    <div className="w-full flex flex-col relative h-[180px]">
                      <input className="h-[30px] bg-slate-800 border-[1px] border-slate-700 shadow-[0_0_8px_2px_inset] shadow-slate-950/40 mt-2 rounded-lg text-sm outline-none resize-none px-2 py-1" placeholder="Education Type"/>
                      <textarea className="h-[80px] bg-slate-800 border-[1px] border-slate-700 shadow-[0_0_8px_2px_inset] shadow-slate-950/40 mt-5 mb-2 rounded-lg text-sm outline-none resize-none px-2 py-1" placeholder="Skills you learnt"/>
                      <button className="bg-slate-800 text-sm w-[120px] h-[30px] rounded-md absolute right-0 bottom-0 text-slate-400 hover:text-slate-300 duration-200 ease-in border-[1px] border-slate-700 shadow-[0_0_5px_2px] shadow-black/50">Add Education</button>
                    </div>
                  </div>

                  <div className="w-[95%] mx-auto">
                    <h2 className="w-[98%] h-[40px] leading-[40px] bg-slate-900/50 shadow-[0_0_2px_1px] shadow-black/50 mt-4 mx-auto text-md pl-3 rounded-tr-lg rounded-tl-lg border-b-[1px] border-slate-400/70">All Education</h2>
                    <div className="w-[98%] h-[390px] py-2 bg-slate-900/60 shadow-[0_0_2px_1px] shadow-black/40 mx-auto text-md rounded-br-lg rounded-bl-lg overflow-x-hidden overflow-y-scroll">
                      <div className="text-sm w-[98%] my-2 mx-2 inline-block bg-slate-950/30 py-2 px-2 rounded-lg">
                      <legend className='border-b-[1px] border-slate-400 text-[16px] text-slate-400'>Education <span className="text-[16px] text-slate-300 inline-block pl-1">Education Type</span></legend>
                        <p className="text-sm w-[98%] inline-block bg-slate-950/30 rounded-lg py-2">Some Text Some Text Some Text Some Text Some TextSome TextSome TextSome TextSome TextSome TextSome TextSome TextSome TextSome Text</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </>
            }
            {showHobbies && <>
              <h2 className={style.SettingsWindow.Header}>Hobbies</h2>
              <div className={style.SettingsWindow.ContentWindow}>
                <div className={style.SettingsWindow.Content}>

                  <div className={hobbiesStyle.InputsContainer}>
                    <div className={hobbiesStyle.InputsHolder}>
                      <input className={hobbiesStyle.Input} placeholder="Hobby Type"/>
                      <textarea className={hobbiesStyle.Textarea} placeholder="Your Hobby"/>
                      <button className={hobbiesStyle.Button}>Add Hobby</button>
                    </div>
                  </div>

                  <div className={hobbiesStyle.hobbiesUI.Container}>

                    <h2 className={hobbiesStyle.hobbiesUI.H2}>All Hobbies</h2>
                    <div className={hobbiesStyle.hobbiesUI.HobbiesContainer}>

                      <div className={hobbiesStyle.hobbiesUI.HobbiesContent}>
                        <label className={hobbiesStyle.hobbiesUI.Label}>Hobby Type
                          <span className={hobbiesStyle.hobbiesUI.Span}>Hobby
                            <FontAwesomeIcon icon="close" className={hobbiesStyle.hobbiesUI.Icon}/>
                          </span>
                        </label>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </>
            }
            {showExperience && <>
              <h2 className={style.SettingsWindow.Header}>Experience</h2>
              <div className={style.SettingsWindow.ContentWindow}>
                <div className={style.SettingsWindow.Content}>

                  <div className="w-[95%] mx-auto">
                    <div className="w-full flex flex-col relative h-[180px]">
                      <input className="h-[30px] bg-slate-800 border-[1px] border-slate-700 shadow-[0_0_8px_2px_inset] shadow-slate-950/40 mt-2 rounded-lg text-sm outline-none resize-none px-2 py-1" placeholder="Write Industry"/>
                      <textarea className="h-[80px] bg-slate-800 border-[1px] border-slate-700 shadow-[0_0_8px_2px_inset] shadow-slate-950/40 mt-5 mb-2 rounded-lg text-sm outline-none resize-none px-2 py-1" placeholder="Experience"/>
                      <button className="bg-slate-800 text-sm w-[120px] h-[30px] rounded-md absolute right-0 bottom-0 text-slate-400 hover:text-slate-300 duration-200 ease-in border-[1px] border-slate-700 shadow-[0_0_5px_2px] shadow-black/50">Add Experience</button>
                    </div>
                  </div>

                  <div className="w-[95%] mx-auto">
                    <h2 className="w-[98%] h-[40px] leading-[40px] bg-slate-900/50 shadow-[0_0_2px_1px] shadow-black/50 mt-4 mx-auto text-md pl-3 rounded-tr-lg rounded-tl-lg border-b-[1px] border-slate-400/70">All Experience</h2>
                    <div className="w-[98%] h-[390px] py-2 bg-slate-900/60 shadow-[0_0_2px_1px] shadow-black/40 mx-auto text-md rounded-br-lg rounded-bl-lg overflow-x-hidden overflow-y-scroll">
                      <div className="text-sm w-[98%] my-2 mx-2 inline-block bg-slate-950/30 py-2 px-2 rounded-lg">
                      <legend className='border-b-[1px] border-slate-400 text-[16px] text-slate-400'>Industry <span className="text-[16px] text-slate-300 inline-block pl-1">Tech</span></legend>
                        <p className="text-sm w-[98%] inline-block bg-slate-950/30 rounded-lg py-2">Some Text Some Text Some Text Some Text Some TextSome TextSome TextSome TextSome TextSome TextSome TextSome TextSome TextSome Text</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </>
            }
            {imgControl && <>
              <h2 className={style.SettingsWindow.Header}>Img Control</h2>
              <div className={style.SettingsWindow.ContentWindow}>
                <div className={style.SettingsWindow.Content}>
                  <h2 className="w-[95%] h-[40px] leading-[40px] border-b-[1px] border-slate-600 text-center mx-auto ">Profile Image</h2>
                  <div className="w-[310px] relative top-4 grid grid-cols-3 gap-1 mx-1">
                    <ImgControlCard /><ImgControlCard /><ImgControlCard />
                    <ImgControlCard /><ImgControlCard /><ImgControlCard />
                  </div>

                  <h2 className="w-[95%] h-[40px] leading-[40px] border-b-[1px] border-slate-600 text-center mx-auto mt-10">Portfolio Image</h2>
                  <div className="w-[310px] relative top-4 grid grid-cols-3 gap-1 mx-1">
                    <ImgControlCard /><ImgControlCard /><ImgControlCard />
                    <ImgControlCard /><ImgControlCard /><ImgControlCard />
                  </div>
                </div>
            </div>
            </>
            }
            {showQuotes && <>
              <h2 className={style.SettingsWindow.Header}>Qoutes</h2>
              <div className={style.SettingsWindow.ContentWindow}>
                <div className={style.SettingsWindow.Content}>

                  <div className={QuotesStyles.Container}>
                    <div className={QuotesStyles.Content}>
                      <textarea className={QuotesStyles.Textarea} placeholder="Write your qoute"/>
                      <button className={QuotesStyles.Button}>Add Qoute</button>
                    </div>
                  </div>

                  <div className={QuotesStyles.QuotesUI.Container}>
                    <h2 className={QuotesStyles.QuotesUI.H2}>All Qoutes</h2>
                    <div className={QuotesStyles.QuotesUI.Content}>
                      <q className={QuotesStyles.QuotesUI.Qoutes}>Some Text Some Text Some Text Some Text Some TextSome TextSome TextSome TextSome TextSome TextSome TextSome TextSome TextSome Text</q>
                    </div>
                  </div>

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
export default ProfileSettings