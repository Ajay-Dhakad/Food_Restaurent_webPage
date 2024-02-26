import React from 'react'
import {motion} from 'framer-motion'

function experiencecomp() {
    const data = [{name:'18',desc:'YEARS OF EXPERIENCED'},{name:'100',desc:'MENUS/DISH'},{name:'50',desc:'STAFFS'},{name:'15000',desc:'HAPPY CUSTOMERS'}]
  return (
   <>
     {
        data.map((item,index)=>{
            return(
                <motion.div initial={{opacity:0,translateX:'100px'}} whileInView={{opacity:1,translateX:0}} transition={{delay:index*.5,duration:1}} viewport={{once:true}} key={index} className="part">
                <h1>{item.name}</h1>
                <h3>{item.desc}</h3>
            </motion.div> 
            )
        })
     }
    </>
  )
}

export default experiencecomp
