"use client";
import React, {useState} from 'react'
// import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '../../Icons';
const styles = {
  Container:`bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-slate-300 col-span-12 py-[17px] -z-10`,
  Header:`h-[50px] leading-[60px] text-lg w-[95%] font-sans font-semibold mx-auto text-center text-white bg-slate-800 rounded-tl-lg rounded-tr-lg`,
  Holder:`w-[95%] mx-auto h-[745px] bg-slate-800 pt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-row-auto gap-y-1 overflow-y-scroll overflow-x-scroll rounded-bl-lg`,
  Card:{
    Container:`bg-slate-900 w-[87%] h-[290px] mx-3 rounded-lg mb-2`,
    Img:`w-[98%] mx-auto my-[2px] h-[160px] rounded-lg border-b-[2px] border-slate-300/30`,
    Holder:`flex flex-col relative`,
    Span:`pl-2 pt-1 text-slate-300 inline-block w-[95%] h-[40px] overflow-x-hidden`,
    Btn:`w-[90%] mx-auto h-[30px] leading-[30px] text-sm rounded-md duration-300 relative`,
    Btn1:`w-[90%] mx-auto h-[30px] leading-[30px] my-2 text-sm rounded-md duration-300`,
    IconUnblock:`absolute left-2 top-2`,
  },
  Blocked:{
    Unblock:`bg-rose-300 text-slate-950 hover:bg-rose-900 hover:text-slate-300 ease-in hover:ease-in`,
    ViewProfile:`bg-slate-300 text-slate-800 hover:text-slate-800 hover:bg-slate-400`,
  },
  unblock:{
    addText:`relative text-slate-200 text-center left-[5%] -top-[76px] block w-[90%] rounded-md h-[30px] leading-[30px] bg-rose-800 text-[14px] `,
  },
  viewProfile:{
    addText:`relative text-slate-200 text-center left-[5%] -top-[38px] block w-[90%] rounded-md h-[30px] leading-[30px] bg-slate-600 text-[14px] font-semibold font-sans`,
  },
}
const Blocked = () => {
  //redux
  const [unBlock,setUnBlock] = useState(null);
  const [viewProfile,setViewProfile] = useState(null);
  const [blocked] = useState([{id:1,name:"User1",userImg:""},])
  return (
  <>
  <div className={`${styles.Container}`}>
    <h2 className={`${styles.Header}`}>Blocked</h2>
    <div className={`${styles.Holder}`}>
      {blocked.map((b) =>( 
        <div key={b.id} className={`${styles.Card.Container}`}>
          <img src={b.userImg} className={`${styles.Card.Img}`}/>
          <div className={`${styles.Card.Holder}`}>
            <span className={`${styles.Card.Span}`}>{b.name}</span>
            <button className={`${styles.Card.Btn} ${styles.Blocked.Unblock}`} 
            onClick={()=>{setUnBlock(b.id);setViewProfile(null)}}>
            <FontAwesomeIcon icon='user-xmark' className={styles.Card.IconUnblock}/>
            Unblock</button>
            <button className={`${styles.Card.Btn1} ${styles.Blocked.ViewProfile}`} 
            onClick={()=>{setViewProfile(b.id);setUnBlock(null)}}>View Profile</button>
            {unBlock === b.id && ( <h2 className={styles.unblock.addText}>User Unblocked</h2>)}
            {viewProfile === b.id && ( <label className={styles.viewProfile.addText}>Profile</label>)}
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  )
}
export default Blocked