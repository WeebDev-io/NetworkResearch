/* eslint-disable react/prop-types */
import Link  from 'next/link';
import { FontAwesomeIcon } from '../Icons';
import { useSelector } from 'react-redux';
import { typeToBubbleColor } from '../localConstants/newsBubbleColor';

{/*News Card */}
const NewsCard = ({item,setSelectedNewsId}) =>{
  const bubbleClass = typeToBubbleColor[item.type];

  const themes = useSelector(state => {return state.rootReducer.themes.themes});
  const currentTheme = useSelector(state =>{ return state.rootReducer.themes.currentTheme});
  return (
    <div key={item.id} className={`grid grid-row-3 grid-cols-1 text-sm ${themes[currentTheme].bg} w-[95%] rounded-lg shadow-[0_0_2px_1px_#000000] relative mx-auto text-left`}>
      <span className={`inline-block w-full relative top-1 text-xs font-sans ${themes[currentTheme].text} font-semibold border-b pl-2 border-slate-600 h-[30px] leading-[20px]`}>
        {item.type === "Natural news" && ( 
          <FontAwesomeIcon icon="fa fa-triangle-exclamation" className={`mr-1 relative text-[16px] bg-clip-text text-amber-400`}/> 
        )}
        {item.type} 
        {bubbleClass && <span className={`w-[10px] h-[10px] absolute rounded-full right-2 top-[7px] shadow-[0_0_1px_1px] shadow-gray-900 ${bubbleClass}`}>
      </span>}
      </span>
      <span className={`inline-block w-full relative top-2 text-xs font-sans ${themes[currentTheme].text} font-semibold h-[90px] pl-2 pt-1`}> {item.title} 
        <button className={`absolute bottom-1 right-2 w-[90%] h-[25px] ${themes[currentTheme].inputBG} text-xs font-sans ${themes[currentTheme].text} font-semibold rounded-md shadow-[0_0_1px_1px] shadow-black/60`} onClick={() => { setSelectedNewsId(item.id); }}> View more </button> 
      </span>
      <div className={`w-full h-[30px] relative`}>
        <span className={`inline-block w-[66px] bottom-1 absolute text-[10px] font-sans ${themes[currentTheme].text} font-semibold right-0 text-right pr-2`}>{item.d}</span>
        <span className={`inline-block w-[66px] bottom-1 absolute text-[10px] font-sans ${themes[currentTheme].text} font-semibold left-0 pl-2`}>{item.t}</span>
      </div>
    </div>
  );
}
export default NewsCard;