import React from 'react'
import Card from './Card'
import cardscontainer from '../styles/cardscontainer.module.css'
const Cardscontainer = ({filtered,category}) => {
  return (
    <div className={cardscontainer.container}>
        {
            filtered[category]?.map((course,i)=> {
                return <Card key={i} {...course}/>
            })
        }
    </div>
  )
}

export default Cardscontainer