// import React from 'react'


// import Cards from "./Cards"
// import Carousel from "./Carousel"
import AgencyShowcase from "./AgencyShowcase"
import Grow from "./Grow"
import Hero from "./Hero"
import Target from "./Target"
import WhatWeDo from "./WhatWeDo"
// import WorkDone from "./WorkDone"
import Testimonies from "./Testimonies"

const HomeComp = () => {
  return (
    <div>
        <Hero />
        <AgencyShowcase />
        <WhatWeDo />
        <Target />
        <Grow />
        {/* <Cards /> */}
        {/* <WorkDone/> */}
        
        <Testimonies />
        {/* <Carousel /> */}
      
    </div>
  )
}

export default HomeComp
