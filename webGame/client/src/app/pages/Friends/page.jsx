'use client';
import { useState} from 'react'
import { FontAwesomeIcon } from '../../Icons';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
const Friends = () => {
  const [friends] = useState([
    {id:1,name:"User1",userImg:""},
    {id:2,name:"User2",userImg:""},
    {id:3,name:"User3",userImg:""},
    {id:4,name:"User4",userImg:""},
    {id:5,name:"User5",userImg:""},
    {id:6,name:"User6",userImg:""},
    {id:7,name:"User7",userImg:""},
    {id:8,name:"User8",userImg:""},
    {id:9,name:"User9",userImg:""},
    {id:10,name:"User10",userImg:""},
    {id:11,name:"User11",userImg:""},
    {id:12,name:"User12",userImg:""},
    {id:13,name:"User13",userImg:""},
    {id:14,name:"User14",userImg:""},
    {id:15,name:"User15",userImg:""},
    {id:16,name:"User16",userImg:""},
    {id:17,name:"User17",userImg:""},
    {id:18,name:"User18",userImg:""},
    {id:19,name:"User19",userImg:""},
    {id:20,name:"User20",userImg:""},
    {id:21,name:"User21",userImg:""},
    {id:22,name:"User22",userImg:""},
  ])
  const [addFriend,setAddFriend] = useState(null);
  const [viewProfile,setViewProfile] = useState(null);
  const currentTheme = useSelector(state => { return state.rootReducer.themes.currentTheme; })
  const themes = useSelector(state => { return state.rootReducer.themes.themes } );
  return (<>
    <div className={`${themes[currentTheme].GradientMiddle} col-span-12 py-[17px] -z-10`}> 
    <h2 className={`h-[50px] leading-[60px] text-lg w-[95%] font-sans font-semibold mx-auto text-center ${themes[currentTheme].textDim} ${themes[currentTheme].bg} rounded-tl-lg rounded-tr-lg`}>Friends</h2>
      <div className={`w-[95%] mx-auto h-[745px] ${themes[currentTheme].bg} pt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-row-auto gap-y-1 overflow-y-scroll overflow-x-scroll rounded-bl-lg`}> 
        {friends.map(friend => ( 
          <div key={friend.id} className={`${themes[currentTheme].themeNav} w-[87%] h-[290px] mx-3 rounded-lg mb-2`}>
            <img src={friend.userImg} className={`w-[98%] mx-auto my-[2px] h-[160px] rounded-lg border-b-[2px] border-slate-300/30`}/>
            <div className={`flex flex-col relative`}>
              <span className={`pl-2 pt-1 ${themes[currentTheme].textDim} inline-block w-[95%] h-[40px] overflow-x-hidden`}>{friend.name}</span>
              <button className={`w-[90%] mx-auto h-[30px] leading-[30px] text-sm rounded-md duration-300 relative hover:bg-sky-600 hover:${themes[currentTheme].text} bg-sky-300 text-slate-900`} 
              onClick={()=>{setAddFriend(friend.id);setViewProfile(null)}}>
              <FontAwesomeIcon icon='user-plus' className={`absolute left-2 top-2`}/>
              Add Friend
              </button>
              <button className={`w-[90%] mx-auto h-[30px] leading-[30px] my-2 text-sm rounded-md duration-300 bg-slate-300 text-slate-800 hover:${themes[currentTheme].textDim} hover:bg-slate-600`} 
              onClick={()=>{setViewProfile(friend.id);setAddFriend(null)}}>View Profile</button>

              {addFriend === friend.id && (
                <h2 className={`relative text-zinc-300 text-center left-[5%] -top-[38px] block w-[90%] rounded-md h-[30px] leading-[30px] bg-slate-600 text-[14px] font-semibold font-sans`}>Friend added</h2>
              )}
              {viewProfile === friend.id && (
                <label className={`relative text-zinc-300 text-center left-[5%] -top-[38px] block w-[90%] rounded-md h-[30px] leading-[30px] bg-slate-600 text-[14px] font-semibold font-sans`}>Profile</label>)}
            </div>
          </div>
        ))} 
      </div>
    </div>
  </>)
}
export default Friends