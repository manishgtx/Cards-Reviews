import React from 'react'
import tab from '../styles/tab.module.css'
const Tab = ({title,groupType,setCateogry,id,theme,active,setActive,index,check,setCheck}) => {
  const containerClasses = `${tab.container} ${theme === '0' ? tab.headerCommunication : ''} ${theme === "1" ? tab.headerVisualArts : ''} ${theme === "2" ? tab.headerMusic : ''} ${active === "Communication" && check === index ? tab.communicationActive: ''} ${active === "Visual Arts" && check === index ? tab.visualActive: ''} ${active === "Music" && check === index ? tab.musicActive: ''}` ;

  function setter () {
    setCateogry(id)
    setCheck(index)
  }
  return (
    <div className={containerClasses} onClick={setter}>
        <h4>{title}</h4>
        <p>{groupType}</p>
        <div className={tab.clip}></div>
    </div>
  )
}

export default Tab