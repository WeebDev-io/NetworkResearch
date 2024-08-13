/* eslint-disable react/prop-types */
const InputCard = ({type,name,placeholder,containerStyle,labelStyle,labelName,Inputstyle}) => {
  return (
    <div className={containerStyle}>
      <label className={labelStyle}>{labelName}</label>
      <input type={type} name={name} placeholder={placeholder} className={Inputstyle} required/>
    </div>
  )
}
export default InputCard;