import { useState } from 'react';

import Navbar from './Navbar';
import Login from './Login';
import { useSidebarContext } from '../utils/SidebarContext';

const NonSidebarContainer = () =>{
    const { toggleSidebar } = useSidebarContext();
    return (
        <div className={`${toggleSidebar ? "ml-60" : "ml-16"} bg-white h-screen w-screen transition-all duration-300 ease-in-out`}>
            <Navbar/>
            <Login/>
        </div>
    )
}

export default NonSidebarContainer;