import React from 'react'
import stars from '../styles/stars.module.css'
import {BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs'
const Stars = ({rating}) => {
    const Totalstars = rating.slice(4,5)
    const star = rating.slice(0,3)
    const reviews = rating.slice(6)
  return (
    <div className={stars.wrapper}>
        <div>
            <span>{star >=1 ? <BsStarFill/> : star >= 0.5 ? <BsStarHalf/> : <BsStar/>}</span>
            <span>{star >=2 ? <BsStarFill/> : star >= 1.5 ? <BsStarHalf/> : <BsStar/>}</span>
            <span>{star >=3 ? <BsStarFill/> : star >= 2.5 ? <BsStarHalf/> : <BsStar/>}</span>
            <span>{star >=4 ? <BsStarFill/> : star >= 3.5 ? <BsStarHalf/> : <BsStar/>}</span>
            <span>{star >=5 ? <BsStarFill/> : star >= 4.5 ? <BsStarHalf/> : <BsStar/>}</span>
        </div>
        <p>({reviews} reviews)</p>
    </div>
  )
}

export default Stars