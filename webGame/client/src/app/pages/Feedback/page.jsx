'use client';
/* eslint-disable react/prop-types */
import {useState,useRef} from 'react';
import {FontAwesomeIcon } from '../../Icons';

const feedbackCardStyle = {
  Container:`mx-2 rounded-lg h-[130px] flex flex-row`,
  Heading:`h-[130px] leading-[30px] w-[100px] bg-slate-700 rounded-tl-lg rounded-bl-lg relative`,
  ImgContainer:`w-[100px] h-[100px] mx-auto relative -z-10`,
  Img:`relative mb-2 rounded-tl-lg rounded-bl-lg text-center`,
  Span:`inline-block w-[100px] h-[25px] leading-[25px] absolute left-0 rounded-bl-lg text-center bottom-0 text-sm text-slate-400 bg-slate-700`,
  Paragraph:`h-[130px] w-[298px] bg-slate-700 px-2 relative py-1 text-sm rounded-br-lg rounded-tr-lg text-slate-300/80`,
  Icon1:`text-md absolute right-[6px] top-[8px] w-[15px] h-[15px] text-slate-900`,
  Icon2:`text-md absolute w-[60px] h-[60px] right-[6px] bottom-1 text-slate-800/10`,
}
const feedbackStyle = {
  Container:`bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-slate-300 col-span-12 py-[18px] relative`,
  Holder:`w-[95%] bg-slate-800 h-[798px] mx-auto relative top-1 bg-slate-900 rounded-lg`,
  Heading:`h-[30px] leading-[60px] text-lg w-[50%] font-sans font-semibold mx-auto text-center`,
  ContentHolder:`w-[85%] mx-auto h-[90%] bg-slate-900 relative top-6 rounded-lg`,
  Paragraph:`h-[30px] leading-[25px] bg-slate-700 relative text-center mx-auto rounded-md rounded-tr-md shadow-[0px_-1px_1px_2px_inset,0px_1px_1px_0] shadow-slate-950 text-sm`,
  Icon:`text-md absolute right-[8px] top-[6px]`,
  Content:`h-[630px] grid grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-1 mt-7 overflow-y-scroll mx-auto`,
}
const feedbackBtn = {
  Container:`w-[300px] h-[130px] absolute top-[200px] bg-slate-900 left-[10px] rounded-2xl z-30 shadow-[0_0_48px_12px_#000000] border-[1px] border-slate-600`,
  H2:`my-2 text-center h-[50px] w-[80%] mx-auto leading-[30px] text-sm font-sans font-semibold text-slate-400`,
  IconClose:`cursor-pointer absolute right-4 top-4 hover:text-rose-500 duration-300 hover:ease-in ease-out`,
  BtnHolder:`w-[220px] mx-auto relative top-4`,
  Btn:`w-[90px] h-[30px] text-slate-300 text-center rounded-lg border-[1px] shadow-[0_0_3px_1px] hover:shadow-[0_0_3px_1px_inset] duration-300 hover:ease-in ease-out`,
  BtnYes:`bg-gradient-to-b from-emerald-600 to-emerald-800 ml-2 border-emerald-800 shadow-emerald-500/60 hover:shadow-emerald-950`,
  BtnNo:`bg-gradient-to-b from-red-600 to-red-800 ml-4 border-red-800 shadow-red-500/60 hover:shadow-red-950`,
}
const usersfeedback = [{id:1,feedbackName:'user',feedbackText:"text"}];

