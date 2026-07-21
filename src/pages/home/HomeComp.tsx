// import React from 'react'


import Cards from "./Cards"
// import Carousel from "./Carousel"
import Hero from "./Hero"
import WorkDone from "./WorkDone"
import Testimonies from "./Testimonies"

const HomeComp = () => {
  return (
    <div>
        <Hero />
        <Cards />
        <WorkDone/>
        
        <Testimonies />
        {/* <Carousel /> */}
      
    </div>
  )
}

export default HomeComp
