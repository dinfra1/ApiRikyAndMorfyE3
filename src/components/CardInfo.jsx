import React from 'react'
import './styles/cardInfo.css'
const CardInfo = ({info}) => {

  return (
    <div className='cardinfo--general'>
        <h2 className='name--info--general'>{info?.name}</h2>
        <ul className='info--ul--general'>
            <li className='info--dropdown'><span className='span--info--drpdown'>Type : </span>{info?.type}</li>
            <li className='info--dropdown'><span className='span--info--drpdown'>Dimension: </span>{info?.dimension}</li>
            <li className='info--dropdown'><span className='span--info--drpdown'>Population: </span>{info?.residents.length}</li>
        </ul>
    </div>
  )
}

export default CardInfo