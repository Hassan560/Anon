import React from 'react'

//react scroll
import { Link } from 'react-scroll'

// data
import { navigation } from '../../Data'

// motion framer
import { motion } from 'framer-motion'

// mobile css
import './Mobile.css'

// nav css
import './NavLinks.css'


const NavLinks = () => {
    return (
        <div className="nav">
            <ul>
                {
                    navigation.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link
                                    to={item.href}
                                    activeClass='active'
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className='transition-all duration-300'
                                >{item.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default NavLinks