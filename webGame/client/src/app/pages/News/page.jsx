'use client';
/* eslint-disable react/prop-types */
import { useState} from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '../../Icons';
import '../../App.scss'
const homeMainWindow = {
  Container:`bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 grid grid-cols-12 col-span-12 row-span-12 pt-[2px] relative z-0`,
  Holder:`h-[830px] text-slate-300 col-span-12 text-center py-4 relative z-10`,
  Header:`h-[30px] leading-[35px] text-lg w-[50%] font-sans font-semibold mx-auto`,
  HeaderIcon:`text-md relative left-2 text-slate-300`,
  ContentHolder:`h-[765px] relative top-2 grid grid-flow-row auto-rows-max grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 text-slate-300 gap-y-3 overflow-y-scroll`,
}
const newsStyle = {
  Content:`grid grid-row-3 grid-cols-1 text-sm bg-gray-800 w-[95%] rounded-lg shadow-[0_0_2px_1px_#000000] relative top-1 mx-auto text-left`, 
  SpanTitle:`inline-block w-full relative top-1 text-xs font-sans text-slate-400 font-semibold border-b pl-2 border-slate-600 h-[30px] leading-[20px]`,
  bubble:"w-[10px] h-[10px] absolute rounded-full right-2 top-[7px] shadow-[0_0_1px_1px] shadow-gray-900",
  IconDanger:`mr-1 relative text-[16px] bg-clip-text text-amber-400`,
  SpanBtnHolder:`inline-block w-full relative top-2 text-xs font-sans text-slate-400 font-semibold h-[90px] pl-2 pt-1`,
  BtnViewMore:`absolute bottom-1 right-2 w-[90%] h-[25px] bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 text-xs font-sans text-slate-400 font-semibold rounded-md shadow-[0_0_1px_1px] shadow-black/60`,
  SpanSource:`inline-block w-full relative top-1 text-xs font-sans text-slate-400 font-semibold h-[90px] pl-2 pt-1 relative`,
  Btn:`absolute bottom-1 right-[6px] w-[90%] h-[25px] bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 text-xs font-sans text-slate-400 font-semibold rounded-md shadow-[0_0_1px_1px] shadow-black/60`,
  TimeDateHolder:"w-full h-[30px] relative",
  SpanTD:`inline-block w-[66px] bottom-1 absolute text-[10px] font-sans text-slate-400 font-semibold`,
  SpanDate:`right-0 text-right pr-2`,
  SpanTime:`left-0 pl-2`,
}
const typeToBubbleColor = {
  "Financial news": "bg-gradient-to-b from-emerald-500 via-emerald-600 to-emerald-700",
  "Environment news": "bg-gradient-to-b from-lime-500 via-lime-600 to-lime-700",
  "Natural news": "bg-gradient-to-b from-rose-500 via-rose-600 to-rose-700",
  "Political news": "bg-gradient-to-b from-sky-500 via-sky-600 to-sky-700",
  "Technology news": "bg-gradient-to-b from-gray-500 via-gray-600 to-gray-700",
  "Health news": "bg-gradient-to-b from-green-500 via-green-600 to-green-700",
  "Sports news": "bg-gradient-to-b from-cyan-500 via-cyan-600 to-cyan-700",
  "International news": "bg-gradient-to-b from-stone-500 via-stone-600 to-stone-700",
  "National news": "bg-gradient-to-b from-amber-500 via-amber-600 to-amber-700",
  "Local news": "bg-gradient-to-b from-teal-500 via-teal-600 to-teal-700",
  "Entertainment news":"bg-gradient-to-b from-purple-500 via-purple-600 to-purple-700",
};
const viewMoreWindow = {
  Container:`bg-gray-800 w-[420px] h-[500px] rounded-lg shadow-[0_0_2px_1px_#000000] absolute top-10 left-4 mx-auto text-left z-30`,
  h2:`h-[30px] leading-[30px] text-slate-300 text-center relative top-1`,
  IconClose:`text-slate-400 hover:text-rose-600 hover:ease-in ease-out duration-300 absolute right-3 top-2 cursor-pointer`,
  ContentHolder:`w-[95%] mx-auto my-1 h-[380px] shadow-[0_0_2px_1px_inset] shadow-slate-700/40 bg-slate-800/40 rounded-lg text-slate-300 text-sm relative`,
  Img:`text-center w-[100%] h-[100%]`,
  Content:`w-[100%] h-[200px] shadow-[0_0_2px_1px_inset] shadow-slate-700/80 bg-slate-800/80 rounded-lg px-3 py-2 text-slate-300 text-sm absolute bottom-0 overflow-hidden`,
  Button:`w-[50%] mx-auto my-1 h-[30px] leading-[30px] shadow-[0_0_2px_1px_inset,0_0_2px_1px] shadow-slate-900/80 bg-slate-900/40 rounded-lg text-slate-400 text-sm text-center relativecursor-pointer border-[1px] border-slate-900 hover:bg-slate-800 ease-in duration-300 cursor-pointer`,
  SpanHolder:`w-[95%] mx-auto my-2 h-[30px] shadow-[0_0_2px_1px_inset] shadow-slate-700/40 bg-slate-800/40 rounded-lg text-slate-400 text-sm relative`,
  Span:`inline-block w-[66px] bottom-1 absolute text-[10px] font-sans text-slate-400 font-semibold`,
  SpanDate:`right-0 text-right pr-2`,
  SpanTime:`left-0 pl-2`,
}
// eslint-disable-next-line react/prop-types
const NewsCard = ({item,setSelectedNewsId}) =>{
  const bubbleClass = typeToBubbleColor[item.type];
  return (
    <div key={item.id} className={newsStyle.Content}>
      <span className={newsStyle.SpanTitle}>
        {item.type === "Natural news" && ( <FontAwesomeIcon icon="fa fa-triangle-exclamation" className={newsStyle.IconDanger}/> )}
        {item.type} 
        {bubbleClass && <span className={`${newsStyle.bubble} ${bubbleClass}`}>
      </span>}
      </span>
      <span className={newsStyle.SpanBtnHolder}> {item.title} 
        <button className={newsStyle.BtnViewMore} onClick={() => { setSelectedNewsId(item.id); }}> View more </button> 
      </span>
      <div className={newsStyle.TimeDateHolder}>
        <span className={`${newsStyle.SpanTD} ${newsStyle.SpanDate}`}>{item.d}</span>
        <span className={`${newsStyle.SpanTD} ${newsStyle.SpanTime}`}>{item.t}</span>
      </div>
    </div>
  );
}
const News = () => {
  const [selectedNewsId,setSelectedNewsId] = useState(null);
  const [newsState] = useState([
    {id:1,d:"2023.08.23",t:"18:30",img:"",type:"Financial news",title:"Dollars Price",web:"Source"},
    {id:2,d:"2023.08.24",t:"19:29",img:"",type:"Environment news",title:"New species found",web:"Source"},
    {id:3,d:"2023.08.25",t:"20:28",img:"",type:"Natural news",title:"Earthquake arrival",web:"Source"},
    {id:4,d:"2023.08.26",t:"21:27",img:"",type:"Political news",title:"President Election",web:"Source"},
    {id:5,d:"2023.08.27",t:"22:26",img:"",type:"Technology news",title:"AI upgrade",web:"Source"},
    {id:6,d:"2023.08.27",t:"22:26",img:"",type:"Health news",title:"New medicament testing",web:"Source"},
    {id:7,d:"2023.08.27",t:"22:26",img:"",type:"Sports news",title:"Club might be sold",web:"Source"},
    {id:8,d:"2023.08.27",t:"22:26",img:"",type:"International news",title:"Russia increased gas price",web:"Source"},
    {id:9,d:"2023.08.27",t:"22:26",img:"",type:"National news",title:"Products ban icomming",web:"Source"},
    {id:10,d:"2023.08.27",t:"22:26",img:"",type:"Local news",title:"Prepare for helloween!",web:"Source"},
    {id:11,d:"2023.08.27",t:"22:26",img:"",type:"Entertainment news",title:"Singers Tour",web:"Source"},
    {id:12,d:"2023.08.27",t:"22:26",img:"",type:"Entertainment news",title:"Singers Tour",web:"Source"},
    {id:13,d:"2023.08.27",t:"22:26",img:"",type:"Entertainment news",title:"Singers Tour",web:"Source"},
    {id:14,d:"2023.08.27",t:"22:26",img:"",type:"Entertainment news",title:"Singers Tour",web:"Source"},
    {id:15,d:"2023.08.27",t:"22:26",img:"",type:"Entertainment news",title:"Singers Tour",web:"Source"},
    {id:16,d:"2023.08.27",t:"22:26",img:"",type:"Entertainment news",title:"Singers Tour",web:"Source"},
    {id:17,d:"2023.08.27",t:"22:26",img:"",type:"Entertainment news",title:"Singers Tour",web:"Source"},
  ])
  return (<>
    <div className={homeMainWindow.Container}>
    <div className={homeMainWindow.Holder}>
      <h2 className={homeMainWindow.Header}> World events<FontAwesomeIcon icon='caret-down' className={homeMainWindow.HeaderIcon}/> </h2>
      <div className={`${homeMainWindow.ContentHolder}`}> 
        {newsState.map((item) => ( <NewsCard key={item.id} item={item} setSelectedNewsId={setSelectedNewsId} /> ))} 
      </div>
    </div>

    {selectedNewsId && (
      <div className={viewMoreWindow.Container}>
        <h2 className={viewMoreWindow.h2}>
          <FontAwesomeIcon icon="close" className={viewMoreWindow.IconClose} onClick={()=>{selectedNewsId ? setSelectedNewsId(null):'' }}/> 
          {newsState.find(news => news.id === selectedNewsId).type}
        </h2>
        
        <div className={viewMoreWindow.ContentHolder}>
          <img src={newsState.find(news => news.id === selectedNewsId).img} alt="No Image Found" className={viewMoreWindow.Img}/>
          <div className={viewMoreWindow.Content}> {newsState.find(news => news.id === selectedNewsId).title} </div>
        </div>

        <div className={viewMoreWindow.Button}>Open Source</div>
        <div className={viewMoreWindow.SpanHolder}>
          <span className={`${viewMoreWindow.Span} ${viewMoreWindow.SpanDate}`}> {newsState.find(news => news.id === selectedNewsId).d}</span>
          <span className={`${viewMoreWindow.Span} ${viewMoreWindow.SpanTime}`}> {newsState.find(news => news.id === selectedNewsId).t}</span>
        </div>
      </div>
  )}
  </div>
</>)
}

export default News