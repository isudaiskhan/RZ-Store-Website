import React from 'react'
import mapimage from '../assets/map.png'

const Map = () => {
  return (
    <>

            
     <div className={'bg-no-repeat bg-cover bg-center h-72 sm:h-64 md:h-72 lg:h-96 '} 
        style={{ backgroundImage: `url(${mapimage})`}} >
      
      </div>
    </>
  )
}

export default Map
