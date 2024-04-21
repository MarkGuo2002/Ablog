import { useState } from 'react';

import Navbar from './Navbar';
import Authentication from './Authentication';
import { useSidebarContext } from '../utils/SidebarContext';

const NonSidebarContainer = () =>{
    const { toggleSidebar } = useSidebarContext();
    return (
        <div className={`${toggleSidebar ? "ml-60" : "ml-16"} bg-white h-screen w-screen transition-all duration-300 ease-in-out`}>
            <Navbar/>
        </div>
    )
}

export default NonSidebarContainer;