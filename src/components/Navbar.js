import React from 'react'
import logo from '../images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../utils/context'

const Navbar = () => {
    
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

    
    const showSubMenu = (e) => {
        const currentMenu = e.target.innerHTML
        const menuCoordinates = e.target.getBoundingClientRect();

        const center = (menuCoordinates.left + menuCoordinates.right)/2
        const bottom = menuCoordinates.bottom - 3

        openSubmenu( currentMenu, {center, bottom})
    }

    return (
        <nav className='nav' onMouseOver={closeSubmenu}>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="stripe-logo" className='nav-logo'/>
                    <button className='btn toggle-btn' onClick={() => openSidebar()}>
                        <FaBars />
                    </button>
                </div>
                <ul className='nav-links'>
                    <li>
                        <button className="link-btn" onMouseOver={showSubMenu}>
                            products
                        </button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={showSubMenu}>
                            developers
                        </button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={showSubMenu}>
                            company
                        </button>
                    </li>
                </ul>
                <button className="signin-btn btn">Sign in</button>
            </div>
        </nav>
    )
}

export default Navbar
