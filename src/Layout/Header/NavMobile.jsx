import React, { useState } from 'react'

// react icons
import { HiMenuAlt3, HiOutlineX } from 'react-icons/hi'

// data
import { navigation } from '../../Data'

// react scroll
import { Link } from 'react-scroll'

// mobile css
import './NavMobile.css'

const NavMobile = ({ setDialogOpen }) => {

  const [sideBar, setSideBar] = useState(false)

  const showSideBar = () => {
    setSideBar(!sideBar)
  }

  return (
    <div className='navmobile'>
      <div className='menu_bar' onClick={showSideBar}>
        <HiMenuAlt3 size={35} color={'black'} />
      </div>
      <div className={sideBar ? 'nav_menu active' : 'nav_menu'}>
        <ul className='nav_menu_items' onClick={showSideBar}>
          <li className='navbar_toggle' >
            <HiOutlineX size={35} color='white' />
          </li>
          {
            navigation.map((elem, index) => (
              <li className='nav_text' key={index}>
                <Link
                  onClick={showSideBar}
                  to={elem.href}
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className='transition-all duration-300'>
                  {elem.name}
                </Link>
              </li>
            ))
          }
          <button className="btn1" onClick={() => setDialogOpen(true)}>Explore</button>
        </ul>
      </div>
    </div>
  )
}

export default NavMobile