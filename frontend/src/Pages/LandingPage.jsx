import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Hero1 from '../Components/Hero/Hero1'
import Hero3 from '../Components/Hero/Hero3'
import Hero4 from '../Components/Hero/Hero4'
import Footer from '../Components/Footer/Footer'
import Hero2 from '../Components/Hero/Hero2'


function LandingPage() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Hero1/>
            <Hero2/>
            <Hero3/>         
            <Hero4/> 
            <Footer/>
            
        </div>
    )
}

export default LandingPage