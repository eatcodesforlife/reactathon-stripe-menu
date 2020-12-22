import React, { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../utils/context'

const Submenu = () => {

    const { 
        isSubmenuOpen, 
        coordinates, 
        currentMenu:{page, links} } = useGlobalContext()
    const container = useRef(null)
    const [ columns, setColumns ] = useState(links.length)

    useEffect(() =>{
        setColumns(links.length)
        const submenu = container.current
        const { center, bottom } = coordinates
        
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`

        if(columns > 4 ) setColumns(4)

    }, [coordinates, links, columns])


    return (
        <aside 
            ref={container}
            className={`submenu ${isSubmenuOpen && "show"}`}
        >   
            <h4>{page}</h4>
            <ul className={`submenu-center col-${columns}`}>
                {
                    links.map(({label, icon, url, id}) => (
                        <li key={id}>
                            <a href={url}>
                            {icon}
                            {label}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </aside>
    )
}

export default Submenu
