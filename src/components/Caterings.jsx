import React from 'react'
import {motion} from 'framer-motion'
function Caterings() {

    const data = [{icon:'fa-solid fa-cake-candles',text:'Elevate your celebrations with us! Impeccable service, warm ambiance, and delicious cuisine make your special occasions unforgettable.'},{icon:'fa-regular fa-handshake',text:'Host your business success here! Our venue blends professionalism with a welcoming ambiance, ensuring a productive and memorable meeting experience.'},
{icon:'fa-solid fa-gift',text:'Craft your perfect day with us! Our venue offers a magical setting, impeccable service, and gourmet cuisine, turning weddings into timeless, enchanting moments.'}]

  return (
    <>
   { data.map((item,index) => {   

 return <motion.div  viewport={{once:true}} initial={{opacity:0,translateX:'100px'}} whileInView={{opacity:1,translateX:0}} transition={{delay:index*.5,duration:1}} key={index} className="servicetext">
    <i className={item.icon}></i>
    <p>{item.text}</p>
</motion.div>
   }) }
</>
  )
}

export default Caterings;
