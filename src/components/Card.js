import React from 'react'
import card from '../styles/card.module.css'
import Stars from './Stars';
const Card = ({name,games_count,curriculum_outcomes,category_name,pitch,num_classes,original_price,discounted_price,certificate_count,rating}) => {
    const containerClasses = `${card.header} ${category_name === 'Communication' ? card.headerCommunication : ''} ${category_name === "Visual Arts" ? card.headerVisualArts : ''} ${category_name === "Music" ? card.headerMusic : ''}`;
    return (
    <div className={card.container}>
        {/* Header */}
        <div className={`${containerClasses}`}>
            <div className={card.offer}>
                <h4>20%<br/>off</h4>
            </div>
            <div className={card.ribbon}>
                <h5>{num_classes} Sessions</h5>
                <div className={card.triangle}></div>
            </div>
            <h2>{name}</h2>
            <Stars rating={rating}/>
        </div>
        {/* Info */}
        <div className={card.info}>
            <p>{pitch}</p>
            <h4>Students will achieve:</h4>
            <ul>
                {curriculum_outcomes.slice(0,3).map((outCome,i)=> {
                    return <li key={i}>{outCome}</li>
                })}
                <li>+ ....</li>
            </ul>
            <p className={card.lessons}>View Detailed Lesson Plan</p>
            <hr />
            <div className={card.priceWrapper}>
                <h2>₹ {discounted_price}</h2>
                <h4>₹{parseInt(discounted_price/num_classes)} <span>per class</span></h4>
            </div>
            <p className={card.price}>₹{original_price}</p>
            <p className={card.note}>we'll schedule the slots as per your convenience</p>
        </div>
        <div className={card.activitiesContainer}>
            <div>
                <img src={process.env.PUBLIC_URL + '/images/Vector.png'} alt="" />
                <p>8 Activities</p>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + '/images/Vector-1.png'} alt="" />
                <p>{games_count} Games</p>
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + '/images/Vector-2.png'} alt="" />
                <p>{certificate_count} Certificate</p>
            </div>
        </div>
        <div className={card.btnContainer}>
            <button className={card.buyBtn}>Buy Course</button>
        </div>
    </div>
  )
}

export default Card