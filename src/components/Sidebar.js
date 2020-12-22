import React from 'react'
import sublinks from '../utils/data'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../utils/context'

const Sidebar = () => {

    const { isSideBarOpen, openSidebar } = useGlobalContext()

    return (
        <aside  className={`sidebar-wrapper ${isSideBarOpen && "show"}`}>
            <div className='sidebar'>
                <button className="close-btn" onClick={() => openSidebar()}>
                    <FaTimes />
                </button>
                <div>
                    {
                        sublinks.map(({ page, id, links}) => {
                            return <article key={id}>
                                    <h4>{page}</h4>
                                    <ul className='sidebar-sublinks'>
                                        {
                                            links.map(({label, url, icon, id}) => (
                                               <li key={id} >
                                                    <a  href={url}>
                                                        {icon}
                                                        {label}
                                                    </a>
                                               </li>
                                            ))
                                        }
                                    </ul>
                            </article>
                        })
                    }
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
