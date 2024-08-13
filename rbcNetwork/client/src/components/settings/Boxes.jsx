import React from 'react'

export const Container = ({ children, cStyle }) => {
  return (<div className={cStyle}> Container {children} </div>)
}
export const Title = ({ cStyle, title }) => {
  return (<h3 className={cStyle}> {title} </h3>)
}
export const Content = ({ children, cStyle }) => {
  return (<div className={cStyle}> Content {children} </div>)
}

export const ContentTop = ({ children, cStyle }) => {
  return (<div className={cStyle}> Content Top {children} </div>)
}
export const ContentTopCard = ({ children, cStyle }) => {
  return (<div className={cStyle}> Content Top Card {children} </div>)
}
export const ContentInputHolder = ({ children, cStyle }) => {
  return (<div className={cStyle}> ContentInputHolder {children} </div>)
}
export const Input = ({ cStyle, inputStyle, type, placeholder, name, value, handler, maxLength, spanStyle, spanText }) => {
  return (
    <div className={cStyle}>
      <input
        className={inputStyle}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={handler}
        maxLength={maxLength}
      />
      <span className={spanStyle}>{spanText}</span>
    </div>
  )
}
export const TextArea = ({ cStyle }) => {
  return (
    <div className={cStyle}>
      <textarea />
      <span></span>
    </div>
  )
}
export const Button = ({ cStyle, text }) => {
  return (
    <div className={cStyle}>
      <button>{text}</button>
    </div>
  )
}

export const ContentBottom = ({ children, cStyle }) => {
  return (<div className={cStyle}> Content Bottom {children} </div>)
}
export const ContentBottomCard = ({ children, cStyle }) => {
  return (<div className={cStyle}> Content Bottom Card {children} </div>)
}
export const ContentOutputHolder = ({ children, cStyle }) => {
  return (<div className={cStyle}> ContentInputHolder {children} </div>)
}
export const ContentOutputTitle = ({ cStyle, text }) => {
  return (<h4 className={cStyle}>{text}</h4>)
}

export const ContentOutputWrapper = ({ children, cStyle }) => {
  return (<div className={cStyle}> Wrapper {children} </div>)
}
export const ContentOutputCard = ({ children, cStyle }) => {
  return (<div className={cStyle}> Card {children}</div>)
}
export const ContentOutputCardMenuHolder = ({ children, cStyle }) => {
  return (<div className={cStyle}> {children} </div>)
}
export const ContentOutputCardMenuitem = ({ cStyle, text }) => {
  return (<label className={cStyle}> {text}</label>
  )
}
export const ContentOutputCardValuesHolder = ({ children, cStyle }) => {
  return (
    <div className={cStyle}>
      Content Output Card Values Holder
      {children}
    </div>
  )
}
export const ContentOutputCardValues = ({ cStyle, text }) => {
  return (<div className={cStyle}> {text} </div>)
}

