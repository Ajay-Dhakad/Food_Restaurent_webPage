import React from 'react'

function Footer() {
  return (
    <footer>

      
          <p>"Join us in elegance. Share your email for a touch of curated sophistication, exclusively delivered to you."</p>
       
       <div className="newletter">
        <input placeholder='Newsletter' type="text" />
        <button>Subscribe</button>
       </div>
       <div className="copyrights">
        {/* <br /> */}
        <h3>© Copyright HeavenlyWok 2024</h3>
       </div>

       



    </footer>
  )
}

export default Footer
