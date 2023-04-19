import React from 'react'
import ResidentCard from './ResidentCard'
import CardInfo from './CardInfo'
import './styles/maincard.css'

const MainContein = ({info}) => {


  return (
    <>
    <CardInfo info={info}/>
      <div className='resident'>
    {
          info?.residents.map(url => (
            <ResidentCard 
            key={url}
            url={url}
            />
          ))
        }
      </div>
    </>
  )
}

export default MainContein