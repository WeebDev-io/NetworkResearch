const gradient = 'bg-gradient-to-r';
export const style = {
  Container:`${gradient} from-gray-900 via-gray-700 to-gray-900 text-slate-300 col-span-12 py-[18px] relative`,
  Content:`w-[95%] sm:w-[85%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[75%] h-[790px] mx-auto relative top-2 rounded-lg`,
  Header:`h-[30px] leading-[60px] text-lg w-[50%] font-sans font-semibold mx-auto text-center`,
  ContentContainer:`flex flex-row relative top-7 h-[90%] bg-slate-950/90`,
  SettingsNav:{
    Container:`w-[15%] sm:w-[10%] lg:w-[20%] xl:w-[18%] 2xl:w-[15%]`,
    ListHolder:`${gradient} from-slate-900 to-slate-800 h-full py-2`,
    List:`w-[40px] lg:w-[95%] h-[40px] leading-[40px] bg-gradient-to-t from-slate-900 via-slate-700 to-slate-500 mx-auto rounded-full shadow-[0_0_2px_1px] shadow-slate-900 border-[1px] border-slate-950 odd:mb-2 even:mb-2 cursor-pointer relative`,
    Icon1:`text-lg relative left-[10px] top-0 hover:text-slate-200 duration-300 ease-out hover:ease-in`,
    Icon2:`text-sm text-slate-400/30 top-3 absolute right-2 hidden lg:block rotate-[90deg]`,
    Span:`hidden lg:inline-block text-[13px] absolute left-[35px] -top-[2px] text-slate-300/80`
  },
  SettingsWindow:{
    Container:`bg-gradient-to-l from-slate-900 to-slate-800 w-[85%] sm:w-[90%] lg:w-[80%] xl:w-[82%] 2xl:w-[85%]`,
    Header:`h-[40px] leading-[40px] text-center`,
    ContentWindow:`w-[95%] h-[660px] mx-auto ${gradient} from-slate-800 via-slate-600 to-slate-800 rounded-lg shadow-[0_0_2px_1px_inset] shadow-slate-900`,
    Content:`bg-slate-950/60 w-[95%] mx-auto h-[644px] relative top-[8px] rounded-lg shadow-[0_0_3px_1px] shadow-black/70`,
    ChooseThemeContent:`bg-slate-800/50 w-[95%] mx-auto h-[644px] relative top-[8px] rounded-lg shadow-[0_0_3px_1px] shadow-black/70 lg:grid lg:grid-cols-2 2xl:grid-cols-3 lg:grid-flow-row lg:auto-rows-max lg:gap-2 overflow-x-hidden overlow-y-scroll`,
    ChooseLangContent:`bg-slate-800/50 w-[95%] mx-auto h-[644px] relative top-[8px] rounded-lg shadow-[0_0_3px_1px] shadow-black/70 grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-flow-row auto-rows-max gap-2 overflow-x-hidden overlow-y-scroll`,
    InputHolder:`md:w-[50%] mx-auto relative top-5 flex flex-col`,
    InputInfo:`text-slate-500 mx-auto w-[250px] inline-block h-[30px] leading-[30px] relative text-sm`,
    Input:`w-[250px] mx-auto outline-none px-2 text-slate-500 bg-slate-800 h-[30px] rounded-lg leading-[30] text-sm shadow-[0_0_2px_1px] shadow-slate-900`,
    Btn:`w-[250px] h-[30px] relative top-10 mx-auto leading-[30px] bg-sky-800/50 rounded-md shadow-[0_0_3px_1px] shadow-black/50 text-slate-400 text-sm hover:bg-slate-800 duration-300 ease-in hover:ease-out text-center cursor-pointer`,
  },
}
export const themeBox = {
  Container:`w-[300px] lg:w-[280px] h-[60px] mx-auto relative top-1 mb-2 px-2 rounded-lg select-none shadow-[0_0_2px_1px_#00000070] font-sans font-semibold`,
  ThemeName:`block w-[140px] h-[30px] leading-[30px] pl-2 relative top-[15px] text-xs rounded-lg shadow-[0_0_1px_1px] shadow-black/40 bg-gradient-to-r`,
  IconColor:`absolute right-2 top-[9px] duration-200`,
  ThemeButtonContainer:`w-[50px] h-[30px] absolute rounded-xl right-3 top-[15px] cursor-pointer shadow-[0_0_1px_1px] shadow-black/40 bg-gradient-to-r`,
  ThemeButton:`block absolute w-[20px] h-[20px] top-[5px] left-1 rounded-[9px] shadow-[0_1px_2px_1px] shadow-black/40 bg-gradient-to-t duration-200`,
}
export const lang = {
  Container:`w-[180px] h-[45px] mx-auto relative top-2 left-2 mb-2 px-2 rounded-lg select-none shadow-[0_0_2px_1px_#00000070] font-sans font-semibold bg-gradient-to-r from-gray-300 to-white/60`,
  ImgHolder:`absolute top-[8.5px] left-2 bg-white/60 w-[28px] h-[28px] rounded-full shadow-[0_0_3px_1px_inset] shadow-black/60`,
  Img:`mx-auto relative top-[2px]`,
  langName:`absolute left-12 top-[12px] duration-200 from-gray-400/70 to-gray-400/30 text-slate-900 text-sm`,
  LangButtonContainer:`w-[50px] h-[30px] absolute rounded-xl right-1 top-[7.5px] cursor-pointer bg-gradient-to-r from-zinc-500 to-zinc-300`,
  LangButton:`block absolute w-[20px] h-[20px] top-[5px] left-1 rounded-[9px] shadow-[0_1px_2px_1px] shadow-black/40 bg-gradient-to-t duration-200 from-gray-400 to-gray-100`,
}