const FeedbackCard = ({img,feedbackIcon,feedbackName,feedbackDesc})=>(
  <div className={`${feedbackCardStyle.Container}`}>
    <h2 className={`${feedbackCardStyle.Heading}`}> 
      <div className={`${feedbackCardStyle.ImgContainer}`}> <img src={img} className={`${feedbackCardStyle.Img}`}/> </div>
      <span className={`${feedbackCardStyle.Span}`}>{feedbackName}</span>
    </h2>
    <p className={`${feedbackCardStyle.Paragraph}`}>
      <FontAwesomeIcon icon='circle' className={`${feedbackCardStyle.Icon1}`}/>
      <FontAwesomeIcon icon={feedbackIcon} className={`${feedbackCardStyle.Icon2}`}/>
      {feedbackDesc}
    </p>
  </div>
)
const Feedback = () => {
  const [writeFeedback,setWriteFeedback] = useState(false);
  const [sendFeedback,setSendFeedback] = useState(false);
  const [sendCancelFeedback,setSendCancelFeedback] = useState(false);

  const [countFeedback,setCountFeedback] = useState('')
  const feedbackText = useRef(null);
  const handleTextAreaChange = () => {
    const newText = feedbackText.current.value;
    setCountFeedback(newText);
  };


return (<>
<div className={`${feedbackStyle.Container}`}>
  <div className={`${feedbackStyle.Holder}`}>
  <h2 className={`${feedbackStyle.Heading}`}>Feedback</h2>

    <div className="w-[130px] h-[40px] leading-[38px] bg-gradient-to-b from-slate-700 to-slate-900 text-slate-300 absolute right-1 top-2 rounded-lg shadow-[0_1px_5px_1px] shadow-black/70 text-center pl-3 cursor-pointer text-sm font-sans font-semibold select-none" onClick={()=>{setWriteFeedback(!writeFeedback)}}>
    <span className="absolute w-[25px] h-[25px] bg-gradient-to-b from-slate-700 to-slate-900 shadow-[0_0_2px_1px_#00000095,0_0_2px_1px_inset_#ffffff30] leading-[25px] left-2 top-[7.5px] rounded-lg"> 
      <FontAwesomeIcon icon="pen" className="text-sm text-slate-400"/> </span> Feedback
    </div>

    {writeFeedback && (
      <div className='w-[330px] h-[500px] bg-gradient-to-b from-slate-900 to-slate-800 border-[1px] border-slate-500 text-slate-200 absolute right-1 top-16 rounded-lg shadow-[0_0_6px_2px] shadow-black text-center text-sm font-sans font-semibold z-10'>
        <h2 className='relative border-b-[1px] border-slate-500 h-[40px] leading-[40px] text-md'>Feedback form <FontAwesomeIcon icon='close' className='absolute right-3 top-3 hover:text-red-600 duration-200 ease-in cursor-pointer' onClick={()=>{setWriteFeedback(!writeFeedback)}}/></h2>
        <label className="absolute top-16 left-[14px] flex flex-col">
          <span className='inline-block h-[30px] leading-[30px] text-left mb-2'>Your Name</span>
          <input placeholder={'Name'} className='outline-none cursor-default w-[300px] h-[30px] leading-[30px] px-2 text-slate-300 rounded-lg shadow-[0_2px_5px_1px] shadow-black/60 bg-slate-800' readOnly/>
        </label>
        <textarea placeholder='Your feedback text...' ref={feedbackText} onChange={handleTextAreaChange} value={countFeedback} 
        className={`outline-none absolute top-[150px] left-[14px] w-[300px] px-3 py-2 text-slate-300 rounded-lg shadow-[0_2px_5px_1px] shadow-black/60 bg-slate-800 font-sans font-semibold overflow-x-hidden overflow-y-scroll resize-none h-[280px]`}></textarea>
        <label className="absolute bottom-[72px] right-7 text-slate-300 text-sm bg-slate-900 p-1 rounded-lg">
          <span>{countFeedback.length >= 600 ? 'Max':countFeedback.length}</span>/
          <span>600</span>
        </label>
        <div className='absolute bottom-5 mx-2 w-[95%] h-[30px] leading-[30px]'>
          <button className={`${feedbackBtn.Btn} ${feedbackBtn.BtnYes}`} onClick={()=>{setSendFeedback(!sendFeedback)}}>Send</button>
          <button className={`${feedbackBtn.Btn} ${feedbackBtn.BtnNo}`} onClick={()=>{setSendCancelFeedback(!sendCancelFeedback)}}>Cancel</button>
        </div>
        {sendFeedback && (
        <div className={feedbackBtn.Container}>
          <h2 className={feedbackBtn.H2}>{"Are you sure?"}
          <FontAwesomeIcon icon='close' className={feedbackBtn.IconClose} onClick={()=>{setSendFeedback(!sendFeedback)}}/> </h2>
          <div className={feedbackBtn.BtnHolder}>
            <button className={`${feedbackBtn.BtnYes} ${feedbackBtn.Btn}`} onClick={()=>{setSendFeedback(!sendFeedback);setWriteFeedback(!writeFeedback);alert("Thanks for your feedback")}}>Yes</button>
            <button className={`${feedbackBtn.BtnNo} ${feedbackBtn.Btn}`} onClick={()=>{setSendFeedback(!sendFeedback)}}>No</button>
          </div>
        </div>
        )}
        {sendCancelFeedback && (
        <div className={feedbackBtn.Container}>
          <h2 className={feedbackBtn.H2}>{"If you cancel your feedback won't be sent and window will be closed"}
          <FontAwesomeIcon icon='close' className={feedbackBtn.IconClose} onClick={()=>{setSendCancelFeedback(!sendCancelFeedback)}}/> </h2>
          <div className={feedbackBtn.BtnHolder}>
            <button className={`${feedbackBtn.BtnYes} ${feedbackBtn.Btn}`} onClick={()=>{setSendCancelFeedback(!sendCancelFeedback);setWriteFeedback(!writeFeedback);alert("We will be waiting for your feedback thanks for being interested")}}>Yes</button>
            <button className={`${feedbackBtn.BtnNo} ${feedbackBtn.Btn}`} onClick={()=>{setSendCancelFeedback(!sendCancelFeedback)}}>No</button>
          </div>
        </div>
        )}
      </div>
    )}
    <div className={`${feedbackStyle.ContentHolder}`}>
      <p className={`${feedbackStyle.Paragraph}`}>Users feedback board <FontAwesomeIcon icon='caret-down' className={`${feedbackStyle.Icon}`}/></p>
        <div className={`${feedbackStyle.Content}`}>
        {usersfeedback.map((feeds) => ( <FeedbackCard key={feeds.id} img="" feedbackIcon="user" feedbackName={feeds.feedbackName} feedbackDesc={feeds.feedbackText}/>
        ))}
        </div>
    </div>
  </div>
</div>
</>)}

export default Feedback