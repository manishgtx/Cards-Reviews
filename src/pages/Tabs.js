import {useState} from 'react'
import Card from '../components/Card'
import Tab from '../components/Tab'
import tabs from '../styles/tabs.module.css'
import {tabData} from '../meta/tabData'
const Tabs = ({setCateogry,theme,active,setActive}) => {
  const [check,setCheck] = useState(0)
  return (
    <div className={tabs.container}>
        {
          tabData.map((singleTab,i) => {
            return <Tab key={singleTab.id} {...singleTab} setCateogry={setCateogry} theme={theme} active={active} check={check} setCheck={setCheck} setActive={setActive} index={i}/>
          })
        }
    </div>
  )
}

export default Tabs