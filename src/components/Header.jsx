import React from 'react'

function Header() {

    const data = [{name:'Home',url:'/'},{name:'About',url:'/'},{name:'Experiences',url:'/'},{name:'Services',url:'/'},{name:'Contact',url:'/'}]

    
  return (
    <header>

        <div className="logo">
            <img src="https://png.pngtree.com/png-vector/20220706/ourmid/pngtree-food-logo-png-image_5687717.png" alt="" />
        <h1>HeavenlyWok</h1>
        </div>
        <ul>
           {
            data.map((elem) => (
                <li key={elem.name}>
                    <a href={elem.url}>{elem.name}</a>
                </li>
            ))
           }
            <button>Book A Table</button>
           
        </ul>
        <i id='navphone' className="ri-menu-line"></i>
    </header>
  )
}

export default Header
