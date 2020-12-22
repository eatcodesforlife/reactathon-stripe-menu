import React, { useContext, useState } from 'react'
import sublinks from '../utils/data'


const AppContext = React.createContext()

export const AppProvider = ({children}) => {

    const [ isSideBarOpen, setIsSideBarOpen ] = useState(false)
    const [ isSubmenuOpen, setIsSubmenuOpen ] = useState(false)
    const [ coordinates, setCoordinates ] = useState({})
    const [ currentMenu, setCurrentMenu ] = useState({page:'', links:[]})

    const openSidebar = () => {
        setIsSideBarOpen(!isSideBarOpen)
    }

    const openSubmenu = ( menuText, coord ) => {
        const page = sublinks.find((link) => link.page === menuText)
        setCurrentMenu(page)
        setCoordinates(coord)
        setIsSubmenuOpen(true)
    }

    const closeSubmenu = (e) =>{
        if(!e.target.classList.contains('link-btn')) setIsSubmenuOpen(false)
    }

    return <AppContext.Provider
        value={{ 
            isSideBarOpen, 
            isSubmenuOpen, 
            openSidebar, 
            openSubmenu, 
            closeSubmenu,
            coordinates, 
            currentMenu 
        }}
    >
        {children}
    </AppContext.Provider>
} 

export const useGlobalContext = () => {
    return useContext(AppContext)
}