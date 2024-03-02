import React from 'react'
// import about from '../assets/'
import Experiencecomp from './Experiencecomp.jsx'
import Caterings from './Caterings.jsx'
import {motion } from 'framer-motion'
import Footer from './Footer.jsx'
function Homepage() {
  return (
  <main className='homepage'>
    <div className="homepagecover">
    <h1 initial={{opacity:0}} whileInView={{opacity:.9}} transition={{delay:.2}}>Elevating Tastes, Creating Memories<br /><span><motion.h1  initial={{opacity:0,translateX:50}} whileInView={{opacity:1,scale:1,translateX:0}} transition={{delay:.1,duration:.5}} viewport={{once:true}}>HeavenlyWok</motion.h1></span></h1>
    <motion.button viewport={{once:true}}  initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.3,duration:.5}} className='homebtn'>Book A Table Now !</motion.button>
        
    </div>
    <div className="introsection">
        <div className="imgs">
            <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:.2}} src="https://preview.colorlib.com/theme/feliciano/images/about.jpg.webp" alt="" />
            <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:.5}} src="https://preview.colorlib.com/theme/feliciano/images/about-1.jpg.webp" alt="" />

        </div>
        <motion.div viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:.9}} transition={{delay:.7}} className="text">

            <h1>HeavenlyWok</h1>
            <p>At HeavenlyWok, we elevate dining into an art, seamlessly blending exceptional cuisine with a warm ambiance. Located in the heart of Mandsaur, our mission is simple: turning every meal into a celebration.</p>
            <p className='openingtime'>Mon - <b> Fri 8 AM - 11 PM</b></p>
            <h1 className='contactNumber'>+91 xxxxxxxxxx</h1>
        </motion.div>
    </div>

    <div className="experience">

         <Experiencecomp/>
       
           </div>

    <div className="cateringservices">
        <h1>Catering Services</h1>  
        <div className="service">
            {/* <img src="" alt="" /> */}
            <Caterings/>
            
        </div>
    </div>
    

   


          


  </main>
  )
}

export default Homepage
