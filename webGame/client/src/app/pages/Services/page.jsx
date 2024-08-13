import { FontAwesomeIcon } from '../../Icons';
import PropTypes from 'prop-types';
const ServicesCard = ({bg,servicesIcon,servicesName,servicesDesc})=>(
  <div className={`${bg} ${style.Container}`}>
    <h2 className={style.ContainerHeader}> 
      <FontAwesomeIcon icon={servicesIcon} className={style.Icon1}/>{servicesName}<FontAwesomeIcon icon='circle' className={style.Icon2}/>
    </h2>
    <p className={style.Paragraph}>
      <FontAwesomeIcon icon={servicesIcon} className={style.Icon3}/><FontAwesomeIcon icon={servicesIcon} className={style.Icon4}/>{servicesDesc}
    </p>
  </div>
)
const style = {
  Container:`mx-auto rounded-lg w-[95%] h-[120px]`,
  ContainerHeader:`h-[30px] leading-[30px] bg-slate-600/70 rounded-tl-lg rounded-tr-lg text-center relative`,
  Icon1:`text-md absolute left-[6px] top-[6px] w-[19px] h-[19px] text-slate-400`,
  Icon2:`text-md absolute right-[6px] top-[8px] w-[15px] h-[15px] text-slate-900`,
  Paragraph:`h-[88px] bg-slate-600/80 px-[6px] relative top-[1px] py-1 text-sm rounded-bl-lg rounded-br-lg`,
  Icon3:`text-md absolute w-[60px] h-[60px] left-1 bottom-0 text-slate-800/10`,
  Icon4:`text-md absolute w-[60px] h-[60px] left-1 bottom-0 text-slate-800/10`,
  main:{
    Container:`bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-slate-300 col-span-12 py-[18px] relative`,
    Holder:`w-[95%] bg-slate-800 sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[75%] h-[790px] mx-auto relative top-2 rounded-lg`,
    Header:`h-[30px] leading-[60px] text-lg w-[50%] font-sans font-semibold mx-auto text-center`,
    ContentHolder:`w-[95%] mx-auto h-[90%] bg-slate-900 relative top-6 rounded-lg`,
    Paragraph:`w-[98%] h-[30px] leading-[30px] bg-slate-800 relative text-center top-[5px] mx-auto rounded-tl-md rounded-tr-md`,
    Icon:`text-md absolute right-[8px] top-[6px] text-white`,
    CardHolder:`w-full h-[630px] grid grid-cols-2 md:grid-cols-3 gap-2 mt-7 overflow-y-scroll`,
  }
}
const Services = () => {
  return (
  <>
  <div className={style.main.Container}>
    <div className={style.main.Holder}>
      <h2 className={style.main.Header}>Serivces</h2>
      <div className={style.main.ContentHolder}>
        <p className={style.main.Paragraph}> What we offer ? 
        <FontAwesomeIcon icon='caret-down' className={style.main.Icon}/> 
        </p>
        <div className={style.main.CardHolder}>
          <ServicesCard bg="" servicesIcon="user" servicesName="#1 Services Name" servicesDesc="Services Desc" />
          <ServicesCard bg="" servicesIcon="pencil" servicesName="#2 Services Name" servicesDesc="update Desc" />
          <ServicesCard bg="" servicesIcon="pencil" servicesName="#3 Services Name" servicesDesc="update Desc" />
          <ServicesCard bg="" servicesIcon="headset" servicesName="#4 Services Name" servicesDesc="update Desc" />
          <ServicesCard bg="" servicesIcon="bug-slash" servicesName="#5 Services Name" servicesDesc="update Desc" />
          <ServicesCard bg="" servicesIcon="sitemap" servicesName="#6 Services Name" servicesDesc="update Desc" />
          <ServicesCard bg="" servicesIcon="face-grin-beam" servicesName="#7 Services Name" servicesDesc="update Desc" />
          <ServicesCard bg="" servicesIcon="mug-hot" servicesName="#8 Services Name" servicesDesc="update Desc" />
          <ServicesCard bg="" servicesIcon="calendar" servicesName="#9 Services Name" servicesDesc="update Desc" />
          <ServicesCard bg="" servicesIcon="pencil" servicesName="#10 Services Name" servicesDesc="update Desc" />
          <ServicesCard bg="" servicesIcon="user" servicesName="#1 Services Name" servicesDesc="Services Desc" />
          <ServicesCard bg="" servicesIcon="pencil" servicesName="#2 Services Name" servicesDesc="update Desc" />
          <ServicesCard bg="" servicesIcon="pencil" servicesName="#3 Services Name" servicesDesc="update Desc" />
          <ServicesCard bg="" servicesIcon="headset" servicesName="#4 Services Name" servicesDesc="update Desc" />
          <ServicesCard bg="" servicesIcon="bug-slash" servicesName="#5 Services Name" servicesDesc="update Desc" />
          <ServicesCard bg="" servicesIcon="sitemap" servicesName="#6 Services Name" servicesDesc="update Desc" />
          <ServicesCard bg="" servicesIcon="face-grin-beam" servicesName="#7 Services Name" servicesDesc="update Desc" />
          <ServicesCard bg="" servicesIcon="mug-hot" servicesName="#8 Services Name" servicesDesc="update Desc" />
          <ServicesCard bg="" servicesIcon="calendar" servicesName="#9 Services Name" servicesDesc="update Desc" />
          <ServicesCard bg="" servicesIcon="pencil" servicesName="#10 Services Name" servicesDesc="update Desc" />
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
ServicesCard.propTypes = {bg:PropTypes.string,servicesIcon:PropTypes.string,servicesName:PropTypes.string,servicesDesc:PropTypes.string,}
export default Services